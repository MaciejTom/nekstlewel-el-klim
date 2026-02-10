"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Star, Award, TrendingUp } from "lucide-react"

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

export default function Variant3() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-[#1E3A5F] selection:bg-[#D4AF37] selection:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');
        
        :root {
          --color-navy: #1E3A5F;
          --color-gold: #D4AF37;
          --color-light: #F8FAFC;
        }

        .hero-clip {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }

        .reveal-right {
          opacity: 0;
          animation: revealRight 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .gold-glow:hover {
          box-shadow: 0 10px 30px -10px rgba(212, 175, 55, 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-[#1E3A5F]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-[#D4AF37]" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tighter leading-none">LECH-BUD</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">Premium Construction</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["O nas", "Usługi", "Realizacje", "FAQ"].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                {link}
              </a>
            ))}
            <a href="tel:607176748" className="bg-[#1E3A5F] text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-[#D4AF37] transition-all gold-glow">
              <Phone size={18} />
              607 176 748
            </a>
          </div>

          <button className="lg:hidden text-[#1E3A5F]" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1E3A5F] z-[100] p-8 flex flex-col justify-center items-center text-center">
          <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <div className="space-y-8">
            {["Usługi", "Realizacje", "FAQ"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-white text-3xl font-bold uppercase tracking-widest">
                {link}
              </a>
            ))}
            <a href="tel:607176748" className="block bg-[#D4AF37] text-white px-10 py-5 rounded-full text-2xl font-bold">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Asymmetric */}
      <section className="pt-40 pb-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal-right" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.4em]">Od 1986 roku w Kielcach</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-[#1E3A5F]">
              Eksperci od <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A5F] to-[#D4AF37]">wykończeń</span> wnętrz.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Profesjonalne remonty biur, klatek schodowych i łazienek. 40 lat tradycji połączone z nowoczesnym podejściem do rzemiosła.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#kontakt" className="bg-[#1E3A5F] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#D4AF37] transition-all shadow-xl shadow-[#1E3A5F]/20 flex items-center gap-3">
                Rozpocznij projekt
                <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-lg border border-[#D4AF37]/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#F8FAFC] border-2 border-white flex items-center justify-center shadow-sm">
                      <Star size={16} className="text-[#D4AF37] fill-current" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-sm">Zaufanie & Jakość</div>
                  <div className="text-xs text-slate-400 font-semibold">Certyfikat Wiarygodności</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative lg:-mr-40">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image 
                src="/heroLech.webp" 
                alt="Ekskluzywny remont" 
                width={1000} 
                height={800}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#D4AF37]/20 rounded-full -z-0"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3 font-bold text-xl"><ShieldCheck /> Firma Godna Zaufania</div>
            <div className="flex items-center gap-3 font-bold text-xl"><Award /> Certyfikat KRD</div>
            <div className="flex items-center gap-3 font-bold text-xl"><Check /> Faktura VAT</div>
            <div className="flex items-center gap-3 font-bold text-xl"><Star /> Ocena 5.0</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="uslugi" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Specjalizacje</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Rozwiązania skrojone pod Twoje potrzeby</h3>
            <p className="text-lg text-slate-500">Dostarczamy kompleksowe usługi remontowe dla klientów biznesowych, wspólnot oraz osób prywatnych.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-[#F8FAFC] p-10 rounded-[32px] border border-transparent hover:border-[#D4AF37]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#1E3A5F] group-hover:text-white transition-all">
                  <TrendingUp size={24} className="group-hover:text-[#D4AF37]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                <div className="w-10 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
            <div className="group bg-[#1E3A5F] p-10 rounded-[32px] flex flex-col justify-between text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-6 italic">Gwarancja jakości od 1986.</h4>
                <p className="opacity-70 mb-8">Każde zlecenie traktujemy priorytetowo, dbając o najmniejszy detal.</p>
              </div>
              <a href="tel:607176748" className="relative z-10 font-bold text-xl underline decoration-[#D4AF37] underline-offset-8 decoration-2">
                Zadzwoń po wycenę
              </a>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio - Modern Grid */}
      <section id="realizacje" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold">Ostatnie realizacje</h3>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#1E3A5F]/20 flex items-center justify-center cursor-pointer hover:bg-[#1E3A5F] hover:text-white transition-all">
                <ChevronDown className="rotate-90" size={20} />
              </div>
              <div className="w-12 h-12 rounded-full border border-[#1E3A5F]/20 flex items-center justify-center cursor-pointer hover:bg-[#1E3A5F] hover:text-white transition-all">
                <ChevronDown className="-rotate-90" size={20} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative rounded-[40px] overflow-hidden aspect-video shadow-lg">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-3">{project.category}</div>
                  <h4 className="text-3xl font-bold">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Numbers */}
      <section className="py-32 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-8">
              {whyUs.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-10 rounded-[40px] border border-white/10">
                  <h5 className="text-[#D4AF37] font-extrabold text-2xl mb-4">{item.title}</h5>
                  <p className="text-sm opacity-60 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Dlaczego my?</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">40 lat doświadczenia <br />w każdym detalu.</h3>
              <p className="text-xl opacity-70 leading-relaxed mb-12">
                Nasza firma to pokoleniowa pasja do budownictwa. Od 1986 roku dostarczamy najwyższą jakość na terenie Kielc i całego województwa świętokrzyskiego.
              </p>
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-[#D4AF37]">5.0</span>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-50">Ocena klientów</span>
                </div>
                <div className="w-[1px] h-12 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-[#D4AF37]">400+</span>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-50">Realizacji</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-20">Masz pytania?</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-[24px] overflow-hidden border border-slate-100">
                <button 
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-[#1E3A5F] flex items-center justify-center transition-transform ${openFaq === idx ? 'rotate-180 bg-[#1E3A5F] text-white' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-10 text-slate-500 leading-relaxed text-lg">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[60px] p-12 lg:p-24 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/5">
              <h2 className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.5em] mb-6">Kontakt</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-10 text-[#1E3A5F]">Porozmawiajmy <br />o Twoim projekcie</h3>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-[#1E3A5F] rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Zadzwoń bezpośrednio</div>
                    <a href="tel:607176748" className="text-2xl font-extrabold text-[#1E3A5F] hover:text-[#D4AF37] transition-colors">607 176 748</a>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#1E3A5F] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Odwiedź biuro</div>
                    <div className="text-xl font-bold text-[#1E3A5F]">Nowaka-Jeziorańskiego 73 <br />25-432 Kielce</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 p-8 bg-[#1E3A5F] rounded-[32px] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                    <ShieldCheck size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest">Wiarygodna Firma</span>
                  </div>
                  <p className="text-sm italic opacity-70">"Zadowolenie klienta i terminowość to fundamenty, na których budujemy LECH-BUD od blisko 40 lat."</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1">Twoje Nazwisko</label>
                    <input type="text" className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] outline-none text-[#1E3A5F]" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1">E-mail lub Telefon</label>
                    <input type="text" className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] outline-none text-[#1E3A5F]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1">W czym możemy pomóc?</label>
                  <textarea rows={5} className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] outline-none text-[#1E3A5F]"></textarea>
                </div>
                <button className="w-full bg-[#1E3A5F] text-white py-6 rounded-2xl font-bold text-xl hover:bg-[#D4AF37] transition-all shadow-2xl shadow-[#1E3A5F]/20">
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-[#D4AF37]" size={20} />
            </div>
            <span className="font-bold text-xl">LECH-BUD</span>
          </div>
          
          <div className="text-sm font-medium text-slate-400">
            © {new Date().getFullYear()} LECH-BUD Kielce. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#D4AF37]">Prywatność</a>
            <a href="#" className="hover:text-[#D4AF37]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
