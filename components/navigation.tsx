"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: "/projects", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d7e2ec] bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="text-2xl font-black tracking-[-0.08em] text-[#16375c] transition-colors hover:text-primary">
          AA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/api/resume"
            download="Asonganyi Rouclec Forsamp Anyah Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            CV <Download aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 transition-colors hover:bg-card"
            aria-label="Toggle theme"
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon aria-hidden="true" className="h-5 w-5" /> : <Sun aria-hidden="true" className="h-5 w-5" />}
          </button>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-card md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#d7e2ec] bg-background md:hidden">
          <div className="space-y-4 px-6 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/api/resume"
              download="Asonganyi Rouclec Forsamp Anyah Resume.pdf"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary"
            >
              CV <Download aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
