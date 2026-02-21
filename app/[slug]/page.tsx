import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getArticle, getAllSlugs, articles } from "@/lib/articles"
import ArticlePage from "./ArticlePage"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://blog.elunari.uk/${slug}`,
      type: "article",
      siteName: "Elunari Blog",
    },
    keywords: article.tags,
  }
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  // Find related articles (share at least one tag)
  const related = articles
    .filter(
      (a) =>
        a.slug !== slug && a.tags.some((t) => article.tags.includes(t))
    )
    .slice(0, 3)

  return <ArticlePage article={article} related={related} />
}
