import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { WellnessSection } from "@/components/wellness-section"

export const metadata = {
  title: "Wellness & Pipatórium | Budafoki Zarándokház",
  description: "Szauna, jacuzzi és exkluzív pipatórium – a test és lélek megtisztításának szentélye.",
}

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <WellnessSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
