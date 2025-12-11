import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Wind, Sparkles } from "lucide-react"

const services = [
  {
    icon: Flame,
    name: "Pipatórium",
    description: "Exkluzív dohányzószoba válogatott szivarokkal és pipákkal, bőrfotelekkel és whisky-szelektációval.",
    image: "/luxury-cigar-lounge-leather-chairs-dark-atmosphere.jpg",
  },
  {
    icon: Droplets,
    name: "Finn szauna",
    description: "Hagyományos finn szauna, ahol a gőz megtisztítja a testet a tegnap esti bűnöktől.",
    image: "/finnish-sauna-wooden-interior-warm-lighting-steam.jpg",
  },
  {
    icon: Wind,
    name: "Jacuzzi",
    description: "Meleg pezsgőfürdő, ahol a buborékok elmossák a világi gondokat.",
    image: "/luxury-jacuzzi-hot-tub-dark-spa-atmosphere.jpg",
  },
  {
    icon: Sparkles,
    name: "Masszázs",
    description: "Gyógyító kezek szolgálatában – relaxációs és gyógymasszázsok igény szerint.",
    image: "/spa-massage-room-candles-relaxing-dark-elegant.jpg",
  },
]

const packages = [
  { name: "Bűnbocsánat csomag", duration: "2 óra", price: "8.000 Ft", includes: "Szauna + jacuzzi + üdítő" },
  {
    name: "Megtisztulás csomag",
    duration: "3 óra",
    price: "15.000 Ft",
    includes: "Teljes wellness + 30 perces masszázs",
  },
  {
    name: "Apátsági kényeztetés",
    duration: "4 óra",
    price: "25.000 Ft",
    includes: "Wellness + masszázs + pipatórium + whisky",
  },
]

export function WellnessSection() {
  return (
    <section id="wellness" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block">Pipatórium & Wellness</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lélek- és májtisztító szertartások
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Engedd el a feszültséget és töltődj fel – testben és lélekben. Wellness részlegünk az igazi menedék a fáradt
            zarándokok számára.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card
              key={service.name}
              className="bg-background border-border overflow-hidden group hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-primary" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Packages */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Wellness csomagjaink</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className="bg-muted/30 border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-5 text-center">
                  <h4 className="font-serif font-bold text-foreground mb-1">{pkg.name}</h4>
                  <p className="text-secondary font-bold text-xl mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground mb-1">{pkg.duration}</p>
                  <p className="text-xs text-muted-foreground">{pkg.includes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link href="#kapcsolat">Időpontot foglalok</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
