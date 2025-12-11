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
        ? `details: {\n      paintedWhen: ${JSON.stringify(e.details.paintedWhen)},\n      paintedWhere: ${JSON.stringify(e.details.paintedWhere)},\n      technique: ${JSON.stringify(e.details.technique)},\n      dimensions: ${JSON.stringify(e.details.dimensions)},\n      curatorNote: ${JSON.stringify(e.details.curatorNote)},\n    },\n`
        : ""
      return `  {\n    id: ${e.id},\n    slug: ${JSON.stringify(e.slug)},\n    title: ${JSON.stringify(e.title)},\n    artist: ${JSON.stringify(e.artist)},\n    description: ${JSON.stringify(e.description)},\n    image: ${JSON.stringify(e.image)},\n    dateRange: ${JSON.stringify(e.dateRange)},\n    location: ${JSON.stringify(e.location)},\n    status: ${JSON.stringify(e.status)},\n    ${details}}\n`
    })
    .join("")
  const footer = `]\n\nexport function getExhibition(slug: string): Exhibition | undefined {\n  return allExhibitions.find((e) => e.slug === slug)\n}\n`
  return header + entries + footer
}

export async function PUT(req: NextRequest, context: unknown) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const body = await req.json()
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  let items = loadExhibitions().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/gallery-data")
      items = (mod.allExhibitions ?? []).slice()
    } catch {
      items = []
    }
  }
  const idx = items.findIndex((e) => (!Number.isNaN(maybeId) ? e.id === maybeId : e.slug === idParam))
  if (idx === -1) return new Response("Not found", { status: 404 })
  const target = items[idx]
  const updated = { ...target, ...body, id: target.id }
  items[idx] = updated
  const content = buildFileContent(items)
  fs.writeFileSync(EXH_PATH, content, "utf8")
  return Response.json({ ok: true, item: updated })
}

export async function DELETE(req: NextRequest, context: unknown) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  let items = loadExhibitions().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/gallery-data")
      items = (mod.allExhibitions ?? []).slice()
    } catch {
      items = []
    }
  }
  if (!Number.isNaN(maybeId)) {
    items = items.filter((e) => e.id !== maybeId)
  } else if (typeof idParam === "string") {
    items = items.filter((e) => e.slug !== idParam)
  }
  const content = buildFileContent(items)
  fs.writeFileSync(EXH_PATH, content, "utf8")
  return Response.json({ ok: true })
}
