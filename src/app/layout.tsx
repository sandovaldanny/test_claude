import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'test_claude - Next.js App',
  description: 'Proyecto Next.js con Claude Code CLI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
