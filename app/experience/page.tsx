import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Engineering Manager",
    company: "Iknite Studio",
    period: "09/2026 - Present",
    description:
      "Lead engineering delivery across active products while remaining hands-on with backend systems, architecture, quality, security, and AI-assisted engineering workflows.",
    achievements: [
      "Manage planning, assignments, dependencies, release readiness, defect triage, and incident follow-up",
      "Set expectations for architecture, code review, testing, documentation, security, and reproducible AI-assisted work",
      "Coach engineers through reviews and development plans while maintaining technical credibility across backend, mobile, and cloud delivery",
      "Create reusable engineering checklists, automation, templates, and runbooks that improve consistency across projects",
    ],
  },
  {
    title: "Engineering Lead and Team Lead",
    company: "Iknite Studio",
    period: "2023 - 2026",
    description:
      "Led teams of 4-5 engineers across payment, legal-information, food-delivery, voting, and operational platforms.",
    achievements: [
      "Designed and reviewed production systems using Go, gRPC, Protobuf, SQLC, Node.js, PostgreSQL, React Native, and Next.js",
      "Established CI/CD, automated testing, release practices, and engineering standards across mobile, backend, and dashboard services",
      "Led VsorPay payment architecture, Itamba offline-first synchronization, and real-time logistics workflows",
      "Mentored engineers and translated product requirements into maintainable architecture, delivery plans, and acceptance evidence",
    ],
  },
  {
    title: "Remote Full-Stack Developer",
    company: "Camsol (GasVisor)",
    period: "11/2022 - 11/2024",
    description:
      "Worked on GasVisor, an IoT-driven gas monitoring platform for homes and enterprises, supporting real-time telemetry, alerts, and automated ordering workflows.",
    achievements: [
      "Integrated real-time sensor telemetry and alerting flows for gas level monitoring across devices",
      "Implemented automated ordering workflows to trigger refills based on thresholds and customer rules",
      "Built and maintained APIs and dashboards for device management, monitoring, and incident visibility",
      "Improved reliability and observability of data ingestion and event processing for production usage",
    ],
  },
  {
    title: "Backend and Mobile Developer",
    company: "Iknite Studio",
    period: "2022 - 2023",
    description:
      "Developed backend services, REST APIs, mobile features, and React/Next.js dashboards for supply-chain and voting products.",
    achievements: [
      "Developed backend systems with Node.js and MongoDB for voting and supply chain applications",
      "Built React and Next.js dashboards for operational reporting and data-backed workflows",
      "Contributed to mobile features, real-time updates, data models, and maintainable product interfaces",
    ],
  },
]

const skills = {
  frontend: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Go", "Express", "gRPC", "Protobuf", "Microservices", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Firebase"],
  devops: ["Docker", "CI/CD", "GitHub Actions", "AWS", "CloudFormation"],
  tools: ["Git", "GitHub", "Jest", "Maestro", "Agile", "WebSockets", "Secure APIs"],
}

const education = [
  {
    degree: "B.Sc. Computer Engineering",
    institution: "University of Buea",
    year: "2024",
    description: "Strong foundation in computer science and engineering principles",
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Experience & Skills</h1>
        <p className="text-xl text-foreground/70 text-balance max-w-3xl leading-relaxed">
          Engineering Manager and hands-on backend/platform engineer with 4+ years building production-grade systems.
          Leads engineering delivery, architecture, release quality, team development, and secure product execution.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-12">Work History</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />

              <div className="pl-10">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">{exp.period}</span>
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/70">
                      <span className="text-primary mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="bg-card/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-4 capitalize text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-background/50 border-border hover:bg-primary/20 hover:text-primary cursor-default transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="text-3xl font-bold mb-12">Education and Professional Development</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-foreground/60 mb-3">{edu.institution}</p>
              <p className="text-foreground/70 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
