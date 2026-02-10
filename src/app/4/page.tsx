"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck, Leaf, Sparkles, Home, Building2, Paintbrush } from "lucide-react"

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
  { title: "Łazienki", desc: "Kompleksowe metamorfozy łazienek. Płytki, biały montaż, armatura.", icon: Sparkles },
  { title: "Biura i lokale", desc: "Profesjonalne wykończenie powierzchni komercyjnych.", icon: Building2 },
  { title: "Klatki schodowe", desc: "Remonty dla wspólnot. Estetyka i trwałość części wspólnych.", icon: Home },
  { title: "Elewacje", desc: "Nowoczesne docieplenia i tynki zewnętrzne.", icon: Leaf },
  { title: "Wykończenia", desc: "Malowanie, szpachlowanie, sufity podwieszane.", icon: Paintbrush },
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

export default function Variant4() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#2D5A3D] selection:bg-[#2D5A3D] selection:text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        
        :root {
          --color-green: #2D5A3D;
          --color-light-green: #E8F5E9;
          --color-sage: #9AB2A0;
        }

        .blob {
          border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        }

        .gradient-bg {
          background: radial-gradient(circle at 10% 20%, rgba(232, 245, 233, 1) 0%, rgba(255, 255, 255, 1) 90%);
        }

        .tab-active {
          background-color: #2D5A3D;
          color: white;
          box-shadow: 0 10px 25px -5px rgba(45, 90, 61, 0.3);
        }

        .reveal-scale {
          opacity: 0;
          animation: revealScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes revealScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-[#2D5A3D]/10 rounded-full px-8 h-20 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2D5A3D]">
              <Leaf size={22} fill="currentColor" />
            </div>
            <span className="font-black text-2xl tracking-tight">LECH-BUD</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm">
            <a href="#uslugi" className="hover:text-green-800 transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-green-800 transition-colors">Realizacje</a>
            <a href="#faq" className="hover:text-green-800 transition-colors">FAQ</a>
            <a href="tel:607176748" className="bg-[#2D5A3D] text-white px-8 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-md">
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
        <div className="fixed inset-0 bg-[#E8F5E9] z-[100] p-10 flex flex-col justify-center items-center text-center">
          <button className="absolute top-8 right-8 text-[#2D5A3D]" onClick={() => setMenuOpen(false)}><X size={32} /></button>
          <div className="space-y-8">
            <a href="#uslugi" onClick={() => setMenuOpen(false)} className="block text-4xl font-black">Usługi</a>
            <a href="#realizacje" onClick={() => setMenuOpen(false)} className="block text-4xl font-black">Realizacje</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-4xl font-black">FAQ</a>
            <a href="tel:607176748" className="block text-2xl font-black text-white bg-[#2D5A3D] px-10 py-5 rounded-full mt-10">
              607 176 748
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Gradient & Organic */}
      <section className="min-h-screen pt-40 pb-20 px-6 gradient-bg flex flex-col items-center justify-center relative overflow-hidden text-center">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#E8F5E9] blob -z-0 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-green-100 blob -z-0 blur-3xl opacity-40"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 reveal-scale">
          <div className="inline-flex items-center gap-2 bg-[#2D5A3D]/5 px-6 py-2 rounded-full text-[#2D5A3D] font-bold text-sm mb-10">
            <Sparkles size={16} />
            Eksperci od Remontów od 1986
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-8 tracking-tighter">
            Odmień swoje <br />
            <span className="text-green-600 italic">wnętrze</span> z pasją.
          </h1>
          <p className="text-xl md:text-2xl text-[#2D5A3D]/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            40 lat doświadczenia w remontach łazienek, biur i klatek schodowych. Naturalna jakość, solidne wykonanie.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#kontakt" className="bg-[#2D5A3D] text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
              Bezpłatna Konsultacja
            </a>
            <a href="#realizacje" className="group flex items-center gap-3 font-bold text-xl hover:gap-5 transition-all">
              Nasze Realizacje <ArrowRight className="text-green-400" />
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="max-w-7xl mx-auto mt-24 px-6 w-full z-10">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 flex flex-wrap justify-center md:justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#2D5A3D] rounded-2xl flex items-center justify-center text-white">
                <ShieldCheck size={32} />
              </div>
              <div className="text-left">
                <div className="font-black text-xl leading-none">40 Lat</div>
                <div className="text-sm font-bold opacity-60">Doświadczenia</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-200 rounded-2xl flex items-center justify-center text-[#2D5A3D]">
                <Check size={32} />
              </div>
              <div className="text-left">
                <div className="font-black text-xl leading-none">Firma Godna</div>
                <div className="text-sm font-bold opacity-60">Zaufania 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm border border-green-50">
                <Paintbrush size={32} />
              </div>
              <div className="text-left">
                <div className="font-black text-xl leading-none">Kielce</div>
                <div className="text-sm font-bold opacity-60">i okolice</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-4xl font-black text-[#2D5A3D]">5.0</div>
              <div className="text-sm font-bold opacity-60">Średnia ocena <br /> na Oferteo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="uslugi" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">W czym pomagamy?</h2>
            <p className="text-[#2D5A3D]/60 max-w-xl mx-auto font-medium">Wybierz kategorię, aby dowiedzieć się więcej o naszych standardach pracy.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-4 rounded-full font-bold transition-all ${activeTab === idx ? 'tab-active' : 'bg-[#E8F5E9] hover:bg-green-100'}`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[40px] p-10 md:p-20 shadow-xl border border-green-50 flex flex-col md:flex-row items-center gap-16 transition-all">
            <div className="md:w-1/2">
              <div className="w-20 h-20 bg-[#E8F5E9] rounded-[30%] flex items-center justify-center text-[#2D5A3D] mb-8">
                {(() => {
                  const Icon = services[activeTab].icon;
                  return <Icon size={40} />;
                })()}
              </div>
              <h3 className="text-4xl font-black mb-6">{services[activeTab].title}</h3>
              <p className="text-xl text-[#2D5A3D]/70 leading-relaxed mb-10">{services[activeTab].desc}</p>
              <ul className="space-y-4 mb-10">
                {["Darmowa wycena i pomiar", "Terminowość realizacji", "Faktura VAT i gwarancja"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <Check size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:607176748" className="inline-flex items-center gap-3 text-[#2D5A3D] font-black text-lg border-b-2 border-[#2D5A3D] pb-1">
                Zapytaj o szczegóły <ArrowRight size={20} />
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-[20%] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <Image 
                  src="/heroLech.webp" 
                  alt={services[activeTab].title} 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E8F5E9] blob -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Organic Cards */}
      <section className="py-32 bg-[#E8F5E9]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="text-5xl font-black text-green-100 mb-6">{idx + 1}.</div>
                <h4 className="text-2xl font-black mb-4 leading-tight">{item.title}</h4>
                <p className="text-[#2D5A3D]/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Smooth Grid */}
      <section id="realizacje" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-6xl font-black">Nasze Prace</h2>
            <div className="bg-[#E8F5E9] px-6 py-3 rounded-full font-bold text-sm">40 Lat Doświadczenia</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative rounded-[40px] overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white p-10 border-t border-green-50 flex justify-between items-center">
                  <div>
                    <div className="text-[#2D5A3D]/40 font-bold uppercase text-xs tracking-widest mb-1">{project.category}</div>
                    <h3 className="text-2xl font-black">{project.title}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-green-100 flex items-center justify-center text-green-500 group-hover:bg-[#2D5A3D] group-hover:text-white transition-all">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center italic">Warto Wiedzieć</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-3xl border border-green-50 overflow-hidden">
                <button 
                  className="w-full px-10 py-8 flex items-center justify-between text-left font-black text-xl hover:bg-[#E8F5E9]/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-8 text-[#2D5A3D]/70 font-medium leading-relaxed border-t border-green-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Split View */}
      <section id="kontakt" className="py-32 px-6 bg-[#E8F5E9]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">
                Buduj z <br /> <span className="text-green-500 italic">naturą</span> jakości.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-[#2D5A3D] rounded-3xl flex items-center justify-center text-white shrink-0">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="font-bold text-[#2D5A3D]/40 uppercase tracking-widest mb-1">Leszek Kozieł</div>
                    <a href="tel:607176748" className="text-4xl font-black hover:text-green-600 transition-colors">607 176 748</a>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white border border-green-100 rounded-3xl flex items-center justify-center text-[#2D5A3D] shrink-0 shadow-sm">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <div className="font-bold text-[#2D5A3D]/40 uppercase tracking-widest mb-1">Nasza Baza</div>
                    <div className="text-2xl font-black">Nowaka-Jeziorańskiego 73 <br /> Kielce</div>
                  </div>
                </div>
                <div className="p-8 bg-white/60 backdrop-blur rounded-[40px] inline-flex items-center gap-4">
                  <ShieldCheck size={40} className="text-green-500" />
                  <div>
                    <div className="font-black text-xl">Godna Zaufania</div>
                    <div className="text-sm font-bold opacity-60 italic">Certyfikat od 2016 r.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="bg-white p-12 md:p-16 rounded-[60px] shadow-2xl border border-green-50 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Imię i Nazwisko" className="bg-[#E8F5E9]/40 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#2D5A3D] outline-none font-bold" />
                  <input type="tel" placeholder="Twój Telefon" className="bg-[#E8F5E9]/40 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#2D5A3D] outline-none font-bold" />
                </div>
                <select className="w-full bg-[#E8F5E9]/40 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#2D5A3D] outline-none font-bold appearance-none">
                  <option>Interesuje mnie remont...</option>
                  <option>Łazienka</option>
                  <option>Biuro / Lokal</option>
                  <option>Klatka schodowa</option>
                  <option>Elewacja</option>
                </select>
                <textarea rows={4} placeholder="Twoja wiadomość..." className="w-full bg-[#E8F5E9]/40 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#2D5A3D] outline-none font-bold"></textarea>
                <button className="w-full bg-[#2D5A3D] text-white py-8 rounded-[30px] font-black text-2xl hover:bg-green-800 transition-all hover:shadow-2xl hover:scale-[1.02]">
                  Wyślij Wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2D5A3D]">
              <Leaf size={22} fill="currentColor" />
            </div>
            <span className="font-black text-2xl tracking-tight">LECH-BUD</span>
          </div>
          
          <div className="text-[#2D5A3D]/40 font-bold text-sm">
            © {new Date().getFullYear()} LECH-BUD Leszek Kozieł. Budujemy z pasją od 1986.
          </div>
          
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-green-800">Prywatność</a>
            <a href="#" className="hover:text-green-800">Certyfikaty</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
