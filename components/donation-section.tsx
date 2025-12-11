"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Wine, Utensils, Music, Gift, Sparkles } from "lucide-react"

const donationTiers = [
  {
    name: "Zarándok",
    amount: "5.000 Ft",
    description: "Egy pohár misebor árával támogatod a közösségünket.",
    icon: Wine,
    perks: ["Köszönőlevél", "Név a támogatók falán"],
  },
  {
    name: "Szerzetes",
    amount: "15.000 Ft",
    description: "Egy vacsorához járulsz hozzá a rászorulók számára.",
    icon: Utensils,
    perks: ["Köszönőlevél", "Név a támogatók falán", "10% kedvezmény első látogatásra"],
    popular: true,
  },
  {
    name: "Apát",
    amount: "50.000 Ft",
    description: "Egy kisebb rendezvény megvalósítását segíted.",
    icon: Music,
    perks: ["Köszönőlevél", "Név a támogatók falán", "VIP belépő egy eseményre", "Exkluzív pincetúra"],
  },
]

const impactStats = [
  { value: "1,234", label: "Támogató", icon: Heart },
  { value: "89", label: "Megvalósult program", icon: Sparkles },
  { value: "12M+ Ft", label: "Összegyűlt adomány", icon: Gift },
]

export function DonationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
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
    <section ref={sectionRef} id="adomany" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block font-medium">
            Támogatás & Adomány
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Légy te is a közösség oszlopa
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Adományoddal segíted fenntartani a Zarándokházat, és hozzájárulsz kulturális programjaink, közösségi
            eseményeink megvalósításához.
          </p>
        </div>

        {/* Impact Stats */}
        <div
          className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          {impactStats.map((stat, index) => (
            <div key={stat.label} className="text-center p-4" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {donationTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`bg-background border-border relative overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              } ${selectedTier === tier.name ? "ring-2 ring-primary border-primary" : ""} ${
                tier.popular ? "md:-translate-y-4" : ""
              }`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              onClick={() => setSelectedTier(tier.name)}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs text-center py-1.5 font-medium">
                  Legnépszerűbb
                </div>
              )}
              <CardContent className={`p-6 ${tier.popular ? "pt-10" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <tier.icon className="h-10 w-10 text-primary" />
                  <span className="font-serif text-2xl font-bold text-secondary">{tier.amount}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-foreground">
                      <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transition-all duration-300 ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Támogatom
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Amount */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-muted-foreground mb-4">Egyedi összeggel is támogathatsz minket</p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Egyéni adomány
          </Button>
        </div>

        {/* Trust Note */}
        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-muted-foreground text-sm italic max-w-xl mx-auto">
            „Minden adomány számít. Köszönjük, hogy velünk tartasz ezen az úton, és segíted, hogy a Zarándokház továbbra
            is nyitott kapukkal várja a zarándokokat."
          </p>
        </div>
      </div>
    </section>
  )
}
