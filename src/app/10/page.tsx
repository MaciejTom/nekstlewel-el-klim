"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Sun, Wind, Anchor } from "lucide-react"

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
  { title: "Łazienki", desc: "Tworzymy oazy spokoju. Od szlachetnej ceramiki po naturalne tekstury." },
  { title: "Biura i lokale", desc: "Przestrzenie pełne ciepła i charakteru, sprzyjające twórczej pracy." },
  { title: "Klatki schodowe", desc: "Zadbany dom zaczyna się od progu. Estetyka części wspólnych." },
  { title: "Elewacje", desc: "Harmonia koloru i formy, która chroni i zdobi Twój budynek." },
  { title: "Wykończenia", desc: "Zmieniamy surowe mury w dom pełen słońca i komfortu." },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Kielce", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Biznes", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Wspólnoty", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Wnętrza", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
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

export default function Variant10() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3728] selection:bg-[#C2703E] selection:text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
        
        h1, h2, h3, .font-display {
          font-family: 'Lora', serif;
        }

        .terracotta-gradient {
          background: linear-gradient(135deg, #C2703E 0%, #A05A2E 100%);
        }

        .reveal-up {
          opacity: 0;
          animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .organic-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        .parallax-hint {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md h-20 shadow-sm' : 'h-28'}`}>
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 terracotta-gradient rounded-full flex items-center justify-center text-white">
              <Sun size={20} />
            </div>
            <span className="font-display italic text-2xl font-bold">Lech-Bud</span>
          </div>

          <div className="hidden lg:flex items-center gap-12 font-semibold text-sm">
            <a href="#uslugi" className="hover:text-[#C2703E] transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-[#C2703E] transition-colors">Realizacje</a>
            <a href="#faq" className="hover:text-[#C2703E] transition-colors">FAQ</a>
            <a href="tel:607176748" className="bg-[#4A3728] text-white px-8 py-3 rounded-full hover:bg-[#C2703E] transition-colors flex items-center gap-3">
              <Phone size={16} />
              607 176 748
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#FAF7F2] z-[100] p-12 flex flex-col justify-center items-center text-center">
          <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <div className="space-y-10">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">Usługi</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">Realizacje</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block font-display text-4xl italic">FAQ</a>
            <a href="tel:607176748" className="block text-2xl font-bold bg-[#C2703E] text-white px-10 py-5 rounded-full mt-10">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 reveal-up">
            <div className="flex items-center gap-3 mb-8">
              <Wind className="text-[#C2703E]" size={20} />
              <span className="text-[#C2703E] font-bold text-sm uppercase tracking-[0.3em]">Remonty z duszą od 1986</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-10 tracking-tight">
              Ciepło Twojego <br /> <span className="text-[#C2703E] italic">nowego</span> domu.
            </h1>
            <p className="text-xl md:text-2xl text-[#4A3728]/70 mb-12 max-w-xl leading-relaxed">
              Profesjonalne wykończenia łazienek, biur i klatek schodowych. Tradycja jakości Leszka Kozieła, od 40 lat w Kielcach.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#kontakt" className="bg-[#C2703E] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#4A3728] transition-all flex items-center gap-3 shadow-xl shadow-[#C2703E]/20">
                Darmowa wycena <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-md rounded-full border border-[#C2703E]/10">
                <ShieldCheck className="text-[#C2703E]" size={24} />
                <span className="font-bold text-sm">Gwarancja & Zaufanie</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[100px] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000 shadow-2xl">
              <Image 
                src="/heroLech.webp" 
                alt="Remont w stylu śródziemnomorskim" 
                width={800} 
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Organic blobs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C2703E]/10 organic-shape -z-0"></div>
            <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-amber-100/50 organic-shape -z-0"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 parallax-hint">
          <div className="w-12 h-20 border-2 border-[#C2703E]/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-4 bg-[#C2703E] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-32 px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {whyUs.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#C2703E] mb-8 border border-[#C2703E]/10">
                  <Anchor size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="uslugi" className="py-40 px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
          <Sun size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#C2703E] mb-6">Nasza Specjalność</h2>
            <h3 className="text-4xl md:text-6xl font-bold">W czym możemy Cię <br /> zainspirować?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="group p-12 bg-[#FAF7F2] hover:terracotta-gradient hover:text-white transition-all duration-700 rounded-[50px] shadow-sm hover:shadow-2xl">
                <h4 className="text-3xl font-bold mb-6 italic">{service.title}</h4>
                <p className="text-lg opacity-70 mb-10 leading-relaxed group-hover:opacity-90">{service.desc}</p>
                <div className="w-12 h-12 rounded-full border border-[#C2703E]/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#C2703E]">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
            <div className="p-12 border-4 border-dashed border-[#C2703E]/20 rounded-[50px] flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl font-bold mb-4">Twój projekt?</h4>
              <p className="opacity-60 mb-8">Opowiedz nam o swojej wizji, a my sprawimy, że stanie się rzeczywistością.</p>
              <a href="tel:607176748" className="text-xl font-bold underline decoration-[#C2703E] underline-offset-8">Zadzwoń do nas</a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="realizacje" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-24">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter">Wybrane <br /> historie <br /> <span className="text-[#C2703E]">wnętrz.</span></h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <p className="text-xl italic opacity-60">Zmieniamy kieleckie przestrzenie od blisko czterech dekad.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-[80px] overflow-hidden mb-10 shadow-xl relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex justify-between items-start px-8">
                  <div>
                    <div className="text-[#C2703E] font-bold text-xs uppercase tracking-widest mb-3">{project.category}</div>
                    <h3 className="text-3xl font-bold italic group-hover:text-[#C2703E] transition-colors">{project.title}</h3>
                  </div>
                  <div className="w-14 h-14 terracotta-gradient rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Full Width */}
      <section className="py-24 px-8 bg-[#4A3728] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C2703E]/10 organic-shape rotate-45 -z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Gotowy na zmianę, <br /> która cieszy oko i duszę?</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">Umów się na bezpłatną wycenę. Leszek Kozieł osobiście doradzi najlepsze rozwiązania dla Twojego domu.</p>
          <a href="tel:607176748" className="inline-flex items-center gap-4 bg-[#C2703E] text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-white hover:text-[#4A3728] transition-all">
            Zadzwoń: 607 176 748
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-24">Twoje Pytania</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#C2703E]/20">
                <button 
                  className="w-full py-10 flex items-center justify-between text-left group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-2xl font-bold italic group-hover:text-[#C2703E] transition-colors">{faq.q}</span>
                  <ChevronDown className={`text-[#C2703E] transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`} size={24} />
                </button>
                {openFaq === idx && (
                  <div className="pb-10 text-xl text-[#4A3728]/60 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-40 px-8 bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-[#C2703E] font-bold text-sm uppercase tracking-[0.5em] mb-8">Kontakt</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-12 leading-none tracking-tight">Czekamy <br /> na Twoją <br /> <span className="italic text-[#C2703E]">wiadomość.</span></h3>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 terracotta-gradient rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Leszek Kozieł</div>
                  <a href="tel:607176748" className="text-3xl font-bold hover:text-[#C2703E] transition-colors">607 176 748</a>
                </div>
              </div>
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#4A3728] shadow-md group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Adres Biura</div>
                  <div className="text-xl font-bold italic">Kielce, Nowaka-Jeziorańskiego 73</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2703E]/5 organic-shape -z-0"></div>
            <form className="space-y-8 relative z-10" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-2 opacity-40">Imię i Nazwisko</label>
                <input type="text" className="w-full bg-[#FAF7F2] border-none rounded-full px-8 py-5 focus:ring-2 focus:ring-[#C2703E] outline-none font-bold italic" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-2 opacity-40">E-mail / Telefon</label>
                <input type="text" className="w-full bg-[#FAF7F2] border-none rounded-full px-8 py-5 focus:ring-2 focus:ring-[#C2703E] outline-none font-bold italic" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-2 opacity-40">Twoje Marzenie o Remoncie</label>
                <textarea rows={4} className="w-full bg-[#FAF7F2] border-none rounded-[40px] px-8 py-5 focus:ring-2 focus:ring-[#C2703E] outline-none font-bold italic"></textarea>
              </div>
              <button className="w-full terracotta-gradient text-white py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                Wyślij Zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 terracotta-gradient rounded-full flex items-center justify-center text-white">
              <Sun size={16} />
            </div>
            <span className="font-display italic text-xl font-bold">Lech-Bud</span>
          </div>
          
          <div className="text-sm font-medium text-[#4A3728]/40 italic">
            © {new Date().getFullYear()} LECH-BUD Kielce. Tradycja jakości od 1986 r.
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#C2703E]">Prywatność</a>
            <a href="#" className="hover:text-[#C2703E]">Realizacje</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
