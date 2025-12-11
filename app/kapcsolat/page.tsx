import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ContactSection } from "@/components/contact-section"
import { DonationSection } from "@/components/donation-section"

export const metadata = {
  title: "Kapcsolat & Foglalás | Budafoki Zarándokház",
  description: "Foglalj asztalt vagy szobát, és válj te is a közösségünk tagjává.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <ContactSection />
      <DonationSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
