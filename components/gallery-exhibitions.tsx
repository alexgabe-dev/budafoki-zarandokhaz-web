"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, MapPin } from "lucide-react"

const exhibitions = [
  {
    id: 1,
    title: "Fények és Árnyékok",
    artist: "Kovács Anna",
    description:
      "Kortárs olajfestmények a fény és sötétség örök párbeszédéről. A kiállítás feltárja a kontrasztok erejét a modern művészetben.",
    image: "/modern-oil-painting-light-shadow-abstract-art-gall.jpg",
    dateRange: "2025. december 1. – 2025. január 15.",
    location: "Főgaléria",
    status: "current" as const,
  },
  {
    id: 2,
    title: "Borhegyek",
    artist: "Molnár Péter",
    description:
      "Vízfestmények a magyar borvidékekről. A művész bejárta az ország leghíresebb szőlőhegyeit, hogy megörökítse azok szépségét.",
    image: "/watercolor-painting-hungarian-vineyard-hills-lands.jpg",
    dateRange: "2025. január 20. – február 28.",
    location: "Kamarakiállító",
    status: "upcoming" as const,
  },
  {
    id: 3,
    title: "Szentek és Bűnösök",
    artist: "Vegyes művészek",
    description:
      "Csoportos kiállítás a hit és kételkedés témájában. Festmények, szobrok és installációk fiatal magyar alkotóktól.",
    image: "/religious-art-modern-interpretation-saints-sinners.jpg",
    dateRange: "2025. március 1. – április 30.",
    location: "Főgaléria",
    status: "upcoming" as const,
  },
]

export function GalleryExhibitions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
          {exhibitions.map((exhibition, index) => (
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
                  >
                    Részletek megtekintése
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
