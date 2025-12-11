"use client"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image: string
  category: string
  featured?: boolean
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9áéíóöőúüű\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export default function NewsAdminPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selected, setSelected] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  const empty: Article = useMemo(
    () => ({ id: 0, slug: "", title: "", excerpt: "", content: "", date: "", readTime: "", image: "", category: "Esemény", featured: false }),
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => setArticles(data))
      .finally(() => setIsLoading(false))
  }, [])

  const startCreate = () => {
    setSelected({ ...empty })
    setDialogOpen(true)
  }
  const startEdit = (a: Article) => {
    setSelected({ ...a })
    setDialogOpen(true)
  }

  const remove = async (id: number) => {
    if (!confirm("Biztosan törlöd a cikket?")) return
    setIsSaving(true)
    const del = await fetch(`/api/news/${id}`, { method: "DELETE" })
    if (!del.ok) {
      const msg = await del.text()
      setAuthError(msg || "Hiba történt a törlésnél.")
      setIsSaving(false)
      return
    }
    const res = await fetch("/api/news").then((r) => r.json())
    setArticles(res)
    setSelected(null)
    setIsSaving(false)
    toast({ title: "Törölve", description: "A cikk sikeresen törölve." })
  }

  const save = async () => {
    if (!selected) return
    const payload = { ...selected }
    if (!payload.slug) payload.slug = slugify(payload.title)
    setIsSaving(true)
    if (payload.id && articles.find((a) => a.id === payload.id)) {
      const up = await fetch(`/api/news/${payload.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!up.ok) {
        const msg = await up.text()
        setAuthError(msg || "Hiba történt a mentésnél.")
        setIsSaving(false)
        return
      }
    } else {
      const cr = await fetch(`/api/news`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!cr.ok) {
        const msg = await cr.text()
        setAuthError(msg || "Hiba történt a létrehozásnál.")
        setIsSaving(false)
        return
      }
    }
    const res = await fetch("/api/news").then((r) => r.json())
    setArticles(res)
    setSelected(null)
    setIsSaving(false)
    setDialogOpen(false)
    toast({ title: "Mentve", description: "A cikk sikeresen mentve." })
  }

  const insertTag = (open: string, close: string) => {
    if (!selected) return
    const ta = document.getElementById("content-ta") as HTMLTextAreaElement | null
    if (!ta) return
    const { selectionStart, selectionEnd, value } = ta
    const before = value.slice(0, selectionStart)
    const middle = value.slice(selectionStart, selectionEnd)
    const after = value.slice(selectionEnd)
    const next = `${before}${open}${middle}${close}${after}`
    setSelected({ ...selected, content: next })
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-6">Hírek kezelése</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">Cikkek száma: {articles.length}</p>
        <div className="flex gap-2">
          <Button onClick={startCreate} className="bg-primary text-primary-foreground">Új cikk</Button>
          <Button
            variant="outline"
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" })
              location.href = "/admin/login"
            }}
          >Kilépés</Button>
        </div>
      </div>
      {authError && <p className="text-sm text-red-600 mb-3">{authError}</p>}

      {isLoading ? (
        <p>Betöltés...</p>
      ) : (
        <div className="space-y-3">
          {articles.map((a) => (
            <div key={a.id} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  {a.featured && (
                    <span className="inline-flex items-center bg-secondary text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                      Kiemelt
                    </span>
                  )}
                  <span>{a.date} • {a.readTime} • {a.category}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => startEdit(a)}>Szerkesztés</Button>
                <Button variant="destructive" onClick={() => remove(a.id)}>Törlés</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setSelected(null) }}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selected?.id ? "Cikk szerkesztése" : "Új cikk"}</DialogTitle>
            <DialogDescription>Frissítsd a mezőket, majd mentsd a módosításokat.</DialogDescription>
          </DialogHeader>
          {selected && (
            <ScrollArea className="max-h-[70vh] pr-4">
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Cím *</Label>
                    <Input id="title" value={selected.title} onChange={(e) => setSelected({ ...selected, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" value={selected.slug} onChange={(e) => setSelected({ ...selected, slug: e.target.value })} placeholder="auto" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Switch id="featured" checked={!!selected.featured} onCheckedChange={(val) => setSelected({ ...selected, featured: val })} />
                  <Label htmlFor="featured">Kiemelt cikk</Label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Dátum</Label>
                    <Input id="date" value={selected.date} onChange={(e) => setSelected({ ...selected, date: e.target.value })} placeholder="2025. december 1." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="readTime">Olvasási idő</Label>
                    <Input id="readTime" value={selected.readTime} onChange={(e) => setSelected({ ...selected, readTime: e.target.value })} placeholder="3 perc" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="image">Kép URL</Label>
                    <Input id="image" value={selected.image} onChange={(e) => setSelected({ ...selected, image: e.target.value })} placeholder="/images/valami.jpg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategória</Label>
                    <Input id="category" value={selected.category} onChange={(e) => setSelected({ ...selected, category: e.target.value })} placeholder="Esemény" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Kivonat</Label>
                  <Textarea id="excerpt" rows={3} value={selected.excerpt} onChange={(e) => setSelected({ ...selected, excerpt: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content">Tartalom (HTML)</Label>
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" onClick={() => insertTag("<strong>", "</strong>")}>B</Button>
                      <Button type="button" variant="outline" onClick={() => insertTag("<em>", "</em>")}>I</Button>
                      <Button type="button" variant="outline" onClick={() => insertTag("<blockquote>", "</blockquote>")}>Quote</Button>
                      <Button type="button" variant="outline" onClick={() => insertTag('<span class="text-primary">', "</span>")}>Red</Button>
                    </div>
                  </div>
                  <Textarea id="content-ta" rows={10} value={selected.content} onChange={(e) => setSelected({ ...selected, content: e.target.value })} className="font-mono" />
                </div>
              </div>
            </ScrollArea>
          )}
          <DialogFooter>
            <Button onClick={save} disabled={isSaving} className={cn("bg-primary text-primary-foreground", isSaving && "opacity-70")}>{isSaving ? "Mentés..." : "Mentés"}</Button>
            <Button variant="secondary" onClick={() => setDialogOpen(false)} disabled={isSaving}>Mégse</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
