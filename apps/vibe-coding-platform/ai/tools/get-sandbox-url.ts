import type { UIMessageStreamWriter, UIMessage } from 'ai'
import type { DataPart } from '../messages/data-parts'
import { tool } from 'ai'
import description from './get-sandbox-url.md'
import z from 'zod/v3'

interface Params {
  writer: UIMessageStreamWriter<UIMessage<never, DataPart>>
}

export const getSandboxURL = ({ writer }: Params) =>
  tool({
    description,
    inputSchema: z.object({
      sandboxId: z.string().optional().describe('Unused now.'),
      port: z.number().describe('The port number where a service is running locally.'),
    }),
    execute: async ({ port }, { toolCallId }) => {
      writer.write({
        id: toolCallId,
        type: 'data-get-sandbox-url',
        data: { status: 'loading' },
      })

      // Since vibe-coding-platform runs on 3000, we force local previews to 3001
      const actualPort = port === 3000 ? 3001 : port
      const url = `http://localhost:${actualPort}/`

      writer.write({
        id: toolCallId,
        type: 'data-get-sandbox-url',
        data: { url, status: 'done' },
      })

      return { url }
    },
  })
