"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Diamond, Sparkles, Star } from "lucide-react"

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
  { title: "Łazienki", desc: "Kunsztowne wykończenia, armatura premium i perfekcyjne ułożenie płyt wielkoformatowych." },
  { title: "Biura i lokale", desc: "Prestiżowe przestrzenie biznesowe projektowane z myślą o najwyższym standardzie pracy." },
  { title: "Klatki schodowe", desc: "Renowacje dla wspólnot ceniących estetykę i trwałość części wspólnych." },
  { title: "Elewacje", desc: "Zewnętrzna wizytówka budynku wykonana z dbałością o detale architektoniczne." },
  { title: "Wykończenia", desc: "Kompleksowa realizacja wnętrz pod klucz dla najbardziej wymagających inwestorów." },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Kultura", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Biznes", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Wspólnoty", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Design", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
]

const faqs = [
  { q: "Czy robicie dla wspólnot mieszkaniowych?", a: "Tak, to nasza specjalność. Klatki schodowe, korytarze, części wspólne. Faktura VAT, dokumentacja, gwarancja." },
  { q: "Czy wystawiacie faktury?", a: "Tak. Jesteśmy legalnie działającą firmą od 1986 roku. Faktura VAT dla firm i wspólnot." },
  { q: "Jaki jest Wasz obszar działania?", a: "Kielce i okolice — całe województwo świętokrzyskie." },
  { q: "Ile trwa remont łazienki?", a: "Standardowa łazienka 4-6m² — około 2 tygodnie." },
]

const whyUs = [
  { title: "Ekspertyza od 1986", desc: "Blisko 40 lat kreowania standardów wykończeniowych w regionie." },
  { title: "Zaufanie i Wiarygodność", desc: "Certyfikat Firma Godna Zaufania oraz nienaganna opinia rynkowa." },
  { title: "Prestiżowe Realizacje", desc: "Zaufali nam zarządcy biurowców, instytucje kultury i wspólnoty." },
  { title: "Mistrzowska Precyzja", desc: "Każdy milimetr ma znaczenie. Nie uznajemy kompromisów jakościowych." },
]

