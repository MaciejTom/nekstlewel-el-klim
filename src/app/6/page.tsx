"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Zap, HardHat, Drill, Paintbrush, Bath } from "lucide-react"

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
  { title: "Łazienki", desc: "Kompleksowe metamorfozy łazienek", icon: Bath },
  { title: "Biura i lokale", desc: "Wykończenie powierzchni komercyjnych", icon: Zap },
  { title: "Klatki schodowe", desc: "Remonty dla wspólnot mieszkaniowych", icon: HardHat },
  { title: "Elewacje", desc: "Docieplenia i estetyczne tynki", icon: Drill },
  { title: "Wykończenia", desc: "Od dewelopera pod klucz", icon: Paintbrush },
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

export default function Variant6() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [counts, setCounts] = useState({ years: 0, projects: 0, rating: 0 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        years: prev.years < 40 ? prev.years + 1 : 40,
        projects: prev.projects < 400 ? prev.projects + 10 : 400,
        rating: 5
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#1D3557] selection:bg-[#E63946] selection:text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        
        .hero-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        }

        .text-stroke {
          -webkit-text-stroke: 1px #E63946;
          color: transparent;
        }

        .reveal-bounce {
          opacity: 0;
          animation: revealBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes revealBounce {
          from { opacity: 0; transform: scale(0.8) translateY(40px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .bg-pattern {
          background-image: radial-gradient(#E63946 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1D3557] text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#E63946] p-2 rotate-45">
              <Zap className="-rotate-45" size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter italic">LECH-BUD</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 font-extrabold text-xs uppercase tracking-widest">
            <a href="#uslugi" className="hover:text-[#E63946] transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-[#E63946] transition-colors">Realizacje</a>
            <a href="#faq" className="hover:text-[#E63946] transition-colors">Pytania</a>
            <a href="tel:607176748" className="bg-[#E63946] text-white px-8 py-3 flex items-center gap-3 hover:scale-105 transition-all shadow-[4px_4px_0px_#FFF]">
              <Phone size={18} />
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
        <div className="fixed inset-0 bg-[#E63946] z-[100] p-12 flex flex-col justify-center items-center text-center">
          <button className="absolute top-8 right-8 text-white" onClick={() => setMenuOpen(false)}><X size={40} /></button>
          <div className="space-y-8">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block text-white text-5xl font-black italic">USŁUGI</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block text-white text-5xl font-black italic">PROJEKTY</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-white text-5xl font-black italic">FAQ</a>
            <a href="tel:607176748" className="block text-2xl font-black bg-white text-[#E63946] px-10 py-5 mt-10">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden bg-[#1D3557] text-white">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-48 flex flex-col items-center text-center relative z-10">
          <div className="reveal-bounce">
            <div className="inline-flex items-center gap-2 bg-[#E63946] px-6 py-2 font-black text-sm uppercase tracking-tighter mb-10 skew-x-[-12deg]">
              <span className="skew-x-[12deg]">Ponad 40 lat na rynku</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 italic">
              EKIPA <br /> <span className="text-[#E63946]">MISTRZÓW</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold max-w-2xl mx-auto opacity-70 mb-16 leading-tight">
              Remontujemy Kielce od 1986 roku. Łazienki, biura, klatki schodowe – szybko, czysto i profesjonalnie.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#kontakt" className="bg-white text-[#1D3557] px-12 py-6 rounded-none font-black text-2xl hover:bg-[#E63946] hover:text-white transition-all flex items-center gap-4 shadow-[8px_8px_0px_#E63946] active:translate-x-2 active:translate-y-2 active:shadow-none">
                ZAMÓW WYCENĘ <ArrowRight size={28} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Stats Overlay */}
        <div className="max-w-7xl mx-auto px-6 relative -mt-32 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#E63946] p-10 text-white shadow-2xl skew-y-1">
              <div className="text-7xl font-black mb-2 leading-none">{counts.years}</div>
              <div className="text-lg font-bold uppercase tracking-widest opacity-80">Lat doświadczenia</div>
            </div>
            <div className="bg-white p-10 text-[#1D3557] shadow-2xl -skew-y-1 border-4 border-[#E63946]">
              <div className="text-7xl font-black mb-2 leading-none">{counts.projects}+</div>
              <div className="text-lg font-bold uppercase tracking-widest opacity-80">Gotowych projektów</div>
            </div>
            <div className="bg-[#1D3557] p-10 text-white shadow-2xl skew-y-1 border-4 border-white">
              <div className="text-7xl font-black mb-2 leading-none">{counts.rating}.0</div>
              <div className="text-lg font-bold uppercase tracking-widest opacity-80">Ocena na Oferteo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Icons in Circles */}
      <section id="uslugi" className="py-48 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-32 gap-10">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none">NASZA <br /> <span className="text-stroke">ROBOTA</span></h2>
            <p className="text-2xl font-bold opacity-50 max-w-sm text-right">Robimy to dobrze, bo robimy to od dekad. Zero kompromisów.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#E63946]/20 flex items-center justify-center mb-8 group-hover:bg-[#E63946] group-hover:border-solid group-hover:border-[#E63946] transition-all duration-500 transform group-hover:scale-110">
                  <service.icon size={64} className="text-[#E63946] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#E63946] transition-colors">{service.title}</h3>
                <p className="font-bold text-[#1D3557]/40 leading-tight">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Bold Banner */}
      <section className="bg-[#E63946] py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <h2 className="text-6xl md:text-8xl font-black italic mb-10 leading-none">DLACZEGO <br /> MY?</h2>
              <p className="text-2xl font-bold mb-16 opacity-80 leading-relaxed">LECH-BUD to nie tylko firma remontowa. To 40 lat zaufania mieszkańców Kielc.</p>
              <div className="space-y-8">
                {whyUs.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="bg-white p-2">
                      <Check className="text-[#E63946]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black">{item.title}</h4>
                      <p className="font-bold opacity-70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white p-4 rotate-3 shadow-2xl">
                <Image 
                  src="/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" 
                  alt="Mocna ekipa" 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#1D3557] text-white p-12 -rotate-3 border-8 border-white">
                <div className="text-6xl font-black mb-2 leading-none">40</div>
                <div className="text-sm font-bold uppercase tracking-widest">Lat w branży</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="realizacje" className="py-48 px-6 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-6xl md:text-8xl font-black italic leading-none mb-10">NASZE <br /> <span className="text-[#E63946]">FURY</span> ROBOTY</h2>
              <p className="text-2xl font-bold opacity-50 mb-12">Od biurowców po prywatne łazienki. Zobacz jak zmieniamy kieleckie wnętrza.</p>
              <a href="#kontakt" className="inline-flex items-center gap-4 text-3xl font-black hover:text-[#E63946] transition-colors group">
                CHCE TAK SAMO <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
              </a>
            </div>
            {projects.map((project, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-[#1D3557]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-[#E63946] font-black text-sm uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-3xl font-black text-white leading-none">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Dynamic Accordion */}
      <section id="faq" className="py-48 px-6 bg-[#1D3557] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-20 text-center italic tracking-tighter">CO TRZEBA WIEDZIEĆ?</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-4 border-white/10 hover:border-[#E63946] transition-colors">
                <button 
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-2xl font-black group-hover:text-[#E63946] transition-colors">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#E63946]' : ''}`}>
                    <ChevronDown size={32} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-10 text-xl font-bold opacity-60 leading-relaxed pt-4 border-t-2 border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#FFFBF5] border-8 border-[#1D3557] shadow-[24px_24px_0px_#E63946]">
            <div className="lg:w-2/5 p-12 md:p-24 bg-[#1D3557] text-white">
              <h2 className="text-6xl font-black italic mb-16 leading-none">DAJ <br /> ZNAĆ!</h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-center">
                  <Phone size={40} className="text-[#E63946]" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Dzwonisz do Leszka:</div>
                    <a href="tel:607176748" className="text-4xl font-black hover:text-[#E63946] transition-colors">607 176 748</a>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <MapPin size={40} className="text-[#E63946]" />
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Nasza Baza:</div>
                    <div className="text-2xl font-black">Kielce, Nowaka-Jeziorańskiego 73</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-32 p-10 bg-[#E63946] text-white -rotate-2">
                <ShieldCheck size={48} className="mb-6" />
                <p className="text-xl font-black">Firma Godna Zaufania</p>
                <p className="font-bold opacity-80">Jakość potwierdzona certyfikatami KRD.</p>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 md:p-24 bg-white relative">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Zap size={200} className="text-[#E63946]" />
              </div>
              <form className="space-y-10 relative z-10" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest opacity-40">Kto pyta?</label>
                    <input type="text" className="w-full bg-[#FFFBF5] border-b-4 border-[#1D3557] p-4 font-black text-xl focus:border-[#E63946] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest opacity-40">Gdzie dzwonić?</label>
                    <input type="tel" className="w-full bg-[#FFFBF5] border-b-4 border-[#1D3557] p-4 font-black text-xl focus:border-[#E63946] outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-40">O czym mowa?</label>
                  <textarea rows={4} className="w-full bg-[#FFFBF5] border-b-4 border-[#1D3557] p-4 font-black text-xl focus:border-[#E63946] outline-none transition-colors"></textarea>
                </div>
                <button className="w-full bg-[#E63946] text-white py-10 font-black text-4xl italic hover:bg-[#1D3557] transition-all shadow-[12px_12px_0px_#1D3557] active:shadow-none active:translate-x-3 active:translate-y-3">
                  WYŚLIJ FORMULARZ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#1D3557] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="bg-[#E63946] p-2">
              <Zap size={20} />
            </div>
            <span className="font-black text-2xl tracking-tighter italic">LECH-BUD</span>
          </div>
          
          <div className="text-xs font-black uppercase tracking-widest opacity-30 text-center">
            © {new Date().getFullYear()} LECH-BUD Leszek Kozieł. Solidne remonty od 1986 r.
          </div>
          
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-[#E63946]">Prywatność</a>
            <a href="#" className="hover:text-[#E63946]">KRD</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
