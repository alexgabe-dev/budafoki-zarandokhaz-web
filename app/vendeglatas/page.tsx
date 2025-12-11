import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { RestaurantSection } from "@/components/restaurant-section"
import { BarSection } from "@/components/bar-section"

export const metadata = {
  title: "Vendéglátás | Budafoki Zarándokház",
  description: "Étterem és bár, ahol a magyar ízek és a válogatott italok találkoznak.",
}

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <RestaurantSection />
      <BarSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
