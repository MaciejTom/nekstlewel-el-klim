"use client"

import Image from "next/image"
import { Phone, ArrowRight, CheckCircle2, Zap, Shield, Star, Award } from "lucide-react"

interface HeroVariantProps {
  badge: string
  headline: string
  subtitle: string
  image: string
  phone: string
}

// 1. MODERN MINIMALIST
export function HeroVariant1({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> {badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-900 leading-[1.05] mb-6">
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="text-xl text-neutral-600 font-light leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${phone}`} className="px-8 py-4 bg-yellow-400 text-neutral-900 font-bold hover:bg-yellow-500 transition-colors flex items-center gap-2">
              <Phone size={18} /> {phone}
            </a>
            <button className="px-8 py-4 border border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50 transition-colors">
              Zobacz realizacje
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <Image src={image} alt="Hero" fill className="object-cover" priority />
      </div>
    </section>
  )
}

// 2. ELEGANT SERIF
export function HeroVariant2({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-[#FAFAFA]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');`}</style>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-20 border-r border-neutral-100">
        <div className="max-w-xl">
          <span className="text-yellow-600 font-medium tracking-[0.2em] uppercase text-sm mb-6 block italic">
            — {badge}
          </span>
          <h1 className="text-5xl md:text-7xl text-neutral-900 leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {headline.replace('\n', ' ')}
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-lg text-neutral-500 italic mb-12 max-w-md">
            {subtitle}
          </p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-4 text-xl font-semibold text-neutral-900 group">
            <span className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all">
              <Phone size={20} />
            </span>
            Zadzwoń: {phone}
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto p-4 md:p-12 bg-white">
        <div className="relative w-full h-full shadow-2xl overflow-hidden rounded-sm">
          <Image src={image} alt="Hero" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
      </div>
    </section>
  )
}

// 3. INDUSTRIAL BOLD
export function HeroVariant3({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-neutral-300"></div>
            <span className="text-xs font-black uppercase tracking-tighter text-neutral-400">Expertise in Energy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-neutral-900 uppercase tracking-tighter leading-[0.9] mb-8">
            {headline.split('\n').map((line, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-yellow-400' : ''}`}>{line}</span>
            ))}
          </h1>
          <p className="text-lg font-bold text-neutral-800 border-l-4 border-yellow-400 pl-6 mb-10">
            {subtitle}
          </p>
          <div className="flex gap-4">
            <a href={`tel:${phone}`} className="flex-1 md:flex-none px-10 py-5 bg-neutral-900 text-white font-black uppercase italic tracking-widest hover:bg-yellow-400 hover:text-neutral-900 transition-all text-center">
              Kontakt bezpośredni
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <Image src={image} alt="Hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-yellow-400/10 mix-blend-multiply"></div>
      </div>
    </section>
  )
}

// 4. CLEAN & SOFT
export function HeroVariant4({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-[#F8F9FA] items-center">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:pl-24 md:pr-12 py-20 order-2 md:order-1">
        <div className="max-w-xl">
          <div className="bg-white shadow-sm border border-neutral-100 rounded-full px-4 py-1.5 w-fit mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-neutral-600">{badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            {headline.replace('\n', ' ')}
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500" size={20} />
              <span className="text-sm font-medium text-neutral-700">Wycena 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500" size={20} />
              <span className="text-sm font-medium text-neutral-700">Lokalna ekipa</span>
            </div>
          </div>
          <a href={`tel:${phone}`} className="inline-flex items-center justify-center px-10 py-4 bg-yellow-400 text-neutral-900 font-bold rounded-full hover:shadow-lg transition-all">
            Rozpocznij projekt
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-[70vh] px-8 md:px-0 order-1 md:order-2">
        <div className="relative w-full h-full rounded-3xl md:rounded-l-3xl overflow-hidden shadow-2xl">
          <Image src={image} alt="Hero" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

// 5. TECH / FUTURISTIC
export function HeroVariant5({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white font-mono">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 border-r border-neutral-100">
        <div className="max-w-xl">
          <div className="text-yellow-500 text-xs mb-4 flex items-center gap-2">
            <span className="font-bold">[ STATUS ]</span> Dostępny termin: Luty 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tighter uppercase">
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <div className="p-6 bg-neutral-50 border border-neutral-100 mb-10 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-neutral-300">INFO_BLOCK</div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="space-y-4">
            <a href={`tel:${phone}`} className="flex items-center justify-between w-full px-6 py-4 bg-neutral-900 text-white hover:bg-yellow-400 hover:text-black transition-colors group">
              <span className="font-bold tracking-widest uppercase">Połącz z właścicielem</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex justify-between text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
              <span>EL-KLIM // GORLICE</span>
              <span>PV_INST_092</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
        <Image src={image} alt="Hero" fill className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center text-white/40 text-[10px] uppercase tracking-tighter text-center">
          100% <br /> Green Energy
        </div>
      </div>
    </section>
  )
}

// 6. CORPORATE TRUST
export function HeroVariant6({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white shadow-inner">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:pl-20 md:pr-10 py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase mb-6">
            <Shield size={16} /> Gwarancja jakości i bezpieczeństwa
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-8">
            {headline.replace('\n', ' ')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 border-l-2 border-blue-800 pl-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${phone}`} className="px-10 py-5 bg-blue-800 text-white font-bold text-lg hover:bg-blue-900 transition-all text-center">
              Darmowa Konsultacja
            </a>
            <div className="flex items-center gap-4 px-6 py-2 border border-slate-200">
               <Award className="text-yellow-500" size={32} />
               <div className="text-xs font-bold text-slate-500 uppercase">Certyfikowany <br /> instalator</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <Image src={image} alt="Hero" fill className="object-cover" />
        <div className="absolute bottom-10 left-10 bg-white p-8 shadow-xl max-w-xs">
           <div className="text-3xl font-bold text-blue-800 mb-2">15+ lat</div>
           <div className="text-sm text-slate-500 font-medium">Doświadczenia w branży energetycznej na terenie Małopolski.</div>
        </div>
      </div>
    </section>
  )
}

// 7. PLAYFUL ACCENT
export function HeroVariant7({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-[#FFFDF5]">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="max-w-xl relative z-10">
          <span className="inline-block px-4 py-1 bg-neutral-900 text-white rounded-full text-xs font-bold mb-6">
            #LokalnyEkspert
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 mb-8 tracking-tight">
            {headline.split('\n')[0]} <br />
            <span className="relative">
               <span className="relative z-10 text-neutral-900">{headline.split('\n')[1]}</span>
               <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"></span>
            </span>
          </h1>
          <p className="text-xl text-neutral-700 leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${phone}`} className="h-16 px-10 bg-yellow-400 text-neutral-900 font-black rounded-xl hover:rotate-1 transition-transform flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">
              ZADZWOŃ TERAZ
            </a>
            <div className="hidden sm:block">
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />)}
              </div>
              <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-tighter">Top Rated in Gorlice</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto p-10">
        <div className="relative w-full h-full rounded-[40px] overflow-hidden rotate-2 shadow-xl border-4 border-white">
          <Image src={image} alt="Hero" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

// 8. LUXURY / MINIMAL
export function HeroVariant8({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-white">
       <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 text-left">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 mb-10">
               Premium Electric Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-light text-neutral-900 leading-none mb-10 tracking-tighter">
               {headline.split('\n').map((line, i) => (
                  <span key={i} className={`block ${i === 1 ? 'font-medium pl-10 md:pl-20' : ''}`}>{line}</span>
               ))}
            </h1>
            <p className="max-w-md text-neutral-400 text-sm uppercase tracking-widest leading-loose mb-12">
               {subtitle}
            </p>
            <a href={`tel:${phone}`} className="text-neutral-900 font-bold border-b-2 border-neutral-900 pb-2 hover:text-yellow-600 hover:border-yellow-600 transition-all tracking-widest uppercase text-sm">
               Przejdź do kontaktu
            </a>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square">
             <div className="absolute inset-0 border border-neutral-100 -m-4"></div>
             <Image src={image} alt="Hero" fill className="object-cover" />
          </div>
       </div>
    </section>
  )
}

// 9. DYNAMIC ACTION
export function HeroVariant9({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden">
       <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
          <div className="relative w-full h-full skew-x-[-6deg] translate-x-20 overflow-hidden">
             <Image src={image} alt="Hero" fill className="object-cover -skew-x-[-6deg] -translate-x-20" />
          </div>
       </div>
       <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-[90vh] flex items-center">
          <div className="w-full md:w-1/2 py-20">
             <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-yellow-400"></span>
                <span className="font-bold text-neutral-900 uppercase tracking-widest text-sm">{badge}</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-black text-neutral-900 leading-tight mb-8">
                {headline.replace('\n', ' ')}
             </h1>
             <p className="text-xl text-neutral-600 max-w-lg mb-12">
                {subtitle}
             </p>
             <div className="flex flex-col sm:flex-row gap-6">
                <a href={`tel:${phone}`} className="px-12 py-5 bg-yellow-400 text-neutral-900 font-black text-xl hover:bg-neutral-900 hover:text-white transition-all shadow-xl shadow-yellow-400/20 text-center">
                   {phone}
                </a>
                <button className="flex items-center justify-center gap-3 font-bold text-neutral-900 group">
                   Wszystkie usługi <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
       </div>
    </section>
  )
}

// 10. TYPOGRAPHIC SPLIT
export function HeroVariant10({ badge, headline, subtitle, image, phone }: HeroVariantProps) {
  return (
    <section className="relative w-full min-h-[90vh] bg-white flex flex-col md:flex-row">
       <div className="w-full md:w-[45%] flex flex-col justify-end p-8 md:p-20 order-2 md:order-1">
          <div className="space-y-8">
             <div className="text-8xl font-black text-neutral-100 absolute top-0 left-0 -z-0 select-none hidden md:block">
                ENERGY
             </div>
             <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
                   {headline.split('\n')[0]} <br />
                   <span className="text-yellow-500">{headline.split('\n')[1]}</span>
                </h1>
                <p className="text-neutral-500 leading-relaxed mb-8">
                   {subtitle}
                </p>
                <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
                   <div>
                      <div className="text-xs text-neutral-400 uppercase mb-1">Kontakt</div>
                      <div className="text-xl font-bold">{phone}</div>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                      <ArrowRight size={20} />
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="w-full md:w-[55%] relative h-[500px] md:h-auto order-1 md:order-2">
          <Image src={image} alt="Hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white md:from-white/50 to-transparent"></div>
          <div className="absolute bottom-10 right-10 flex gap-4">
             <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
             <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
             <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
          </div>
       </div>
    </section>
  )
}