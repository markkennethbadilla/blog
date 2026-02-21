import Link from "next/link"
import { articles } from "@/lib/articles"
import {
  Calendar,
  Clock,
  ArrowRight,
  Coffee,
  Wrench,
  Sparkles,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Elunari Blog | Developer Articles & Guides",
  description:
    "In-depth developer articles on TypeScript, React, Docker, Git, API patterns, data pipelines, and building modern web applications.",
  openGraph: {
    title: "Elunari Blog | Developer Articles & Guides",
    description:
      "In-depth developer articles on TypeScript, React, Docker, Git, and modern web development.",
    url: "https://blog.elunari.uk",
    type: "website",
  },
}

export default function HomePage() {
  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <div className="min-h-screen gradient-mesh">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent-light" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Elunari <span className="text-muted">Blog</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="https://tools.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Wrench className="w-3.5 h-3.5" />
              DevKit
            </a>
            <a
              href="https://marks-portfolio.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/20 text-accent-light text-sm mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Developer Knowledge Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Articles for{" "}
            <span className="glow-text">Modern Developers</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Deep dives into TypeScript, React, Docker, Git, API patterns, and
            the tools that make developers more productive.
          </p>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-16 animate-fade-in animate-delay-1">
            <Link
              href={`/${featured.slug}`}
              className="group block relative overflow-hidden rounded-2xl card-glow bg-card p-8 sm:p-10"
            >
              <div className="absolute top-4 right-4">
                <span className="tag-pill">Featured</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent-light transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-accent-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {rest.map((article, i) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className={`group block rounded-xl card-glow bg-card p-6 animate-fade-in animate-delay-${Math.min(i + 2, 4)}`}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-accent-light transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-[0.6875rem]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a
            href="https://tools.elunari.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl card-glow bg-card p-6 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent-light" />
              </div>
              <h3 className="font-semibold group-hover:text-accent-light transition-colors">
                Free Developer Tools
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              85+ free online tools for JSON, CSS, encoding, regex, and more.
              No signup, no installs.
            </p>
          </a>
          <a
            href="https://buymeacoffee.com/moonlitcapy"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl card-glow bg-card p-6 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-orange" />
              </div>
              <h3 className="font-semibold group-hover:text-orange transition-colors">
                Support This Blog
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              If these articles help you, consider buying me a coffee. Every
              bit helps keep this running.
            </p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Elunari</span>
          <div className="flex items-center gap-6">
            <a
              href="https://marks-portfolio.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="https://tools.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              DevKit
            </a>
            <a
              href="https://buymeacoffee.com/moonlitcapy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
