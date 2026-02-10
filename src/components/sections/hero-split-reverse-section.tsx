"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Phone, ChevronRight } from "lucide-react"

interface HeroSplitReverseProps {
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
  features?: string[]
}

export function HeroSplitReverseSection({
  badge,
  headline,
  headlineAccent,
  region,
  description,
  ctaPrimary,
  ctaSecondary,
  image,
  imageAlt = "Realizacja",
  phone,
  rating,
  features,
}: HeroSplitReverseProps) {
  return (
    <section className="relative w-full min-h-screen pt-[72px] flex flex-col-reverse md:flex-row bg-background">
      {/* Hero Image - Left Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient from right for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent" />
        {/* Gradient from top on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent md:hidden" />
      </div>

      {/* Text Content - Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pr-10 md:pl-12 py-20 relative z-10">
        <div className="max-w-[640px] mr-auto flex flex-col gap-6">
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
          <h1 className="text-foreground font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === headlineAccent ? (
                  <span className="text-primary">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
            {region && (
              <span className="block text-muted-foreground text-xl md:text-2xl mt-4 tracking-wide font-normal">
                {region}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-[500px]">
            {description}
          </p>

          {/* Features list */}
          {features && features.length > 0 && (
            <ul className="flex flex-col gap-2 text-foreground/80">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 rounded-sm"
              >
                <Phone className="w-4 h-4" />
                {ctaPrimary.text}
              </a>
            ) : (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 rounded-sm"
              >
                {ctaPrimary.text}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center h-14 px-8 border border-border text-foreground text-sm font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
