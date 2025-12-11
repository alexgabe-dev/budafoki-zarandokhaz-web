"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wine, Beer, Flame, GlassWater, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const drinkCategories = [
  { id: "miseborok", label: "Miseborok", icon: Wine },
  { id: "sorok", label: "Apátsági sörök", icon: Beer },
  { id: "palinkas", label: "Pálinkák", icon: Flame },
  { id: "koktelok", label: "Eretnek koktélok", icon: Sparkles },
  { id: "alkoholmentes", label: "Bűnbocsánatok", icon: GlassWater },
]

const drinks = {
  miseborok: [
    { name: "Szent György Vörös", description: "Villányi Franc – mély, bársonyos, isteni", price: "1.200 Ft / pohár" },
    { name: "Fehér Áldás", description: "Tokaji Furmint – friss, elegáns, megváltó", price: "1.400 Ft / pohár" },
    {
      name: "Rozé Revelatio",
      description: "Siklósi Rozé – könnyed, gyümölcsös, nyári mise",
      price: "1.100 Ft / pohár",
    },
    { name: "Apátsági Cuvée", description: "Házasított vörös, hosszú érlelésű", price: "1.800 Ft / pohár" },
  ],
  sorok: [
    { name: "Trappista Tripel", description: "Belga stílusú, fűszeres, erős", price: "1.600 Ft / 0.33l" },
    { name: "Szent Ágoston Barna", description: "Karamellás, mogyorós jegyek", price: "1.200 Ft / 0.5l" },
    { name: "Pannonhalmi IPA", description: "Magyar komlóval, citrusos", price: "1.400 Ft / 0.5l" },
    { name: "Zarándok Weizen", description: "Bajor búza, banános, szegfűszeges", price: "1.100 Ft / 0.5l" },
  ],
  palinkas: [
    { name: "Ópálinka Ágyas", description: "12 éves érlelésű, tölgyfahordós", price: "2.400 Ft / 4cl" },
    { name: "Bűnös Barack", description: "Kézműves barackpálinka", price: "1.800 Ft / 4cl" },
    { name: "Mennyei Mézes", description: "Akácmézzel ízesített", price: "1.600 Ft / 4cl" },
    { name: "Tüzes Szilva", description: "Hagyományos szilvórium", price: "1.400 Ft / 4cl" },
  ],
  koktelok: [
    { name: "Szentlélek Spritz", description: "Aperol, prosecco, szentelt víz (szóda)", price: "2.800 Ft" },
    { name: "Judás Csókja", description: "Tequila, vérnarancs, chili – megcsalóan finom", price: "3.200 Ft" },
    { name: "Angyali Martini", description: "Gin, vermouth, glóriás olívabogyó", price: "3.000 Ft" },
    { name: "Utolsó Vacsora", description: "Rum, kávélikőr, tejszín – lezárásként tökéletes", price: "3.400 Ft" },
  ],
  alkoholmentes: [
    { name: "Tiszta Lélek Limonádé", description: "Házi citromos-mentás frissítő", price: "900 Ft" },
    { name: "Zarándok Smoothie", description: "Erdei gyümölcs, banán, joghurt", price: "1.200 Ft" },
    { name: "Meditációs Matcha", description: "Japán zöld tea habosítva", price: "1.400 Ft" },
    { name: "Virgin Mary", description: "Paradicsomlé, fűszerek, szűzen", price: "1.100 Ft" },
  ],
}

export function BarSection() {
  const [activeCategory, setActiveCategory] = useState("miseborok")
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

  const ActiveIcon = drinkCategories.find((c) => c.id === activeCategory)?.icon || Wine

  return (
    <section ref={sectionRef} id="bar" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">Bár & Itallap</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Felszentelt italok és eretnek koktélok
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bárunk válogatott italai mindegyike egy kis történetet mesél – egyesek a mennyországba vezetnek, mások...
            nos, az már rajtad múlik.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          {drinkCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-500",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-foreground hover:bg-muted/80",
              )}
            >
              <category.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Active Category Title */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <ActiveIcon className="h-6 w-6 text-primary" />
          <h3 className="font-serif text-2xl font-bold text-foreground">
            {drinkCategories.find((c) => c.id === activeCategory)?.label}
          </h3>
        </div>

        {/* Drinks Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {drinks[activeCategory as keyof typeof drinks].map((drink, index) => (
            <Card
              key={drink.name}
              className={cn(
                "bg-card border-border card-interactive group",
                isVisible ? "animate-scale-in" : "opacity-0",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {drink.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{drink.description}</p>
                  </div>
                  <span className="font-medium text-secondary whitespace-nowrap text-sm">{drink.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bar Note */}
        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-muted-foreground text-sm italic">
            „Az Úr adta a szőlőt, mi csak borrá változtatjuk." – Ismeretlen zarándok
          </p>
        </div>
      </div>
    </section>
  )
}
