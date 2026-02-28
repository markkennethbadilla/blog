# Blog - Agent Context

## Project
- **Name**: Elunari Blog
- **Domain**: blog.elunari.uk
- **Stack**: Next.js 16.1.3, React 19, TypeScript, Tailwind CSS v4
- **Hosting**: Vercel (auto-deploy from GitHub master)
- **GitHub**: github.com/markkennethbadilla/blog

## Architecture
- Static site generation (SSG) via `generateStaticParams`
- Dark-only theme with gradient mesh background
- All article content inline in `ArticlePage.tsx` as React components
- Articles metadata centralized in `lib/articles.ts`
- Dynamic route: `app/[slug]/page.tsx` → `ArticlePage.tsx`

## Monetization
- Google AdSense: pub-7465302364385209 (in layout.tsx + ads.txt)
- Buy Me a Coffee: buymeacoffee.com/moonlitcapy (links in footer + article CTA)
- DevKit affiliate links: tools.elunari.uk (inline in articles + CTA sections)
- IndexNow key: e7f3a9b2d4c6e8f0a1b3c5d7e9f1a3b5

## Articles (11)
1. essential-developer-tools-2026
2. api-integration-patterns
3. nextjs-portfolio-guide
4. data-pipeline-csv-to-clean
5. git-workflow-guide
6. typescript-patterns-2026
7. docker-essentials-developers
8. react-performance-optimization
9. web-security-essentials
10. css-architecture-scalable-apps
11. python-automation-2026

## Design
- Color palette: deep navy (#0a0a0f), indigo accent (#6366f1), cyan (#22d3ee), orange (#f97316)
- Font: Inter (Google Fonts)
- Animations: fade-in-up with staggered delays, card glow on hover
- Reading progress bar on article pages
- Responsive: mobile-first, 3-column grid on desktop

## Created
- 2026-02-21 during earn session 2
- Migrated from portfolio blog section (portfolio decluttered)
