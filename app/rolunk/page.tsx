import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"

export const metadata = {
  title: "Rólunk | Budafoki Zarándokház",
  description: "Ismerd meg a Budafoki Zarándokház történetét, csapatát és értékeinket.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Footer />
      <BackToTop />
    </main>
  )
}
