import { NextRequest } from "next/server"
import fs from "node:fs"
import path from "node:path"

import { allNews } from "@/lib/news-data"

function buildNewsFileContent(articles: any[]): string {
  const header = `export interface NewsArticle {\n  id: number\n  slug: string\n  title: string\n  excerpt: string\n  content: string\n  date: string\n  readTime: string\n  image: string\n  category: string\n  featured?: boolean\n  author: string\n  authorImage: string\n}\n\nexport const allNews: NewsArticle[] = [\n`
  const items = articles
    .map((a) => {
      return `  {\n    id: ${a.id},\n    slug: ${JSON.stringify(a.slug)},\n    title: ${JSON.stringify(a.title)},\n    excerpt: ${JSON.stringify(a.excerpt)},\n    content: ${JSON.stringify(a.content ?? "")},\n    date: ${JSON.stringify(a.date)},\n    readTime: ${JSON.stringify(a.readTime)},\n    image: ${JSON.stringify(a.image)},\n    category: ${JSON.stringify(a.category)},\n    ${a.featured ? "featured: true,\n    " : ""}author: ${JSON.stringify(a.author ?? "")},\n    authorImage: ${JSON.stringify(a.authorImage ?? "")},\n  },\n`
    })
    .join("")
  const footer = `]\n\nexport function getNewsArticle(slug: string): NewsArticle | undefined {\n  return allNews.find((article) => article.slug === slug)\n}\n\nexport function getRelatedArticles(currentSlug: string, limit = 3): NewsArticle[] {\n  const current = allNews.find((article) => article.slug === currentSlug)\n  if (!current) return allNews.slice(0, limit)\n\n  return allNews\n    .filter((article) => article.slug !== currentSlug)\n    .sort((a, b) => {\n      if (a.category === current.category && b.category !== current.category) return -1\n      if (b.category === current.category && a.category !== current.category) return 1\n      return 0\n    })\n    .slice(0, limit)\n}\n`
  return header + items + footer
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9áéíóöőúüű\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export async function GET() {
  return Response.json(allNews)
}

export async function POST(req: NextRequest) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const body = await req.json()
  const newsPath = path.join(process.cwd(), "lib", "news-data.tsx")

  const articles = allNews.slice()
  const nextId = articles.length ? Math.max(...articles.map((a) => a.id)) + 1 : 1
  const slug = body.slug ? String(body.slug) : slugify(String(body.title))

  const newArticle = {
    id: nextId,
    slug,
    title: String(body.title || "Untitled"),
    excerpt: String(body.excerpt || ""),
    content: normalizeContent(String(body.content || "")),
    date: String(body.date || new Date().toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric" })),
    readTime: String(body.readTime || "2 perc"),
    image: String(body.image || "/placeholder.svg"),
    category: String(body.category || "Esemény"),
    featured: Boolean(body.featured) || false,
    author: "",
    authorImage: "",
  }

  articles.unshift(newArticle)
  const content = buildNewsFileContent(articles)
  fs.writeFileSync(newsPath, content, "utf8")
  return Response.json({ ok: true, article: newArticle })
}
function normalizeContent(raw: string): string {
  let html = String(raw || "")
  // Extract styles to keep custom styling
  const styles: string[] = []
  html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, (m) => {
    styles.push(m)
    return ""
  })
  // Strip document wrappers
  html = html.replace(/<!DOCTYPE[\s\S]*?>/i, "")
  html = html.replace(/<\/?html[\s\S]*?>/gi, "")
  html = html.replace(/<\/?head[\s\S]*?>/gi, "")
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyInner = bodyMatch ? bodyMatch[1] : html.replace(/<\/?body[^>]*>/gi, "")
  return (styles.join("\n") + "\n" + bodyInner).trim()
}
