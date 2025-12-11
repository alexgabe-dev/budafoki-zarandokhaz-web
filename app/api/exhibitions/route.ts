import { NextRequest } from "next/server"
import fs from "node:fs"
import path from "node:path"

const EXH_PATH = path.join(process.cwd(), "lib", "gallery-data.tsx")
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function loadExhibitions(): any[] {
  try {
    const src = fs.readFileSync(EXH_PATH, "utf8")
    const start = src.indexOf("export const allExhibitions")
    if (start === -1) return []
    const bracketStart = src.indexOf("[", start)
    const sentinel = "]\n\nexport function getExhibition"
    const endIdx = src.indexOf(sentinel, bracketStart)
    if (bracketStart === -1 || endIdx === -1) return []
    const arrayStr = src.slice(bracketStart, endIdx)
    // eslint-disable-next-line no-new-func
    const fn = new Function("return " + arrayStr)
    const arr = fn()
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

function buildFileContent(items: any[]): string {
  const header = `export interface ExhibitionDetail {\n  paintedWhen: string\n  paintedWhere: string\n  technique: string\n  dimensions: string\n  curatorNote: string\n}\n\nexport interface Exhibition {\n  id: number\n  slug: string\n  title: string\n  artist: string\n  description: string\n  image: string\n  dateRange: string\n  location: string\n  status: \"current\" | \"upcoming\"\n  details?: ExhibitionDetail\n}\n\nexport const allExhibitions: Exhibition[] = [\n`
  const entries = items
    .map((e) => {
      const details = e.details
        ? `details: {\n      paintedWhen: ${JSON.stringify(details.paintedWhen)},\n      paintedWhere: ${JSON.stringify(details.paintedWhere)},\n      technique: ${JSON.stringify(details.technique)},\n      dimensions: ${JSON.stringify(details.dimensions)},\n      curatorNote: ${JSON.stringify(details.curatorNote)},\n    },\n`
        : ""
      return `  {\n    id: ${e.id},\n    slug: ${JSON.stringify(e.slug)},\n    title: ${JSON.stringify(e.title)},\n    artist: ${JSON.stringify(e.artist)},\n    description: ${JSON.stringify(e.description)},\n    image: ${JSON.stringify(e.image)},\n    dateRange: ${JSON.stringify(e.dateRange)},\n    location: ${JSON.stringify(e.location)},\n    status: ${JSON.stringify(e.status)},\n    ${details}}\n`
    })
    .join("")
  const footer = `]\n\nexport function getExhibition(slug: string): Exhibition | undefined {\n  return allExhibitions.find((e) => e.slug === slug)\n}\n`
  return header + entries + footer
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9áéíóöőúüű\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export async function GET() {
  const arr = loadExhibitions()
  if (arr.length === 0) {
    try {
      const mod = await import("@/lib/gallery-data")
      return Response.json(mod.allExhibitions ?? [])
    } catch {
      return Response.json([])
    }
  }
  return Response.json(arr)
}

export async function POST(req: NextRequest) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const body = await req.json()
  let items = loadExhibitions().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/gallery-data")
      items = (mod.allExhibitions ?? []).slice()
    } catch {
      items = []
    }
  }
  const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1
  const slug = body.slug ? String(body.slug) : slugify(String(body.title))
  const newItem = {
    id: nextId,
    slug,
    title: String(body.title || "Untitled"),
    artist: String(body.artist || ""),
    description: String(body.description || ""),
    image: String(body.image || "/placeholder.svg"),
    dateRange: String(body.dateRange || ""),
    location: String(body.location || ""),
    status: body.status === "current" ? "current" : "upcoming",
    details: body.details || undefined,
  }
  const content = buildFileContent([newItem, ...items])
  fs.writeFileSync(EXH_PATH, content, "utf8")
  return Response.json({ ok: true, item: newItem })
}
