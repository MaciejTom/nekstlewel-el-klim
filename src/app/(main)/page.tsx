"use client"

import { useState } from "react"

// Sections - reusing from shared components
import { NavSection } from "@/components/sections/nav-section"
import { HeroSection } from "@/components/sections/hero-section"
import { HeroSplitSection } from "@/components/sections/hero-split-section"
import { HeroSplitClean } from "@/components/sections/hero-split-clean"
import { HeroVerdance } from "@/components/sections/hero-verdance"
import { NavVerdance } from "@/components/sections/nav-verdance"
import { NavKonstruktion } from "@/components/sections/nav-konstruktion"
import { HeroKonstruktion } from "@/components/sections/hero-konstruktion"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

// UI Components
import { Lightbox } from "@/components/ui/lightbox"
import { ControlPanel } from "@/components/ui/control-panel"

// Content - remonter specific
import { heroContent } from "@/content/remonter/hero"
import { whyUsContent } from "@/content/remonter/why-us"
import { servicesEditorialContent } from "@/content/remonter/services-editorial"
import { portfolioContent } from "@/content/remonter/portfolio"
import { processContent } from "@/content/remonter/process"
import { faqContent } from "@/content/remonter/faq"
import { contactContent } from "@/content/remonter/contact"
import { reviewsContent } from "@/content/remonter/reviews"

// Config
const BRAND = {
  name: "EL-KLIM",
  letter: "E",
  logo: "/images/el-klim/1.jpg",
  phone: "692243186",
  phoneFormatted: "692 243 186",
  homeHref: "/",
  description: "Mała firma, duże realizacje. Fotowoltaika i elektryka w Gorlicach. Od domu po farmę PV.",
  badge: "Fotowoltaika | Elektryka",
  copyright: "EL-KLIM Ryszard Kozioł",
  whatsappNumber: "48692243186",
  location: "Gorlice i okolice",
}

export default function RemonterPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const projects = portfolioContent.projects

  const openLightbox = (index: number) => {
    setLightboxIndex(index % projects.length)
    setLightboxOpen(true)
  }

  const lightboxNext = () => {
    setLightboxIndex(prev => (prev + 1) % projects.length)
  }

  const lightboxPrev = () => {
    setLightboxIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <>
      <ControlPanel />
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={projects}
        currentIndex={lightboxIndex}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />

      <main className="selection:bg-primary/20 selection:text-primary">
        <NavSection
          brandName={BRAND.name}
          brandLetter={BRAND.letter}
          brandLogo={BRAND.logo}
          phone={BRAND.phone}
          phoneFormatted={BRAND.phoneFormatted}
          homeHref={BRAND.homeHref}
        />
        <HeroSplitSection
          headline={heroContent.headline}
          headlineAccent={heroContent.headlineAccent}
          region="Gorlice i okolice"
          description={heroContent.subtitle}
          ctaPrimary={{ text: "Zadzwoń: 692 243 186", href: "#kontakt" }}
          ctaSecondary={{ text: "Zobacz realizacje", href: "#realizacje" }}
          image="/images/el-klim/hero2.jpg"
          imageAlt="EL-KLIM - fotowoltaika i instalacje elektryczne"
          phone={BRAND.phone}
          badge={heroContent.badge}
        />

        {/* ========== WARIANT 2: Verdance style ========== */}
        <NavVerdance
          brandName="Verdance"
          phone="5551234567"
          phoneFormatted="Inquire"
          links={[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <HeroVerdance
          badge="Handcrafted Excellence"
          headline={"The Art of\nFine Living"}
          headlineAccent="Fine Living"
          description="We design and craft bespoke furniture that transforms spaces into sanctuaries. Every curve, every joint, every finish tells a story of uncompromising quality."
          ctaPrimary={{ text: "View Collection", href: "#gallery" }}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBe65jMWXksntvRIY3CQywhYL0d50a8TwBVWRmqxlGYnP7gBxRTXigdAEPgKeSXK9kwibMS83sxFK7hgop0F_AbsLejk5Rx9tEte4vmdH3TK6i9luNJNgVQhrT-RzDjTy4qVAUCNbL_OJ1qnzPyrh7-b8Lx3J5VMe45hRgFBi7byg4AKq1Y8U3-Vr6-tU79OXRRoKzKOXJbkXz7P7J9eyR6EtXAqspWewFiF6Ak_h_nTP7o_CbsYLQT-oDG3zv1kLMGrszvl17vHI8"
          imageAlt="Luxurious living room"
        />

        {/* ========== WARIANT 3: Konstruktion X style ========== */}
        <NavKonstruktion
          brandName="Konstruktion X"
          phoneFormatted="Get a quote"
        />
        <HeroKonstruktion
          headline={"Creating spaces\nthat inspire"}
          description="We design functional and inviting interiors with precision to bring your vision to life through our expertise in real estate solutions."
          ctaPrimary={{ text: "Get a quote", href: "#kontakt" }}
          ctaSecondary={{ text: "Learn more", href: "#about" }}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8isy9WrbO2AZMZOCxnGqdtPiqQ5BGd_ggPKd6hZ4NT7NgaMobCcjvlYrZLTlQbupLr3iVKnOmzSCN8ghRkRblY5EVCCqiJJHtt-gWbApVl3x5VkgWkJbNsdPRzYGkQSeU1dDUf8lEVL3Ds5J5v1vBEp8ynifidwki7L0vPvI7gnbLyQbdD102hipTpuKCHR2oqtaNb_-0_1lPbakRuyyDyeHvwhqCg_DkCKF0KiaSm7s3czLqb2tQbUO692PPiasLUtDf2ZAr4Y3F"
        />

        <WhyUsSection
          content={whyUsContent}
          iconMap={{
            Handshake: "/images/remonter/icons/Whisk_142f20ca50ad58f8f334cc4ab808b9fedr-removebg-preview.webp",
            Clock: "/images/remonter/icons/4-removebg-preview.webp",
            Wrench: "/images/remonter/icons/3-removebg-preview.webp",
            MapPin: "/images/remonter/icons/2-removebg-preview.webp",
          }}
        />
        <ServicesEditorialSection id="uslugi" content={servicesEditorialContent} />
        <GallerySection content={portfolioContent} />
        <ProcessSection content={processContent} />
        <ReviewsSection content={reviewsContent} />
        <FaqSection content={faqContent} />
        <ContactSection content={contactContent} />
        <FooterSection
          brandName={BRAND.name}
          brandDescription={BRAND.description}
          badge={BRAND.badge}
          phone={BRAND.phone}
          phoneFormatted={BRAND.phoneFormatted}
          hours={contactContent.hours}
          location={BRAND.location}
          copyright={BRAND.copyright}
          whatsappNumber={BRAND.whatsappNumber}
        />
      </main>
    </>
  )
}
