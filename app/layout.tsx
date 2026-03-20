import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Regionsdelen — Företagskatalog', description: 'Sök bland Sveriges företag' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
