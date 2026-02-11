"use client"

import { Menu, Grid3X3, ArrowRight } from "lucide-react"

const defaultNavLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Pages", href: "#", hasDropdown: true },
]

interface NavKonstruktionProps {
  brandName?: string
  phone?: string
  phoneFormatted?: string
  links?: typeof defaultNavLinks
  homeHref?: string
}

export function NavKonstruktion({
  brandName = "Konstruktion X",
  phone = "692243186",
  phoneFormatted = "Get a quote",
  links = defaultNavLinks,
  homeHref = "/",
}: NavKonstruktionProps) {
  const navLinks = links

  return (
    <header className="relative w-full bg-[#111111] border-b border-gray-800">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Left side - Logo + Nav */}
        <div className="flex items-center gap-10">
          <a href={homeHref} className="flex items-center gap-2 text-white">
            <Grid3X3 className="w-7 h-7" />
            <span className="text-xl font-bold">{brandName}</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side - Social + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-white">
            {/* Social icons */}
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.933 2.656a10.15 10.15 0 0 1-2.91.797 5.074 5.074 0 0 0 2.227-2.803 10.12 10.12 0 0 1-3.217 1.228A5.064 5.064 0 0 0 10.45 6.01a14.364 14.364 0 0 1-10.426-5.286 5.064 5.064 0 0 0 1.566 6.758 5.05 5.05 0 0 1-2.29-.633v.064c0 2.457 1.748 4.506 4.068 4.97a5.077 5.077 0 0 1-2.283.086 5.067 5.067 0 0 0 4.728 3.516A10.16 10.16 0 0 1 1.05 20.11a14.29 14.29 0 0 0 7.732 2.264c9.278 0 14.35-7.686 14.35-14.352l-.022-1.01a10.25 10.25 0 0 0 2.523-2.617l-.022.25z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2.5h8.5c2.9 0 5.25 2.35 5.25 5.25v8.5c0 2.9-2.35 5.25-5.25 5.25h-8.5c-2.9 0-5.25-2.35-5.25-5.25v-8.5C2.5 4.85 4.85 2.5 7.75 2.5zM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm0 1.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm4.8-2.55a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 2.5h-19c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5v-16c0-.83-.67-1.5-1.5-1.5zM8 18.5H5v-9h3v9zm-1.5-10.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13 10.25h-3v-4.4c0-1.06-.02-2.42-1.48-2.42-1.48 0-1.7 1.15-1.7 2.34v4.48h-3v-9h2.88v1.32h.04c.4-.76 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6v5.31z"/>
              </svg>
            </a>
          </div>
          <a
            href={`tel:${phone}`}
            className="bg-white text-[#111111] py-3 px-6 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 font-semibold"
          >
            {phoneFormatted}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile menu */}
        <button className="lg:hidden text-white">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </header>
  )
}
