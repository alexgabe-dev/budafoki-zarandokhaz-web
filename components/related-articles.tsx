"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getRelatedArticles } from "@/lib/news-data"

interface RelatedArticlesProps {
  currentSlug: string
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const relatedArticles = getRelatedArticles(currentSlug, 3)

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
    <section ref={sectionRef} className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            További olvasnivaló
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Kapcsolódó hírek</h2>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/hirek/${article.slug}`}
              className="block group"
              onMouseEnter={() => setHoveredId(article.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card
                className={cn(
                  "bg-background border-border overflow-hidden h-full transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700 ease-out",
                      hoveredId === article.id ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-3 left-3 bg-muted/90 text-foreground text-xs font-medium px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                    Elolvasom
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
