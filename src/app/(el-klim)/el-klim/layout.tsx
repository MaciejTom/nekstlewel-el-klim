import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export default function ElKlimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-poppins)' }}>
      {children}
    </div>
  );
}
