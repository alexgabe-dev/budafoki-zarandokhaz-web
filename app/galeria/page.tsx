import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryExhibitions } from "@/components/gallery-exhibitions"
import { GalleryArtworks } from "@/components/gallery-artworks"

export const metadata = {
  title: "Galéria | Budafoki Zarándokház",
  description: "Fedezd fel galériánkat - helyi művészek festményei, időszaki kiállítások és kulturális programok.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <GalleryHero />
      <GalleryExhibitions />
      <GalleryArtworks />
      <Footer />
      <BackToTop />
    </main>
  )
}
