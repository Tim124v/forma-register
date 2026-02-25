import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Forma Register",
  description: "Landing with 3D Spline scene and login form",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
