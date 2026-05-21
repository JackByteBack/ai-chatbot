'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useSandboxStore } from '@/app/state'
import { useEffect } from 'react'
import useSWR from 'swr'

export function SandboxState() {
  const { sandboxId, status, setStatus } = useSandboxStore()
  if (status === 'stopped') {
    return (
      <Dialog open>
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">
            Sandbox max. duration reached
          </DialogTitle>
          <DialogDescription className="sr-only">
            The Vercel Sandbox is already stopped. You can start a new session
            by clicking the button below.
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          Sandbox max. duration for this demo has been reached
          <Button onClick={() => window.location.reload()}>
            Start a new session
          </Button>
        </DialogContent>
      </Dialog>
    )
  }

  return sandboxId ? (
    <DirtyChecker sandboxId={sandboxId} setStatus={setStatus} />
  ) : null
}

interface DirtyCheckerProps {
  sandboxId: string
  setStatus: (status: 'running' | 'stopped') => void
}

function DirtyChecker({ sandboxId, setStatus }: DirtyCheckerProps) {
  // Disabled the sandbox status polling completely
  // Since we are running locally now, there's no Vercel sandbox to expire.
  return null
}
