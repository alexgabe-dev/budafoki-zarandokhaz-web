"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const team = [
  {
    name: "Kovács Péter",
    role: "Alapító & Tulajdonos",
    image: "/professional-man-portrait-dark-elegant-suit.jpg",
    quote: "A bor összeköt, a közösség megtart.",
  },
  {
    name: "Nagy Anna",
    role: "Vendéglátás vezető",
    image: "/professional-woman-portrait-dark-elegant-dress.jpg",
    quote: "Minden vendég egy új barátság kezdete.",
  },
  {
    name: "Szabó Márton",
    role: "Séf",
    image: "/placeholder.svg?height=400&width=400",
    quote: "A főzés a szeretet nyelve.",
  },
  {
    name: "Kiss Katalin",
    role: "Sommelier",
    image: "/placeholder.svg?height=400&width=400",
    quote: "Minden bornak megvan a maga története.",
  },
]

export function AboutTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Csapatunk</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Az emberek a Zarándokház mögött
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ismerj meg minket – a csapatot, akik minden nap azért dolgoznak, hogy különleges élményt nyújtsunk.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={cn(
                "bg-background border-border overflow-hidden group transition-all duration-700 ease-out hover:shadow-xl hover:shadow-primary/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700 ease-out",
                    hoveredIndex === index ? "scale-110" : "scale-100",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-primary/80 flex items-center justify-center p-4 transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-100" : "opacity-0",
                  )}
                >
                  <p className="text-primary-foreground text-center text-sm italic">„{member.quote}"</p>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
