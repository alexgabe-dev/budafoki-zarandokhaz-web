# Budafoki Zarándokház — Weboldal

Modern, elegáns Next.js alapú weboldal a Budafoki Zarándokház számára. A projekt fókusza a tartalom könnyű adminisztrálása (Hírek, Galéria — Kiállítások, Gyűjtemény — Műalkotások), a látványos tipográfia és a gyors betöltés.

## Fő funkciók
- Admin központ egy helyen: `/admin` (Hírek, Galéria, Gyűjtemény kezelése)
- Hírek: kiemelt cikk támogatás, részletes HTML tartalom
- Galéria: kiállítások részletes metaadatokkal (mikor/hol készült, technika, méret, kurátori megjegyzés)
- Gyűjtemény: 6 képes válogatás dinamikus szerkesztéssel
- Tipográfia: Tailwind Typography, olvasható listák, idézetek, HR, stb.
- Gyors és megbízható: Next.js 16 (Turbopack), dinamikus API-k Node runtime‑on

## Technológiai stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + `@tailwindcss/typography`
- ShadCN UI komponensek
- Lucide ikonok

## Indítás
- Követelmények: Node.js 18+
- Telepítés: `npm install`
- Fejlesztés: `npm run dev`
- Build: `npm run build`
- Futás: `npm run start`

## Környezeti változók
- Admin jelszó: `ADMIN_PASSWORD="választott-jelszó"`
  - Alapértelmezés: `secret` (`app/api/admin/login/route.ts:3`)

## Admin belépés és védelem
- Belépés: `/admin/login`
  - Sikeres belépés után átirányítás: `/admin` (`app/admin/login/page.tsx:27–30`)
- Cookie védelem: `admin=1`, 8 óra (`app/api/admin/login/route.ts:10–17`)
- Middleware védelem az admin alatt: (`proxy.ts:4–13`, `proxy.ts:19–21`)

## Admin központ
- Elérés: `/admin`
- Kártyák és darabszámok: (`app/admin/page.tsx:27–79`)
  - Hírek → `/admin/hirek`
  - Galéria → `/admin/galeria`
  - Gyűjtemény → `/admin/gyujtemeny`

## Tartalomkezelés

### Hírek
- Lista és szerkesztés: `/admin/hirek`
- API:
  - Listázás: `GET /api/news` (`app/api/news/route.ts:49–60`)
  - Létrehozás: `POST /api/news` (`app/api/news/route.ts:62–107`)
  - Módosítás: `PUT /api/news/[id]` (`app/api/news/[id]/route.ts:55–103`)
  - Törlés: `DELETE /api/news/[id]` (`app/api/news/[id]/route.ts:105–133`)
- Adatszerkezet és fájl: `lib/news-data.tsx` — generálás a szerkesztések alapján (`app/api/news/route.ts:30–39`)
- Kiemelt cikk logika: egyszerre csak 1 lehet kiemelt
  - Létrehozásnál: (`app/api/news/route.ts:95–102`)
  - Szerkesztésnél: (`app/api/news/[id]/route.ts:88–97`)
- HTML tartalom normalizálás:
  - `normalizeContent` eltávolítja a dokumentum keretet és visszatartja az inline style‑okat (`app/api/news/route.ts:108–123`)
- Tipográfia támogatás a tartalomban:
  - `@tailwindcss/typography` aktiválva (`app/globals.css:3`) — `<ul>`, `<li>`, `<blockquote>`, `<hr>`, stb. szépen jelennek meg

### Galéria — Kiállítások
- Lista és szerkesztés: `/admin/galeria` (`app/admin/galeria/page.tsx`)
- API:
  - Listázás: `GET /api/exhibitions` (`app/api/exhibitions/route.ts:50–61`)
  - Létrehozás: `POST /api/exhibitions` (`app/api/exhibitions/route.ts:63–93`)
  - Módosítás: `PUT /api/exhibitions/[id]` (`app/api/exhibitions/[id]/route.ts:42–66`)
  - Törlés: `DELETE /api/exhibitions/[id]` (`app/api/exhibitions/[id]/route.ts:68–91`)
- Adatfájl: `lib/gallery-data.tsx` — `allExhibitions`, slug, részletes metaadatok
- Publikus megjelenítés és részletek dialogban: (`components/gallery-exhibitions.tsx:55–60`, `components/gallery-exhibitions.tsx:145–181`)

### Gyűjtemény — Műalkotások
- Lista és szerkesztés: `/admin/gyujtemeny` (`app/admin/gyujtemeny/page.tsx`)
- API:
  - Listázás: `GET /api/artworks` (`app/api/artworks/route.ts:39–50`)
  - Létrehozás: `POST /api/artworks` (`app/api/artworks/route.ts:52–78`)
  - Módosítás: `PUT /api/artworks/[id]` (`app/api/artworks/[id]/route.ts:39–63`)
  - Törlés: `DELETE /api/artworks/[id]` (`app/api/artworks/[id]/route.ts:65–88`)
- Adatfájl: `lib/artworks-data.tsx` — `allArtworks`
- Publikus megjelenítés és lightbox: (`components/gallery-artworks.tsx:42–47`, `components/gallery-artworks.tsx:125–190`)

## Stílus és dizájn
- Színek és design tokenek: (`app/globals.css:7–42`, `.dark:44–77`)
- Tipográfia (prose): (`app/globals.css:3`) — olvasható HTML beágyazások
- Gombok, kártyák: ShadCN UI
- Ikonok: Lucide

## Fejlesztői megjegyzések
- API runtime: Node (file rendszer írás/olvasás) (`app/api/news/route.ts:6–7`, hasonló az Exhibitions/Artworks route-okban)
- Dinamikus válasz kényszerítése: `export const dynamic = "force-dynamic"` az API-kon
- Fájlból olvasás és import fallback: a tartalom mindig rendelkezésre áll serverless környezetben is
- Adatfájlok generálása: a módosítások a `lib/*.tsx` fájlokba íródnak (SSG kompatibilitás)

## Telepítés és publikálás
- Build: `npm run build` (Turbopack)
- A dinamikus API-k Node runtime‑ot igényelnek (Vercel/Node kompatibilis)
- Környezetben állítsd be az `ADMIN_PASSWORD` változót

## Gyakori problémák
- „Unauthorized” az adminban: a cookie lejárt, lépj be újra (`/admin/login`)
- HTML beillesztésnél hiányzó stílusok: használj semleges HTML‑t, a tipográfia megjelenítést a rendszer intézi (`app/globals.css:3`)
- Kiemelt cikk nem látszik a főoldalon: legyen legalább 1 kiemelt hír, a főoldali blokk ezt mindig előre veszi (`components/news-preview.tsx`)

## Projekt szerkezet (részletek)
- Oldalak: `app/*` (App Router)
- Admin: `app/admin/*`
- API-k: `app/api/*`
- Komponensek: `components/*`
- Adatok (generált/forrás): `lib/*`
- Stílus: `app/globals.css`

## Parancsok
- `npm run dev` — fejlesztői szerver
- `npm run build` — produkciós build
- `npm run start` — produkciós futtatás

## Licenc
- A kód és tartalom szerzői jogi védelem alatt áll. Tulajdonos: Gábor Sándor (vizitor.hu).
- Felhasználás kizárólag a tulajdonos előzetes írásbeli engedélyével.
- Részletek: lásd `LICENSE` (angol nyelvű, proprietáris licenc).
