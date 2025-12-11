"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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

export function GalleryArtworks() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [artworks, setArtworks] = useState<Artwork[]>([])

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
    fetch("/api/artworks")
      .then((r) => r.json())
      .then((data: Artwork[]) => setArtworks(data))
      .catch(() => {})
  }, [])

  const navigateArtwork = (direction: "prev" | "next") => {
    if (selectedArtwork === null) return
    if (direction === "prev") {
      setSelectedArtwork(selectedArtwork === 0 ? artworks.length - 1 : selectedArtwork - 1)
    } else {
      setSelectedArtwork(selectedArtwork === artworks.length - 1 ? 0 : selectedArtwork + 1)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedArtwork === null) return
      if (e.key === "Escape") setSelectedArtwork(null)
      if (e.key === "ArrowLeft") navigateArtwork("prev")
      if (e.key === "ArrowRight") navigateArtwork("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedArtwork])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Állandó Gyűjtemény
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Műalkotások a gyűjteményünkből
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Válogatás galériánk állandó gyűjteményéből – helyi művészek munkái, amelyek a Zarándokház szellemiségét
            tükrözik.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {artworks.map((artwork, index) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedArtwork(index)}
              className={cn(
                "relative w-full overflow-hidden rounded-lg group cursor-pointer break-inside-avoid",
                isVisible ? "animate-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-auto">
                <Image
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Info on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">{artwork.title}</h3>
                  <p className="text-primary text-sm">{artwork.artist}</p>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/40 rounded-lg transition-all duration-500" />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedArtwork !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
              aria-label="Bezárás"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateArtwork("prev")
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/50 hover:bg-card rounded-full text-foreground hover:text-primary transition-all duration-300"
              aria-label="Előző"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateArtwork("next")
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/50 hover:bg-card rounded-full text-foreground hover:text-primary transition-all duration-300"
              aria-label="Következő"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Artwork */}
            <div
              className="relative max-w-4xl max-h-[70vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={artworks[selectedArtwork].src || "/placeholder.svg"}
                  alt={artworks[selectedArtwork].title}
                  width={800}
                  height={800}
                  className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Artwork details */}
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {artworks[selectedArtwork].title}
                </h3>
                <p className="text-primary font-medium mb-2">{artworks[selectedArtwork].artist}</p>
                <p className="text-muted-foreground text-sm">
                  {artworks[selectedArtwork].medium} • {artworks[selectedArtwork].year} •{" "}
                  {artworks[selectedArtwork].size}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
