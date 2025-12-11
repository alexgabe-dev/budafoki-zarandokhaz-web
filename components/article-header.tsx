"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { NewsArticle } from "@/lib/news-data"

interface ArticleHeaderProps {
  article: NewsArticle
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          priority
          className={cn("object-cover transition-all duration-1000 ease-out", isVisible ? "scale-100" : "scale-110")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-4 md:left-8 z-10">
          <Button
            asChild
            variant="outline"
            size="sm"
            className={cn(
              "bg-background/80 backdrop-blur-sm border-border hover:bg-background transition-all duration-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
            )}
          >
            <Link href="/hirek">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Vissza a hírekhez
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Info Overlay */}
      <div className="container mx-auto px-4 -mt-32 md:-mt-40 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Badges */}
          <div
            className={cn(
              "flex items-center gap-2 mb-4 transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
              {article.category}
            </span>
            {article.featured && (
              <span className="inline-block bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1.5 rounded-full">
                Kiemelt
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {article.title}
          </h1>

          {/* Meta Info */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {/* No author, only date and read time */}

            {/* Date */}
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>

            {/* Read Time */}
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime} olvasás
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
