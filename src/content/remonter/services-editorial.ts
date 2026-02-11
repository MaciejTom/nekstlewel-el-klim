import type { ServiceEditorialContent } from "@/types"

export const servicesEditorialContent: ServiceEditorialContent = {
  title: "Co",
  titleBreak: "robimy",
  subtitle: "Specjalizujemy się w fotowoltaice, ale zrobimy też elektrykę, SAP czy instalację odgromową. Zadzwoń - powiem czy się za to weźmiemy.",

  services: [
    {
      icon: "home",
      step: "Usługa 01",
      title: "Instalacje fotowoltaiczne",
      description: "Dobieramy moc instalacji do Twojego zużycia. Domy jednorodzinne, budynki firmowe, hale, farmy naziemne. Montaż, uruchomienie, zgłoszenie do operatora.",
      features: [
        "Projekt i dobór mocy",
        "Montaż paneli i inwertera",
        "Podłączenie i uruchomienie",
        "Zgłoszenie do zakładu energetycznego",
        "Serwis gwarancyjny",
      ],
      image: "/images/el-klim/dom-dach.png",
      imageAlt: "Instalacja fotowoltaiczna na dachu domu",
    },
    {
      icon: "construction",
      step: "Usługa 02",
      title: "Instalacje elektryczne",
      description: "Od nowej instalacji w budowanym domu po naprawę awarii. Przeglądy okresowe, pomiary, wymiana rozdzielnic.",
      features: [
        "Instalacje w nowych budynkach",
        "Modernizacja starych instalacji",
        "Naprawy i awarie",
        "Przeglądy i pomiary",
      ],
      image: "/images/el-klim/rozdzielnica.png",
      imageAlt: "Rozdzielnica elektryczna",
    },
    {
      icon: "stairs",
      step: "Usługa 03",
      title: "Usługi specjalistyczne",
      description: "Systemy alarmowe, oddymianie, instalacje odgromowe i teletechnika. Jeśli wymaga elektryka - zadzwoń, powiem czy to robimy.",
      features: [
        "Systemy alarmowe (SAP)",
        "Systemy oddymiania",
        "Instalacje odgromowe",
        "Teletechnika",
      ],
      image: "/images/el-klim/inwerter.png",
      imageAlt: "Inwerter Huawei",
    },
  ],

  cta: {
    title: "Potrzebujesz wyceny?",
    description: "Zadzwoń - właściciel odbiera i wycenia osobiście.",
    buttonText: "Zadzwoń: 692 243 186",
    buttonIcon: "phone",
  },
}
