import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { AccommodationSection } from "@/components/accommodation-section"

export const metadata = {
  title: "Szállás | Budafoki Zarándokház",
  description: "Kényelmes szobák a fáradt zarándokoknak. Fedezd fel szálláskínálatunkat.",
}

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <AccommodationSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
