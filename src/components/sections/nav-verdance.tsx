"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"

const defaultNavLinks = [
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

interface NavVerdanceProps {
  brandName?: string
  brandLogo?: string
  phone?: string
  phoneFormatted?: string
  links?: typeof defaultNavLinks
  homeHref?: string
}

export function NavVerdance({
  brandName = "EL-KLIM",
  brandLogo,
  phone = "692243186",
  phoneFormatted = "692 243 186",
  links = defaultNavLinks,
  homeHref = "/",
}: NavVerdanceProps) {
  const navLinks = links
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="relative w-full bg-white/95 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href={homeHref} className="font-serif text-2xl font-bold tracking-tight text-gray-900">
          {brandLogo ? (
            <Image src={brandLogo} alt={brandName} width={40} height={40} className="object-cover" priority />
          ) : (
            brandName
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-12 text-xs font-medium uppercase tracking-widest text-gray-500">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${phone}`}
            className="text-xs font-semibold uppercase tracking-widest border border-gray-200 px-6 py-2.5 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            {phoneFormatted}
          </a>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden text-gray-800">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
