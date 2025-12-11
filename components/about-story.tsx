"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AboutStory() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={cn(
              "order-2 lg:order-1 transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Hogyan kezdődött minden?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A Budafoki Zarándokház 2019-ben nyitotta meg kapuit, egyetlen egyszerű ötlettel:
                <span className="text-foreground font-medium">
                  {" "}
                  létrehozni egy helyet, ahol az emberek megállhatnak, lélegezhetnek, és újra rátalálhatnak önmagukra
                </span>
                .
              </p>
              <p>
                Alapítóink, akik maguk is szenvedélyes borimádók és a közösségépítés hívei, egy régi pincét alakítottak
                át menedékké. A falak között ma is érezhető az a különleges hangulat, amit az évszázados hagyományok és
                a modern vendégszeretet találkozása teremt.
              </p>
              <p>
                Nevünk nem véletlen: a zarándoklat évezredes hagyománya inspirált minket. Úgy gondoljuk, hogy
                mindannyian zarándokok vagyunk az élet útján, és néha szükségünk van egy biztos pontra, ahol
                megpihenhetünk, erőt gyűjthetünk, és jó társaságban élvezhetjük az út adta örömöket.
              </p>
              <p className="text-foreground font-medium italic border-l-4 border-primary pl-4">
                „Nem csak egy bár vagyunk, nem csak egy szálláshely. Mi egy közösség vagyunk, amely minden nap új
                zarándokokat fogad szeretettel."
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div
            className={cn(
              "order-1 lg:order-2 grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src="/wine-cellar-barrels-dark-moody-candlelight.jpg" alt="Borospince" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/wine-glasses-cheers-dark-elegant-bar.jpg" alt="Koccintás" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/candles-warm-light-dark-cozy-atmosphere.jpg" alt="Gyertyafény" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src="/cozy-bar-interior-people-talking-dark-warm.jpg" alt="Vendégek" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
