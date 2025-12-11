"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Monitor, Mic2, PartyPopper, GlassWater, Sparkles } from "lucide-react"

const features = [
  { icon: Users, label: "Max. 120 fő", description: "Befogadóképesség" },
  { icon: Monitor, label: "4K Vetítő", description: "Nagyfelbontású kivetítő" },
  { icon: Mic2, label: "Hangosítás", description: "Professzionális rendszer" },
  { icon: PartyPopper, label: "Céges események", description: "Tökéletes helyszín" },
  { icon: GlassWater, label: "Catering", description: "Helyben készített" },
  { icon: Sparkles, label: "Dekoráció", description: "Egyedi tematika" },
]

export function EventsSection() {
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
    <section ref={sectionRef} id="rendezvenyek" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Rendezvényterem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Világi zsinatok és céges misék
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Legyen szó konferenciáról, csapatépítőről vagy privát ünnepségről – nálunk minden esemény szent pillanattá
            válik.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 ${isVisible ? "stagger-children" : ""}`}
        >
          {features.map((feature, index) => (
            <Card
              key={feature.label}
              className={`bg-muted/50 border-border/50 hover:border-primary/50 transition-all duration-500 group hover-lift ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardContent className="p-4 text-center">
                <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <p className="font-medium text-foreground text-sm">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Céges események",
              description: "Konferenciák, prezentációk, workshopok és csapatépítők egyedi környezetben.",
              features: ["Teljes technikai felszereltség", "Catering szolgáltatás", "Rugalmas időbeosztás"],
            },
            {
              title: "Privát ünnepségek",
              description: "Születésnapok, évfordulók és családi összejövetelek meghitt helyszíne.",
              features: ["Személyre szabott menü", "Dekoráció igény szerint", "DJ vagy élőzene"],
            },
            {
              title: "Tematikus esték",
              description: "Borkóstolók, whisky degusztációk és gasztronómiai kalandok.",
              features: ["Szakértő vezetéssel", "Válogatott italok", "Kísérő falatok"],
            },
          ].map((event, index) => (
            <Card
              key={event.title}
              className={`bg-background border-border hover:border-primary/50 transition-all duration-500 group hover-lift ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {event.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href="#kapcsolat">Rendezvényt foglalok</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
