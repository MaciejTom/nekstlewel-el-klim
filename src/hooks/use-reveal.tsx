"use client"

import { useEffect, useRef, useState, forwardRef, ElementType, ComponentPropsWithoutRef } from "react"

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

interface RevealProps extends UseRevealOptions {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Reveal({
  children,
  className = "",
  style,
  threshold,
  rootMargin,
  triggerOnce,
}: RevealProps) {
  const { ref, isVisible } = useReveal({ threshold, rootMargin, triggerOnce })

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
