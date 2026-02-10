"use client"

import Image from "next/image"

interface HeroSplitCleanProps {
  image: string
  imageAlt?: string
}

export function HeroSplitClean({
  image,
  imageAlt = "Hero",
}: HeroSplitCleanProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Empty/Clean */}
      <div className="w-full md:w-1/2 bg-white min-h-[50vh] md:min-h-screen">
        {/* Puste - tylko białe tło */}
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto md:min-h-screen relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
