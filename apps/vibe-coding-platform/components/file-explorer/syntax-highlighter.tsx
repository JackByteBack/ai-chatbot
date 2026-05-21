import Prism from 'react-syntax-highlighter'
import grayscale from 'react-syntax-highlighter/dist/esm/styles/hljs/grayscale'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { useState } from 'react'

export function SyntaxHighlighter(props: { path: string; code: string }) {
  const [copied, setCopied] = useState(false)
  const lang = detectLanguageFromFilename(props.path)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 bg-secondary hover:bg-accent border border-border rounded text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10"
        title="Copy to clipboard"
      >
        {copied ? <CheckIcon className="w-4 h-4 text-green-500" /> : <CopyIcon className="w-4 h-4" />}
      </button>
      <Prism
        language={lang ?? 'javascript'}
        style={grayscale}
        showLineNumbers
        showInlineLineNumbers
        customStyle={{
          fontSize: '0.875rem',
          margin: 0,
          background: 'transparent',
        }}
        codeTagProps={{
          style: {
            whiteSpace: 'pre',
            overflowX: 'auto',
          },
        }}
      >
        {props.code}
      </Prism>
    </div>
  )
}

function detectLanguageFromFilename(path: string): string {
  const pathParts = path.split('/')
  const extension = pathParts[pathParts.length - 1]
    ?.split('.')
    .pop()
    ?.toLowerCase()

  const extensionMap: Record<string, string> = {
    // JavaScript/TypeScript
    js: 'jsx',
    jsx: 'jsx',
    ts: 'typescript',
    tsx: 'tsx',
    mjs: 'javascript',
    cjs: 'javascript',

    // Python
    py: 'python',
    pyw: 'python',
    pyi: 'python',

    // Web technologies
    html: 'html',
    htm: 'html',
    css: 'css',
    scss: 'scss',
    sass: 'sass',
    less: 'less',

    // Other popular languages
    java: 'java',
    c: 'c',
    cpp: 'cpp',
    cxx: 'cpp',
    cc: 'cpp',
    h: 'c',
    hpp: 'cpp',
    cs: 'csharp',
    php: 'php',
    rb: 'ruby',
    go: 'go',
    rs: 'rust',
    swift: 'swift',
    kt: 'kotlin',
    scala: 'scala',
    sh: 'bash',
    bash: 'bash',
    zsh: 'bash',
    fish: 'bash',
    ps1: 'powershell',

    // Data formats
    json: 'json',
    xml: 'xml',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'toml',
    ini: 'ini',

    // Markup
    md: 'markdown',
    markdown: 'markdown',
    tex: 'latex',

    // Database
    sql: 'sql',

    // Config files
    dockerfile: 'dockerfile',
    gitignore: 'bash',
    env: 'bash',
  }

  return extensionMap[extension || ''] || 'text'
}
