"use client"

import { Star } from "lucide-react"
import type { ReviewsContent } from "@/types"

interface ReviewsSectionProps {
  content: ReviewsContent
}

export function ReviewsSection({ content }: ReviewsSectionProps) {
  return (
    <section id="opinie" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            Opinie
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight h2-accent-center">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-6">
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {content.reviews.map((review, index) => (
            <div
              key={index}
              className={`group bg-card border rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 ${
                review.featured
                  ? "border-primary/30 ring-2 ring-primary/20 shadow-lg scale-105 relative z-10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`Ocena: ${review.rating} z 5 gwiazdek`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6 text-sm">
                "{review.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {review.authorName}
                </p>
                <p className="text-muted-foreground text-sm">
                  {review.authorLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
