"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Wifi, Coffee, Users, Sparkles } from "lucide-react"

const rooms = [
  {
    name: "Novícius cella",
    description: "Egyágyas szoba a szerény zarándokoknak, akik csupán pihenőre vágynak hosszú útjuk után.",
    price: "Napi búcsúcédulától: 15.000 Ft",
    image: "/minimalist-single-hotel-room-dark-elegant-interior.jpg",
    features: [
      { icon: Bed, label: "1 egyszemélyes ágy" },
      { icon: Bath, label: "Privát fürdő" },
      { icon: Wifi, label: "Ingyenes WiFi" },
    ],
    capacity: "1 fő",
  },
  {
    name: "Szerzetesi lakosztály",
    description: "Franciaágyas szoba pároknak, akik a testi örömöket sem vetik meg a lelki béke mellett.",
    price: "Páros áldozattól: 25.000 Ft",
    image: "/romantic-double-hotel-room-dark-luxury-interior.jpg",
    features: [
      { icon: Bed, label: "1 franciaágy" },
      { icon: Bath, label: "Fürdőkád" },
      { icon: Coffee, label: "Reggeli" },
      { icon: Wifi, label: "Ingyenes WiFi" },
    ],
    capacity: "2 fő",
    featured: true,
  },
  {
    name: "Zarándok dormitórium",
    description: "Családi szoba azoknak, akik közösségben keresik a megnyugvást és a jó bort.",
    price: "Közösségi adománytól: 35.000 Ft",
    image: "/family-hotel-suite-dark-elegant-multiple-beds.jpg",
    features: [
      { icon: Bed, label: "1 franciaágy + 2 egyszemélyes" },
      { icon: Bath, label: "Tágas fürdő" },
      { icon: Coffee, label: "Reggeli" },
      { icon: Sparkles, label: "Wellness belépő" },
    ],
    capacity: "4 fő",
  },
]

export function AccommodationSection() {
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
    <section ref={sectionRef} id="szallas" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Szállás</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Bűnbánó zarándokok pihenőhelye
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Térj be hozzánk egy éjszakára, és ébredj újjászületve – vagy legalábbis kipihenten a tegnapi misebor után.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rooms.map((room, index) => (
            <Card
              key={room.name}
              className={`bg-background border-border overflow-hidden group hover-lift hover-glow transition-all duration-500 ${
                room.featured ? "ring-2 ring-primary/30" : ""
              } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {room.featured && (
                <div className="bg-primary text-primary-foreground text-xs text-center py-1.5 font-medium">
                  Legnépszerűbb
                </div>
              )}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{room.name}</h3>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {room.capacity}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span
                      key={feature.label}
                      className="flex items-center gap-1.5 text-xs text-foreground bg-muted px-2.5 py-1 rounded-full"
                    >
                      <feature.icon className="h-3 w-3 text-primary" />
                      {feature.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-secondary font-medium text-sm">{room.price}</span>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300"
                  >
                    <Link href="#kapcsolat">Foglalás</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`bg-muted/50 rounded-xl p-6 md:p-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Minden szállásunk tartalmaz: tiszta ágyneműt, törölközőket, mini bárunk válogatott szenteltvizét, és
            természetesen a reggeli misét – azaz egy kiadós reggelit.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:scale-105"
          >
            <Link href="#kapcsolat">Szobát foglalok</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
