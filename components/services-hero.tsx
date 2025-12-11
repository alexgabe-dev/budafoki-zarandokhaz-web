"use client"

import { useEffect, useState } from "react"
import { Bed, UtensilsCrossed, Wine, Sparkles } from "lucide-react"

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon cluster */}
          <div className={`flex items-center justify-center gap-4 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <Bed className="h-6 w-6 text-primary/60" />
            <UtensilsCrossed className="h-7 w-7 text-secondary" />
            <Wine className="h-6 w-6 text-primary/60" />
            <Sparkles className="h-5 w-5 text-secondary/60" />
          </div>

          <span
            className={`text-secondary text-sm tracking-widest uppercase mb-4 block font-medium ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Szolgáltatásaink
          </span>

          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Minden, amire egy
            <span className="text-primary"> zarándoknak</span> szüksége van
          </h1>

          <p
            className={`text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Szállás, gasztronómia, wellness és szórakozás – a Zarándokház minden szolgáltatása egy helyen, hogy a
            pihenésed zavartalan legyen.
          </p>

          {/* Decorative line */}
          <div
            className={`mt-12 flex items-center justify-center gap-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
