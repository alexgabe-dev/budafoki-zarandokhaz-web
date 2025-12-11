"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { cn } from "@/lib/utils"
import { allNews } from "@/lib/news-data"

const categories = ["Mind", "Esemény", "Gasztronómia", "Kultúra", "Akció", "Kirándulás", "Tanfolyam", "Üzleti"]

export function NewsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Mind")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

  const filteredNews = activeCategory === "Mind" ? allNews : allNews.filter((news) => news.category === activeCategory)

  const featuredNews = filteredNews.find((item) => item.featured)
  const regularNews = filteredNews.filter((item) => !item.featured)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured + Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Featured News */}
          {featuredNews && (
            <Link
              href={`/hirek/${featuredNews.slug}`}
              className="block group lg:row-span-2"
              onMouseEnter={() => setHoveredId(featuredNews.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card
                className={cn(
                  "bg-card border-border overflow-hidden h-full transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
              >
                <div className="relative aspect-[16/10] lg:aspect-[16/12] overflow-hidden">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700 ease-out",
                      hoveredId === featuredNews.id ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    Kiemelt
                  </span>
                </div>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5 bg-muted px-2 py-0.5 rounded-full">
                      <Tag className="h-3 w-3" />
                      {featuredNews.category}
                    </span>
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
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Tovább olvasom
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Regular News Grid */}
          <div className="flex flex-col gap-4">
            {regularNews.slice(0, 3).map((item, index) => (
              <Link
                key={item.id}
                href={`/hirek/${item.slug}`}
                className="block group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card
                  className={cn(
                    "bg-card border-border overflow-hidden transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-lg",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-40 md:w-48 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className={cn(
                          "object-cover transition-all duration-500 ease-out",
                          hoveredId === item.id ? "scale-110" : "scale-100",
                        )}
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
              </Link>
            ))}
          </div>
        </div>

        {/* More News */}
        {regularNews.length > 3 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regularNews.slice(3).map((item, index) => (
              <Link
                key={item.id}
                href={`/hirek/${item.slug}`}
                className="block group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card
                  className={cn(
                    "bg-card border-border overflow-hidden h-full transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-lg",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className={cn(
                        "object-cover transition-all duration-500 ease-out",
                        hoveredId === item.id ? "scale-110" : "scale-100",
                      )}
                    />
                    <span className="absolute top-3 left-3 bg-muted/90 text-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <span className="text-xs text-muted-foreground mb-2 block">{item.date}</span>
                    <h3 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
