import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Mail,
  TestTube2,
} from "lucide-react"

const engineeringStories = [
  {
    icon: Braces,
    title: "Shared contracts",
    description:
      "Moved frontend and backend work into one repository and generated TypeScript clients from the Protobuf contract.",
    href: "/projects/vsorpay",
  },
  {
    icon: TestTube2,
    title: "Repeatable mobile testing",
    description:
      "Researched Maestro and introduced a reusable flow for testing sign-in, setup, navigation, and core journeys.",
    href: "/projects/vsorpay",
  },
]

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:gap-20 md:px-10 md:pb-28 md:pt-24">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Engineering Manager at Iknite Studio
          </p>
          <h1 className="max-w-3xl text-[clamp(4.5rem,11vw,9.5rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#16375c]">
            Asonganyi
            <br />
            Anyah.
          </h1>
          <Link
            href="#selected-work"
            className="mt-12 inline-flex w-fit items-center gap-3 border-b-2 border-primary pb-2 text-lg font-semibold text-primary transition-colors hover:text-[#16375c]"
          >
            View selected work
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex flex-col justify-center border-l border-[#d7e2ec] pl-8 md:pl-14">
          <p className="mb-8 max-w-lg font-serif text-3xl font-semibold leading-tight text-[#16375c] md:text-4xl">
            How we kept two teams in sync
          </p>
          <div className="max-w-xl space-y-3">
            {["Protobuf contract", "Generated TypeScript client", "Frontend type check"].map((label, index, nodes) => (
              <div key={label}>
                <div className="border border-[#16375c] px-5 py-4 text-center text-lg font-semibold text-[#16375c] md:text-xl">
                  {label}
                </div>
                {index < nodes.length - 1 && (
                  <div className="flex h-9 items-center justify-center text-primary">
                    <ArrowDown aria-hidden="true" className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-foreground/65">
            Backend contract changes became visible to the frontend at compile time.
          </p>
        </div>
      </section>

      <section id="selected-work" className="border-t border-[#d7e2ec]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Selected work</p>
              <h2 className="font-serif text-5xl font-semibold tracking-tight text-[#16375c] md:text-7xl">
                Work with consequences.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-[#d7e2ec] underline-offset-8 hover:text-[#16375c]"
            >
              See all projects
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <article className="grid gap-10 border-y border-[#d7e2ec] py-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Itamba</p>
              <h3 className="font-serif text-5xl font-semibold tracking-tight text-[#16375c] md:text-6xl">
                Rebuilding a legal research interface.
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                An offline-first legal research platform for lawyers and law students. I worked across the mobile app,
                web client, backend services, and synchronization model.
              </p>
              <Link
                href="/projects/itamba"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-[#16375c]"
              >
                Read the case study
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.45fr_0.7fr]">
              <div className="overflow-hidden border border-[#d7e2ec] bg-white">
                <Image
                  src="/itamba/web-library.png"
                  alt="Itamba legal library web interface"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
              <div className="overflow-hidden border border-[#d7e2ec] bg-white">
                <Image
                  src="/itamba/library.png"
                  alt="Itamba legal library mobile interface"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[#d7e2ec] bg-[#f7faff]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-28">
          <div className="relative mx-auto w-full max-w-sm self-start">
            <div className="absolute -bottom-4 -left-4 h-full w-full border border-primary" aria-hidden="true" />
            <Image
              src="/profile.jpg"
              alt="Portrait of Asonganyi Anyah"
              width={1600}
              height={1280}
              className="relative aspect-[5/4] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">A little context</p>
            <h2 className="font-serif text-5xl font-semibold tracking-tight text-[#16375c] md:text-7xl">
              I work close to the problem.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/75">
              <p>
                I lead planning, architecture, code review, release readiness, incident follow-up, and team
                development while staying close to implementation.
              </p>
              <p>
                My strongest technical focus is backend and platform engineering with Go, Node.js, TypeScript,
                PostgreSQL, gRPC, cloud delivery, CI/CD, and reliable data synchronization.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-[#d7e2ec] pt-8 sm:grid-cols-2">
              {engineeringStories.map((story) => {
                const Icon = story.icon
                return (
                  <Link
                    key={story.title}
                    href={story.href}
                    className="group border border-[#d7e2ec] bg-background p-5 transition-colors hover:border-primary"
                  >
                    <Icon aria-hidden="true" className="mb-6 h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-[#16375c]">{story.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{story.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read more <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d7e2ec]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Next conversation</p>
            <h2 className="max-w-2xl font-serif text-5xl font-semibold tracking-tight text-[#16375c] md:text-7xl">
              Have a difficult system to make simpler?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 border-b-2 border-primary pb-2 text-lg font-semibold text-primary hover:text-[#16375c]"
          >
            <Mail aria-hidden="true" className="h-5 w-5" />
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
