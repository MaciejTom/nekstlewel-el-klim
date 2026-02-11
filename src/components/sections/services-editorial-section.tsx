import Image from "next/image"
import type { ServiceEditorialContent } from "@/types"
import { Home, Hammer, Paintbrush, Bath, Layers, Check, Phone } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  construction: Hammer,
  format_paint: Paintbrush,
  bathroom: Bath,
  stairs: Layers,
  phone: Phone,
}

const s = {
  // Section
  section: "relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden",
  gradient: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50 pointer-events-none",
  container: "max-w-7xl mx-auto flex flex-col items-center relative z-10",

  // Header
  header: "text-center max-w-3xl mb-16 relative z-10",
  title: "text-4xl md:text-5xl font-bold text-foreground mb-6 relative inline-block tracking-tight",
  titleBreak: "block mt-2",
  titleUnderline: "absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary opacity-80",
  subtitle: "text-muted-foreground text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto",

  // Services grid - 3 columns
  grid: "w-full grid grid-cols-1 md:grid-cols-3 gap-8",

  // Service card
  card: "group relative bg-card rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
  imageWrap: "relative h-56 w-full overflow-hidden",
  image: "object-cover transition-transform duration-700 group-hover:scale-105",
  cardContent: "p-6",

  // Step badge
  badge: "flex items-center gap-3 mb-4",
  iconCircle: "flex items-center justify-center w-10 h-10 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 rounded-sm",
  stepLabel: "uppercase tracking-widest text-xs font-bold text-primary",

  // Service text
  serviceTitle: "text-xl font-bold text-foreground mb-3 tracking-tight",
  serviceDesc: "text-muted-foreground text-sm leading-relaxed mb-4",

  // Features
  featureList: "space-y-2",
  featureItem: "flex items-center gap-2",
  featureIconWrap: "w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0",
  featureIcon: "text-primary-foreground w-2.5 h-2.5 stroke-[3]",
  featureText: "text-sm text-foreground/80",

  // CTA
  cta: "mt-16 w-full max-w-7xl bg-secondary text-secondary-foreground rounded-sm p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",
  ctaTitle: "text-2xl md:text-3xl text-secondary-foreground font-bold mb-2 md:mb-0 tracking-tight relative z-10",
  ctaDesc: "text-secondary-foreground/70 relative z-10",
  ctaButton: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg rounded-sm relative z-10 shrink-0",
}

interface ServicesEditorialSectionProps {
  content: ServiceEditorialContent
  className?: string
  id?: string
}

export function ServicesEditorialSection({ content, className, id }: ServicesEditorialSectionProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section id={id} className={`${s.section} ${className ?? ""}`}>
      {/* Gradient overlay */}
      <div className={s.gradient} />

      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.title}>
            {title}
            {titleBreak && <span className={s.titleBreak}>{titleBreak}</span>}
            <span className={s.titleUnderline} />
          </h2>
          <p className={s.subtitle}>{subtitle}</p>
        </div>

        {/* Services Grid - 3 in a row */}
        <div className={s.grid}>
          {services.map((service, index) => (
            <div key={index} className={s.card}>
              {/* Image */}
              <div className={s.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={s.image}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Content */}
              <div className={s.cardContent}>
                {/* Step badge */}
                <div className={s.badge}>
                  <span className={s.iconCircle}>
                    {(() => {
                      const IconComponent = iconMap[service.icon]
                      return IconComponent ? <IconComponent className="w-5 h-5" /> : null
                    })()}
                  </span>
                  <span className={s.stepLabel}>{service.step}</span>
                </div>

                {/* Title & description */}
                <h3 className={s.serviceTitle}>{service.title}</h3>
                <p className={s.serviceDesc}>{service.description}</p>

                {/* Features */}
                <ul className={s.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={s.featureItem}>
                      <span className={s.featureIconWrap}>
                        <Check className={s.featureIcon} />
                      </span>
                      <span className={s.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className={s.cta}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <p className={s.ctaTitle}>{cta.title}</p>
              <p className={s.ctaDesc}>{cta.description}</p>
            </div>
            <a href="tel:692243186" className={s.ctaButton}>
              {cta.buttonIcon && (() => {
                const IconComponent = iconMap[cta.buttonIcon]
                return IconComponent ? <IconComponent className="w-6 h-6" /> : null
              })()}
              {cta.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
