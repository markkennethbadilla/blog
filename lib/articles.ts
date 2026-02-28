export interface Article {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: "essential-developer-tools-2026",
    title: "25 Essential Free Developer Tools You Should Be Using in 2026",
    description:
      "A curated list of the best free online developer tools for JSON formatting, CSS generation, encoding, and more. No installs required.",
    date: "February 20, 2026",
    readTime: "8 min read",
    tags: ["Developer Tools", "Productivity", "Web Development"],
    featured: true,
  },
  {
    slug: "api-integration-patterns",
    title: "API Integration Patterns for Production Systems",
    description:
      "Battle-tested patterns for building reliable API integrations: retry strategies, circuit breakers, idempotency, and rate limiting.",
    date: "February 18, 2026",
    readTime: "10 min read",
    tags: ["Backend", "Architecture", "API Design"],
  },
  {
    slug: "nextjs-portfolio-guide",
    title: "Building a Developer Portfolio That Actually Gets You Hired",
    description:
      "A practical guide to building a modern developer portfolio with Next.js, including SEO optimization, project showcases, and deployment.",
    date: "February 15, 2026",
    readTime: "7 min read",
    tags: ["Next.js", "Career", "Portfolio"],
  },
  {
    slug: "data-pipeline-csv-to-clean",
    title: "Data Pipeline Design: From Messy CSV to Clean Database",
    description:
      "How to design automated data pipelines that normalize, validate, and transform messy spreadsheet data into production-quality records.",
    date: "February 12, 2026",
    readTime: "9 min read",
    tags: ["Data Engineering", "Automation", "AI"],
  },
  {
    slug: "git-workflow-guide",
    title: "The Complete Git Workflow Guide for Teams in 2026",
    description:
      "Master Git workflows with practical examples: branching strategies, merge vs rebase, conflict resolution, and CI/CD integration for modern teams.",
    date: "February 10, 2026",
    readTime: "12 min read",
    tags: ["Git", "DevOps", "Team Workflow"],
  },
  {
    slug: "typescript-patterns-2026",
    title: "TypeScript Patterns Every Developer Should Know in 2026",
    description:
      "Advanced TypeScript patterns for building type-safe applications: discriminated unions, branded types, builder pattern, exhaustive matching, and more.",
    date: "February 8, 2026",
    readTime: "11 min read",
    tags: ["TypeScript", "Patterns", "Best Practices"],
  },
  {
    slug: "docker-essentials-developers",
    title: "Docker Essentials: A Developer's Practical Guide for 2026",
    description:
      "Learn Docker from a developer's perspective: containers, images, volumes, networking, multi-stage builds, and Docker Compose for local development.",
    date: "February 5, 2026",
    readTime: "13 min read",
    tags: ["Docker", "DevOps", "Infrastructure"],
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: From Slow to Lightning Fast",
    description:
      "Practical React performance techniques: memo, useMemo, useCallback, code splitting, virtualization, React Compiler, and profiling tools.",
    date: "February 2, 2026",
    readTime: "14 min read",
    tags: ["React", "Performance", "Frontend"],
  },
  {
    slug: "web-security-essentials",
    title: "Web Security Essentials Every Developer Must Know in 2026",
    description:
      "A practical guide to securing web applications: XSS prevention, CSRF protection, Content Security Policy, CORS, authentication best practices, and the OWASP Top 10.",
    date: "March 1, 2026",
    readTime: "12 min read",
    tags: ["Security", "Web Development", "Best Practices"],
  },
  {
    slug: "css-architecture-scalable-apps",
    title: "CSS Architecture for Scalable Applications",
    description:
      "How to structure CSS that scales: methodologies like BEM, utility-first with Tailwind, CSS Modules, design tokens, and building maintainable design systems.",
    date: "March 1, 2026",
    readTime: "10 min read",
    tags: ["CSS", "Architecture", "Frontend"],
  },
  {
    slug: "python-automation-2026",
    title: "10 Python Automation Scripts That Save Hours Every Week",
    description:
      "Practical Python scripts for file management, web scraping, API integration, data processing, and workflow automation that every developer should have.",
    date: "March 1, 2026",
    readTime: "11 min read",
    tags: ["Python", "Automation", "Productivity"],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  articles.forEach((a) => a.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
