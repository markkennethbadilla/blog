"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="w-8 h-8 rounded-lg flex items-center justify-center" aria-label="Toggle theme">
        <div className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 rounded-lg bg-card hover:bg-card-hover border border-border flex items-center justify-center transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-muted hover:text-foreground" />
      ) : (
        <Moon className="w-4 h-4 text-muted hover:text-foreground" />
      )}
    </button>
  )
}
