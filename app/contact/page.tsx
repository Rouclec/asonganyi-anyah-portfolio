"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "anyahasonganyi97@gmail.com",
    href: "mailto:anyahasonganyi97@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+237 650184172",
    href: "tel:+237650184172",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Buea, Cameroon",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/rouclec",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asonganyi-rouclec-1baaba21b/",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const whatsappNumber = "237670133576"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const builtMessage = [
      `Hello Asonganyi,`,
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      ``,
      `Message:`,
      formData.message,
    ].join("\n")

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(builtMessage)}`

    // Open WhatsApp in a new tab/window (works for both desktop web + mobile deep-link)
    const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    if (!win) window.location.href = whatsappUrl

    setLoading(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Let's Connect</h1>
        <p className="text-xl text-foreground/70 text-balance max-w-3xl leading-relaxed">
          I'm always interested in discussing new projects, opportunities, or collaborations. Feel free to reach out
          with any inquiries or just to say hello.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a key={method.label} href={method.href} className="flex items-start gap-4 group">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground/60 font-medium">{method.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">{method.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Availability</h3>
              <p className="text-sm text-foreground/70 mb-3">
                I'm currently available for new projects, collaborations, and team opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Open to work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center space-y-4">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 border border-border rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-card/50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">Don't be a stranger</h2>
          <p className="text-lg text-foreground/70">
            Whether you have a project in mind or just want to chat about technology and innovation, I'd love to hear
            from you.
          </p>
        </div>
      </section>
    </main>
  )
}
