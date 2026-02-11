"use client"

import Image from "next/image"
import { ChevronDown, Award, Zap, Sun } from "lucide-react"

interface HeroTravelProps {
  brandName?: string
  brandAccent?: string
  badge?: string
  headline: string
  headlineAccent?: string
  description: string
  ctaPrimary: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  stats?: { value: string; label: string }[]
  navLinks?: { label: string; href: string }[]
  navCta?: { text: string; href: string }
  image: string
  imageAlt?: string
}

export function HeroTravel({
  brandName = "EL",
  brandAccent = "KLIM",
  badge,
  headline,
  headlineAccent,
  description,
  ctaPrimary,
  ctaSecondary,
  stats,
  navLinks = [
    { label: "Usługi", href: "#uslugi" },
    { label: "Realizacje", href: "#realizacje" },
  ],
  navCta = { text: "Kontakt", href: "#kontakt" },
  image,
  imageAlt = "Hero image",
}: HeroTravelProps) {
  const renderHeadline = () => {
    if (!headlineAccent) return headline

    const parts = headline.split(headlineAccent)
    return (
      <>
        {parts[0]}
        <span className="text-primary">{headlineAccent}</span>
        {parts[1] || ""}
      </>
    )
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row relative">
      {/* Unified Header - Logo + Nav */}
      <header className="fixed md:absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 md:py-5 flex justify-between items-center bg-background/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-border/50 md:border-none">
          <a href="/" className="block">
            <Image
              src="/images/el-klim/image-Photoroom.png"
              alt="EL-KLIM - Montaż Serwis"
              width={280}
              height={90}
              className="h-16 md:h-20 lg:h-24 w-auto"
              priority
            />
          </a>
          <nav className="flex items-center space-x-6 md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary md:text-white font-medium hover:text-primary transition-colors hidden sm:block md:drop-shadow-md"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navCta.href}
              className="border border-secondary md:border-white text-secondary md:text-white px-5 py-2 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 font-medium md:drop-shadow-md"
            >
              {navCta.text}
            </a>
          </nav>
      </header>

      {/* Left side - Content */}
      <div className="w-full md:w-[45%] md:min-h-screen flex flex-col justify-center px-6 md:px-12 pt-8 md:pt-36 pb-12 md:pb-12 relative z-10 bg-background">
        {/* Main content */}
        <main className="flex flex-col justify-center space-y-6 max-w-xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-sm text-sm font-semibold w-fit">
              <Sun className="w-4 h-4" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary">
            {renderHeadline()}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={ctaPrimary.href}
              className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              {ctaPrimary.text}
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group"
              >
                {ctaSecondary.text}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-6 border-t border-border mt-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/15 p-3 rounded-xl text-primary">
                  <Award className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl leading-none text-secondary">{stats[0].value}</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stats[0].label}</span>
                </div>
              </div>
              {stats[1] && (
                <>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/15 p-3 rounded-xl text-primary">
                      <Zap className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-2xl leading-none text-secondary">{stats[1].value}</span>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stats[1].label}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </main>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Przewiń w dół"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-[55%] h-[40vh] md:h-screen relative order-first md:order-last">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
