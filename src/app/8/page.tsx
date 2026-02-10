"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Heart, Smile, Star, Coffee } from "lucide-react"

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
  { title: "Łazienki", desc: "Tworzymy Twoje domowe spa. Od kafelków po kran – zajmiemy się wszystkim!", color: "bg-orange-50" },
  { title: "Biura i lokale", desc: "Przestrzeń, w której chce się pracować. Odświeżymy Twoje biuro szybko i bez stresu.", color: "bg-amber-50" },
  { title: "Klatki schodowe", desc: "Zadbana klatka to wizytówka sąsiadów. Robimy czysto i solidnie.", color: "bg-stone-100" },
  { title: "Elewacje", desc: "Nowy wygląd Twojego domu. Ciepło w środku, pięknie na zewnątrz.", color: "bg-orange-100/50" },
  { title: "Wykończenia", desc: "Twój pomysł, nasze wykonanie. Od pustych ścian do wymarzonego domu.", color: "bg-white" },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Obiekty publiczne", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Biurowce", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Wspólnoty", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Łazienki", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
]

const faqs = [
  { q: "Czy robicie dla wspólnot mieszkaniowych?", a: "Jasne! Bardzo lubimy takie projekty. Klatki schodowe to nasza specjalność." },
  { q: "Czy wystawiacie faktury?", a: "Oczywiście. Działamy legalnie od 1986 roku, więc pełna faktura VAT to u nas standard." },
  { q: "Jaki jest Wasz obszar działania?", a: "Działamy głównie w Kielcach i okolicach, ale całe świętokrzyskie jest w naszym zasięgu." },
  { q: "Ile trwa remont łazienki?", a: "Zazwyczaj zamykamy się w 2 tygodniach, żebyś mógł jak najszybciej cieszyć się nową wanną." },
]

const whyUs = [
  { title: "Od 1986 roku", desc: "40 lat doświadczenia to gwarancja, że nic nas nie zaskoczy." },
  { title: "Pełne zaufanie", desc: "Mamy certyfikat 'Firma Godna Zaufania' i setki uśmiechniętych klientów." },
  { title: "Zgodnie z planem", desc: "Umawiamy się na konkretny termin i go dotrzymujemy. Bez wymówek." },
  { title: "Czysto i miło", desc: "Dbamy o porządek w trakcie prac i o dobrą atmosferę współpracy." },
]

