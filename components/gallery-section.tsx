"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "/dark-moody-bar-interior-with-candles-and-wine-bott.jpg", alt: "A Zarándokház bárpultja", span: "col-span-2 row-span-2" },
  { src: "/elegant-wine-cellar-with-barrels-and-dim-lighting.jpg", alt: "Borospince", span: "col-span-1" },
  { src: "/cozy-restaurant-interior-with-wooden-tables-candle.jpg", alt: "Étterem belső tere", span: "col-span-1" },
  { src: "/luxury-hotel-room-dark-elegant-interior.jpg", alt: "Zarándokszoba", span: "col-span-1 row-span-2" },
  { src: "/spa-wellness-area-with-sauna-and-warm-lighting.jpg", alt: "Wellness részleg", span: "col-span-1" },
  { src: "/event-hall-decorated-for-party-with-string-lights.jpg", alt: "Rendezvényterem", span: "col-span-1" },
  { src: "/pipe-smoking-room-with-leather-chairs-and-warm-atm.jpg", alt: "Pipatórium", span: "col-span-2" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block">Galéria</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Képek a szentélyből
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fedezd fel tereinket, ahol a hagyomány és a modern elegancia találkozik.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn("relative overflow-hidden rounded-lg aspect-square group cursor-pointer", image.span)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium text-sm bg-background/80 px-3 py-1 rounded-full">
                  {image.alt}
                </span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 border-2 border-secondary/30 rounded-lg" />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Bezárás"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full aspect-video">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground font-serif text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
