import type { DataPart } from '../../messages/data-parts'
import type { File } from './get-contents'
import type { UIMessageStreamWriter, UIMessage } from 'ai'
import { getRichError } from '../get-rich-error'
import fs from 'fs/promises'
import path from 'path'

const PROJECT_DIR = path.resolve(process.cwd(), '../../my-app')

interface Params {
  toolCallId: string
  writer: UIMessageStreamWriter<UIMessage<never, DataPart>>
}

export function getWriteFiles({ toolCallId, writer }: Params) {
  return async function writeFiles(params: {
    written: string[]
    files: File[]
    paths: string[]
  }) {
    const paths = params.written.concat(params.files.map((file) => file.path))
    writer.write({
      id: toolCallId,
      type: 'data-generating-files',
      data: { paths, status: 'uploading' },
    })

    try {
      await Promise.all(
        params.files.map(async (file) => {
          const fullPath = path.join(PROJECT_DIR, file.path)
          await fs.mkdir(path.dirname(fullPath), { recursive: true })
          await fs.writeFile(fullPath, file.content, 'utf8')
        })
      )
    } catch (error) {
      const richError = getRichError({
        action: 'write files locally',
        args: params,
        error,
      })

      writer.write({
        id: toolCallId,
        type: 'data-generating-files',
        data: {
          error: richError.error,
          status: 'error',
          paths: params.paths,
        },
      })

      return richError.message
    }

    writer.write({
      id: toolCallId,
      type: 'data-generating-files',
      data: { paths, status: 'uploaded' },
    })
  }
}
