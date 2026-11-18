import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-primary font-semibold text-lg">Hi, I'm</div>
              <h1 className="text-6xl md:text-7xl font-bold text-balance">Asonganyi Rouclec Forsamp Anyah</h1>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                Engineering Manager
                <span className="text-primary"> & Backend Platform Engineer</span>
              </h2>
              <p className="text-lg text-foreground/70 text-balance leading-relaxed">
                Leading engineering delivery while remaining hands-on with backend systems, cloud deployments, secure
                payment workflows, and reliable product architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">4+</div>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <p className="text-sm text-foreground/60">Engineers Led</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <p className="text-sm text-foreground/60">Core Systems</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:flex justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{"</>"}</div>
                <p className="text-foreground/60">Code • Lead • Deploy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-card/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm an Engineering Manager and hands-on software engineer with 4+ years of experience building
                production web, mobile, and backend systems. I lead planning, architecture, code review, release
                readiness, incident follow-up, and team development while staying close to implementation.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My strongest technical focus is backend and platform engineering with Go, Node.js, TypeScript,
                PostgreSQL, microservices, APIs, cloud deployment, CI/CD, real-time systems, and offline-first data
                synchronization.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I have worked across cross-border payments, logistics, legal information, IoT monitoring, voting, and
                operational platforms. I care about secure delivery, useful documentation, and engineering systems that
                make teams more predictable.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="space-y-3">
                {[
                  "Engineering Leadership",
                  "Backend & Platform Systems",
                  "Go, Node.js & TypeScript",
                  "PostgreSQL & Microservices",
                  "Cloud Delivery & CI/CD",
                  "Secure Payment Workflows",
                  "Offline-First Synchronization",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "React Native",
                "Expo",
                "Node.js",
                "Go",
                "PostgreSQL",
                "MongoDB",
                "WebSockets",
                "Tailwind CSS",
                "Docker",
                "AWS",
                "gRPC",
                "Microservices",
                "Secure APIs",
                "Release Governance",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-background border border-border/50 rounded-lg px-4 py-3 text-center text-sm font-medium text-foreground/80 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
