"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, BedDouble } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 transition-all duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <div className="flex gap-3">
        <Button
          asChild
          variant="outline"
          className="flex-1 border-primary/50 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Link href="/kapcsolat" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Asztal
          </Link>
        </Button>
        <Button
          asChild
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
        >
          <Link href="/kapcsolat" className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            Szoba
          </Link>
        </Button>
      </div>
    </div>
  )
}
