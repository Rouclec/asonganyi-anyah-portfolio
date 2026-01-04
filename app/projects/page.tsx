import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "foodhouse",
    title: "FoodHouse",
    subtitle: "Foodstuff Delivery Platform",
    description:
      "A multi-platform foodstuff delivery system designed to connect buyers and sellers through a seamless mobile experience, supported by a powerful admin dashboard for operations and management.",
    challenge:
      "Building a multi-platform foodstuff delivery system requiring real-time order updates, driver location management, vendor inventory sync, and seamless payment integration across mobile and web interfaces.",
    solution:
      "Led end-to-end development of React Native/Expo mobile apps for buyers and sellers with real-time order tracking and push notifications. Designed and implemented backend services in Go with REST APIs and WebSocket support for live updates. Built Next.js admin dashboard for vendor operations and system management. Set up AWS infrastructure (EC2, RDS, S3) with CI/CD pipelines. Mentored an intern and reviewed contributions to ensure code quality.",
    impact:
      "Delivered production-ready multi-platform ecosystem handling real-time order updates and seamless vendor operations. System achieves 99.9% uptime with minimal external dependencies.",
    technologies: [
      "React Native",
      "Expo",
      "Go",
      "Next.js",
      "PostgreSQL",
      "WebSockets",
      "Push Notifications",
      "AWS",
      "CI/CD",
    ],
    link: "https://foodhouse-admin-dashboard-bfsc.vercel.app/",
    github: "#",
    image: "/foodhouse/dashboard.png",
  },
  {
    id: "vsorpay",
    title: "VsorPay",
    subtitle: "Cross-Border Money Transfer Application",
    description:
      "A cross-border money transfer platform designed to enable secure international transactions with a focus on reliability, compliance, and performance.",
    challenge:
      "Designing a scalable microservices architecture for secure international money transfers, implementing user verification workflows, and ensuring reliable settlement tracking across borders.",
    solution:
      "Served as Team Lead guiding 4-5 engineers. Designed microservices architecture using Go with gRPC and Protobuf for inter-service communication. Implemented type-safe queries with SQLC and comprehensive testing using GoMock (40% coverage) on backend and Jest & Maestro on frontend. Built React Native/Expo mobile app and established automated CI/CD pipelines across all services.",
    impact:
      "Launched production payment platform with strongly typed backend architecture, comprehensive testing coverage reducing runtime errors, and automated deployment pipelines ensuring reliable cross-border transactions.",
    technologies: [
      "React Native",
      "Expo",
      "Go",
      "gRPC",
      "Protobuf",
      "PostgreSQL",
      "SQLC",
      "GoMock",
      "Jest",
      "Maestro",
      "AWS",
      "CI/CD",
    ],
    link: "https://admindashboard.vsorpaytesting.xyz",
    github: "#",
    image: "/vsorpay/cover.jpg",
  },
  {
    id: "itamba",
    title: "Itamba",
    subtitle: "Offline-First Legal Research Platform",
    description:
      "An offline-first mobile application designed for lawyers and law students to access legal resources in low-connectivity environments with seamless synchronization between mobile and web data.",
    challenge:
      "Creating a mobile application that works seamlessly offline while maintaining data consistency, implementing complex offline-first data models, and enabling two-way synchronization between mobile and online platforms.",
    solution:
      "Led system architecture and data synchronization strategy as lead engineer. Built React Native/Expo mobile app with offline-first capabilities using Firebase for sync. Implemented Go backend to support mobile and web clients. Designed two-way synchronization with unsynced and synced collections, using timestamps to prioritize data. Web-added data flows directly to synced collection while mobile offline changes are processed server-side.",
    impact:
      "Solved complex offline/online data consistency challenges enabling uninterrupted legal content access regardless of connectivity. Delivered scalable sync system adaptable to future features.",
    technologies: [
      "React Native",
      "Expo",
      "Go",
      "Firebase",
      "PostgreSQL",
      "AWS",
      "Offline-First Architecture",
      "Data Sync",
    ],
    link: "https://itamba.net",
    github: "#",
    image: "/itamba/cover.png",
  },
  {
    id: "cassvita",
    title: "CassVita",
    subtitle: "Agricultural Supply Chain Management System",
    description:
      "A web-based system that helps agricultural companies manage farmers, track purchases, and monitor supply chain activities with visibility into operations through structured data and dashboards.",
    challenge:
      "Building a flexible supply chain management system that supports evolving business requirements, enabling better operational tracking, and providing intuitive interfaces for stakeholders.",
    solution:
      "Worked as Backend & Frontend Engineer designing and implementing backend APIs and data models with Node.js and MongoDB. Built Next.js dashboards and data visualization interfaces. Designed flexible data models supporting evolving agricultural business requirements. Collaborated with stakeholders to translate business needs into maintainable technical solutions.",
    impact:
      "Delivered production supply chain platform enabling efficient farmer management, purchase tracking, and operational reporting. Built with flexible data models aligned to real-world agricultural workflows.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Data Visualization", "REST APIs"],
    link: "https://app.cassvita.com",
    github: "#",
    image: "/cassvita/cover.png",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Featured Projects</h1>
        <p className="text-xl text-foreground/70 text-balance max-w-3xl leading-relaxed">
          A selection of production applications built at Iknite Studio, showcasing full-stack expertise, team
          leadership, and impact-driven solutions across fintech, logistics, and mobile platforms.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Case Study</p>
                      <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                      <p className="text-lg text-foreground/60">{project.subtitle}</p>
                    </div>

                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                    <div className="space-y-4 py-6 border-y border-border">
                      <div>
                        <h4 className="text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">Challenge</h4>
                        <p className="text-foreground/70">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">Solution</h4>
                        <p className="text-foreground/70">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">Impact</h4>
                        <p className="text-foreground/70">{project.impact}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-bold text-foreground/60 uppercase tracking-wide mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <Button size="sm" asChild>
                        <Link href={`/projects/${project.id}`}>
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 aspect-video flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card/50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I'm always interested in discussing new projects, collaborations, or innovative ideas.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
