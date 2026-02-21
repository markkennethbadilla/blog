"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Coffee,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import type { Article } from "@/lib/articles"

interface ArticlePageProps {
  article: Article
  related: Article[]
}

export default function ArticlePage({ article, related }: ArticlePageProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen gradient-mesh">
      {/* Reading Progress */}
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
      />

      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center group-hover:bg-card-hover transition-colors border border-border">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">All Articles</span>
            </Link>
            <div className="h-5 w-px bg-border hidden sm:block" />
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              <span className="font-semibold">Elunari</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a
              href="https://tools.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors hidden sm:flex items-center gap-1"
            >
              <Wrench className="w-3.5 h-3.5" />
              DevKit
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {article.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {article.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content — dynamically imported */}
        <article className="article-content animate-fade-in animate-delay-1">
          <ArticleBody slug={article.slug} />
        </article>

        {/* Author + CTA */}
        <div className="mt-16 rounded-2xl bg-card border border-border p-6 sm:p-8 animate-fade-in animate-delay-2">
          <p className="text-sm text-muted mb-5 leading-relaxed">
            Found this article useful? Share it with your team or explore more
            developer resources below.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://tools.elunari.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent-light text-sm font-medium hover:bg-accent/20 transition-colors border border-accent/20"
            >
              <Wrench className="w-4 h-4" />
              85+ Free Dev Tools
            </a>
            <a
              href="https://buymeacoffee.com/moonlitcapy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange/10 text-orange text-sm font-medium hover:bg-orange/20 transition-colors border border-orange/20"
            >
              <Coffee className="w-4 h-4" />
              Buy Me a Coffee
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-hover text-foreground text-sm font-medium hover:bg-border transition-colors border border-border"
            >
              More Articles
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-5">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group block rounded-xl card-glow bg-card p-5"
                >
                  <h4 className="text-sm font-semibold mb-2 group-hover:text-accent-light transition-colors leading-snug">
                    {r.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Clock className="w-3 h-3" />
                    {r.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Elunari</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Blog
            </Link>
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
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArticleBody({ slug }: { slug: string }) {
  const Content = articleContent[slug]
  if (!Content) return <p>Article content not found.</p>
  return <Content />
}

/* -------------------------------------------------------------------
 *  ARTICLE CONTENT MAP
 *  Each key matches a slug. Content is inline JSX.
 * ------------------------------------------------------------------- */

const articleContent: Record<string, React.FC> = {
  "essential-developer-tools-2026": EssentialDevTools,
  "api-integration-patterns": ApiIntegrationPatterns,
  "nextjs-portfolio-guide": NextjsPortfolioGuide,
  "data-pipeline-csv-to-clean": DataPipelineCsv,
  "git-workflow-guide": GitWorkflowGuide,
  "typescript-patterns-2026": TypescriptPatterns,
  "docker-essentials-developers": DockerEssentials,
  "react-performance-optimization": ReactPerformance,
}

/* =====================  ARTICLE 1  ===================== */
function EssentialDevTools() {
  return (
    <>
      <p>
        Every developer has a toolkit — a set of utilities they reach for
        daily. The best tools are the ones that work instantly in your
        browser, require no account, and just get the job done. Here are 25
        free online tools that belong in every developer&apos;s bookmarks.
      </p>
      <h2>Data Format Tools</h2>
      <h3>1. JSON Formatter &amp; Validator</h3>
      <p>
        Paste malformed JSON, get it beautifully formatted with syntax
        highlighting and error detection. Essential for debugging API
        responses and config files.
      </p>
      <h3>2. JSON to CSV Converter</h3>
      <p>
        Converting API responses to spreadsheet-friendly formats is a daily
        task. Tools like{" "}
        <a
          href="https://tools.elunari.uk/json-to-csv"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevKit&apos;s JSON to CSV converter
        </a>{" "}
        make this instant.
      </p>
      <h3>3. YAML to JSON Converter</h3>
      <p>
        Docker Compose, CI configs, Kubernetes manifests — YAML is everywhere.
        A reliable YAML/JSON converter saves time when switching between
        formats.
      </p>
      <h3>4. XML to JSON Converter</h3>
      <p>
        Legacy APIs and SOAP services still use XML. Converting XML responses
        to JSON for modern frontends is a common need.
      </p>
      <h3>5. CSV Viewer &amp; Editor</h3>
      <p>
        Preview CSV files without opening Excel. Good viewers handle large
        files, detect delimiters automatically, and let you sort/filter.
      </p>
      <h2>Encoding &amp; Security Tools</h2>
      <h3>6. Base64 Encoder/Decoder</h3>
      <p>
        Data URIs, API tokens, email attachments — Base64 encoding is
        everywhere. A fast encoder/decoder is essential.
      </p>
      <h3>7. URL Encoder/Decoder</h3>
      <p>Debugging query parameters with special characters? URL encoding issues are among the most common API bugs.</p>
      <h3>8. JWT Decoder</h3>
      <p>Decode JWT tokens to inspect headers, payloads, and expiration times without any external library.</p>
      <h3>9. Hash Generator (MD5/SHA)</h3>
      <p>Generate checksums for file integrity verification, password hashing comparisons, and data deduplication.</p>
      <h3>10. Password Generator</h3>
      <p>Generate secure, random passwords with configurable length, character sets, and entropy indicators.</p>
      <h2>CSS &amp; Design Tools</h2>
      <h3>11. CSS Gradient Generator</h3>
      <p>Visual gradient editors save hours of tweaking CSS. The best ones generate complex multi-stop gradients.</p>
      <h3>12. Box Shadow Generator</h3>
      <p>Layered shadows create depth. Interactive generators let you preview and copy production-ready CSS.</p>
      <h3>13. Flexbox Playground</h3>
      <p>Understanding flex properties visually is 10x faster than reading docs. Interactive playgrounds show results in real time.</p>
      <h3>14. CSS Grid Generator</h3>
      <p>Grid layouts are powerful but the syntax is complex. Visual generators help you prototype layouts quickly.</p>
      <h3>15. Color Palette Generator</h3>
      <p>Generate harmonious color schemes from a base color. Essential for design systems and brand consistency.</p>
      <h2>Code Transformation Tools</h2>
      <h3>16. JSON to TypeScript</h3>
      <p>
        Paste a JSON response, get TypeScript interfaces. The{" "}
        <a
          href="https://tools.elunari.uk/json-to-typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevKit converter
        </a>{" "}
        handles nested objects and arrays intelligently.
      </p>
      <h3>17. Regex Tester</h3>
      <p>Test and debug regular expressions with real-time matching, group highlighting, and explanation of pattern components.</p>
      <h3>18. JavaScript/CSS Minifier</h3>
      <p>Quick minification for one-off scripts or inline styles. Useful when build tools feel like overkill.</p>
      <h3>19. SQL Formatter</h3>
      <p>Transform single-line SQL queries into readable, indented format. Makes complex joins and subqueries comprehensible.</p>
      <h3>20. Markdown Preview</h3>
      <p>Write and preview Markdown in real time. Useful for README files, documentation, and blog posts.</p>
      <h2>Utility Tools</h2>
      <h3>21. Cron Expression Parser</h3>
      <p>Cron syntax reads like hieroglyphics. A parser that shows the next execution times in plain English is invaluable.</p>
      <h3>22. Timestamp Converter</h3>
      <p>Convert between Unix timestamps, ISO 8601, and human-readable dates. Debug time zone issues instantly.</p>
      <h3>23. UUID/ULID Generator</h3>
      <p>Generate unique identifiers for database records, API keys, and session tokens.</p>
      <h3>24. HTTP Status Code Reference</h3>
      <p>Quick lookup for all HTTP status codes with descriptions and common use cases. Faster than searching the RFC.</p>
      <h3>25. Placeholder Image Generator</h3>
      <p>Generate placeholder images of any size for mockups and prototypes without external services.</p>
      <h2>Where to Find These</h2>
      <p>
        All of these tools (and many more) are available for free at{" "}
        <a
          href="https://tools.elunari.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevKit (tools.elunari.uk)
        </a>
        . No login, no tracking, no installs — just paste and go.
      </p>
    </>
  )
}

/* =====================  ARTICLE 2  ===================== */
function ApiIntegrationPatterns() {
  return (
    <>
      <p>
        Building API integrations that work in production — not just in
        Postman — requires patterns for handling the real world: flaky
        networks, rate limits, schema changes, and partial failures.
      </p>
      <h2>Retry with Exponential Backoff</h2>
      <p>
        Network errors and 5xx responses are inevitable. A retry strategy
        with exponential backoff prevents overwhelming a recovering service
        while maximizing your chances of success.
      </p>
      <pre><code>{`async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, options)
      if (res.ok) return res
      if (res.status < 500) throw new Error(\`Client error: \${res.status}\`)
    } catch (err) {
      if (attempt === maxRetries) throw err
    }
    const delay = Math.min(1000 * 2 ** attempt, 30000)
    const jitter = delay * (0.5 + Math.random() * 0.5)
    await new Promise((r) => setTimeout(r, jitter))
  }
}`}</code></pre>
      <h2>Circuit Breaker</h2>
      <p>
        When an upstream service is down, continuing to send requests wastes
        resources and slows down your entire system. A circuit breaker
        short-circuits failed requests after a threshold.
      </p>
      <pre><code>{`class CircuitBreaker {
  failures = 0; lastFailure = 0; state = "closed"
  constructor(private threshold = 5, private resetMs = 60000) {}

  async call<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === "open") {
      if (Date.now() - this.lastFailure > this.resetMs)
        this.state = "half-open"
      else throw new Error("Circuit is open")
    }
    try {
      const result = await fn()
      this.failures = 0; this.state = "closed"
      return result
    } catch (err) {
      this.failures++; this.lastFailure = Date.now()
      if (this.failures >= this.threshold) this.state = "open"
      throw err
    }
  }
}`}</code></pre>
      <h2>Idempotency Keys</h2>
      <p>
        For mutating operations (payments, order creation), an idempotency
        key ensures that retried requests don&apos;t duplicate side effects
        — the server reuses the original response.
      </p>
      <pre><code>{`const idempotencyKey = crypto.randomUUID()

const response = await fetch("/api/payments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Idempotency-Key": idempotencyKey,
  },
  body: JSON.stringify({ amount: 4999, currency: "USD" }),
})`}</code></pre>
      <h2>Rate Limiting (Client Side)</h2>
      <p>
        Respect the API&apos;s rate limits before they enforce them. A
        token bucket algorithm gives you smooth, predictable request pacing.
      </p>
      <pre><code>{`class RateLimiter {
  private tokens: number
  private lastRefill: number
  constructor(
    private maxTokens: number,
    private refillRate: number // tokens per second
  ) {
    this.tokens = maxTokens
    this.lastRefill = Date.now()
  }
  async acquire(): Promise<void> {
    this.refill()
    if (this.tokens < 1) {
      const waitMs = (1 / this.refillRate) * 1000
      await new Promise((r) => setTimeout(r, waitMs))
      this.refill()
    }
    this.tokens--
  }
  private refill() {
    const now = Date.now()
    const elapsed = (now - this.lastRefill) / 1000
    this.tokens = Math.min(this.maxTokens, this.tokens + elapsed * this.refillRate)
    this.lastRefill = now
  }
}`}</code></pre>
      <h2>Wrapping Up</h2>
      <p>
        These patterns aren&apos;t optional for production systems.
        Retries handle transient failures, circuit breakers prevent cascade
        failures, idempotency keys prevent duplicates, and rate limiting
        keeps you within bounds. Layer them together for integrations that
        survive the real world.
      </p>
    </>
  )
}

/* =====================  ARTICLE 3  ===================== */
function NextjsPortfolioGuide() {
  return (
    <>
      <p>
        A developer portfolio isn&apos;t a resume — it&apos;s proof of work.
        The most effective portfolios I&apos;ve seen share a common formula:
        strong project showcases, clean UI, fast load times, and proper SEO.
      </p>
      <h2>Why Next.js for Portfolios</h2>
      <ul>
        <li><strong>Static generation</strong> — pages are pre-built at deploy time, resulting in instant loads</li>
        <li><strong>Built-in SEO</strong> — metadata API, sitemap generation, robots.txt</li>
        <li><strong>React ecosystem</strong> — use any UI library, animation library, or component system</li>
        <li><strong>Free hosting</strong> — Vercel deploys Next.js with zero configuration</li>
      </ul>
      <h2>Project Showcase Structure</h2>
      <p>
        Each project page should answer three questions: what problem does it
        solve, what was the technical approach, and what was the measurable
        outcome.
      </p>
      <pre><code>{`app/
  page.tsx              # Hero + project cards
  projects/
    [slug]/
      page.tsx          # Individual project showcase
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Search engine directives`}</code></pre>
      <h2>SEO Essentials</h2>
      <ul>
        <li>Set unique <code>title</code> and <code>description</code> for every page</li>
        <li>Use semantic HTML: <code>h1</code>, <code>h2</code>, <code>article</code>, <code>nav</code></li>
        <li>Generate a sitemap with <code>sitemap.ts</code></li>
        <li>Submit your sitemap to Google Search Console and Bing Webmaster Tools</li>
        <li>Add structured data (JSON-LD) for <code>Person</code> and <code>WebSite</code></li>
      </ul>
      <h2>Performance Tips</h2>
      <ul>
        <li>Use <code>next/image</code> for automatic image optimization</li>
        <li>Minimize client-side JavaScript — most portfolio pages can be static</li>
        <li>Use system fonts or limit web fonts to one family</li>
        <li>Aim for 90+ Lighthouse score across all categories</li>
      </ul>
      <h2>Wrapping Up</h2>
      <p>
        A live portfolio with real projects beats a polished resume every
        time. Focus on shipping a clean version 1, then iterate. Start the
        first project today, write the first showcase this weekend.
      </p>
    </>
  )
}

/* =====================  ARTICLE 4  ===================== */
function DataPipelineCsv() {
  return (
    <>
      <p>
        Most real-world data starts messy — inconsistent CSV exports from
        legacy systems, spreadsheets with merged cells, date formats that
        vary by row. A good data pipeline transforms this chaos into clean,
        normalized database records.
      </p>
      <h2>Pipeline Architecture</h2>
      <p>The classic ETL (Extract, Transform, Load) pattern remains the
        foundation. Each stage has a clear boundary and failure mode.</p>
      <pre><code>{`Extract     → Read raw data from source (CSV, API, FTP)
Transform   → Normalize, validate, enrich, deduplicate
Load        → Write clean records to target database
Monitor     → Log anomalies, send alerts on threshold breaches`}</code></pre>
      <h2>Handling Messy Data</h2>
      <ul>
        <li><strong>Date normalization:</strong> Parse multiple formats (MM/DD/YYYY, DD-MM-YYYY, ISO 8601) into a single canonical format</li>
        <li><strong>Address standardization:</strong> Normalize street abbreviations (St → Street, Ave → Avenue) and validate against postal databases</li>
        <li><strong>Deduplication:</strong> Use fuzzy matching (Levenshtein distance, Jaro-Winkler) to identify duplicate records with slight variations</li>
        <li><strong>Type coercion:</strong> Convert &quot;yes&quot;/&quot;no&quot;/&quot;1&quot;/&quot;0&quot;/&quot;true&quot;/&quot;false&quot; to consistent booleans</li>
      </ul>
      <h2>AI-Assisted Normalization</h2>
      <p>
        For particularly messy data, LLMs can classify and normalize fields
        that rule-based systems struggle with — company name variations,
        free-text product descriptions, and ambiguous category labels.
      </p>
      <pre><code>{`async function normalizeWithAI(rawValue: string, field: string): Promise<string> {
  const response = await llm.complete({
    prompt: \`Normalize this \${field} value into a standard format.
Input: "\${rawValue}"
Output (just the normalized value, nothing else):\`,
    maxTokens: 50,
    temperature: 0,
  })
  return response.trim()
}`}</code></pre>
      <h2>Validation Layer</h2>
      <p>
        Every record should pass through validation before loading. Reject
        invalid records into a quarantine table for manual review rather
        than silently dropping data.
      </p>
      <h2>Wrapping Up</h2>
      <p>
        Data pipelines are unglamorous but critical. The difference between
        a good pipeline and a bad one shows up in data quality — and data
        quality directly impacts every business decision downstream.
      </p>
    </>
  )
}

/* =====================  ARTICLE 5  ===================== */
function GitWorkflowGuide() {
  return (
    <>
      <p>
        Git is the backbone of modern software development, but most teams
        use only a fraction of its capabilities. Here are the workflows,
        conventions, and strategies that consistently lead to clean
        histories and reliable deployments.
      </p>
      <h2>Choosing the Right Branching Strategy</h2>
      <h3>Trunk-Based Development</h3>
      <p>
        Works best for teams shipping multiple times per day. Everyone
        commits to <code>main</code> directly with short-lived feature
        branches lasting hours, not days.
      </p>
      <pre><code>{`git checkout -b feat/add-search-filter
# ... make changes ...
git add -A && git commit -m "feat: add search filter component"
git push origin feat/add-search-filter`}</code></pre>
      <h3>GitHub Flow</h3>
      <p>
        Ideal for teams shipping daily or weekly. One main branch, feature
        branches for all work, pull requests for everything.
      </p>
      <h2>Merge vs Rebase</h2>
      <p>
        Use <strong>merge</strong> by default (preserves history, safer for
        shared branches). Use <strong>rebase</strong> only for personal
        branches you haven&apos;t pushed yet.
      </p>
      <pre><code>{`# Rebase your feature branch onto latest main
git checkout feature/search
git fetch origin
git rebase origin/main`}</code></pre>
      <h2>Commit Message Conventions</h2>
      <pre><code>{`feat(auth): add SSO login with Google
fix(api): handle null response from payment gateway
docs(readme): update deployment instructions
refactor(db): extract query builder into utility
chore(deps): bump next.js to 16.1.3`}</code></pre>
      <h2>Git Aliases That Save Hours</h2>
      <pre><code>{`[alias]
  s = status -sb
  lg = log --oneline --graph --decorate -20
  co = checkout
  cb = checkout -b
  cm = commit -m
  wip = !git add -A && git commit -m "wip: work in progress"
  up = !git fetch origin && git rebase origin/main
  cleanup = !git branch -vv | grep ': gone]' | awk '{print $1}' | xargs -r git branch -D`}</code></pre>
      <h2>Wrapping Up</h2>
      <p>
        The best Git workflow is the one your entire team actually follows.
        Start simple with GitHub Flow and conventional commits. Add
        complexity only when you have a real problem that simpler approaches
        can&apos;t solve.
      </p>
    </>
  )
}

/* =====================  ARTICLE 6  ===================== */
function TypescriptPatterns() {
  return (
    <>
      <p>
        TypeScript has matured far beyond &ldquo;JavaScript with types.&rdquo;
        The type system is powerful enough to encode complex business logic
        at compile time. Here are the patterns that make the biggest
        difference in production codebases.
      </p>
      <h2>Discriminated Unions</h2>
      <p>
        Model states where different variants carry different data.
        TypeScript narrows the type automatically based on the discriminant.
      </p>
      <pre><code>{`type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error }

function renderState<T>(state: AsyncState<T>) {
  switch (state.status) {
    case "idle": return "Ready"
    case "loading": return "Loading..."
    case "success": return \`Data: \${JSON.stringify(state.data)}\`
    case "error": return \`Error: \${state.error.message}\`
  }
}`}</code></pre>
      <h2>Branded Types</h2>
      <p>
        Prevent mixing up values that are the same primitive type but
        represent different things.
      </p>
      <pre><code>{`type UserId = string & { readonly __brand: "UserId" }
type OrderId = string & { readonly __brand: "OrderId" }

function getOrder(orderId: OrderId) { /* ... */ }
const userId = "user_123" as UserId
getOrder(userId)  // Compile error!`}</code></pre>
      <h2>Template Literal Types</h2>
      <pre><code>{`type EventName = \`\${"user" | "order"}.\${"created" | "updated" | "deleted"}\`
// "user.created" | "user.updated" | "user.deleted" | "order.created" | ...`}</code></pre>
      <h2>Result Types for Error Handling</h2>
      <pre><code>{`type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E }

const result = parseConfig(input)
if (result.ok) console.log(result.value)
else console.error(result.error)`}</code></pre>
      <h2>Wrapping Up</h2>
      <p>
        Start with discriminated unions and exhaustive matching — they
        change how you think about state management. Layer in branded types
        and Result types as your codebase grows. The goal: make illegal
        states unrepresentable.
      </p>
    </>
  )
}

/* =====================  ARTICLE 7  ===================== */
function DockerEssentials() {
  return (
    <>
      <p>
        Docker changed how we build and ship software. This guide covers
        Docker from a developer&apos;s perspective — the concepts,
        commands, and patterns you&apos;ll use daily.
      </p>
      <h2>Core Concepts</h2>
      <p>
        An <strong>image</strong> is a read-only blueprint. A{" "}
        <strong>container</strong> is a running instance. A{" "}
        <strong>Dockerfile</strong> is the recipe. A{" "}
        <strong>volume</strong> persists data. A <strong>network</strong>{" "}
        connects containers.
      </p>
      <h2>Essential Commands</h2>
      <pre><code>{`docker build --tag myapp:latest .
docker run --detach --name myapp --publish 3000:3000 myapp:latest
docker ps
docker logs --follow myapp
docker exec --interactive --tty myapp sh
docker stop myapp && docker rm myapp
docker system prune --all --force`}</code></pre>
      <h2>Multi-Stage Builds</h2>
      <p>
        Separate the build environment from the runtime for smaller, more
        secure images.
      </p>
      <pre><code>{`FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
RUN npm ci --production --ignore-scripts
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]`}</code></pre>
      <h2>Docker Compose for Local Dev</h2>
      <pre><code>{`services:
  app:
    build: .
    ports: ["3000:3000"]
    volumes: [".:/app", "/app/node_modules"]
    depends_on:
      db: { condition: service_healthy }
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: myapp
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dev"]
      interval: 5s
      retries: 5`}</code></pre>
      <h2>Wrapping Up</h2>
      <p>
        Start with a simple Dockerfile and Docker Compose for local dev.
        Add multi-stage builds for production. The goal: remove environment
        differences as a source of bugs.
      </p>
    </>
  )
}

/* =====================  ARTICLE 8  ===================== */
function ReactPerformance() {
  return (
    <>
      <p>
        React is fast by default — until it isn&apos;t. As applications
        grow, rendering bottlenecks creep in. This guide covers the
        techniques for diagnosing and fixing performance issues in
        production React applications.
      </p>
      <h2>Rule Zero: Measure First</h2>
      <p>
        Use React DevTools Profiler to find the actual bottleneck. Open the
        Profiler tab, record an interaction, and examine which components
        re-rendered and why.
      </p>
      <h2>Preventing Unnecessary Re-renders</h2>
      <h3>React.memo</h3>
      <pre><code>{`const ExpensiveChart = memo(function ExpensiveChart({
  data, width, height
}: ChartProps) {
  // Only re-renders when props actually change
  return <canvas />
})`}</code></pre>
      <h3>useMemo for Expensive Computations</h3>
      <pre><code>{`const summary = useMemo(() => ({
  total: transactions.reduce((sum, t) => sum + t.amount, 0),
  byCategory: groupBy(transactions, "category"),
}), [transactions])`}</code></pre>
      <h2>React Compiler (React 19)</h2>
      <p>
        React 19 introduces automatic memoization at build time, making
        manual <code>memo</code>/<code>useMemo</code>/<code>useCallback</code>{" "}
        largely unnecessary for new code. Enable with{" "}
        <code>{`experimental: { reactCompiler: true }`}</code>.
      </p>
      <h2>Code Splitting</h2>
      <pre><code>{`const DataViz = lazy(() => import("./DataVisualization"))

function Dashboard() {
  return (
    <Suspense fallback={<Skeleton />}>
      <DataViz />
    </Suspense>
  )
}`}</code></pre>
      <h2>Virtualization for Long Lists</h2>
      <p>
        Render only visible items. Use <code>@tanstack/react-virtual</code>{" "}
        for lists over 100 items. The overhead of the virtualizer is
        negligible compared to rendering thousands of DOM nodes.
      </p>
      <h2>Colocate State</h2>
      <p>
        The most impactful technique: put state as close as possible to
        where it&apos;s used. Global state that changes frequently causes
        the entire tree to re-render.
      </p>
      <h2>Performance Checklist</h2>
      <ol>
        <li>Profile first — don&apos;t guess</li>
        <li>Colocate state — move it down</li>
        <li>Virtualize long lists (100+ items)</li>
        <li>Code split heavy routes</li>
        <li>Optimize images (next/image or lazy loading)</li>
        <li>Defer non-urgent updates (useDeferredValue)</li>
        <li>Enable React Compiler in React 19</li>
      </ol>
      <h2>Wrapping Up</h2>
      <p>
        Focus on architecture (where state lives, how data flows) rather
        than micro-optimizations. A well-structured app is fast by default.
      </p>
    </>
  )
}
