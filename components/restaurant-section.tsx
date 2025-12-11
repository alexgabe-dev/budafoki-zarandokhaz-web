"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Leaf, Flame, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const menuCategories = [
  { id: "zarandok", label: "Zarándok menü" },
  { id: "eloetelek", label: "Előételek" },
  { id: "foetelek", label: "Főételek" },
  { id: "desszertek", label: "Desszertek" },
]

const menuItems = {
  zarandok: [
    {
      name: "Napi zarándok menü",
      description: "Leves + főétel + desszert – a test és lélek egyensúlyáért",
      price: "3.500 Ft",
      special: true,
    },
    { name: "Böjti menü", description: "Halételből álló könnyű fogások a bűnbánóknak", price: "4.200 Ft" },
    {
      name: "Apátsági lakoma",
      description: "Háromfogásos menü borkísérővel – igazi ünnep",
      price: "8.900 Ft",
      special: true,
    },
  ],
  eloetelek: [
    {
      name: "Szent Antal kolbászai",
      description: "Grillezett házkolbász savanyúsággal és mustárral",
      price: "2.200 Ft",
    },
    { name: "Szerzetes sajttál", description: "Válogatott magyar sajtok mézzel és dióval", price: "2.800 Ft" },
    { name: "Templomi kenyér", description: "Házi kovászos kenyér füstölt szalonnával", price: "1.600 Ft" },
  ],
  foetelek: [
    { name: "Pálos pöri", description: "Sertéspörkölt házi galuskával", price: "3.900 Ft" },
    { name: "Halasi halászlé", description: "Hagyományos dunai halászlé", price: "4.500 Ft" },
    { name: "Bencés bélszín", description: "Grillezett marhaszelet zöldségekkel", price: "5.800 Ft" },
    { name: "Vegán vezeklés", description: "Sült zöldségek quinoával (v)", price: "3.200 Ft", vegan: true },
  ],
  desszertek: [
    { name: "Mennyei guba", description: "Aranygaluska vaníliasodóval", price: "1.800 Ft" },
    { name: "Bűnbeesett brownie", description: "Csokis brownie fagylalttal", price: "1.600 Ft" },
    { name: "Túrós tisztítótűz", description: "Házi túrógombóc", price: "1.400 Ft" },
  ],
}

export function RestaurantSection() {
  const [activeCategory, setActiveCategory] = useState("zarandok")
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
    <section ref={sectionRef} id="etterem" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Étterem & Kifőzde
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Napi menü, mint szentírás – mindig friss fejezetekkel
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Konyhánk a magyar hagyományokat és a modern ízeket ötvözi. Minden fogás szeretettel és egy csipet isteni
            inspirációval készül.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-foreground hover:bg-muted/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card
              key={item.name}
              className={cn(
                "bg-card border-border card-interactive",
                item.special && "border-secondary/30",
                isVisible ? "animate-slide-up" : "opacity-0",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif font-bold text-foreground">{item.name}</h4>
                      {item.special && <Star className="h-4 w-4 text-secondary fill-secondary" />}
                      {item.vegan && (
                        <span className="flex items-center gap-1 text-xs bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">
                          <Leaf className="h-3 w-3" />
                          Vegán
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-medium text-secondary whitespace-nowrap">{item.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: ChefHat, label: "Helyi alapanyagok" },
            { icon: Flame, label: "Naponta frissen" },
            { icon: Leaf, label: "Vegán opciók" },
            { icon: Star, label: "Házias ízek" },
          ].map((feature) => (
            <div key={feature.label} className="text-center p-4 group">
              <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <p className="font-medium text-foreground text-sm">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href="#kapcsolat">Asztalt foglalok</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
