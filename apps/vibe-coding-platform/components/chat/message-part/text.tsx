import type { TextUIPart } from 'ai'
import { Streamdown } from 'streamdown'

export function Text({ part }: { part: TextUIPart }) {
  return (
    <div className="text-sm px-3.5 py-3 border bg-secondary/90 text-secondary-foreground border-border rounded-md font-mono">
      <Streamdown>{part.text}</Streamdown>
    </div>
  )
}
