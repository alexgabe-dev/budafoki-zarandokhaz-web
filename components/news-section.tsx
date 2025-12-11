"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Advent a Zarándokházban",
    excerpt:
      "December minden hétvégéjén különleges adventi estek forralt borral és élő zenével. Csatlakozz hozzánk a várakozás idején!",
    date: "2025. december 1.",
    readTime: "2 perc",
    image: "/cozy-advent-candles-wine-bar-dark-atmosphere.jpg",
    category: "Esemény",
    featured: true,
  },
  {
    id: 2,
    title: "Új téli menünk érkezett",
    excerpt: "Meleg levesek, laktató főételek és bűnös desszertek – konyhánk téli kínálata megérkezett.",
    date: "2025. november 28.",
    readTime: "3 perc",
    image: "/hungarian-winter-food-soup-hearty-meal-dark-restau.jpg",
    category: "Gasztronómia",
  },
  {
    id: 3,
    title: "Szilveszteri Vigília",
    excerpt: "Az év utolsó éjszakáját töltsd nálunk! Élő zene, tombola és éjféli pezsgő várja a zarándokokat.",
    date: "2025. november 25.",
    readTime: "2 perc",
    image: "/new-years-eve-party-champagne-celebration-dark-ele.jpg",
    category: "Esemény",
  },
  {
    id: 4,
    title: "Pincetúra a borvidéken",
    excerpt: "Csatlakozz exkluzív pincetúránkhoz! Fedezd fel a Budafoki borvidék rejtett kincseit szakértő vezetéssel.",
    date: "2025. november 20.",
    readTime: "4 perc",
    image: "/wine-cellar-tour-barrels-candlelight-dark-moody.jpg",
    category: "Kirándulás",
  },
]

export function NewsSection() {
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

  const featuredNews = newsItems.find((item) => item.featured)
  const otherNews = newsItems.filter((item) => !item.featured)

  return (
    <section ref={sectionRef} id="hirek" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Hírek & Aktualitások
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Mi történik a Zarándokházban?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tartsd magad naprakészen eseményeinkkel, újdonságainkkal és a közösségünk híreivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured News */}
          {featuredNews && (
            <Card
              className={`bg-card border-border overflow-hidden group hover-lift hover-glow lg:row-span-2 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="relative aspect-[16/10] lg:aspect-[16/12] overflow-hidden">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  {featuredNews.category}
                </span>
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featuredNews.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredNews.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{featuredNews.excerpt}</p>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group/btn"
                >
                  Tovább olvasom
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Other News */}
          <div className="flex flex-col gap-4">
            {otherNews.map((item, index) => (
              <Card
                key={item.id}
                className={`bg-card border-border overflow-hidden group card-interactive ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-40 md:w-48 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-5 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="bg-muted px-2 py-0.5 rounded-full font-medium">{item.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:border-primary hover:bg-primary/5 group bg-transparent"
          >
            <Link href="#hirek">
              Összes hír megtekintése
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
