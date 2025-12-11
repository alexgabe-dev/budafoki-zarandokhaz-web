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

export async function GET() {
  const arr = loadArtworks()
  if (arr.length === 0) {
    try {
      const mod = await import("@/lib/artworks-data")
      return Response.json(mod.allArtworks ?? [])
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
  let items = loadArtworks().slice()
  if (!items.length) {
    try {
      const mod = await import("@/lib/artworks-data")
      items = (mod.allArtworks ?? []).slice()
    } catch {
      items = []
    }
  }
  const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1
  const newItem = {
    id: nextId,
    src: String(body.src || "/placeholder.svg"),
    title: String(body.title || "Untitled"),
    artist: String(body.artist || ""),
    medium: String(body.medium || ""),
    year: String(body.year || ""),
    size: String(body.size || ""),
  }
  const content = buildFileContent([newItem, ...items])
  fs.writeFileSync(ART_PATH, content, "utf8")
  return Response.json({ ok: true, item: newItem })
}
