"use client"

import { useRef, useEffect, useState } from "react"
import { Palette, Frame, Sparkles } from "lucide-react"

export function GalleryHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background with artistic pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rotate-12" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-secondary/20 -rotate-6" />
        <div className="absolute top-40 right-1/4 w-32 h-32 border border-primary/10 rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon cluster */}
          <div className={`flex items-center justify-center gap-4 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <Frame className="h-6 w-6 text-primary/60" />
            <Palette className="h-8 w-8 text-secondary" />
            <Sparkles className="h-6 w-6 text-primary/60" />
          </div>

          <span
            className={`text-secondary text-sm tracking-widest uppercase mb-4 block font-medium ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            A Zarándokház Galériája
          </span>

          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Ahol a művészet és a<span className="text-primary"> lélek</span> találkozik
          </h1>

          <p
            className={`text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Galériánk otthont ad helyi és nemzetközi művészek alkotásainak. Időszaki kiállításaink, tárlatvezetéseink és
            művészeti estjeink egyedülálló kulturális élményt nyújtanak.
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
