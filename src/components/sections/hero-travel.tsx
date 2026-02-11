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
  // Split headline by accent word
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
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Content (42%) */}
      <div className="w-full md:w-[42%] min-h-screen flex flex-col justify-between px-8 md:px-12 lg:px-16 py-8 md:py-12 relative z-10 bg-background">
        {/* Logo - Bebas Neue style like original */}
        <header>
          <div className="font-[family-name:var(--font-bebas)] leading-none">
            <div className="text-5xl md:text-6xl tracking-wider">
              <span className="text-primary">{brandName}</span>
              <span className="text-secondary">{brandAccent}</span>
            </div>
            <div className="text-sm md:text-base tracking-[0.3em] text-secondary text-right -mt-1">
              MONTAŻ SERWIS
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col justify-center space-y-6 max-w-xl mt-12 md:mt-0">
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
              className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 transform hover:-translate-y-0.5"
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
            <div className="flex items-center gap-8 pt-6 border-t border-border mt-4">
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
        <footer className="hidden md:block">
          <button
            onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </button>
        </footer>
      </div>

      {/* Right side - Image with Nav overlay (58%) */}
      <div className="w-full md:w-[58%] h-[50vh] md:h-screen relative">
        {/* Navigation overlay with gradient for better contrast */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
        <nav className="absolute top-0 right-0 w-full p-8 md:p-12 flex justify-end items-center space-x-8 z-20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-medium hover:text-primary transition-colors hidden sm:block drop-shadow-md"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navCta.href}
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-secondary transition-all duration-200 font-medium drop-shadow-md"
          >
            {navCta.text}
          </a>
        </nav>

        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
