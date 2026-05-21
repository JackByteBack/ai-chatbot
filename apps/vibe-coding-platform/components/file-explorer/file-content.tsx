import { SyntaxHighlighter } from './syntax-highlighter'
import { PulseLoader } from 'react-spinners'
import { memo, useEffect } from 'react'
import useSWR from 'swr'

interface Props {
  sandboxId: string
  path: string
  onContent?: (content: string) => void
}

export const FileContent = memo(function FileContent({
  sandboxId,
  path,
  onContent,
}: Props) {
  const searchParams = new URLSearchParams({ path })
  const content = useSWR(
    `/api/sandboxes/${sandboxId}/files?${searchParams.toString()}`,
    async (pathname: string, init: RequestInit) => {
      const response = await fetch(pathname, init)
      if (!response.ok) {
        if (response.status === 404) return ''
        throw new Error(`Failed to fetch file: ${response.status}`)
      }
      return await response.text()
    },
    { refreshInterval: 1000 }
  )

  useEffect(() => {
    if (typeof content.data === 'string') {
      onContent?.(content.data)
    }
  }, [content.data, onContent])

  if (content.isLoading || content.data === undefined) {
    return (
      <div className="absolute w-full h-full flex items-center text-center">
        <div className="flex-1">
          <PulseLoader className="opacity-60" size={8} />
        </div>
      </div>
    )
  }

  return <SyntaxHighlighter path={path} code={content.data} />
})
