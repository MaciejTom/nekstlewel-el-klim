"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Plus, Minus } from "lucide-react"

const companyData = {
  name: "LECH-BUD",
  owner: "Leszek Kozieł",
  phone: "607 176 748",
  address: "Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce",
  region: "Kielce i okolice",
  hours: "wt-pt od 07:00",
  founded: "1986",
  experience: "40 lat",
  rating: "5.0",
  badge: "Firma Godna Zaufania",
}

const services = [
  { title: "Łazienki", desc: "Płytki, kabiny, armatura. Kompleksowe wykończenia łazienek od projektu po montaż ostatniej baterii." },
  { title: "Biura i lokale", desc: "Malowanie, wykładziny, sufity. Adaptacja przestrzeni komercyjnych pod wymagania biznesowe." },
  { title: "Klatki schodowe", desc: "Dla wspólnot mieszkaniowych. Renowacja klatek schodowych, korytarzy i części wspólnych budynków." },
  { title: "Elewacje", desc: "Docieplenia i tynki. Zapewniamy trwałość i estetykę zewnętrzną budynków mieszkalnych i biurowych." },
  { title: "Wykończenia", desc: "Od dewelopera do gotowego. Szpachlowanie, malowanie, układanie podłóg i montaż drzwi." },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Obiekty publiczne", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Biurowce", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Wspólnoty", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Łazienki", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
]

const faqs = [
  { q: "Czy robicie dla wspólnot mieszkaniowych?", a: "Tak, to nasza specjalność. Klatki schodowe, korytarze, części wspólne. Faktura VAT, dokumentacja, gwarancja." },
  { q: "Czy wystawiacie faktury?", a: "Tak. Jesteśmy legalnie działającą firmą od 1986 roku. Faktura VAT dla firm i wspólnot." },
  { q: "Jaki jest Wasz obszar działania?", a: "Kielce i okolice — całe województwo świętokrzyskie." },
  { q: "Ile trwa remont łazienki?", a: "Standardowa łazienka 4-6m² — około 2 tygodnie." },
]

const whyUs = [
  { title: "Od 1986 roku", desc: "40 lat ciągłej działalności na rynku kieleckim." },
  { title: "Certyfikat wiarygodności", desc: "Firma Godna Zaufania i Certyfikat KRD." },
  { title: "Duże projekty", desc: "Biurowce, domy kultury, wspólnoty mieszkaniowe." },
  { title: "Terminowość", desc: "Prace wykonywane zgodnie z harmonogramem." },
]

