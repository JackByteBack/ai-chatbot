import type { UIMessageStreamWriter, UIMessage } from 'ai'
import type { DataPart } from '../messages/data-parts'
import { getRichError } from './get-rich-error'
import { tool } from 'ai'
import description from './run-command.md'
import z from 'zod/v3'
import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs'
import fsPromises from 'fs/promises'
import os from 'os'

const PROJECT_DIR = path.resolve(process.cwd(), '../../my-app')

interface Params {
  writer: UIMessageStreamWriter<UIMessage<never, DataPart>>
}

export const runCommand = ({ writer }: Params) =>
  tool({
    description,
    inputSchema: z.object({
      sandboxId: z.string().optional().describe('Unused now.'),
      command: z.string(),
      args: z.array(z.string()).optional(),
      sudo: z.boolean().optional(),
      wait: z.boolean(),
    }),
    execute: async (
      { command, sudo, wait, args = [] },
      { toolCallId }
    ) => {
      writer.write({
        id: toolCallId,
        type: 'data-run-command',
        data: { sandboxId: 'local', command, args, status: 'executing' },
      })

      return new Promise<string>(async (resolve) => {
        try {
          const runCmd = sudo ? 'sudo' : command
          const runArgs = sudo ? [command, ...args] : args
          
          const env = { ...process.env }
          env.PORT = '3001'

          const cmdId = Math.random().toString(36).substring(7)
          
          const metaPath = path.join(os.tmpdir(), `vibe-cmd-${cmdId}.json`)
          const logPath = path.join(os.tmpdir(), `vibe-cmd-${cmdId}.jsonl`)

          await fsPromises.writeFile(metaPath, JSON.stringify({ startedAt: Date.now(), completed: false }))
          await fsPromises.writeFile(logPath, '') // Create empty file

          const childLine = spawn(runCmd, runArgs, { cwd: PROJECT_DIR, env })
          
          let stdout = ''
          let stderr = ''
          
          childLine.stdout.on('data', (data) => {
            stdout += data.toString()
            const entry = JSON.stringify({ stream: 'stdout', data: data.toString(), timestamp: Date.now() }) + '\n'
            fs.appendFileSync(logPath, entry)
          })
          
          childLine.stderr.on('data', (data) => {
            stderr += data.toString()
            const entry = JSON.stringify({ stream: 'stderr', data: data.toString(), timestamp: Date.now() }) + '\n'
            fs.appendFileSync(logPath, entry)
          })

          if (!wait) {
            writer.write({
              id: toolCallId,
              type: 'data-run-command',
              data: {
                sandboxId: 'local',
                commandId: cmdId,
                command,
                args,
                status: 'running',
              },
            })
            resolve(`The command \`${command} ${args.join(' ')}\` has been started in the background.`)
            // still wait internally to mark complete
            childLine.on('close', (code) => {
              fsPromises.writeFile(metaPath, JSON.stringify({ startedAt: Date.now(), completed: true, exitCode: code }))
            })
            return
          }

          writer.write({
            id: toolCallId,
            type: 'data-run-command',
            data: {
              sandboxId: 'local',
              commandId: cmdId,
              command,
              args,
              status: 'waiting',
            },
          })

          childLine.on('close', async (code) => {
            await fsPromises.writeFile(metaPath, JSON.stringify({ startedAt: Date.now(), completed: true, exitCode: code }))
            
            writer.write({
              id: toolCallId,
              type: 'data-run-command',
              data: {
                sandboxId: 'local',
                commandId: cmdId,
                command,
                args,
                exitCode: code || 0,
                status: 'done',
              },
            })

            resolve(
              `The command \`${command} ${args.join(' ')}\` has finished with exit code ${code}.\n` +
              `Stdout of the command was: \n\`\`\`\n${stdout}\n\`\`\`\n` +
              `Stderr of the command was: \n\`\`\`\n${stderr}\n\`\`\``
            )
          })
        } catch (error) {
          const richError = getRichError({
            action: 'run command locally',
            error,
          })

          writer.write({
            id: toolCallId,
            type: 'data-run-command',
            data: {
              sandboxId: 'local',
              command,
              args,
              error: richError.error,
              status: 'error',
            },
          })

          resolve(richError.message)
        }
      })
    },
  })
