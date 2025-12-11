"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type Count = { news: number; exhibitions: number; artworks: number }

export default function AdminHomePage() {
  const [count, setCount] = useState<Count>({ news: 0, exhibitions: 0, artworks: 0 })

  useEffect(() => {
    Promise.all([
      fetch("/api/news").then((r) => r.json()),
      fetch("/api/exhibitions").then((r) => r.json()),
      fetch("/api/artworks").then((r) => r.json()),
    ])
      .then(([news, exhibitions, artworks]) => {
        setCount({ news: news.length || 0, exhibitions: exhibitions.length || 0, artworks: artworks.length || 0 })
      })
      .catch(() => {})
  }, [])

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-6">Admin központ</h1>
      <p className="text-muted-foreground mb-8">Válassz, mit szeretnél módosítani.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hírek</CardTitle>
            <CardDescription>Bejegyzések kezelése ({count.news})</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Új hír létrehozása, szerkesztés, törlés, kiemelés.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-primary text-primary-foreground w-full">
              <Link href="/admin/hirek">Megnyitás</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Galéria</CardTitle>
            <CardDescription>Kiállítások kezelése ({count.exhibitions})</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Kiállítások hozzáadása, szerkesztése, törlése.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-primary text-primary-foreground w-full">
              <Link href="/admin/galeria">Megnyitás</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gyűjtemény</CardTitle>
            <CardDescription>Műalkotások kezelése ({count.artworks})</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Képek cseréje, új tételek hozzáadása, törlés.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-primary text-primary-foreground w-full">
              <Link href="/admin/gyujtemeny">Megnyitás</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
