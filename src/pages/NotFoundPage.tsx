import type { ReactElement } from 'react'

const NotFoundPage = (): ReactElement => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold text-foreground">404 — Not Found</h1>
      <p className="text-muted-foreground">This page will be implemented later.</p>
    </main>
  )
}

export default NotFoundPage
