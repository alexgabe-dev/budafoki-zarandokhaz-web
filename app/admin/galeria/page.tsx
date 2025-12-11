"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

type ExhibitionDetail = {
  paintedWhen: string
  paintedWhere: string
  technique: string
  dimensions: string
  curatorNote: string
}
type Exhibition = {
  id: number
  slug: string
  title: string
  artist: string
  description: string
  image: string
  dateRange: string
  location: string
  status: "current" | "upcoming"
  details?: ExhibitionDetail
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9áéíóöőúüű\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export default function ExhibitionsAdminPage() {
  const [items, setItems] = useState<Exhibition[]>([])
  const [selected, setSelected] = useState<Exhibition | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  const empty: Exhibition = useMemo(
    () => ({ id: 0, slug: "", title: "", artist: "", description: "", image: "", dateRange: "", location: "", status: "current", details: { paintedWhen: "", paintedWhere: "", technique: "", dimensions: "", curatorNote: "" } }),
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    fetch("/api/exhibitions")
      .then((r) => r.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false))
  }, [])

  const startCreate = () => {
    setSelected({ ...empty })
    setDialogOpen(true)
  }
  const startEdit = (e: Exhibition) => {
    setSelected({ ...e })
    setDialogOpen(true)
  }

  const remove = async (id: number) => {
    if (!confirm("Biztosan törlöd a kiállítást?")) return
    setIsSaving(true)
    const del = await fetch(`/api/exhibitions/${id}`, { method: "DELETE" })
    if (!del.ok) {
      const msg = await del.text()
      setAuthError(msg || "Hiba történt a törlésnél.")
      setIsSaving(false)
      return
    }
    const res = await fetch("/api/exhibitions").then((r) => r.json())
    setItems(res)
    setSelected(null)
    setIsSaving(false)
    toast({ title: "Törölve", description: "A kiállítás sikeresen törölve." })
  }

  const save = async () => {
    if (!selected) return
    const payload = { ...selected }
    if (!payload.slug) payload.slug = slugify(payload.title)
    setIsSaving(true)
    if (payload.id && items.find((i) => i.id === payload.id)) {
      const up = await fetch(`/api/exhibitions/${payload.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!up.ok) {
        const msg = await up.text()
        setAuthError(msg || "Hiba történt a mentésnél.")
        setIsSaving(false)
        return
      }
    } else {
      const cr = await fetch(`/api/exhibitions`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!cr.ok) {
        const msg = await cr.text()
        setAuthError(msg || "Hiba történt a létrehozásnál.")
        setIsSaving(false)
        return
      }
    }
    const res = await fetch("/api/exhibitions").then((r) => r.json())
    setItems(res)
    setSelected(null)
    setIsSaving(false)
    setDialogOpen(false)
    toast({ title: "Mentve", description: "A kiállítás sikeresen mentve." })
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-6">Kiállítások kezelése</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">Kiállítások száma: {items.length}</p>
        <div className="flex gap-2">
          <Button onClick={startCreate} className="bg-primary text-primary-foreground">Új kiállítás</Button>
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
          {items.map((e) => (
            <div key={e.id} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium">{e.title}</div>
                <div className="text-sm text-muted-foreground">{e.artist} • {e.dateRange} • {e.location}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => startEdit(e)}>Szerkesztés</Button>
                <Button variant="destructive" onClick={() => remove(e.id)}>Törlés</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setSelected(null) }}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selected?.id ? "Kiállítás szerkesztése" : "Új kiállítás"}</DialogTitle>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="artist">Művész</Label>
                    <Input id="artist" value={selected.artist} onChange={(e) => setSelected({ ...selected, artist: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Kép URL</Label>
                    <Input id="image" value={selected.image} onChange={(e) => setSelected({ ...selected, image: e.target.value })} placeholder="/images/valami.jpg" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateRange">Dátum intervallum</Label>
                    <Input id="dateRange" value={selected.dateRange} onChange={(e) => setSelected({ ...selected, dateRange: e.target.value })} placeholder="2025. december 1. – 2025. január 15." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Helyszín</Label>
                    <Input id="location" value={selected.location} onChange={(e) => setSelected({ ...selected, location: e.target.value })} placeholder="Főgaléria" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Státusz</Label>
                  <Input id="status" value={selected.status} onChange={(e) => setSelected({ ...selected, status: e.target.value as Exhibition["status"] })} placeholder="current | upcoming" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Leírás</Label>
                  <Textarea id="description" rows={3} value={selected.description} onChange={(e) => setSelected({ ...selected, description: e.target.value })} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paintedWhen">Mikor készült</Label>
                    <Input id="paintedWhen" value={selected.details?.paintedWhen || ""} onChange={(e) => setSelected({ ...selected, details: { ...(selected.details || {} as ExhibitionDetail), paintedWhen: e.target.value } })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paintedWhere">Hol készült</Label>
                    <Input id="paintedWhere" value={selected.details?.paintedWhere || ""} onChange={(e) => setSelected({ ...selected, details: { ...(selected.details || {} as ExhibitionDetail), paintedWhere: e.target.value } })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="technique">Technika</Label>
                    <Input id="technique" value={selected.details?.technique || ""} onChange={(e) => setSelected({ ...selected, details: { ...(selected.details || {} as ExhibitionDetail), technique: e.target.value } })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Méret</Label>
                    <Input id="dimensions" value={selected.details?.dimensions || ""} onChange={(e) => setSelected({ ...selected, details: { ...(selected.details || {} as ExhibitionDetail), dimensions: e.target.value } })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="curatorNote">Kurátori megjegyzés</Label>
                  <Textarea id="curatorNote" rows={3} value={selected.details?.curatorNote || ""} onChange={(e) => setSelected({ ...selected, details: { ...(selected.details || {} as ExhibitionDetail), curatorNote: e.target.value } })} />
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
