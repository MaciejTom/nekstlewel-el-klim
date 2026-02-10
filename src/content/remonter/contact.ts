import type { ContactContent } from "@/types"

export const contactContent: ContactContent = {
  badge: "Kontakt",
  title: "Zadzwoń - właściciel odbiera",
  description: "Masz pytania? Chcesz wycenę? Zadzwoń lub napisz. Odpowiadam osobiście, nie automat.",
  phone: "692 243 186",
  address: "ul. Szpitalna 27/4, 38-300 Gorlice",
  hours: "Pon-Pt 7:00-18:00, Sob 8:00-14:00",
  showImage: false,
  contactItems: [
    { icon: "Phone", label: "692 243 186" },
    { icon: "Phone", label: "728 294 808" },
    { icon: "Mail", label: "elklim.gorlice@gmail.com" },
    { icon: "MapPin", label: "Gorlice i okolice" },
    { icon: "Clock", label: "Pon-Pt 7:00-18:00" },
  ],
  formTitle: "Bezpłatna wycena",
  fields: [
    { label: "Imię", placeholder: "Twoje imię", type: "text" as const, half: true },
    { label: "Telefon", placeholder: "Numer telefonu", type: "tel" as const, half: true },
    { label: "Opis prac", placeholder: "Opisz krótko, co trzeba zrobić...", type: "textarea" as const },
  ],
  submitText: "Wyślij zapytanie",
}
