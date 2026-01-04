import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  const social = [
    { icon: Github, href: "https://github.com/rouclec", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asonganyi-rouclec-1baaba21b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:anyahasonganyi97@gmail.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
              Dev
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Senior full-stack developer building production-quality applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <div className="space-y-2 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <div className="space-y-2 flex flex-col">
              {[
                { label: "Resume", href: "/api/resume", isExternal: true },
                { label: "Case Studies", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) =>
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    download={item.label === "Resume" ? "Asonganyi Anyah Resume.pdf" : undefined}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5 text-foreground/60 hover:text-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
