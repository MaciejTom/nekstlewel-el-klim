"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface HeroVerdanceProps {
  badge?: string
  headline: string
  headlineAccent?: string
  description: string
  ctaPrimary: { text: string; href: string }
  image: string
  imageAlt?: string
  phone?: string
}

export function HeroVerdance({
  badge = "Handcrafted Excellence",
  headline,
  headlineAccent,
  description,
  ctaPrimary,
  image,
  imageAlt = "Hero image",
  phone,
}: HeroVerdanceProps) {
  return (
    <section className="relative lg:min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Right side image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10 lg:hidden" />
      </div>

      {/* Left side content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
        <div className="lg:w-1/2 py-20 lg:py-0 lg:pr-24 bg-white/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 mx-4 lg:mx-0">
          {/* Badge */}
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-gray-900" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-gray-500">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] mb-8 text-gray-900">
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === headlineAccent ? (
                  <span className="italic font-light">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed font-light">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-6 items-center">
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="group flex items-center space-x-2 text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors"
              >
                <span>{ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <a
                href={ctaPrimary.href}
                className="group flex items-center space-x-2 text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors"
              >
                <span>{ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