export default function Variant8() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#78716C] selection:bg-[#EA580C] selection:text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        
        .soft-card {
          border-radius: 40px;
          background: #FFF8F0;
          box-shadow: 20px 20px 60px #d9d3cc, -20px -20px 60px #ffffff;
        }

        .soft-button {
          border-radius: 20px;
          background: #EA580C;
          box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
        }

        .reveal-pop {
          opacity: 0;
          animation: revealPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes revealPop {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white rounded-[30px] px-8 h-20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#EA580C]">
              <Smile size={24} />
            </div>
            <span className="font-black text-2xl tracking-tight text-[#EA580C]">LECH-BUD</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm">
            <a href="#uslugi" className="hover:text-[#EA580C] transition-colors">Nasza Oferta</a>
            <a href="#realizacje" className="hover:text-[#EA580C] transition-colors">Galeria</a>
            <a href="#faq" className="hover:text-[#EA580C] transition-colors">Pytania</a>
            <a href="tel:607176748" className="soft-button text-white px-8 py-3 flex items-center gap-2 hover:scale-105 transition-all">
              <Phone size={18} />
              607 176 748
            </a>
          </div>

          <button className="lg:hidden text-[#EA580C]" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#FFF8F0] z-[100] p-10 flex flex-col justify-center items-center text-center">
          <button className="absolute top-8 right-8 text-[#EA580C]" onClick={() => setMenuOpen(false)}><X size={40} /></button>
          <div className="space-y-8">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block text-4xl font-black text-[#EA580C]">OFERTA</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block text-4xl font-black text-[#EA580C]">GALERIA</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-4xl font-black text-[#EA580C]">FAQ</a>
            <a href="tel:607176748" className="block soft-button text-white px-10 py-5 text-2xl font-black">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative reveal-pop">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-[50px] overflow-hidden border-8 border-white shadow-2xl">
              <Image 
                src="/heroLech.webp" 
                alt="Szczęśliwy dom" 
                width={800} 
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2 reveal-pop" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-white text-[#EA580C] px-6 py-2 rounded-full font-bold text-sm mb-8 shadow-sm">
              <Heart size={16} fill="currentColor" />
              Remontujemy z sercem od 1986
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#EA580C] leading-[1.1] mb-8 tracking-tighter">
              Twój dom, <br />
              <span className="text-[#78716C]">Twoje zasady,</span> <br />
              nasza jakość.
            </h1>
            <p className="text-xl md:text-2xl text-[#78716C]/70 mb-12 max-w-xl font-medium leading-relaxed">
              Dzień dobry! Jestem Leszek i od blisko 40 lat dbam o to, by kieleckie mieszkania stawały się piękniejsze. Zapraszam do współpracy!
            </p>
            
            {/* Contact Card Overlay */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="text-xl font-black text-[#EA580C] mb-6 flex items-center gap-3">
                  <Coffee size={24} /> Darmowa Wycena
                </div>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input type="tel" placeholder="Twój numer telefonu" className="w-full bg-[#FFF8F0] border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#EA580C] outline-none font-bold" />
                  <button className="w-full soft-button text-white py-5 font-black text-xl hover:scale-[1.02] transition-all">
                    Oddzwoń do mnie!
                  </button>
                </form>
                <p className="text-xs text-center mt-4 opacity-50 font-bold">Zadzwonię do Ciebie w ciągu 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, idx) => (
            <div key={idx} className="bg-white/40 p-8 rounded-[30px] border border-white flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#EA580C] mb-6">
                <Star size={24} fill="currentColor" />
              </div>
              <h4 className="text-xl font-black text-[#EA580C] mb-2">{item.title}</h4>
              <p className="text-sm font-bold opacity-60 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services - Horizontal Scroll / Cards */}
      <section id="uslugi" className="py-32 px-6 bg-white rounded-[80px_80px_0_0] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#EA580C] mb-6">W czym możemy pomóc?</h2>
            <div className="w-24 h-2 bg-orange-100 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide px-4">
            {services.map((service, idx) => (
              <div key={idx} className={`${service.color} min-w-[300px] md:min-w-[400px] p-12 rounded-[50px] border-4 border-white shadow-lg group hover:-translate-y-4 transition-all duration-500`}>
                <div className="w-20 h-20 bg-white rounded-[30px] flex items-center justify-center text-[#EA580C] mb-10 shadow-sm group-hover:rotate-12 transition-transform">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-3xl font-black text-[#EA580C] mb-6">{service.title}</h3>
                <p className="text-xl font-medium opacity-70 leading-relaxed mb-10">{service.desc}</p>
                <div className="flex items-center gap-4 text-[#EA580C] font-black">
                  Czytaj więcej <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Friendly Grid */}
      <section id="realizacje" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20">Zobacz nasze prace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative rounded-[60px] overflow-hidden aspect-[4/3] shadow-xl border-[10px] border-white">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur rounded-[30px] translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#EA580C] font-black text-xs uppercase mb-1">{project.category}</div>
                  <h3 className="text-2xl font-black text-[#78716C]">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Rounded style */}
      <section id="faq" className="py-32 bg-[#EA580C] text-white rounded-[0_0_80px_80px]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 italic">Warto zapytać</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/10 rounded-[30px] border border-white/20">
                <button 
                  className="w-full px-10 py-8 flex items-center justify-between text-left font-black text-xl"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-8 font-bold opacity-80 leading-relaxed text-lg border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-6 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-2xl flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-black text-[#EA580C] mb-12 tracking-tighter">Bądźmy w <br /> kontakcie!</h2>
              <div className="space-y-10">
                <div className="flex gap-8 items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-[25px] flex items-center justify-center text-[#EA580C]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-black opacity-40 uppercase mb-1">Dzwoń śmiało:</div>
                    <a href="tel:607176748" className="text-4xl font-black text-[#EA580C]">607 176 748</a>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-[25px] flex items-center justify-center text-[#78716C]">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-black opacity-40 uppercase mb-1">Gdzie jesteśmy:</div>
                    <div className="text-2xl font-black">Jana Nowaka-Jeziorańskiego 73 <br /> Kielce</div>
                  </div>
                </div>
              </div>
              <div className="mt-16 p-10 bg-[#FFF8F0] rounded-[40px] border-4 border-dashed border-orange-200">
                <div className="flex items-center gap-4 mb-4 text-[#EA580C]">
                  <ShieldCheck size={40} />
                  <span className="font-black text-2xl uppercase italic">Zaufana Firma</span>
                </div>
                <p className="font-bold opacity-60">Posiadamy certyfikaty Firma Godna Zaufania oraz Certyfikat KRD. Jesteś w dobrych rękach.</p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="space-y-8 bg-[#FFF8F0]/50 p-10 rounded-[50px] border-2 border-white">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest ml-4">Jak masz na imię?</label>
                  <input type="text" className="w-full bg-white border-none rounded-3xl p-6 focus:ring-2 focus:ring-[#EA580C] outline-none font-bold shadow-sm" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest ml-4">Gdzie oddzwonić?</label>
                  <input type="tel" className="w-full bg-white border-none rounded-3xl p-6 focus:ring-2 focus:ring-[#EA580C] outline-none font-bold shadow-sm" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest ml-4">Co planujemy?</label>
                  <textarea rows={4} className="w-full bg-white border-none rounded-3xl p-6 focus:ring-2 focus:ring-[#EA580C] outline-none font-bold shadow-sm"></textarea>
                </div>
                <button className="w-full soft-button text-white py-8 font-black text-2xl hover:scale-[1.03] transition-all shadow-lg">
                  Wyślij wiadomość!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#EA580C]">
              <Smile size={24} />
            </div>
            <span className="font-black text-2xl tracking-tight text-[#EA580C]">LECH-BUD</span>
          </div>
          <p className="font-bold opacity-30 text-sm">
            © {new Date().getFullYear()} LECH-BUD Leszek Kozieł. Budujemy radość w Kielcach od 1986 r.
          </p>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-[#EA580C]">Prywatność</a>
            <a href="#" className="hover:text-[#EA580C]">Opinie</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
