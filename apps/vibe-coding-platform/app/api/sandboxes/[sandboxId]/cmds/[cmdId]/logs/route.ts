import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import fsPromises from 'fs/promises'
import os from 'os'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sandboxId: string; cmdId: string }> }
) {
  const { cmdId } = await params
  const metaPath = path.join(os.tmpdir(), `vibe-cmd-${cmdId}.json`)
  const logPath = path.join(os.tmpdir(), `vibe-cmd-${cmdId}.jsonl`)

  const stream = new ReadableStream({
    async start(controller) {
      let position = 0
      let finished = false

      while (!finished) {
        try {
          const stats = await fsPromises.stat(logPath)
          if (stats.size > position) {
            const buffer = Buffer.alloc(stats.size - position)
            const fd = await fsPromises.open(logPath, 'r')
            await fd.read(buffer, 0, buffer.length, position)
            await fd.close()
            controller.enqueue(buffer)
            position = stats.size
          }
        } catch (e) {
          // File might not exist yet
        }

        try {
          const metaStr = await fsPromises.readFile(metaPath, 'utf-8')
          const meta = JSON.parse(metaStr)
          if (meta.completed) {
            // Read one last time
            try {
               const stats = await fsPromises.stat(logPath)
               if (stats.size > position) {
                 const buffer = Buffer.alloc(stats.size - position)
                 const fd = await fsPromises.open(logPath, 'r')
                 await fd.read(buffer, 0, buffer.length, position)
                 await fd.close()
                 controller.enqueue(buffer)
               }
            } catch(e) {}
            finished = true
            break
          }
        } catch (e) {
          // Meta file might not exist or be complete
        }

        await new Promise((r) => setTimeout(r, 200))
      }
      controller.close()
    },
  })

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/json',
      'Transfer-Encoding': 'chunked',
    }
  })
}
