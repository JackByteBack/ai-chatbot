import { MODEL_NAMES, SUPPORTED_MODELS } from '@/ai/constants'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(
    {
      models: SUPPORTED_MODELS.map((id) => ({
        id,
        name: MODEL_NAMES[id] ?? id,
      })),
    }
  )
}
