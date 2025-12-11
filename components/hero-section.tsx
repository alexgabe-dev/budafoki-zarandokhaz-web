"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dark-moody-bar-interior-candles-wine-atmosphere.jpg"
          alt="Zarándokház belső tere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn("absolute w-1 h-1 bg-secondary/30 rounded-full", isLoaded ? "animate-float" : "opacity-0")}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Decorative element */}
          <div
            className={cn(
              "mb-6 transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <span className="inline-block text-secondary text-sm md:text-base tracking-[0.3em] uppercase font-medium">
              Est. MMXXII • Budafoki út
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={cn(
              "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance transition-all duration-1000 delay-150 ease-out",
              isLoaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm",
            )}
          >
            Budafoki
            <br />
            <span className="text-primary">Zarándokház</span>
          </h1>

          {/* Tagline */}
          <p
            className={cn(
              "text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-300 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Egy hely, ahol az alkohol és a hit egyfajta szimbiózisban élnek egymással.
          </p>

          {/* CTA Buttons - Updated links to use page routes */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-primary/25 bg-transparent group"
            >
              <Link href="/kapcsolat">
                <span className="relative">
                  Asztalfoglalás
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              <Link href="/szallas">Szobafoglalás</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ease-out",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Fedezd fel</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