export default function Variant5() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openService, setOpenService] = useState<number | null>(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
          --slate-50: #F8FAFC;
          --slate-100: #F1F5F9;
          --slate-900: #0F172A;
        }

        .hero-split {
          display: flex;
          min-height: 100vh;
        }

        .reveal-fade {
          opacity: 0;
          animation: revealFade 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes revealFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tight">LECH-BUD</span>
          </div>

          <div className="hidden md:flex items-center gap-12 font-medium text-sm">
            <a href="#uslugi" className="hover:text-slate-500 transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-slate-500 transition-colors">Realizacje</a>
            <a href="#faq" className="hover:text-slate-500 transition-colors">FAQ</a>
            <a href="tel:607176748" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors">
              Kontakt
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-12 flex flex-col justify-center gap-8">
          <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <a href="#uslugi" onClick={() => setMenuOpen(false)} className="text-4xl font-black">Usługi</a>
          <a href="#realizacje" onClick={() => setMenuOpen(false)} className="text-4xl font-black">Realizacje</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-4xl font-black">FAQ</a>
          <a href="tel:607176748" className="text-2xl font-bold mt-10">607 176 748</a>
        </div>
      )}

      {/* Hero Section - 50/50 Split */}
      <section className="hero-split flex flex-col lg:flex-row pt-20">
        <div className="lg:w-1/2 bg-slate-900 text-white p-12 lg:p-24 flex flex-col justify-center items-start reveal-fade">
          <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-10">
            Remonty od 1986
          </div>
          <h1 className="text-5xl lg:text-8xl font-black leading-[1.05] mb-10 tracking-tighter">
            Minimalizm <br /> w formie, <br /> <span className="text-slate-400">maksimum</span> <br /> jakości.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed">
            40 lat precyzyjnego wykańczania wnętrz w Kielcach. Solidność potwierdzona setkami realizacji.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#kontakt" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Zapytaj o wycenę
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck size={24} />
              <span className="font-semibold">Certyfikat Wiarygodności</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-0 reveal-fade" style={{ animationDelay: '0.2s' }}>
          <Image 
            src="/heroLech.webp" 
            alt="Nowoczesne wnętrze" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-8 border border-white/20 hidden md:block">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-black mb-1">40</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Lat w branży</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-1">5.0</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Ocena jakości</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Terminowości</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Clean Grid */}
      <section className="py-32 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-slate-200">
            {whyUs.map((item, idx) => (
              <div key={idx} className="p-12 border-r border-slate-200">
                <div className="text-slate-200 text-6xl font-black mb-8">0{idx + 1}</div>
                <h4 className="text-xl font-black mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Accordion */}
      <section id="uslugi" className="py-32 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-10 leading-none">
              Nasze <br /> <span className="text-slate-400">usługi</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              Dostarczamy kompleksowe rozwiązania remontowe, dbając o czystość, terminowość i najwyższą kulturę techniczną.
            </p>
            <div className="bg-slate-100 p-8 rounded-2xl">
              <div className="font-bold mb-2">Potrzebujesz czegoś innego?</div>
              <p className="text-sm text-slate-500 mb-6">Realizujemy również niestandardowe zlecenia wykończeniowe.</p>
              <a href="tel:607176748" className="font-black text-slate-900 border-b-2 border-slate-900">Zadzwoń do Leszka</a>
            </div>
          </div>
          
          <div className="lg:w-3/5 space-y-4">
            {services.map((service, idx) => (
              <div key={idx} className="border-b border-slate-200">
                <button 
                  className="w-full py-8 flex items-center justify-between text-left group"
                  onClick={() => setOpenService(openService === idx ? null : idx)}
                >
                  <span className={`text-3xl font-bold transition-all ${openService === idx ? 'pl-4 text-slate-900' : 'text-slate-300 group-hover:text-slate-500'}`}>
                    {service.title}
                  </span>
                  {openService === idx ? <Minus className="text-slate-400" /> : <Plus className="text-slate-400" />}
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openService === idx ? 'max-h-64' : 'max-h-0'}`}>
                  <p className="pb-10 pl-4 text-slate-500 text-lg leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Modern Grid */}
      <section id="realizacje" className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">Wybrane <br /> realizacje</h2>
            <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">Standard Lech-Bud</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative aspect-video overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Informacje</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </div>
                {openFaq === idx && (
                  <p className="mt-6 text-slate-500 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter mb-12 leading-none">Kontakt</h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="shrink-0 w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Zadzwoń</div>
                  <a href="tel:607176748" className="text-3xl font-black">607 176 748</a>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="shrink-0 w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Lokalizacja</div>
                  <div className="text-xl font-bold">Kielce, <br />Nowaka-Jeziorańskiego 73</div>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="shrink-0 w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-2xl">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Godziny</div>
                  <div className="text-xl font-bold">Wt - Pt od 07:00</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Imię i Nazwisko" className="w-full bg-white border border-slate-200 p-6 focus:border-slate-900 outline-none transition-all rounded-none" />
                <input type="tel" placeholder="Telefon" className="w-full bg-white border border-slate-200 p-6 focus:border-slate-900 outline-none transition-all rounded-none" />
              </div>
              <input type="text" placeholder="Rodzaj remontu" className="w-full bg-white border border-slate-200 p-6 focus:border-slate-900 outline-none transition-all rounded-none" />
              <textarea rows={6} placeholder="Wiadomość" className="w-full bg-white border border-slate-200 p-6 focus:border-slate-900 outline-none transition-all rounded-none"></textarea>
              <button className="w-full bg-slate-900 text-white py-6 font-black text-xl hover:bg-slate-700 transition-colors uppercase tracking-[0.2em]">
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
          <div>LECH-BUD / Est. 1986 / Kielce</div>
          <div>© {new Date().getFullYear()} All Rights Reserved</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Prywatność</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Realizacje</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
