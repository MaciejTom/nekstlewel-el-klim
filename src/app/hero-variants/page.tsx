"use client"

import { heroContent } from "@/content/remonter/hero"
import { 
  HeroVariant1, HeroVariant2, HeroVariant3, HeroVariant4, HeroVariant5, 
  HeroVariant6, HeroVariant7, HeroVariant8, HeroVariant9, HeroVariant10 
} from "@/components/sections/hero-variants"

const BRAND = {
  phone: "692 243 186",
  image: "/images/el-klim/hero2.jpg"
}

export default function HeroVariantsPage() {
  return (
    <main className="bg-neutral-100 min-h-screen pb-20">
      <div className="bg-white border-b border-neutral-200 px-8 py-10 mb-12">
        <h1 className="text-3xl font-bold text-neutral-900">10 Propozycji Hero Section dla EL-KLIM</h1>
        <p className="text-neutral-500 mt-2">Wszystkie wersje w jasnej kolorystyce (Light Mode), z zachowaniem splitu i obecnego zdjęcia.</p>
      </div>

      <div className="space-y-32">
        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">1</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Modern Minimalist</h2>
          </div>
          <HeroVariant1 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">2</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Elegant Serif</h2>
          </div>
          <HeroVariant2 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">3</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Industrial Bold</h2>
          </div>
          <HeroVariant3 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">4</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Clean & Soft</h2>
          </div>
          <HeroVariant4 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">5</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Tech / Futuristic</h2>
          </div>
          <HeroVariant5 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">6</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Corporate Trust</h2>
          </div>
          <HeroVariant6 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">7</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Playful Accent</h2>
          </div>
          <HeroVariant7 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">8</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Luxury / Minimal</h2>
          </div>
          <HeroVariant8 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">9</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Dynamic Action</h2>
          </div>
          <HeroVariant9 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>

        <div>
          <div className="px-8 mb-4 flex items-center gap-4">
             <span className="bg-neutral-900 text-white px-3 py-1 text-sm font-bold">10</span>
             <h2 className="text-xl font-bold uppercase tracking-widest">Typographic Split</h2>
          </div>
          <HeroVariant10 
            badge={heroContent.badge}
            headline={heroContent.headline}
            subtitle={heroContent.subtitle}
            image={BRAND.image}
            phone={BRAND.phone}
          />
        </div>
      </div>
    </main>
  )
}
