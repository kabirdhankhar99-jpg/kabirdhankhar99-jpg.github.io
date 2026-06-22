import { Github, Mail, ArrowUpRight, ExternalLink, FileText, ListChecks, BarChart2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    name: "AI PM Toolkit",
    description:
      "An AI-powered toolkit for product managers. Generate structured PRDs, backlog-ready user stories, and competitive analysis matrices in seconds.",
    tags: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS"],
    github: "https://github.com/kabirdhankhar99-jpg/ai-pm-toolkit",
    live: null, // add once deployed
    icons: [FileText, ListChecks, BarChart2],
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "AI & APIs",
    items: ["Claude API", "OpenAI API", "Streaming LLMs", "Prompt Engineering"],
  },
  {
    category: "Product",
    items: ["PRD Writing", "User Research", "Agile / Scrum", "Roadmapping"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub Actions", "Vercel", "Figma"],
  },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          kd
        </span>
        <nav className="hidden sm:flex items-center gap-6">
          {["projects", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 capitalize transition-colors"
            >
              {id}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://docs.google.com/document/d/1vupJkfAvQdPz93myM0EzV4_gOPGJhk5c6FmrOO2DOXk/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
          <a
            href="https://github.com/kabirdhankhar99-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-6 pt-14 bg-zinc-950">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-duke-700" />
          <span className="font-mono text-[11px] text-zinc-500 tracking-[0.18em] uppercase">
            Duke University · MEM
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          <span className="block text-white">Kabir</span>
          <span className="text-duke-300">Dhankhar.</span>
        </h1>

        <p className="text-base text-zinc-400 max-w-md leading-relaxed mb-10">
          I build AI-native products — from early concept to shipped.
          CS &amp; ECE background, now MEM at Duke.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-duke-700 hover:bg-duke-600 text-white text-sm font-medium transition-colors"
          >
            View my work
            <ArrowUpRight size={14} />
          </a>
          <a
            href="mailto:kabir.dhankhar@duke.edu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            <Mail size={14} />
            Get in touch
          </a>
          <a
            href="https://docs.google.com/document/d/1vupJkfAvQdPz93myM0EzV4_gOPGJhk5c6FmrOO2DOXk/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">
          Things I&apos;ve built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200"
            >
              {/* icon row */}
              <div className="flex gap-2 mb-5">
                {project.icons.map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-duke-50 dark:bg-zinc-800 text-duke-700 dark:text-duke-300"
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>

              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
                >
                  <Github size={13} />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-duke-700 dark:text-duke-300 hover:text-duke-800 dark:hover:text-duke-600 transition-colors font-medium"
                  >
                    <ExternalLink size={13} />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* GitHub link card */}
          <a
            href="https://github.com/kabirdhankhar99-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200 text-center min-h-[240px]"
          >
            <Github size={22} className="text-zinc-400 dark:text-zinc-500 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors mb-1">
              More on GitHub
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              New projects in progress
            </p>
            <ArrowUpRight size={13} className="mt-3 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
          Skills
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">
          What I work with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-700 dark:text-zinc-300 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
          Let&apos;s talk
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed mb-10">
          I&apos;m open to internships, collaborations, and interesting conversations. Reach
          out anytime.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:kabir.dhankhar@duke.edu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-duke-700 hover:bg-duke-600 text-white text-sm font-medium transition-colors"
          >
            <Mail size={14} />
            kabir.dhankhar@duke.edu
          </a>
          <a
            href="https://github.com/kabirdhankhar99-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs text-zinc-400 dark:text-zinc-600">
          © 2026 Kabir Dhankhar
        </span>
        <span className="text-xs text-zinc-400 dark:text-zinc-600">
          Built with Next.js · Hosted on GitHub Pages
        </span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
