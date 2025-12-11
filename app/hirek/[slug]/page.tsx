import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ArticleContent } from "@/components/article-content"
import { ArticleHeader } from "@/components/article-header"
import { RelatedArticles } from "@/components/related-articles"
import { getNewsArticle, allNews } from "@/lib/news-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    return {
      title: "Cikk nem található | Budafoki Zarándokház",
    }
  }

  return {
    title: `${article.title} | Budafoki Zarándokház`,
    description: article.excerpt,
  }
}

export async function generateStaticParams() {
  return allNews.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <ArticleHeader article={article} />
      <ArticleContent article={article} />
      <RelatedArticles currentSlug={slug} />
      <Footer />
      <BackToTop />
    </main>
  )
}
