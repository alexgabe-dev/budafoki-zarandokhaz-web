import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ServicesHero } from "@/components/services-hero"
import { AccommodationSection } from "@/components/accommodation-section"
import { RestaurantSection } from "@/components/restaurant-section"
import { BarSection } from "@/components/bar-section"
import { WellnessSection } from "@/components/wellness-section"
import { EventsSection } from "@/components/events-section"

export const metadata = {
  title: "Szolgáltatások | Budafoki Zarándokház",
  description: "Szállás, étterem, bár, wellness és rendezvények – minden egy helyen a Budafoki Zarándokházban.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <ServicesHero />
      <AccommodationSection />
      <RestaurantSection />
      <BarSection />
      <WellnessSection />
      <EventsSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
