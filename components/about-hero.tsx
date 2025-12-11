"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/dark-elegant-wine-bar-interior-candles-warm-lighti.jpg" alt="A Zarándokház belső tere" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <span
          className={cn(
            "text-secondary text-sm tracking-widest uppercase mb-4 block font-medium transition-all duration-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          A mi történetünk
        </span>
        <h1
          className={cn(
            "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Budafoki Zarándokház
        </h1>
        <p
          className={cn(
            "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Ahol a hit és a ház bora közös misére gyűlnek
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
