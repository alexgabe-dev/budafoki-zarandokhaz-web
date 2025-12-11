"use client"

import { useEffect, useState, useRef } from "react"
import { Facebook, Twitter, Linkedin, Link2, Check, Mail, Calendar, Wine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { NewsArticle } from "@/lib/news-data"

interface ArticleContentProps {
  article: NewsArticle
}

export function ArticleContent({ article }: ArticleContentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${article.title} - Budafoki Zarándokház`

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareToLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`Olvasd el ezt a cikket: ${shareUrl}`)}`
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link")
    }
  }

  return (
    <section ref={contentRef} className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-serif italic border-l-4 border-primary pl-6">
            {article.excerpt}
          </p>

          {/* Article Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:bg-card prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className={cn("mt-16 transition-all duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Megosztás</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={shareToFacebook}
                className="group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1"
                aria-label="Megosztás Facebookon"
              >
                <Facebook className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </button>

              <button
                onClick={shareToTwitter}
                className="group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1"
                aria-label="Megosztás Twitteren"
              >
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </button>

              <button
                onClick={shareToLinkedin}
                className="group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1"
                aria-label="Megosztás LinkedInen"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </button>

              <button
                onClick={shareViaEmail}
                className="group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1"
                aria-label="Megosztás emailben"
              >
                <Mail className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </button>

              <button
                onClick={copyLink}
                className={cn(
                  "group relative w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1",
                  copied
                    ? "bg-green-600/20 border-green-500/50"
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-primary/30",
                )}
                aria-label="Link másolása"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-500 animate-in zoom-in duration-200" />
                ) : (
                  <Link2 className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                )}
              </button>
            </div>
          </div>

          <div
            className={cn(
              "mt-16 relative overflow-hidden rounded-2xl transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Wine className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Látogass el hozzánk!</h3>

              <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                Tapasztald meg személyesen a Zarándokház egyedi hangulatát. Foglalj szállást, vagy gyere el egy pohár
                miseborra a barátaiddal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/kapcsolat">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Calendar className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    Foglalás
                  </Button>
                </Link>

                <Link href="/szolgaltatasok">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 px-8 transition-all duration-300 hover:scale-105"
                  >
                    Szolgáltatásaink
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
