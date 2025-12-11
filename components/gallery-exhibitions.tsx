"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, ArrowRight, MapPin } from "lucide-react"

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

export function GalleryExhibitions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Exhibition | null>(null)
  const [items, setItems] = useState<Exhibition[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch("/api/exhibitions")
      .then((r) => r.json())
      .then((data: Exhibition[]) => setItems(data))
      .catch(() => {})
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Kiállítások</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Aktuális és közelgő tárlataink
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fedezd fel galériánk változatos kiállításait, ahol a tradíció és a kortárs művészet találkozik.
          </p>
        </div>

        {/* Exhibition Cards */}
        <div className="space-y-8">
          {items.map((exhibition, index) => (
            <Card
              key={exhibition.id}
              className={`bg-background border-border overflow-hidden group hover-lift ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                  <Image
                    src={exhibition.image || "/placeholder.svg"}
                    alt={exhibition.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 md:bg-gradient-to-r md:from-transparent md:to-background/50" />

                  {/* Status Badge */}
                  <span
                    className={`absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full ${
                      exhibition.status === "current"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {exhibition.status === "current" ? "Most látható" : "Hamarosan"}
                  </span>
                </div>

                {/* Content */}
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {exhibition.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{exhibition.artist}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{exhibition.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-secondary" />
                      {exhibition.dateRange}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-secondary" />
                      {exhibition.location}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-fit border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group/btn"
                    onClick={() => {
                      setSelected(exhibition)
                      setOpen(true)
                    }}
                  >
                    Részletek megtekintése
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSelected(null) }}>
          <DialogContent className="sm:max-w-3xl">
            {selected && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image src={selected.image || "/placeholder.svg"} alt={selected.title} fill className="object-cover" />
                </div>
                <div>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-foreground">{selected.title}</DialogTitle>
                    <DialogDescription className="text-primary font-medium">{selected.artist}</DialogDescription>
                  </DialogHeader>
                  <p className="text-muted-foreground leading-relaxed mt-4">{selected.description}</p>
                  <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{selected.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{selected.location}</span>
                    </div>
                    {selected.details && (
                      <div className="mt-4 space-y-1">
                        <div><span className="font-medium text-foreground">Mikor készült:</span> {selected.details.paintedWhen}</div>
                        <div><span className="font-medium text-foreground">Hol készült:</span> {selected.details.paintedWhere}</div>
                        <div><span className="font-medium text-foreground">Technika:</span> {selected.details.technique}</div>
                        <div><span className="font-medium text-foreground">Méret:</span> {selected.details.dimensions}</div>
                        <div className="pt-2 text-foreground/80">{selected.details.curatorNote}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
