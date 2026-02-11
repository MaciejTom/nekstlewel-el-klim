import type { ReviewsContent } from "@/types"

export const reviewsContent: ReviewsContent = {
  title: "Co mówią klienci",
  subtitle: "Kilka opinii od osób, które nam zaufały",
  reviews: [
    {
      rating: 5,
      quote: "Instalacja fotowoltaiczna wykonana solidnie i terminowo. Rachunki za prąd praktycznie zerowe - to mówi samo za siebie.",
      authorName: "Tomasz K.",
      authorLabel: "Fotowoltaika domowa",
    },
    {
      rating: 5,
      quote: "Montaż instalacji elektrycznej w nowym domu. Wszystko zrobione terminowo, pan Ryszard doradził w kilku kwestiach technicznych.",
      authorName: "Małgorzata W.",
      authorLabel: "Instalacja elektryczna",
      featured: true,
    },
    {
      rating: 5,
      quote: "Fotowoltaika 10 kW na firmie. Profesjonalne podejście od wyceny po uruchomienie. Polecam.",
      authorName: "Andrzej S.",
      authorLabel: "Instalacja firmowa",
    },
  ],
}
