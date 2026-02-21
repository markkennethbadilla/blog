import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Elunari Blog | Developer Articles & Guides",
    template: "%s | Elunari Blog",
  },
  description:
    "In-depth articles on software engineering, developer tools, TypeScript, React, Docker, Git workflows, and building modern web applications.",
  metadataBase: new URL("https://blog.elunari.uk"),
  openGraph: {
    siteName: "Elunari Blog",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7465302364385209"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
