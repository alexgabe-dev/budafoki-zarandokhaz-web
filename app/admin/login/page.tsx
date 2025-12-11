"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      toast({ title: "Sikeres belépés" })
      router.replace("/admin")
    } else {
      const msg = await res.text()
      setError(msg || "Hibás jelszó")
      toast({ title: "Hiba", description: msg || "Hibás jelszó", variant: "destructive" })
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin belépés</CardTitle>
          <CardDescription>Kérlek add meg az admin jelszót a belépéshez.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Jelszó</Label>
              <div className="relative">
                <Input id="password" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1" onClick={() => setShow((s) => !s)}>
                  {show ? "Elrejt" : "Mutat"}
                </Button>
              </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="bg-primary text-primary-foreground w-full" disabled={loading}>
              {loading ? "Belépés..." : "Belépés"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">Belépés védve cookie-val • Session: 8 óra</CardFooter>
      </Card>
    </div>
  )
}
