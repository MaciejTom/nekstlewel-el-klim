"use client"

import { useState } from "react"

// Local hero component
import { HeroTravel } from "./components/hero-travel"

// Shared sections
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

// Content
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

export default function ElKlimPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const projects = portfolioContent.projects

  const lightboxNext = () => {
    setLightboxIndex(prev => (prev + 1) % projects.length)
  }

  const lightboxPrev = () => {
    setLightboxIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <>
      {/* Skip link for keyboard navigation - WCAG 2.4.1 */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Przejdź do treści
      </a>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={projects}
        currentIndex={lightboxIndex}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />

      <main>
        <HeroTravel
          brandName="EL"
          brandAccent="KLIM"
          badge="Fotowoltaika & Elektryka"
          headline="Mała firma, duże realizacje. Od domu po farmę PV."
          headlineAccent="Od domu po farmę PV."
          description="Dzwonisz do właściciela, nie do call center. Ja wyceniam, ekipa montuje, ja odpowiadam. Gorlice i okolice."
          ctaPrimary={{ text: "Zadzwoń: 692 243 186", href: "tel:692243186" }}
          ctaSecondary={{ text: "Zobacz realizacje", href: "#realizacje" }}
          stats={[
            { value: "15", label: "Lat doświadczenia" },
            { value: "50+", label: "Instalacji" },
          ]}
          navLinks={[
            { label: "Dlaczego my", href: "#dlaczego" },
            { label: "Usługi", href: "#uslugi" },
            { label: "Realizacje", href: "#realizacje" },
            { label: "Proces", href: "#proces" },
            { label: "Opinie", href: "#opinie" },
            { label: "FAQ", href: "#faq" },
          ]}
          navCta={{ text: "Kontakt", href: "#kontakt" }}
          image="/images/el-klim/hero3.jpg"
          imageAlt="EL-KLIM - instalacja fotowoltaiczna"
        />

        <div id="content">
          <WhyUsSection
            content={whyUsContent}
            iconMap={{
              Phone: "/images/el-klim/icons/c75dd17e-54f6-4911-87af-a7794021196c-removebg-preview.png",
              Sun: "/images/el-klim/icons/a6a67a24-5bce-4515-8162-509fce358a63-removebg-preview.png",
              Zap: "/images/el-klim/icons/dea03f13-dcba-498a-a45e-40f52102dba0-removebg-preview.png",
            }}
            iconSize={220}
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
        </div>
      </main>
    </>
  )
}
