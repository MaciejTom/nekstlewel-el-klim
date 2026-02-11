export const portfolioContent = {
  tagline: "Realizacje",
  title: "Nasze",
  titleAccent: "realizacje",
  subtitle: "Zobacz co już zrobiliśmy. Fotowoltaika, elektryka, SAP, instalacje odgromowe.",
  stats: [
    { value: "50+", label: "Instalacji", highlight: false },
    { value: "100%", label: "Zadowolonych", highlight: true },
  ],
  projects: [
    // === FOTOWOLTAIKA ===
    // Index 0 - landscape
    {
      title: "Farma naziemna",
      category: "Farma PV",
      specs: "Duża instalacja naziemna",
      image: "/images/el-klim/farma-naziemna.png",
      featured: true,
    },
    // Index 1 - ROW-SPAN-2 (portrait!) - jedyne zdjęcie pionowe
    {
      title: "Instalacja naziemna przy domu",
      category: "Dom jednorodzinny",
      specs: "Panele w ogrodzie, optymalny kąt",
      image: "/images/el-klim/dom-naziemna.png",
    },
    // Index 2 - landscape
    {
      title: "Dom jednorodzinny",
      category: "Dom jednorodzinny",
      specs: "Dach skośny, widok z drona",
      image: "/images/el-klim/dom-dach.png",
    },
    // Index 3 - landscape (panorama - objectPosition: center)
    {
      title: "Szkoła Podstawowa w Klęczanach",
      category: "Budynek publiczny",
      specs: "Instalacja dachowa, projekt gminny",
      image: "/images/el-klim/szkola.png",
      objectPosition: "center 60%",
    },
    // Index 4 - landscape
    {
      title: "Stodoła z panelami",
      category: "Budynek gospodarczy",
      specs: "Instalacja na dachu stodoły",
      image: "/images/el-klim/stodola.png",
    },
    // Index 5 - landscape
    {
      title: "Dach płaski - hala",
      category: "Budynek komercyjny",
      specs: "Konstrukcja wsporcza na dachu płaskim",
      image: "/images/el-klim/hala-dach.png",
    },
    // Index 6 - landscape
    {
      title: "Budynek gospodarczy",
      category: "Budynek gospodarczy",
      specs: "Instalacja na dachu warsztatu",
      image: "/images/el-klim/hala.png",
    },
    // === INNE USŁUGI ===
    // Index 7 - landscape
    {
      title: "Rozdzielnica elektryczna",
      category: "Elektryka",
      specs: "Profesjonalny montaż rozdzielnicy",
      image: "/images/el-klim/elektryka-rozdzielnica.jpg",
    },
    // Index 8 - landscape
    {
      title: "System sygnalizacji pożaru",
      category: "SAP",
      specs: "Montaż czujek dymu i centrali",
      image: "/images/el-klim/sap-czujka.jpg",
    },
    // Index 9 - landscape
    {
      title: "Instalacja odgromowa",
      category: "Odgromowe",
      specs: "Zwody i przewody na dachu",
      image: "/images/el-klim/odgromowe-dach.jpg",
    },
  ],
  galleryButton: {
    text: "Zadzwoń po wycenę",
    href: "#kontakt",
  },
}
