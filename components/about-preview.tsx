"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wine, Users, Calendar, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Calendar, value: "2022", label: "óta várjuk a zarándokokat" },
  { icon: Users, value: "10,000+", label: "boldog vendég" },
  { icon: Wine, value: "50+", label: "válogatott bor" },
  { icon: Heart, value: "100%", label: "szeretettel készül" },
]

export function AboutPreview() {
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
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/cozy-wine-bar-interior-with-candles-warm-lighting-.jpg" alt="A Zarándokház belső tere" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div
              className={cn(
                "absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl transition-all duration-1000 delay-300 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <p className="font-serif text-3xl md:text-4xl font-bold">5+</p>
              <p className="text-sm opacity-90">év tapasztalat</p>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
          >
            <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Rólunk</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Ahol a hit és a ház bora közös misére gyűlnek
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                A Budafoki Zarándokház több mint egy bár vagy szálláshely – ez egy{" "}
                <span className="text-foreground font-medium">menedék</span> azoknak, akik a mindennapok forgatagából
                szeretnének kilépni, és megtalálni a belső békét egy pohár jó bor mellett.
              </p>
              <p>
                Hisszük, hogy a legjobb beszélgetések gyertyafénynél születnek, a legjobb emlékek pedig ott, ahol az
                ember igazán önmaga lehet.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg bg-muted/50 transition-all duration-700 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <stat.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-serif font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group"
            >
              <Link href="/rolunk">
                Tudj meg többet rólunk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
