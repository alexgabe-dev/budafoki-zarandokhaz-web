"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bed, Utensils, Sparkles, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Bed,
    title: "Szállás",
    description: "Kényelmes szobák a fáradt zarándokoknak, ahol újjászülethetsz egy jó éjszaka után.",
    image: "/luxury-dark-hotel-room-elegant-interior-candles.jpg",
    href: "/szallas",
    color: "from-primary/20",
  },
  {
    icon: Utensils,
    title: "Vendéglátás",
    description: "Étterem és bár, ahol a magyar ízek és a válogatott italok találkoznak.",
    image: "/elegant-restaurant-bar-dark-moody-wine-bottles-can.jpg",
    href: "/vendeglatas",
    color: "from-secondary/20",
  },
  {
    icon: Sparkles,
    title: "Wellness",
    description: "Szauna, jacuzzi és pipatórium – a test és lélek megtisztításának szentélye.",
    image: "/spa-wellness-sauna-dark-luxury-candles-steam.jpg",
    href: "/wellness",
    color: "from-primary/20",
  },
  {
    icon: PartyPopper,
    title: "Rendezvények",
    description: "Céges események, privát ünnepségek és tematikus esték egyedi helyszíne.",
    image: "/event-venue-party-dark-elegant-string-lights.jpg",
    href: "/rendezvenyek",
    color: "from-secondary/20",
  },
]

export function ServicesPreview() {
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
      { threshold: 0.1, rootMargin: "50px" },
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
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Szolgáltatásaink
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Mit kínálunk a zarándokoknak?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fedezd fel, mit tartogat számodra a Zarándokház – legyen szó pihenésről, gasztronómiáról vagy ünneplésről.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={cn(
                "group block transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="bg-card border-border overflow-hidden h-full transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700 ease-out",
                      hoveredIndex === index ? "scale-110" : "scale-100",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t to-transparent transition-opacity duration-500",
                      service.color,
                      "from-card via-card/60",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute top-4 left-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm transition-all duration-500 ease-out",
                      hoveredIndex === index ? "scale-110 bg-primary text-primary-foreground" : "",
                    )}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                    Részletek
                    <ArrowRight
                      className={cn(
                        "ml-1 h-4 w-4 transition-all duration-300",
                        hoveredIndex === index ? "translate-x-1" : "",
                      )}
                    />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
