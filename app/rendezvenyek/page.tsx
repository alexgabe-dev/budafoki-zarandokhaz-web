import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { EventsSection } from "@/components/events-section"

export const metadata = {
  title: "Rendezvények | Budafoki Zarándokház",
  description: "Céges események, privát ünnepségek és tematikus esték egyedi helyszíne.",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <EventsSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
