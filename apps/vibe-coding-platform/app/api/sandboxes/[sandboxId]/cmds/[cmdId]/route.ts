import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import os from 'os'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sandboxId: string; cmdId: string }> }
) {
  const { cmdId } = await params
  const metaPath = path.join(os.tmpdir(), `vibe-cmd-${cmdId}.json`)
  try {
    const metaStr = await fs.readFile(metaPath, 'utf-8')
    const meta = JSON.parse(metaStr)
    return NextResponse.json({
      sandboxId: 'local',
      cmdId,
      startedAt: meta.startedAt,
      exitCode: meta.exitCode,
    })
  } catch (err) {
    return NextResponse.json({
      sandboxId: 'local',
      cmdId,
      startedAt: Date.now(),
    })
  }
}
