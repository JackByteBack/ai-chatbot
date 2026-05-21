import { NextResponse, type NextRequest } from 'next/server'
import z from 'zod/v3'
import fs from 'fs/promises'
import path from 'path'

const PROJECT_DIR = path.resolve(process.cwd(), '../../my-app')

const FileParamsSchema = z.object({
  sandboxId: z.string(),
  filePath: z.string(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sandboxId: string }> }
) {
  const { sandboxId } = await params
  const fileParams = FileParamsSchema.safeParse({
    filePath: request.nextUrl.searchParams.get('path'),
    sandboxId,
  })

  if (fileParams.success === false) {
    return NextResponse.json(
      { error: 'Invalid parameters. You must pass a `path` as query' },
      { status: 400 }
    )
  }

  try {
    const fullPath = path.join(PROJECT_DIR, fileParams.data.filePath)
    const content = await fs.readFile(fullPath, 'utf8')
    return new NextResponse(content)
  } catch (error) {
    return NextResponse.json(
      { error: 'File not found locally' },
      { status: 404 }
    )
  }
}
