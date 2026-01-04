import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Team Lead - Iknite Studio",
    company: "Iknite Studio",
    period: "11/2024 - Present",
    description:
      "Leading development of VsorPay, a cross-border money transfer platform with a team of 4-5 engineers. Architecting scalable microservices systems and establishing production-grade development practices.",
    achievements: [
      "Designed microservices architecture using gRPC, Protobuf, and SQLC for secure payment processing",
      "Implemented core features including authentication, user verification, and money transfer flow",
      "Configured unit testing (Go Mock) and frontend testing (Jest, Maestro), achieving 40% test coverage",
      "Set up CI/CD pipelines for mobile, backend, and dashboards ensuring reliable deployments",
    ],
  },
  {
    title: "Lead Mobile Developer & Agile Coach",
    company: "Iknite Studio",
    period: "01/2023 - Present",
    description:
      "Leading development of Itamba, an offline-first mobile app for legal document management. Managing mobile infrastructure and serving as Agile Coach for sprint planning.",
    achievements: [
      "Architected offline-first mobile infrastructure with robust data synchronization",
      "Streamlined CI/CD pipelines reducing deployment time significantly",
      "Served as Agile Coach, overseeing sprint planning and improving team delivery velocity",
      "Mentored mobile developers on React Native and Expo best practices",
    ],
  },
  {
    title: "Team Lead - Iknite Studio",
    company: "Iknite Studio",
    period: "04/2023 - 11/2024",
    description:
      "Led development of Omala, a subscription-based food delivery platform. Guided a team of 5 engineers to deliver an integrated, scalable product with real-time features.",
    achievements: [
      "Built Expo mobile app with real-time order tracking and push notifications",
      "Implemented WebSocket-based location tracking and order updates",
      "Led team of 5 engineers through product development lifecycle",
      "Achieved 99.9% uptime and sub-second real-time update latency",
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
    title: "Backend & Mobile Developer",
    company: "Iknite Studio",
    period: "03/2022 - 04/2023",
    description:
      "Contributed to CassVita and CIMFEST Voting platforms, developing backend systems with Node.js and MongoDB. Built React and Next.js dashboards.",
    achievements: [
      "Developed backend systems with Node.js and MongoDB for voting and supply chain applications",
      "Built React and Next.js dashboards for data visualization and management",
      "Implemented REST APIs for mobile and web applications",
      "Contributed to real-time data processing and updates",
    ],
  },
]

const skills = {
  frontend: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Go", "Express", "gRPC", "Protobuf", "Microservices", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Firebase"],
  devops: ["Docker", "CI/CD", "GitHub Actions", "AWS", "CloudFormation"],
  tools: ["Git", "GitHub", "Jest", "Maestro", "Agile", "WebSockets"],
}

const education = [
  {
    degree: "B.Sc. Computer Engineering",
    institution: "University of Buea",
    year: "Graduated",
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
          4+ years building production-grade applications at Iknite Studio. Expertise in full-stack development, team
          leadership, microservices architecture, and mobile app development.
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
        <h2 className="text-3xl font-bold mb-12">Education</h2>
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
