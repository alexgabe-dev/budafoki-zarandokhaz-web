"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/galeria", label: "Galéria" },
  { href: "/hirek", label: "Hírek" },
  { href: "/kapcsolat", label: "Kapcsolat" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [brandAnimated, setBrandAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setBrandAnimated(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo/bfhz-logo-w.png"
              alt="Budafoki Zarándokház"
              width={200}
              height={56}
              sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 180px"
              className="h-6 sm:h-7 md:h-10 w-auto"
              priority
            />
            <span className="hidden sm:inline font-serif text-lg md:text-xl font-bold text-foreground relative">
              Zarándokház
              <span
                className={cn(
                  "absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary transition-transform duration-700 ease-out origin-left",
                  brandAnimated ? "scale-x-100" : "scale-x-0",
                )}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg",
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform duration-500 ease-out origin-left",
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href="/kapcsolat">Foglalás</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "h-6 w-6 absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
                )}
              />
              <X
                className={cn(
                  "h-6 w-6 absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-background transition-all duration-500 ease-out z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-4 text-lg font-medium border-b border-border/30 transition-all duration-300",
                pathname === item.href
                  ? "text-primary border-primary/50"
                  : "text-foreground hover:text-primary hover:border-primary/50",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
              )}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-6 transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: isOpen ? `${navItems.length * 50}ms` : "0ms" }}
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <Link href="/kapcsolat">Foglalás</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
