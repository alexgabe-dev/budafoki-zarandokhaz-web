import { NextRequest } from "next/server"
import fs from "node:fs"
import path from "node:path"

import { allNews } from "@/lib/news-data"
import type { NewsArticle } from "@/lib/news-data"

function buildNewsFileContent(articles: NewsArticle[]): string {
  const header = `export interface NewsArticle {\n  id: number\n  slug: string\n  title: string\n  excerpt: string\n  content: string\n  date: string\n  readTime: string\n  image: string\n  category: string\n  featured?: boolean\n  author: string\n  authorImage: string\n}\n\nexport const allNews: NewsArticle[] = [\n`
  const items = articles
    .map((a) => {
      return `  {\n    id: ${a.id},\n    slug: ${JSON.stringify(a.slug)},\n    title: ${JSON.stringify(a.title)},\n    excerpt: ${JSON.stringify(a.excerpt)},\n    content: ${JSON.stringify(a.content ?? "")},\n    date: ${JSON.stringify(a.date)},\n    readTime: ${JSON.stringify(a.readTime)},\n    image: ${JSON.stringify(a.image)},\n    category: ${JSON.stringify(a.category)},\n    ${a.featured ? "featured: true,\n    " : ""}author: ${JSON.stringify(a.author ?? "")},\n    authorImage: ${JSON.stringify(a.authorImage ?? "")},\n  },\n`
    })
    .join("")
  const footer = `]\n\nexport function getNewsArticle(slug: string): NewsArticle | undefined {\n  return allNews.find((article) => article.slug === slug)\n}\n\nexport function getRelatedArticles(currentSlug: string, limit = 3): NewsArticle[] {\n  const current = allNews.find((article) => article.slug === currentSlug)\n  if (!current) return allNews.slice(0, limit)\n\n  return allNews\n    .filter((article) => article.slug !== currentSlug)\n    .sort((a, b) => {\n      if (a.category === current.category && b.category !== current.category) return -1\n      if (b.category === current.category && a.category !== current.category) return 1\n      return 0\n    })\n    .slice(0, limit)\n}\n`
  return header + items + footer
}

function normalizeContent(raw: string): string {
  let html = String(raw || "")
  const styles: string[] = []
  html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, (m) => {
    styles.push(m)
    return ""
  })
  html = html.replace(/<!DOCTYPE[\s\S]*?>/i, "")
  html = html.replace(/<\/?html[\s\S]*?>/gi, "")
  html = html.replace(/<\/?head[\s\S]*?>/gi, "")
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyInner = bodyMatch ? bodyMatch[1] : html.replace(/<\/?body[^>]*>/gi, "")
  return (styles.join("\n") + "\n" + bodyInner).trim()
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } | Promise<{ id: string }> },
) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  const body = await req.json()
  const newsPath = path.join(process.cwd(), "lib", "news-data.tsx")

  const articles = allNews.slice()
  let idx = !Number.isNaN(maybeId) ? articles.findIndex((a) => a.id === maybeId) : -1
  if (idx === -1 && body?.slug) {
    idx = articles.findIndex((a) => a.slug === String(body.slug))
  }
  if (idx === -1) return new Response("Not found", { status: 404 })

  const target = articles[idx]
  const updated = { ...target, ...body, id: target.id }
  // prevent author fields from being reintroduced if omitted
  updated.author = body.author ?? ""
  updated.authorImage = body.authorImage ?? ""
  updated.content = normalizeContent(String(updated.content || ""))
  articles[idx] = updated as NewsArticle

  const content = buildNewsFileContent(articles)
  fs.writeFileSync(newsPath, content, "utf8")
  return Response.json({ ok: true, article: updated })
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } | Promise<{ id: string }> },
) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  const newsPath = path.join(process.cwd(), "lib", "news-data.tsx")

  let articles = allNews.slice()
  if (!Number.isNaN(maybeId)) {
    articles = articles.filter((a) => a.id !== maybeId)
  } else if (typeof idParam === "string") {
    articles = articles.filter((a) => a.slug !== idParam)
  }
  const content = buildNewsFileContent(articles)
  fs.writeFileSync(newsPath, content, "utf8")
  return Response.json({ ok: true })
}
