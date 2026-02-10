"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Construction, Drill, HardHat } from "lucide-react"

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
  { title: "Łazienki", desc: "Płytki, kabiny, armatura" },
  { title: "Biura i lokale", desc: "Malowanie, wykładziny, sufity" },
  { title: "Klatki schodowe", desc: "Dla wspólnot mieszkaniowych" },
  { title: "Elewacje", desc: "Docieplenia i tynki" },
  { title: "Wykończenia", desc: "Od dewelopera do gotowego" },
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

export default function Variant2() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white selection:bg-[#F5A623] selection:text-[#1A1A1A]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;600&display=swap');
        
        h1, h2, h3, .font-display {
          font-family: 'Oswald', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .industrial-grid {
          background-image: linear-gradient(rgba(245, 166, 35, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(245, 166, 35, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .diagonal-stripes {
          background: repeating-linear-gradient(
            45deg,
            #F5A623,
            #F5A623 10px,
            #1A1A1A 10px,
            #1A1A1A 20px
          );
        }

        .reveal-up {
          opacity: 0;
          animation: revealUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/95 border-b-4 border-[#F5A623]">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="diagonal-stripes w-12 h-12"></div>
            <div className="font-display font-bold text-4xl italic tracking-tighter">
              LECH<span className="text-[#F5A623]">-</span>BUD
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {["Usługi", "Realizacje", "FAQ"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-display text-lg hover:text-[#F5A623] transition-colors tracking-widest">
                {link}
              </a>
            ))}
            <a href="tel:607176748" className="bg-[#F5A623] text-[#1A1A1A] px-8 py-3 font-display font-bold text-xl flex items-center gap-2 hover:bg-white transition-all skew-x-[-12deg]">
              <span className="skew-x-[12deg] flex items-center gap-2">
                <Phone size={20} />
                607 176 748
              </span>
            </a>
          </div>

          <button className="lg:hidden bg-[#F5A623] text-[#1A1A1A] p-3" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1A1A1A] z-[100] p-10 flex flex-col justify-center items-center text-center industrial-grid">
          <button className="absolute top-8 right-8 text-[#F5A623]" onClick={() => setMenuOpen(false)}><X size={40} /></button>
          <div className="space-y-8">
            {["Usługi", "Realizacje", "FAQ"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block font-display text-5xl hover:text-[#F5A623]">
                {link}
              </a>
            ))}
            <a href="tel:607176748" className="block bg-[#F5A623] text-[#1A1A1A] px-10 py-4 font-display font-bold text-3xl mt-8">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/heroLech.webp" 
            alt="Budowa i remonty" 
            fill 
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
          <div className="absolute inset-0 industrial-grid opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block bg-[#F5A623] text-[#1A1A1A] px-6 py-2 font-display font-bold text-xl mb-8 skew-x-[-10deg]">
              <span className="skew-x-[10deg] flex items-center gap-2">
                <ShieldCheck size={20} />
                EST. 1986 / KIELCE
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-6 leading-none italic">
              BUDUJEMY <br />
              <span className="text-[#F5A623]">PRZYSZŁOŚĆ</span>
            </h1>
            <p className="text-xl md:text-3xl font-light mb-12 max-w-3xl mx-auto opacity-80 uppercase tracking-widest">
              40 lat doświadczenia w remontach klatek, biur i łazienek. <br className="hidden md:block" />
              Solidność potwierdzona certyfikatem godnej zaufania firmy.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="#kontakt" className="group relative bg-[#F5A623] text-[#1A1A1A] px-12 py-5 font-display font-bold text-2xl w-full md:w-auto overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  DARMOWA WYCENA <ArrowRight size={24} />
                </span>
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <div className="flex items-center gap-4 text-left border-l-4 border-[#F5A623] pl-6 py-2">
                <div className="text-4xl font-display font-bold leading-none text-[#F5A623]">40</div>
                <div className="text-xs font-bold leading-tight tracking-[0.2em] opacity-60">LAT <br /> W BRANŻY</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-8 diagonal-stripes opacity-50"></div>
      </section>

      {/* Services Section - Vertical List */}
      <section id="uslugi" className="py-32 bg-[#1A1A1A] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-bold italic leading-none">
              ZAKRES <br /> <span className="text-[#F5A623]">PRAC</span>
            </h2>
            <p className="max-w-md text-xl opacity-60 border-l-2 border-[#F5A623] pl-8">
              Od elewacji po wykończenia wnętrz. Kompleksowa obsługa wspólnot mieszkaniowych i klientów indywidualnych.
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, idx) => (
              <div key={idx} className="group border-t border-white/10 hover:bg-white/5 transition-all py-12 flex flex-col md:flex-row items-start md:items-center gap-8 px-8 cursor-default">
                <div className="font-display text-5xl md:text-7xl font-bold text-[#F5A623]/20 group-hover:text-[#F5A623] transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 group-hover:translate-x-4 transition-transform">{service.title}</h3>
                  <p className="text-xl opacity-60 group-hover:translate-x-4 transition-transform delay-75">{service.desc}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={64} className="text-[#F5A623]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Grid Layout */}
      <section className="py-32 bg-black industrial-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-12 border-b-8 border-[#F5A623] hover:bg-[#222] transition-colors h-full">
                <Construction size={48} className="text-[#F5A623] mb-8" />
                <h4 className="text-3xl font-display font-bold mb-4">{item.title}</h4>
                <p className="text-lg opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Horizontal Cards */}
      <section id="realizacje" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic mb-4">NASZE <span className="text-[#F5A623]">PROJEKTY</span></h2>
          <div className="w-40 h-4 diagonal-stripes"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-4 max-w-[1400px] mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative flex-1 min-w-[300px] aspect-[4/5] overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="text-[#F5A623] font-display font-bold text-lg mb-2">{project.category}</div>
                <h3 className="text-3xl font-bold leading-none mb-6">{project.title}</h3>
                <div className="w-12 h-1 bg-[#F5A623]"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ - Heavy Design */}
      <section id="faq" className="py-32 bg-[#1A1A1A] border-t border-[#F5A623]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center italic underline decoration-[#F5A623] underline-offset-8">CZĘSTO PYTACIE</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-black/40 border-l-8 border-[#F5A623]">
                <button 
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="text-2xl font-bold group-hover:text-[#F5A623] transition-colors">{faq.q}</span>
                  <div className={`p-2 border-2 border-[#F5A623] transition-transform ${openFaq === idx ? 'rotate-180 bg-[#F5A623] text-black' : 'text-[#F5A623]'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-xl opacity-60 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Industrial Form */}
      <section id="kontakt" className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <HardHat size={300} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold italic mb-12">
              MASZ <br /> <span className="text-[#F5A623]">PLAN?</span>
            </h2>
            <p className="text-2xl mb-16 opacity-60">Zrealizujemy go z najwyższą precyzją. Skontaktuj się z Leszkiem Koziełem bezpośrednio.</p>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 bg-[#F5A623] text-black flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                  <Phone size={40} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-40 uppercase tracking-[0.3em] mb-2">Telefon</div>
                  <a href="tel:607176748" className="text-4xl font-display font-bold hover:text-[#F5A623]">607 176 748</a>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 bg-[#F5A623] text-black flex items-center justify-center shrink-0 group-hover:-rotate-6 transition-transform">
                  <MapPin size={40} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-40 uppercase tracking-[0.3em] mb-2">Lokalizacja</div>
                  <div className="text-2xl font-display font-bold">Kielce, Nowaka-Jeziorańskiego 73</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-12 border-t-8 border-[#F5A623] shadow-2xl">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Imię / Firma</label>
                <input type="text" className="w-full bg-black/40 border-b-4 border-white/20 p-6 focus:border-[#F5A623] outline-none transition-all text-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Numer telefonu</label>
                <input type="tel" className="w-full bg-black/40 border-b-4 border-white/20 p-6 focus:border-[#F5A623] outline-none transition-all text-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Treść zapytania</label>
                <textarea rows={4} className="w-full bg-black/40 border-b-4 border-white/20 p-6 focus:border-[#F5A623] outline-none transition-all text-xl"></textarea>
              </div>
              <button className="w-full bg-[#F5A623] text-black py-8 font-display font-bold text-3xl hover:bg-white transition-colors">
                WYŚLIJ FORMULARZ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t-4 border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="font-display font-bold text-2xl">LECH-BUD / KIELCE</div>
          <div className="text-sm font-bold uppercase tracking-widest">© {new Date().getFullYear()} WSZYSTKIE PRAWA ZASTRZEŻONE</div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#F5A623]">Polityka</a>
            <a href="#" className="hover:text-[#F5A623]">Realizacje</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
