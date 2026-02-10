"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Star } from "lucide-react"

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
  { title: "Łazienki", desc: "Kompleksowe wykończenie: płytki, kabiny, armatura." },
  { title: "Biura i lokale", desc: "Malowanie, wykładziny, sufity podwieszane." },
  { title: "Klatki schodowe", desc: "Remonty dla wspólnot mieszkaniowych i spółdzielni." },
  { title: "Elewacje", desc: "Docieplenia i tynki o wysokiej trwałości." },
  { title: "Wykończenia", desc: "Od stanu deweloperskiego do pełnego zamieszkania." },
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

export default function Variant1() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#5C4A3A] selection:bg-[#8B7355] selection:text-white" style={{ fontFamily: "'Source Serif 4', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');
        
        :root {
          --color-bg: #FDF8F3;
          --color-primary: #8B7355;
          --color-secondary: #5C4A3A;
          --color-accent: #C2703E;
          --text-hero: clamp(2.5rem, 1.5rem + 5vw, 5rem);
        }

        h1, h2, h3, .font-display {
          font-family: 'Libre Baskerville', serif;
        }

        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .reveal {
          opacity: 0;
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#8B7355]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8B7355] flex items-center justify-center text-white rounded-sm font-display font-bold text-xl">L</div>
            <span className="font-display font-bold text-2xl tracking-tight uppercase">Lech-Bud</span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-widest">
            <a href="#uslugi" className="hover:text-[#8B7355] transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-[#8B7355] transition-colors">Realizacje</a>
            <a href="#faq" className="hover:text-[#8B7355] transition-colors">FAQ</a>
            <a href="tel:607176748" className="bg-[#8B7355] text-white px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-[#5C4A3A] transition-all transform hover:-translate-y-0.5">
              <Phone size={16} />
              607 176 748
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#FDF8F3] z-[100] p-10 flex flex-col items-center justify-center gap-8 text-center">
          <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <a href="#uslugi" onClick={() => setMenuOpen(false)} className="font-display text-3xl">Usługi</a>
          <a href="#realizacje" onClick={() => setMenuOpen(false)} className="font-display text-3xl">Realizacje</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="font-display text-3xl">FAQ</a>
          <a href="tel:607176748" className="font-display text-2xl text-[#8B7355] mt-4 flex items-center gap-2">
            <Phone size={24} />
            607 176 748
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 paper-texture overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 reveal" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#8B7355] text-[#8B7355] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <ShieldCheck size={14} />
              Od 1986 roku w Kielcach
            </div>
            <h1 className="text-[var(--text-hero)] leading-[1.1] mb-8 font-bold">
              Tradycja rzemiosła, <br /> 
              <span className="italic text-[#8B7355]">nowoczesne</span> wnętrza.
            </h1>
            <p className="text-xl md:text-2xl text-[#5C4A3A]/80 max-w-2xl leading-relaxed mb-10">
              40 lat doświadczenia w remontach łazienek, biur i klatek schodowych. Tworzymy przestrzenie, które przetrwają próbę czasu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontakt" className="bg-[#8B7355] text-white px-10 py-5 rounded-sm font-bold text-lg flex items-center gap-3 hover:bg-[#5C4A3A] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#8B7355]/20">
                Bezpłatna wycena
                <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-5 bg-white/50 backdrop-blur-sm border border-[#8B7355]/10 rounded-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-8 h-8 rounded-full bg-[#8B7355] border-2 border-[#FDF8F3] flex items-center justify-center">
                      <Star size={12} className="text-white fill-current" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-sm">Ocena 5.0</div>
                  <div className="text-xs opacity-70">Zaufanie setek klientów</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 relative reveal" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/heroLech.webp" 
                alt="Remont łazienki Kielce" 
                width={800} 
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-[#8B7355]/20 -z-0"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-[#8B7355]/20 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#5C4A3A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold mb-2">1986</div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-60">Rok założenia</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold mb-2">40</div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-60">Lat pasji</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold mb-2">5.0</div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-60">Ocena Oferteo</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold mb-2">100%</div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-60">Terminowości</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#8B7355] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Nasza oferta</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">W czym się specjalizujemy</h2>
            <div className="w-24 h-1 bg-[#8B7355] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#8B7355]/10">
            {services.map((service, idx) => (
              <div key={idx} className="p-12 bg-white hover:bg-[#FDF8F3] transition-colors border-b border-r border-[#8B7355]/10 group">
                <div className="w-12 h-12 mb-8 flex items-center justify-center border border-[#8B7355]/20 group-hover:bg-[#8B7355] group-hover:text-white transition-all">
                  <span className="font-display font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#5C4A3A]/70 leading-relaxed mb-6">{service.desc}</p>
                <a href="#kontakt" className="inline-flex items-center gap-2 text-[#8B7355] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Dowiedz się więcej <ArrowRight size={16} />
                </a>
              </div>
            ))}
            <div className="p-12 bg-[#8B7355] text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Inne prace?</h3>
              <p className="opacity-80 mb-8">Zadzwoń i zapytaj o nietypowe zlecenia. Chętnie doradzimy.</p>
              <a href="tel:607176748" className="font-bold text-xl flex items-center gap-3">
                <Phone size={24} />
                607 176 748
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Split Section */}
      <section className="py-24 px-6 bg-[#5C4A3A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <span className="text-[#8B7355] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Dlaczego LECH-BUD?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Zaufanie budowane przez dekady działalności.</h2>
            <div className="space-y-8">
              {whyUs.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B7355] flex items-center justify-center text-xs font-bold">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <Image 
                src="/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" 
                alt="Realizacja Lech-Bud" 
                width={600} 
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#8B7355] p-10 hidden md:block">
              <div className="text-5xl font-bold mb-2">40</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="realizacje" className="py-24 px-6 paper-texture">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[#8B7355] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold">Nasze ostatnie projekty</h2>
            </div>
            <a href="#kontakt" className="text-[#8B7355] font-bold border-b-2 border-[#8B7355] pb-1 hover:text-[#5C4A3A] hover:border-[#5C4A3A] transition-all">
              Zobacz wszystkie realizacje
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-sm mb-6 relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#5C4A3A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 border border-white flex items-center justify-center text-white">
                      <ArrowRight size={32} />
                    </div>
                  </div>
                </div>
                <div className="text-xs uppercase tracking-widest text-[#8B7355] font-bold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold group-hover:text-[#8B7355] transition-colors">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Często zadawane pytania</h2>
            <p className="text-[#5C4A3A]/70">Odpowiedzi na najważniejsze kwestie dotyczące współpracy.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#8B7355]/20 rounded-sm">
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#FDF8F3] transition-colors"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-64' : 'max-h-0'}`}>
                  <div className="px-8 pb-8 text-[#5C4A3A]/80 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-6 bg-[#FDF8F3] paper-texture">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-[#8B7355]/10 shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 bg-[#8B7355] text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-10">Zacznijmy Twój remont już dziś.</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Zadzwoń do nas</div>
                    <div className="text-2xl font-bold">607 176 748</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Adres biura</div>
                    <div className="text-xl font-bold">Jana Nowaka-Jeziorańskiego 73<br />25-432 Kielce</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Godziny pracy</div>
                    <div className="text-xl font-bold">Wtorek - Piątek od 07:00</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 pt-10 border-t border-white/10">
                <div className="text-sm italic opacity-80">
                  "Jakość, której możesz zaufać od 1986 roku. Każdy remont traktuję jak u siebie w domu."
                </div>
                <div className="mt-4 font-bold">— Leszek Kozieł, Właściciel</div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-12 md:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Imię i Nazwisko</label>
                    <input type="text" className="w-full bg-[#FDF8F3] border-b border-[#8B7355]/30 p-4 outline-none focus:border-[#8B7355] transition-colors" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Numer telefonu</label>
                    <input type="tel" className="w-full bg-[#FDF8F3] border-b border-[#8B7355]/30 p-4 outline-none focus:border-[#8B7355] transition-colors" placeholder="+48 000 000 000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Rodzaj remontu</label>
                  <select className="w-full bg-[#FDF8F3] border-b border-[#8B7355]/30 p-4 outline-none focus:border-[#8B7355] transition-colors">
                    <option>Wybierz usługę...</option>
                    <option>Remont łazienki</option>
                    <option>Biura i lokale</option>
                    <option>Klatki schodowe</option>
                    <option>Wykończenia wnętrz</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Wiadomość</label>
                  <textarea rows={4} className="w-full bg-[#FDF8F3] border-b border-[#8B7355]/30 p-4 outline-none focus:border-[#8B7355] transition-colors" placeholder="Opisz krótko swój projekt..."></textarea>
                </div>
                <button className="w-full bg-[#5C4A3A] text-white py-6 font-bold uppercase tracking-[0.2em] hover:bg-[#8B7355] transition-colors shadow-lg">
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C4A3A] text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B7355] flex items-center justify-center text-white rounded-sm font-display font-bold">L</div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">Lech-Bud</span>
          </div>
          
          <div className="text-sm opacity-60 text-center">
            © {new Date().getFullYear()} LECH-BUD Leszek Kozieł. Wszystkie prawa zastrzeżone.
          </div>
          
          <div className="flex gap-6 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#8B7355] transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-[#8B7355] transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
