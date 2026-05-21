import { ToggleWelcome } from '@/components/modals/welcome'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export async function Header({ className }: Props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="LLAMA × GPT"
          className="w-5 h-5 ml-1 md:ml-2.5 mr-1.5 rounded-full object-cover"
        />
        <span className="hidden md:inline text-sm uppercase font-mono font-bold tracking-tight">
          JACK OBITO
        </span>
      </div>
      <div className="flex items-center ml-auto space-x-1.5">
        <ThemeToggle />
        <ToggleWelcome />
      </div>
    </header>
  )
}
