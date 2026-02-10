# Prompt: 10 wariantów sekcji kontakt dla LECH-BUD

## Kontekst
Mam stronę firmy remontowo-budowlanej "LECH-BUD" z Kielc w Next.js + Tailwind CSS + TypeScript.
Plik głównej strony: `src/app/page.tsx`

## Dane kontaktowe (NIEZMIENNE):
- **Telefon**: 607 176 748
- **Adres**: Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce
- **Godziny**: wt-pt od 07:00
- **Właściciel**: Leszek Kozieł

## Pola formularza (NIEZMIENNE):
- Imię (text)
- Telefon (tel)
- Opis prac (textarea)
- Przycisk: "Wyślij zapytanie"

## Zadanie
Stwórz **10 RÓŻNYCH wariantów sekcji kontaktowej** jako osobne komponenty React (ContactVariant1, ContactVariant2, ... ContactVariant10).

**WAŻNE**: Wszystkie 10 wariantów umieść PONIŻEJ istniejącej sekcji `<ContactSection />` na głównej stronie, przed `<Footer />`.

Dodaj nagłówek separujący warianty:
```tsx
{/* ========== GALERIA WARIANTÓW KONTAKT ========== */}
<div className="py-12 bg-muted border-y-4 border-primary">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-foreground">Warianty sekcji kontakt</h2>
    <p className="text-muted-foreground mt-2">10 różnych układów do wyboru</p>
  </div>
</div>
```

## 10 wariantów do stworzenia:

### 1. Split 50/50 Classic
Klasyczny podział: lewa strona - informacje kontaktowe z ikonami, prawa strona - formularz w karcie.

### 2. Formularz Centralny
Duży formularz na środku, dane kontaktowe w małych kartach po bokach lub pod spodem.

### 3. Karty Kontaktowe
3 karty z danymi (telefon, adres, godziny) na górze, formularz poniżej na całą szerokość.

### 4. Dark Section
Ciemne tło (bg-gray-900 lub similar), jasny formularz, kontrastowe akcenty.

### 5. Minimalistyczny
Bardzo prosty układ, dużo białej przestrzeni, tylko niezbędne elementy, subtelne linie.

### 6. Z Mapą (placeholder)
Lewa strona - placeholder na mapę Google (szary box z ikoną), prawa - formularz i dane.

### 7. Full-Width Header
Duży nagłówek "Zadzwoń do Leszka" na całą szerokość u góry, poniżej grid z formularzem i danymi.

### 8. Asymetryczny
Nieregularny układ - elementy nachodzą na siebie, różne wielkości kart, ciekawe proporcje.

### 9. Timeline / Steps
Kontakt jako 3 kroki: 1) Zadzwoń lub napisz → 2) Opisz projekt → 3) Umów oględziny. Formularz jako krok 2.

### 10. CTA-Focused
Ogromny przycisk telefonu jako główny element (hero-style), formularz jako alternatywa "lub napisz do nas" poniżej.

## Wytyczne stylowe:

### Kolory (używaj CSS variables):
- `bg-background`, `bg-card`, `bg-muted`, `bg-muted/30`
- `text-foreground`, `text-muted-foreground`
- `bg-primary`, `text-primary`, `text-primary-foreground`
- `border-border`, `border-border/50`
- Dla dark sections: `bg-gray-900`, `bg-gray-800`, `text-white`

### Ikony (lucide-react):
- Phone, MapPin, Clock, Mail, ArrowRight, Send, MessageSquare, User

### Styl branży budowlanej:
- Profesjonalny, godny zaufania
- Stonowane kolory (szarości, brązy, ceglane akcenty dopuszczalne)
- Bez neonowych gradientów i pastelowych kolorów
- Zaokrąglenia: max `rounded-lg`, preferuj `rounded-sm`
- Cienie: `shadow-sm`, `shadow-md`, `shadow-lg`

### Techniczne:
- Każdy wariant to osobna funkcja komponentu
- Formularze mogą być uproszczone (bez pełnej walidacji) - tylko struktura HTML
- Responsywność: mobile-first, grid dla większych ekranów
- Każdy wariant z komentarzem opisującym styl

## Struktura w pliku page.tsx:

```tsx
// ... istniejący kod ...

// ===========================================
// CONTACT VARIANTS
// ===========================================

function ContactVariant1() {
  // Split 50/50 Classic
  return (...)
}

function ContactVariant2() {
  // Formularz Centralny
  return (...)
}

// ... kolejne warianty ...

// W komponencie HomePage:
export default function HomePage() {
  return (
    <>
      {/* ... istniejące sekcje ... */}
      <ContactSection />

      {/* GALERIA WARIANTÓW */}
      <div className="py-12 bg-muted border-y-4 border-primary">...</div>
      <ContactVariant1 />
      <ContactVariant2 />
      <ContactVariant3 />
      <ContactVariant4 />
      <ContactVariant5 />
      <ContactVariant6 />
      <ContactVariant7 />
      <ContactVariant8 />
      <ContactVariant9 />
      <ContactVariant10 />

      <Footer />
    </>
  )
}
```

## NIE UŻYWAJ:
- Gradientów neonowych (fiolet, różowy, cyan)
- Pastelowych kolorów
- Zbyt okrągłych elementów (rounded-full na dużych boxach)
- Skomplikowanych animacji
- Zewnętrznych bibliotek UI (tylko Tailwind + lucide-react)
