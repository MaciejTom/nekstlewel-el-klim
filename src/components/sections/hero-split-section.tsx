"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Phone } from "lucide-react"

interface HeroSplitProps {
  badge?: string
  headline: string
  headlineAccent?: string
  region?: string
  description: string
  ctaPrimary: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  image: string
  imageAlt?: string
  phone?: string
  rating?: { score: string; source: string }
}

export function HeroSplitSection({
  badge,
  headline,
  headlineAccent,
  region = "Świętokrzyskie",
  description,
  ctaPrimary,
  ctaSecondary,
  image,
  imageAlt = "Realizacja",
  phone,
  rating,
}: HeroSplitProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-background">
      {/* Text Content - Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-10 md:pr-12 pt-32 pb-20 relative z-10">
        <div className="max-w-[640px] ml-auto flex flex-col gap-8">
          {/* Rating Badge */}
          {rating && (
            <div className="flex items-center gap-3 w-fit border-b border-primary/30 pb-2">
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                {rating.score} na {rating.source}
              </span>
            </div>
          )}

          {/* Badge */}
          {badge && !rating && (
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-semibold tracking-wide rounded-sm w-fit">
              {badge}
            </span>
          )}

          {/* Headline */}
          <h1 className="text-foreground font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === headlineAccent ? (
                  <span className="italic text-muted-foreground">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
            {region && (
              <span className="block text-primary text-2xl md:text-3xl mt-4 tracking-wide font-medium">
                {region}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-[500px]">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {ctaPrimary.text}
              </a>
            ) : (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300"
              >
                {ctaPrimary.text}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center h-14 px-8 border border-border text-foreground text-sm font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image - Right Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
