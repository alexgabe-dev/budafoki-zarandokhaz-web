"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image: string
  category: string
  featured?: boolean
}

export function NewsPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [newsItems, setNewsItems] = useState<Article[]>([])

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

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data: Article[]) => setNewsItems(data))
      .catch(() => {})
  }, [])
  const featuredNews = newsItems.find((item) => item.featured)
  const otherNews = newsItems.filter((item) => !item.featured).slice(0, 3)

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Hírek & Aktualitások
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Mi történik a Zarándokházban?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tartsd magad naprakészen eseményeinkkel és újdonságainkkal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
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
                  "bg-background border-border overflow-hidden h-full transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
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
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Tovább olvasom
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Other News */}
          <div className="flex flex-col gap-4">
            {otherNews.map((item, index) => (
              <Link
                key={item.id}
                href={`/hirek/${item.slug}`}
                className="block group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card
                  className={cn(
                    "bg-background border-border overflow-hidden transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-lg",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
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

        {/* View All Button */}
        <div
          className={cn(
            "text-center mt-10 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:border-primary hover:bg-primary/5 group bg-transparent transition-all duration-300"
          >
            <Link href="/hirek">
              Összes hír megtekintése
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
