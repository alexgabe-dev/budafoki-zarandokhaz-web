import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { label: "Főoldal", href: "/" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Galéria", href: "/galeria" },
  { label: "Hírek", href: "/hirek" },
  { label: "Kapcsolat", href: "/kapcsolat" },
]

const contactInfo = [
  { icon: MapPin, value: "1222 Budapest, Zarándok utca 42." },
  { icon: Phone, value: "+36 1 234 5678" },
  { icon: Mail, value: "info@bfzh.hu" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 pb-28 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/logo/bfhz-logo-w.png"
                alt="Budafoki Zarándokház"
                width={220}
                height={60}
                sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 200px"
                className="h-8 md:h-10 w-auto"
                priority
              />
              <span className="font-serif text-xl font-bold text-foreground">
                Budafoki <span className="text-primary">Zarándokház</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ahol a hit és a ház bora közös misére gyűlnek. Bár, étterem, szálláshely és rendezvényhelyszín Budafokon.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Navigáció</h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Elérhetőségek</h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.value} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <info.icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="text-foreground font-medium">Nyitvatartás:</span>
              <br />
              H-V: 16:00 – 02:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Budafoki Zarándokház. Készült
            <Heart className="h-3 w-3 text-primary inline" />
            -tel.
          </p>
        </div>
      </div>
    </footer>
  )
}
