'use client' // Error components must be Client Components

import { useEffect } from 'react'
import {Button} from "@/components/ui/button";

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="p-4 border-2 rounded-lg border-destructive">
      <h2>Error happened, intentionally</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}