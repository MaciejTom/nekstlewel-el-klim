import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://el-klim.pl"),
  title: "EL-KLIM | Fotowoltaika i instalacje elektryczne",
  description: "Fotowoltaika, instalacje elektryczne, teletechniczne, systemy sygnalizacji pożaru i oddymiania. Profesjonalny montaż i serwis. Tel. 692 243 186",
  openGraph: {
    title: "EL-KLIM | Fotowoltaika i instalacje elektryczne",
    description: "Fotowoltaika, instalacje elektryczne, teletechniczne, systemy sygnalizacji pożaru i oddymiania. Profesjonalny montaż i serwis.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/el-klim/1.jpg",
        width: 1200,
        height: 630,
        alt: "EL-KLIM - fotowoltaika i instalacje elektryczne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EL-KLIM | Fotowoltaika i instalacje elektryczne",
    description: "Fotowoltaika, instalacje elektryczne, teletechniczne, systemy sygnalizacji pożaru i oddymiania.",
    images: ["/images/el-klim/1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={bebasNeue.variable}>
        {children}
      </body>
    </html>
  );
}
