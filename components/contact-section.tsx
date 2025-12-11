"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  { icon: MapPin, label: "Cím", value: "1222 Budapest, Zarándok utca 42." },
  { icon: Phone, label: "Telefon", value: "+36 1 234 5678" },
  { icon: Mail, label: "Email", value: "info@bfzh.hu" },
  { icon: Clock, label: "Nyitvatartás", value: "H-V: 16:00 – 02:00" },
]

export function ContactSection() {
  const [bookingType, setBookingType] = useState<"table" | "room">("table")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [guests, setGuests] = useState<number>(2)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedCheckout, setSelectedCheckout] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [isMobile, setIsMobile] = useState(false)

  const timeOptions = [
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ]

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    // Reset default guests count when switching booking type for better UX
    setGuests(bookingType === "table" ? 2 : 2)
  }, [bookingType])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="kapcsolat" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-sm tracking-widest uppercase mb-3 block">Kapcsolat & Foglalás</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Csatlakozz a zarándokokhoz
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Foglalj asztalt vagy szobát, és válj te is a közösségünk tagjává. Várunk szeretettel!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="bg-muted/30 border-border">
                  <CardContent className="p-4">
                    <info.icon className="h-5 w-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-sm font-medium text-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.123456789!2d19.05!3d47.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzAwLjAiTiAxOcKwMDMnMDAuMCJF!5e0!3m2!1shu!2shu!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Budafoki Zarándokház térkép"
                className="grayscale"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="bg-background border-border">
            <CardContent className="p-6">
              {/* Booking Type Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setBookingType("table")}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-lg font-medium transition-all text-base",
                    bookingType === "table"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80",
                  )}
                >
                  Asztalfoglalás
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType("room")}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-lg font-medium transition-all text-base",
                    bookingType === "room"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80",
                  )}
                >
                  Szobafoglalás
                </button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🙏</div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Áldás a foglalásodon!</h3>
                  <p className="text-muted-foreground">
                    Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                    Új foglalás
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Név *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Teljes neved"
                        required
                        autoComplete="name"
                        className="bg-muted border-border h-12 text-base"
                      />
                      <p id="name-help" className="text-xs text-muted-foreground">Kérjük, teljes nevet adj meg.</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        autoComplete="email"
                        inputMode="email"
                        className="bg-muted border-border h-12 text-base"
                      />
                      <p className="text-xs text-muted-foreground">A visszaigazolást erre küldjük.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+36 20 123 4567"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="^\+?[0-9\s\-]{7,}$"
                        className="bg-muted border-border h-12 text-base"
                      />
                      <p className="text-xs text-muted-foreground">Sürgős egyeztetéshez használjuk.</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">{bookingType === "table" ? "Fő *" : "Vendégek száma *"}</Label>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-12 w-12 shrink-0"
                          onClick={() => setGuests((g) => Math.max(1, g - 1))}
                          aria-label="Kevesebb vendég"
                        >
                          −
                        </Button>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min={1}
                          max={bookingType === "table" ? 20 : 8}
                          value={guests}
                          onChange={(e) => setGuests(Math.max(1, Math.min(Number(e.target.value || 0), bookingType === "table" ? 20 : 8)))}
                          inputMode="numeric"
                          required
                          className="bg-muted border-border h-12 text-center text-base"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="h-12 w-12 shrink-0"
                          onClick={() => setGuests((g) => Math.min(g + 1, bookingType === "table" ? 20 : 8))}
                          aria-label="Több vendég"
                        >
                          +
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Max: {bookingType === "table" ? 20 : 8} fő.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">{bookingType === "table" ? "Dátum *" : "Érkezés *"}</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between h-12 text-base"
                            aria-label={bookingType === "table" ? "Válassz dátumot" : "Válassz érkezési dátumot"}
                          >
                            <span>
                              {selectedDate ? format(selectedDate, "yyyy. MM. dd.") : "Válassz dátumot"}
                            </span>
                            <span className="text-muted-foreground">📅</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            showOutsideDays
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    {bookingType === "table" ? (
                      <div className="space-y-2">
                        <Label htmlFor="time">Időpont *</Label>
                        {isMobile ? (
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            required
                            min="16:00"
                            max="23:00"
                            step="1800"
                            value={selectedTime ?? ''}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="bg-muted border-border h-12 text-base"
                          />
                        ) : (
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Válassz időpontot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeOptions.map((t) => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="checkout">Távozás *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between h-12 text-base"
                              aria-label="Válassz távozási dátumot"
                            >
                              <span>
                                {selectedCheckout ? format(selectedCheckout, "yyyy. MM. dd.") : "Válassz dátumot"}
                              </span>
                              <span className="text-muted-foreground">📅</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0">
                            <Calendar
                              mode="single"
                              selected={selectedCheckout}
                              onSelect={setSelectedCheckout}
                              showOutsideDays
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Megjegyzés</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={
                        bookingType === "table"
                          ? "Különleges kérések, ételallergia, stb."
                          : "Szobatípus preferencia, különleges kérések, stb."
                      }
                      rows={3}
                      className="bg-muted border-border resize-none text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Küldés..." : "Foglalás elküldése"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    A foglalást kollégáink visszaigazolják 24 órán belül.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
