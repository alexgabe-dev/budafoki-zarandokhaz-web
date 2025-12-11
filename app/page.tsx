import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsPreview } from "@/components/news-preview"
import { AboutPreview } from "@/components/about-preview"
import { ServicesPreview } from "@/components/services-preview"
import { Footer } from "@/components/footer"
import { MobileBookingBar } from "@/components/mobile-booking-bar"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <NewsPreview />
      <Footer />
      <MobileBookingBar />
      <BackToTop />
    </main>
  )
}
