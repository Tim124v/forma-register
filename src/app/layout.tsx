import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma Register — Интерактивный лендинг",
  description: "Простой лендинг с 3D-сценой на Spline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
