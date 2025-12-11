"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

type Artwork = {
  id: number
  src: string
  title: string
  artist: string
  medium: string
  year: string
  size: string
}

const emptyArtwork: Artwork = { id: 0, src: "", title: "", artist: "", medium: "", year: "", size: "" }

export default function ArtworksAdminPage() {
  const [items, setItems] = useState<Artwork[]>([])
  const [selected, setSelected] = useState<Artwork | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsLoading(true)
    fetch("/api/artworks")
      .then((r) => r.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false))
  }, [])

  const startCreate = () => {
    setSelected({ ...emptyArtwork })
    setDialogOpen(true)
  }
  const startEdit = (a: Artwork) => {
    setSelected({ ...a })
    setDialogOpen(true)
  }

  const remove = async (id: number) => {
    if (!confirm("Biztosan törlöd a műalkotást?")) return
    setIsSaving(true)
    const del = await fetch(`/api/artworks/${id}`, { method: "DELETE" })
    if (!del.ok) {
      const msg = await del.text()
      setAuthError(msg || "Hiba történt a törlésnél.")
      setIsSaving(false)
      return
    }
    const res = await fetch("/api/artworks").then((r) => r.json())
    setItems(res)
    setSelected(null)
    setIsSaving(false)
    toast({ title: "Törölve", description: "A műalkotás sikeresen törölve." })
  }

  const save = async () => {
    if (!selected) return
    const payload = { ...selected }
    setIsSaving(true)
    if (payload.id && items.find((i) => i.id === payload.id)) {
      const up = await fetch(`/api/artworks/${payload.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!up.ok) {
        const msg = await up.text()
        setAuthError(msg || "Hiba történt a mentésnél.")
        setIsSaving(false)
        return
      }
    } else {
      const cr = await fetch(`/api/artworks`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      if (!cr.ok) {
        const msg = await cr.text()
        setAuthError(msg || "Hiba történt a létrehozásnál.")
        setIsSaving(false)
        return
      }
    }
    const res = await fetch("/api/artworks").then((r) => r.json())
    setItems(res)
    setSelected(null)
    setIsSaving(false)
    setDialogOpen(false)
    toast({ title: "Mentve", description: "A műalkotás sikeresen mentve." })
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-6">Gyűjtemény kezelése</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">Műalkotások száma: {items.length}</p>
        <div className="flex gap-2">
          <Button onClick={startCreate} className="bg-primary text-primary-foreground">Új műalkotás</Button>
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
                <div className="text-sm text-muted-foreground">{e.artist} • {e.year} • {e.size}</div>
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
            <DialogTitle>{selected?.id ? "Műalkotás szerkesztése" : "Új műalkotás"}</DialogTitle>
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
                    <Label htmlFor="artist">Művész *</Label>
                    <Input id="artist" value={selected.artist} onChange={(e) => setSelected({ ...selected, artist: e.target.value })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="src">Kép URL *</Label>
                    <Input id="src" value={selected.src} onChange={(e) => setSelected({ ...selected, src: e.target.value })} placeholder="/images/valami.jpg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medium">Technika</Label>
                    <Input id="medium" value={selected.medium} onChange={(e) => setSelected({ ...selected, medium: e.target.value })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Év</Label>
                    <Input id="year" value={selected.year} onChange={(e) => setSelected({ ...selected, year: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Méret</Label>
                    <Input id="size" value={selected.size} onChange={(e) => setSelected({ ...selected, size: e.target.value })} />
                  </div>
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
