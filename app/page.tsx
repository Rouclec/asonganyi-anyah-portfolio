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
              <h1 className="text-6xl md:text-7xl font-bold text-balance">Asonganyi Rouclec Forsamp</h1>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                Full-Stack Developer
                <span className="text-primary"> & Team Lead</span>
              </h2>
              <p className="text-lg text-foreground/70 text-balance leading-relaxed">
                Building production-quality applications with React, Next.js, React Native/Expo, and modern backend
                technologies. Specialized in leading teams, architecting scalable systems, and delivering high-impact
                solutions.
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
                <div className="text-3xl font-bold text-primary">20+</div>
                <p className="text-sm text-foreground/60">Projects Built</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <p className="text-sm text-foreground/60">Team Members Led</p>
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
                I'm a software engineer and team lead with 4+ years of experience building scalable web, mobile, and
                backend systems. My expertise spans full-stack development with a strong focus on React, React Native,
                Expo, Node.js, and modern cloud deployments. I'm passionate about leading high-performing teams and
                architecting solutions that deliver real business impact.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                At Iknite Studio, I've led development of multiple production applications including subscription-based
                food delivery platforms, cross-border payment solutions, legal management systems, and voting platforms.
                I specialize in microservices architecture, real-time features with WebSockets, and comprehensive CI/CD
                pipelines.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Beyond coding, I mentor teams, establish development best practices, and mentor the next generation of
                engineers. I'm driven by innovation and creating solutions that solve real problems at scale.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="space-y-3">
                {[
                  "React & Next.js",
                  "React Native & Expo",
                  "TypeScript & JavaScript",
                  "Node.js & Go",
                  "PostgreSQL & MongoDB",
                  "Microservices Architecture",
                  "Team Leadership",
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
