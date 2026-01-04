import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Apple, ArrowLeft, Github, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

const projects = {
  foodhouse: {
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
    links: {
      android: "https://play.google.com/store/apps/details?id=com.foodhousecmr.foodhouse",
      ios: "https://apps.apple.com/us/app/foodhouse-cm/id6747904153",
      web: "https://foodhouse-admin-dashboard-bfsc.vercel.app/",
    },
    github: "#",
    image: "/foodhouse/order-details.png",
    screenshots: [
      { src: "/foodhouse/dashboard.png", alt: "Admin panel", portrait: false },
      { src: "/foodhouse/add-delivery-location.png", alt: "Add delivery location interface", portrait: false },
      { src: "/foodhouse/order-details.png", alt: "order details", portrait: false },
      { src: "/foodhouse/sales-report.png", alt: "sales report", portrait: true },
      { src: "/foodhouse/track-order.png", alt: "track order", portrait: true },
      { src: "/foodhouse/product-details.png", alt: "product details", portrait: true },
    ],
    videoDemo: null,
  },
  vsorpay: {
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
    links: {
      android: "https://play.google.com/store/apps/details?id=com.vsorpay.android.iknite",
      ios: "https://apps.apple.com/us/app/vsorpay/id6448659878",
      web: "https://admindashboard.vsorpaytesting.xyz",
    },
    github: "#",
    image: "/vsorpay/cover.jpg",
    screenshots: [
      { src: "/vsorpay/dashboard.png", alt: "Payment dashboard", portrait: false },
      { src: "/vsorpay/transactions.png", alt: "Transactions list", portrait: false },
      { src: "/vsorpay/transaction-details-web.png", alt: "Transaction details", portrait: false },
      { src: "/vsorpay/confirm-transaction-details.png", alt: "Confirm transaction details", portrait: true },
      { src: "/vsorpay/payment-complete.png", alt: "Payment completed", portrait: true },
      { src: "/vsorpay/transaction-details.png", alt: "Transaction details", portrait: true },
    ],
    videoDemo: null,
  },
  itamba: {
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
    links: {
      android: "https://play.google.com/store/apps/details?id=com.iknite.itambamobile",
      ios: "https://apps.apple.com/us/app/itamba-legal/id6752248222",
      web: "https://itamba.net",
    },
    github: "#",
    image: "/itamba/cover.png",
    screenshots: [
      { src: "/itamba/library.png", alt: "Library", portrait: true },
      { src: "/itamba/article-details.png", alt: "Article details", portrait: true },
      { src: "/itamba/notes.png", alt: "Notes", portrait: true },
      { src: "/itamba/sign-in.png", alt: "Sign in", portrait: true },
      { src: "/itamba/web-library.png", alt: "Web library", portrait: false },
      { src: "/itamba/web-bookmarks.png", alt: "Web bookmarks", portrait: false },
    ],
    videoDemo: null,
  },
  cassvita: {
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
    links: {
      android: "#",
      ios: "#",
      web: "https://app.cassvita.com",
    },
    github: "#",
    image: "/cassvita/report.png",
    screenshots: [
      { src: "/cassvita/cover.png", alt: "Dashboard", portrait: false },
      { src: "/cassvita/report.png", alt: "Report", portrait: false },
      { src: "/cassvita/farmers.png", alt: "Farmer", portrait: false },
    ],
    videoDemo: null,
  },
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  const hasLink = (url?: string) => Boolean(url && url !== "#")

  if (!project) {
    return (
      <main className="min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Button>
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/projects">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Button>
        </Link>

        <div className="space-y-4 mb-12">
          <p className="text-sm font-bold text-primary uppercase tracking-wide">Case Study</p>
          <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
          <p className="text-xl text-foreground/60">{project.subtitle}</p>
        </div>

        {/* Main Image */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 aspect-video flex items-center justify-center">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
            </div>

            {/* Challenge, Solution, Impact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Challenge</h3>
                <p className="text-foreground/70 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Impact</h3>
                <p className="text-foreground/70 leading-relaxed">{project.impact}</p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Screenshots</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`View screenshot: ${screenshot.alt}`}
                        className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <img
                          src={screenshot.src || "/placeholder.svg"}
                          alt={screenshot.alt}
                          className="w-full h-full object-contain aspect-video"
                        />
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20" />
                      </button>
                    </DialogTrigger>
                    {/* Lightbox (large, but not fullscreen) */}
                    <DialogContent className="w-[90vw] h-[90dvh] max-w-none sm:max-w-none border-0 bg-black p-0 overflow-hidden **:data-[slot=dialog-close]:text-white **:data-[slot=dialog-close]:bg-black/40 **:data-[slot=dialog-close]:hover:bg-black/60 **:data-[slot=dialog-close]:opacity-100">
                      <DialogTitle className="sr-only">{screenshot.alt}</DialogTitle>
                      <div className="h-full w-full flex items-center justify-center bg-black">
                        <img
                          src={screenshot.src || "/placeholder.svg"}
                          alt={screenshot.alt}
                          className={
                            screenshot.portrait
                              ? "h-full w-full object-contain aspect-video"
                              : "w-full h-full object-contain"
                          }
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            {/* Video Demo */}
            {project.videoDemo && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Video Demo</h2>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={project.videoDemo}
                    title={`${project.title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technologies</h3>
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
            <div className="flex flex-wrap items-center gap-2">
              {hasLink(project.links?.android) ? (
                <Button asChild size="sm" className="gap-2">
                  <a href={project.links.android} target="_blank" rel="noopener noreferrer">
                    <Smartphone className="w-4 h-4" /> Play Store
                  </a>
                </Button>
              ) : (
                <Button disabled size="sm" className="gap-2">
                  <Smartphone className="w-4 h-4" /> Play Store
                </Button>
              )}

              {hasLink(project.links?.ios) ? (
                <Button asChild size="sm" className="gap-2">
                  <a href={project.links.ios} target="_blank" rel="noopener noreferrer">
                    <Apple className="w-4 h-4" /> App Store
                  </a>
                </Button>
              ) : (
                <Button disabled size="sm" className="gap-2">
                  <Apple className="w-4 h-4" /> App Store
                </Button>
              )}

              {hasLink(project.links?.web) ? (
                <Button asChild size="sm" className="gap-2">
                  <a href={project.links.web} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4" /> Web App
                  </a>
                </Button>
              ) : (
                <Button disabled size="sm" className="gap-2">
                  <Globe className="w-4 h-4" /> Web App
                </Button>
              )}

              <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card/50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Interested in a Project?</h2>
          <p className="text-lg text-foreground/70">Let's discuss how I can help bring your ideas to life.</p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
