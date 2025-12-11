import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { NewsHero } from "@/components/news-hero"
import { NewsGrid } from "@/components/news-grid"

export const metadata = {
  title: "Hírek | Budafoki Zarándokház",
  description: "A Zarándokház legfrissebb hírei, eseményei és aktualitásai.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <NewsHero />
      <NewsGrid />
      <Footer />
      <BackToTop />
    </main>
  )
}