export default function Variant7() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] selection:bg-[#C9A962] selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        h1, h2, h3, .font-display {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
        }

        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A962, transparent);
        }

        .marble-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
        }

        .reveal-up {
          opacity: 0;
          animation: revealUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl border-b border-[#C9A962]/10">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-display italic text-3xl font-bold tracking-tighter">Lech-Bud</span>
          </div>

          <div className="hidden lg:flex items-center gap-14 text-[10px] font-bold uppercase tracking-[0.4em]">
            <a href="#uslugi" className="hover:text-[#C9A962] transition-colors">Kolekcje</a>
            <a href="#realizacje" className="hover:text-[#C9A962] transition-colors">Projekty</a>
            <a href="#faq" className="hover:text-[#C9A962] transition-colors">Wiedza</a>
            <a href="tel:607176748" className="text-[#C9A962] border border-[#C9A962]/30 px-8 py-3 rounded-full hover:bg-[#C9A962] hover:text-white transition-all">
              Kontakt
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#FAFAFA] z-[100] p-12 flex flex-col justify-center items-center text-center">
          <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <div className="space-y-10">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">Kolekcje</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">Projekty</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">Wiedza</a>
            <a href="tel:607176748" className="block text-2xl font-bold text-[#C9A962] mt-10 tracking-widest">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Minimalist Typography */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 marble-texture overflow-hidden">
        <div className="max-w-5xl mx-auto reveal-up">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#C9A962]"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C9A962]">Mistrzostwo rzemiosła od 1986</span>
            <div className="w-12 h-[1px] bg-[#C9A962]"></div>
          </div>
          <h1 className="text-7xl md:text-[8rem] font-bold leading-[0.9] mb-12 italic">
            Piękno <br /> ukryte w <br /> <span className="font-normal text-[#C9A962]">detalu.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ekskluzywne remonty klatek schodowych, biur i łazienek w Kielcach. Cztery dekady kreowania luksusowych przestrzeni.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <a href="#kontakt" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-[#C9A962] pb-2 hover:gap-8 transition-all">
              Zapytaj o termin <ArrowRight size={18} className="text-[#C9A962]" />
            </a>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em]">Eksploruj</div>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#111] to-transparent"></div>
        </div>
      </section>

      {/* Projects Thumbnails Strip */}
      <section className="py-12 bg-white border-y border-[#C9A962]/10 overflow-hidden">
        <div className="flex gap-8 px-10 animate-scroll whitespace-nowrap">
          {projects.concat(projects).map((project, idx) => (
            <div key={idx} className="inline-block w-80 h-48 relative rounded-sm overflow-hidden group cursor-pointer">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white px-4 py-2">Zobacz</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Editorial Layout */}
      <section id="uslugi" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C9A962] block mb-10">Nasza Kolekcja</span>
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-16 italic">Ekskluzywne <br /> Rozwiązania</h2>
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="/heroLech.webp" 
                  alt="Luksusowa łazienka" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-24 pt-24">
              {services.map((service, idx) => (
                <div key={idx} className="group border-b border-[#C9A962]/20 pb-16">
                  <div className="text-[10px] font-bold text-[#C9A962] mb-6 tracking-[0.3em]">0{idx + 1} / Serwis</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 group-hover:italic transition-all">{service.title}</h3>
                  <p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed mb-10">{service.desc}</p>
                  <a href="#kontakt" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] hover:gap-6 transition-all">
                    Detale <ArrowRight size={14} className="text-[#C9A962]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Dark Section */}
      <section className="py-40 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full marble-texture opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Diamond className="text-[#C9A962] mx-auto mb-16" size={48} />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 italic">Dlaczego LECH-BUD?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {whyUs.map((item, idx) => (
              <div key={idx} className="space-y-8">
                <div className="text-[10px] font-bold text-[#C9A962] tracking-[0.4em]">Standard {idx + 1}</div>
                <h4 className="text-2xl font-bold italic">{item.title}</h4>
                <p className="text-sm font-light opacity-50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-32 gold-line"></div>
          <div className="mt-16 flex flex-wrap justify-center gap-20 opacity-30">
            <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.4em]"><ShieldCheck size={16} /> Godna Zaufania</div>
            <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.4em]"><Star size={16} /> 5.0 Oferteo</div>
            <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.4em]"><Sparkles size={16} /> 40 Lat Pasji</div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="realizacje" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-bold italic">Ostatnie Dzieła</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[16/11] overflow-hidden rounded-sm mb-10 relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex justify-between items-start border-l border-[#C9A962] pl-8">
                  <div>
                    <div className="text-[10px] font-bold text-[#C9A962] uppercase tracking-[0.4em] mb-4">{project.category}</div>
                    <h3 className="text-3xl font-bold group-hover:italic transition-all">{project.title}</h3>
                  </div>
                  <div className="p-4 border border-[#C9A962]/20 rounded-full group-hover:bg-[#C9A962] group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 px-6 bg-white border-t border-[#C9A962]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold italic mb-20 underline decoration-[#C9A962] underline-offset-8">Wiedza i Doświadczenie</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#C9A962]/10">
                <button 
                  className="w-full py-10 flex items-center justify-between text-left group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-xl font-bold group-hover:text-[#C9A962] transition-colors">{faq.q}</span>
                  <ChevronDown className={`text-[#C9A962] transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === idx && (
                  <div className="pb-10 text-neutral-400 font-light text-lg leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-40 px-6 bg-[#FAFAFA] marble-texture">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C9A962] block mb-12">Kontakt Premium</span>
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-16 italic">Zacznijmy <br /> Tworzyć.</h2>
              
              <div className="space-y-16">
                <div className="flex items-start gap-10">
                  <div className="w-16 h-16 bg-[#111] text-white flex items-center justify-center rounded-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-3">Linia Bezpośrednia</div>
                    <a href="tel:607176748" className="text-4xl font-bold italic hover:text-[#C9A962] transition-colors">607 176 748</a>
                  </div>
                </div>
                <div className="flex items-start gap-10">
                  <div className="w-16 h-16 border border-[#C9A962]/30 flex items-center justify-center rounded-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-3">Siedziba Firmy</div>
                    <div className="text-2xl font-bold italic">Kielce, Nowaka-Jeziorańskiego 73</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-32 p-12 bg-[#111] text-white rounded-sm relative overflow-hidden group">
                <div className="relative z-10">
                  <Sparkles className="text-[#C9A962] mb-8" size={32} />
                  <p className="text-xl italic opacity-70 leading-relaxed">"Każde wnętrze to dla mnie osobne wyzwanie i obietnica jakości, którą składam moim klientom od blisko 40 lat."</p>
                  <p className="mt-8 font-bold text-sm uppercase tracking-[0.3em]">— Leszek Kozieł, Właściciel</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A962] opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity"></div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-24 shadow-sm border border-[#C9A962]/10 relative">
              <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none"></div>
              <form className="space-y-12 relative z-10" onSubmit={e => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Imię i Nazwisko</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#C9A962]/30 pb-4 focus:border-[#C9A962] outline-none font-display italic text-2xl transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Kontakt</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#C9A962]/30 pb-4 focus:border-[#C9A962] outline-none font-display italic text-2xl transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Wizja Projektu</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-[#C9A962]/30 pb-4 focus:border-[#C9A962] outline-none font-display italic text-2xl transition-colors"></textarea>
                </div>
                <button className="w-full bg-[#111] text-white py-8 font-bold text-xs uppercase tracking-[0.5em] hover:bg-[#C9A962] transition-colors shadow-2xl">
                  Prześlij Zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-[#C9A962]/10">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display italic text-2xl font-bold tracking-tighter">Lech-Bud</div>
          
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
            © {new Date().getFullYear()} LECH-BUD Precision Construction. All rights reserved.
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#C9A962]">Polityka</a>
            <a href="#" className="hover:text-[#C9A962]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
