"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Wine, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Heart,
    title: "Szeretettel készül",
    description: "Minden, amit csinálunk, a vendégeink iránti szeretetből és tiszteletből fakad. Ez a mi alapelvünk.",
  },
  {
    icon: Users,
    title: "Közösség",
    description:
      "Hisszük, hogy a legjobb pillanatok megosztva születnek. Közösséget építünk, nem csak vendégeket fogadunk.",
  },
  {
    icon: Wine,
    title: "Minőség",
    description: "Legyen szó ételről, italról vagy szolgáltatásról – csak a legjobbat kínáljuk zarándokainknak.",
  },
  {
    icon: Sparkles,
    title: "Egyediség",
    description: "Nem vagyunk sablonosak. Minden részlet, minden élmény egyedi és különleges nálunk.",
  },
]

export function AboutValues() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Értékeink</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Amiben hiszünk
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ezek az alapelvek vezetik a mindennapjainkat és formálják a Zarándokház lelkét.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={cn(
                "bg-card border-border group hover:border-primary/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 ease-out">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
