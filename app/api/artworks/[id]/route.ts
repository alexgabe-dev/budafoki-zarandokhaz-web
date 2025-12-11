import { NextRequest } from "next/server"
import fs from "node:fs"
import path from "node:path"

const ART_PATH = path.join(process.cwd(), "lib", "artworks-data.tsx")
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function loadArtworks(): any[] {
  try {
    const src = fs.readFileSync(ART_PATH, "utf8")
    const start = src.indexOf("export const allArtworks")
    if (start === -1) return []
    const bracketStart = src.indexOf("[", start)
    const sentinel = "]\n\nexport function getArtwork"
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
  const header = `export interface Artwork {\n  id: number\n  src: string\n  title: string\n  artist: string\n  medium: string\n  year: string\n  size: string\n}\n\nexport const allArtworks: Artwork[] = [\n`
  const entries = items
    .map((a) => {
      return `  { id: ${a.id}, src: ${JSON.stringify(a.src)}, title: ${JSON.stringify(a.title)}, artist: ${JSON.stringify(a.artist)}, medium: ${JSON.stringify(a.medium)}, year: ${JSON.stringify(a.year)}, size: ${JSON.stringify(a.size)} },\n`
    })
    .join("")
  const footer = `]\n\nexport function getArtwork(id: number): Artwork | undefined {\n  return allArtworks.find((a) => a.id === id)\n}\n`
  return header + entries + footer
}

export async function PUT(req: NextRequest, context: unknown) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const body = await req.json()
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  let items = loadArtworks().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/artworks-data")
      items = (mod.allArtworks ?? []).slice()
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
  fs.writeFileSync(ART_PATH, content, "utf8")
  return Response.json({ ok: true, item: updated })
}

export async function DELETE(req: NextRequest, context: unknown) {
  const isAdmin = req.cookies.get("admin")?.value === "1"
  if (!isAdmin) return new Response("Unauthorized", { status: 401 })
  const p: any = await (context as any).params
  const idParam = p?.id
  const maybeId = Number(idParam)
  let items = loadArtworks().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/artworks-data")
      items = (mod.allArtworks ?? []).slice()
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
  fs.writeFileSync(ART_PATH, content, "utf8")
  return Response.json({ ok: true })
}
