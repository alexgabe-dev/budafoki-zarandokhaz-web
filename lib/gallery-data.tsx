export interface ExhibitionDetail {
  paintedWhen: string
  paintedWhere: string
  technique: string
  dimensions: string
  curatorNote: string
}

export interface Exhibition {
  id: number
  slug: string
  title: string
  artist: string
  description: string
  image: string
  dateRange: string
  location: string
  status: "current" | "upcoming"
  details?: ExhibitionDetail
}

export const allExhibitions: Exhibition[] = [
  {
    id: 1,
    slug: "fenyek-es-arnyekok",
    title: "Fények és Árnyékok",
    artist: "Kovács Anna",
    description:
      "Kortárs olajfestmények a fény és sötétség örök párbeszédéről. A kiállítás feltárja a kontrasztok erejét a modern művészetben.",
    image: "/modern-oil-painting-light-shadow-abstract-art-gall.jpg",
    dateRange: "2025. december 1. – 2025. január 15.",
    location: "Főgaléria",
    status: "current",
    details: {
      paintedWhen: "2024–2025",
      paintedWhere: "Budapest, Óbuda – műterem és szabadtéri fényvizsgálatok",
      technique: "Olaj vásznon, több rétegű glazúr, chiaroscuro tanulmányok",
      dimensions: "60×80 cm – 120×160 cm (vegyes méretek)",
      curatorNote:
        "A sorozat a fény és sötét dialógusát vizsgálja. A képek helyszíni fotó- és skiccanyagból, valamint műtermi kísérletekből születtek.",
    },
  },
  {
    id: 2,
    slug: "borhegyek",
    title: "Borhegyek",
    artist: "Molnár Péter",
    description:
      "Vízfestmények a magyar borvidékekről. A művész bejárta az ország leghíresebb szőlőhegyeit, hogy megörökítse azok szépségét.",
    image: "/watercolor-painting-hungarian-vineyard-hills-lands.jpg",
    dateRange: "2025. január 20. – február 28.",
    location: "Kamarakiállító",
    status: "upcoming",
    details: {
      paintedWhen: "2023–2025",
      paintedWhere: "Tokaj, Villány, Badacsony – plein air sorozatok",
      technique: "Akvarell hidegen sajtolt papíron, nedves-a-nedves technika",
      dimensions: "30×40 cm – 50×70 cm",
      curatorNote:
        "A tájak hangulatát gyors jegyzetek és több rétegű akvarell felületek teremtik meg. A sorozat a borvidékek karakterét emeli ki.",
    },
  },
  {
    id: 3,
    slug: "szentek-es-bunosok",
    title: "Szentek és Bűnösök",
    artist: "Vegyes művészek",
    description:
      "Csoportos kiállítás a hit és kételkedés témájában. Festmények, szobrok és installációk fiatal magyar alkotóktól.",
    image: "/religious-art-modern-interpretation-saints-sinners.jpg",
    dateRange: "2025. március 1. – április 30.",
    location: "Főgaléria",
    status: "upcoming",
    details: {
      paintedWhen: "2022–2025",
      paintedWhere: "Budapest, Pécs, Debrecen – kollektív műhelyek és rezidenciák",
      technique: "Vegyes technikák: olaj, akril, gipsz, fa, multimédia installáció",
      dimensions: "20×30 cm – 200×300 cm",
      curatorNote:
        "A kiállítás a személyes hit és társadalmi kérdések metszéspontjaira reflektál. A művek különböző városi és műhelyszituációkban készültek.",
    },
  },
]

export function getExhibition(slug: string): Exhibition | undefined {
  return allExhibitions.find((e) => e.slug === slug)
}
