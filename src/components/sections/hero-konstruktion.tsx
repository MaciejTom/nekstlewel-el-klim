"use client"

import { ArrowRight, ArrowDown } from "lucide-react"

interface HeroKonstruktionProps {
  headline?: string
  description?: string
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  image?: string
}

export function HeroKonstruktion({
  headline = "Creating spaces\nthat inspire",
  description = "We design functional and inviting interiors with precision to bring your vision to life through our expertise in real estate solutions.",
  ctaPrimary = { text: "Get a quote", href: "#kontakt" },
  ctaSecondary = { text: "Learn more", href: "#about" },
  image = "https://lh3.googleusercontent.com/aida-public/AB6AXuC8isy9WrbO2AZMZOCxnGqdtPiqQ5BGd_ggPKd6hZ4NT7NgaMobCcjvlYrZLTlQbupLr3iVKnOmzSCN8ghRkRblY5EVCCqiJJHtt-gWbApVl3x5VkgWkJbNsdPRzYGkQSeU1dDUf8lEVL3Ds5J5v1vBEp8ynifidwki7L0vPvI7gnbLyQbdD102hipTpuKCHR2oqtaNb_-0_1lPbakRuyyDyeHvwhqCg_DkCKF0KiaSm7s3czLqb2tQbUO692PPiasLUtDf2ZAr4Y3F",
}: HeroKonstruktionProps) {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - dark with text */}
        <div className="bg-[#111111] flex items-center">
          <div className="container mx-auto px-6 lg:pl-32 py-20 lg:py-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {headline.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-10">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={ctaPrimary.href}
                className="bg-white text-[#111111] py-4 px-8 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 font-semibold"
              >
                {ctaPrimary.text}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={ctaSecondary.href}
                className="border border-gray-600 text-white py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold"
              >
                {ctaSecondary.text}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - image */}
        <div
          className="hidden lg:block bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:right-40 lg:left-auto lg:translate-x-0 z-10">
        <button className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300">
          <ArrowDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
