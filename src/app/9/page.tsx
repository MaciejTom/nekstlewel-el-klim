"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Cpu, Code, Layers, Boxes, Binary } from "lucide-react"

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
  { title: "Łazienki", desc: "Digital precision meets craftsmanship.", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
  { title: "Biura i lokale", desc: "Optimized commercial environments.", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", desc: "Structural resilience for communities.", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Elewacje", desc: "Advanced thermal and visual systems.", image: "/images/lech-bud/oferteo_014_124038526-crop-wizual-1-g.webp" },
  { title: "Wykończenia", desc: "Full-stack interior development.", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Public", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Commercial", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Social", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Residential", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
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

export default function Variant9() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] selection:bg-[#3B82F6] selection:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        .mono { font-family: 'JetBrains Mono', monospace; }

        .glow-blue {
          box-shadow: 0 0 50px -10px rgba(59, 130, 246, 0.3);
        }

        .gradient-text {
          background: linear-gradient(135deg, #F8FAFC 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
        }

        .reveal-slide {
          opacity: 0;
          animation: revealSlide 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealSlide {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .dot-matrix {
          background-image: radial-gradient(#3B82F6 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-blue-700 flex items-center justify-center rounded-lg glow-blue">
              <Binary className="text-white" size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight uppercase">Lech-Bud<span className="text-blue-500">_</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-xs font-bold uppercase tracking-[0.2em] mono">
            <a href="#uslugi" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-500 opacity-50">01.</span> Usługi</a>
            <a href="#realizacje" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-500 opacity-50">02.</span> Projekty</a>
            <a href="#faq" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-500 opacity-50">03.</span> FAQ</a>
            <a href="tel:607176748" className="bg-[#3B82F6] text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-all glow-blue flex items-center gap-3">
              <Phone size={14} />
              CALL.EXE
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0F172A] z-[100] p-12 flex flex-col justify-center gap-8 border-l-4 border-blue-500">
          <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <div className="space-y-8 mono">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block text-4xl font-bold tracking-tighter hover:text-blue-500">_USŁUGI</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block text-4xl font-bold tracking-tighter hover:text-blue-500">_PROJEKTY</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-4xl font-bold tracking-tighter hover:text-blue-500">_FAQ</a>
            <a href="tel:607176748" className="block text-2xl font-bold text-blue-500 bg-blue-500/10 p-6 rounded-lg">
              {companyData.phone}
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Editorial */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden dot-matrix">
        <div className="max-w-7xl mx-auto editorial-grid">
          <div className="col-span-12 lg:col-span-8 lg:col-start-2 reveal-slide">
            <div className="inline-flex items-center gap-3 mono text-xs text-blue-500 font-bold mb-8 uppercase tracking-[0.4em]">
              <div className="w-12 h-[1px] bg-blue-500"></div>
              Architecture & Renovation / Est. 1986
            </div>
            <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] mb-12 tracking-tighter italic">
              UPGRADING <br /> 
              <span className="gradient-text">MODERN</span> <br /> 
              SPACES.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-7 mt-12 lg:mt-0 reveal-slide" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-medium text-white/60 mb-12 leading-relaxed">
              40 lat doświadczenia w remontach łazienek, biur i klatek schodowych. Systemowe podejście do wykończeń. Certyfikowana jakość w Kielcach.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#kontakt" className="bg-[#3B82F6] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0F172A] transition-all flex items-center gap-4 glow-blue">
                SYSTEM.INITIALIZE() <ArrowRight size={20} />
              </a>
              <div className="mono text-[10px] text-blue-400 font-bold leading-none uppercase tracking-widest bg-blue-500/10 p-4 border border-blue-500/20 rounded">
                VERSION 4.0.1986 <br /> <span className="opacity-50">LATEST_STABLE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 relative reveal-slide" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden grayscale border border-white/10 relative group">
            <Image 
              src="/heroLech.webp" 
              alt="Budowa Systemowa" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
            <div className="absolute bottom-10 left-10 bg-[#0F172A] p-10 border-l-4 border-blue-500 hidden md:block">
              <div className="flex items-center gap-10">
                <div>
                  <div className="text-4xl font-bold italic tracking-tighter leading-none mb-1">40y</div>
                  <div className="text-[10px] mono text-blue-500 uppercase">Experience</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div>
                  <div className="text-4xl font-bold italic tracking-tighter leading-none mb-1">5.0</div>
                  <div className="text-[10px] mono text-blue-500 uppercase">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Numbered List with Images */}
      <section id="uslugi" className="py-40 px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex items-end justify-between">
            <div>
              <div className="mono text-blue-500 text-sm mb-4">SYSTEM_CAPABILITIES</div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic leading-none">NASZE <span className="gradient-text">OPERACJE</span></h2>
            </div>
            <div className="hidden md:block mono text-xs opacity-30 text-right">_ROOT_SERVICES.EXE <br /> _LOAD_COMPLETE</div>
          </div>

          <div className="space-y-32">
            {services.map((service, idx) => (
              <div key={idx} className="group relative grid grid-cols-12 gap-8 items-center border-b border-white/5 pb-24 hover:border-blue-500/50 transition-all cursor-default">
                <div className="col-span-12 lg:col-span-1 mono text-4xl text-blue-500/20 group-hover:text-blue-500 transition-colors">
                  0{idx + 1}
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <h3 className="text-5xl md:text-8xl font-bold tracking-tighter italic mb-8 group-hover:translate-x-6 transition-transform">{service.title}</h3>
                  <p className="text-2xl text-white/40 leading-relaxed max-w-lg group-hover:translate-x-6 transition-transform delay-75 group-hover:text-white/80">{service.desc}</p>
                </div>
                <div className="col-span-12 lg:col-span-5 relative">
                  <div className="aspect-square rounded-xl overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Tech Grid */}
      <section className="py-40 px-8 bg-[#0F172A] dot-matrix">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-12 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all h-full group">
                <div className="w-12 h-12 mb-10 flex items-center justify-center bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Layers size={24} />
                </div>
                <h4 className="text-2xl font-bold italic mb-4 tracking-tighter">{item.title}</h4>
                <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Glitched Cards */}
      <section id="realizacje" className="py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-[10rem] font-bold italic tracking-tighter leading-none mb-32 gradient-text text-center">GALLERY_</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0F172A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                  <div className="mono text-blue-500 text-xs mb-4">DEPLOY_SUCCESSFUL</div>
                  <h3 className="text-4xl font-bold italic tracking-tighter mb-4">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                    <Check size={16} className="text-blue-500" /> {project.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 px-8 bg-[#0F172A] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mono text-center text-blue-500 text-sm mb-12">HELP_DOCUMENTATION.MD</div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all hover:border-blue-500/30">
                <button 
                  className="w-full px-10 py-10 flex items-center justify-between text-left group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-2xl font-bold italic tracking-tighter">{faq.q}</span>
                  <div className={`p-2 rounded bg-blue-500/10 text-blue-500 transition-transform ${openFaq === idx ? 'rotate-180 bg-blue-500 text-white' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-10 text-xl text-white/40 leading-relaxed border-t border-white/5 pt-8 italic">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-40 px-8 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full dot-matrix opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-7xl md:text-[10rem] font-bold italic italic leading-none mb-16 tracking-tighter italic">START_ <br /> PROJECT.</h2>
              <div className="space-y-16">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-2xl glow-blue group-hover:rotate-12 transition-transform">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="mono text-[10px] text-blue-500 mb-2">DIRECT_LINK</div>
                    <a href="tel:607176748" className="text-4xl font-bold tracking-tighter italic hover:text-blue-500 transition-colors">607 176 748</a>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:-rotate-12 transition-transform">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <div className="mono text-[10px] text-white/40 mb-2">STATION_ID</div>
                    <div className="text-2xl font-bold tracking-tighter italic">Kielce, Jeziorańskiego 73</div>
                  </div>
                </div>
              </div>

              <div className="mt-24 p-10 border border-blue-500/20 bg-blue-500/5 rounded-2xl flex items-center gap-8">
                <ShieldCheck size={64} className="text-blue-500" />
                <div>
                  <div className="text-2xl font-bold italic tracking-tighter mb-1">SECURED_CREDENTIALS</div>
                  <p className="text-sm opacity-50 mono uppercase tracking-widest">Firma Godna Zaufania / KRD Verified</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] p-12 md:p-20 rounded-3xl border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none"></div>
              <form className="space-y-10 relative z-10">
                <div className="space-y-4">
                  <label className="mono text-[10px] text-blue-500 uppercase tracking-widest ml-1">Input_Identity</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-6 rounded-lg focus:border-blue-500 outline-none transition-all text-xl" />
                </div>
                <div className="space-y-4">
                  <label className="mono text-[10px] text-blue-500 uppercase tracking-widest ml-1">Input_Coordinates</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-6 rounded-lg focus:border-blue-500 outline-none transition-all text-xl" />
                </div>
                <div className="space-y-4">
                  <label className="mono text-[10px] text-blue-500 uppercase tracking-widest ml-1">Input_Description</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-6 rounded-lg focus:border-blue-500 outline-none transition-all text-xl"></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white py-8 rounded-lg font-bold text-2xl hover:bg-white hover:text-black transition-all glow-blue italic tracking-tighter">
                  EXECUTE_SUBMISSION()
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <Binary className="text-blue-500" size={24} />
            <span className="font-bold text-2xl tracking-tight uppercase italic">LECH-BUD<span className="text-blue-500">_</span></span>
          </div>
          
          <div className="mono text-[10px] text-white/30 text-center tracking-widest uppercase">
            © {new Date().getFullYear()} LECH-BUD Precision Systems. Kernel_V1986.06
          </div>
          
          <div className="flex gap-10 mono text-[10px] text-blue-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">// Security</a>
            <a href="#" className="hover:text-white transition-colors">// Data</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
