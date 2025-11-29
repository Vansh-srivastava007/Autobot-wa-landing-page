"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  initials: string
}

export default function TestimonialCard({ name, role, company, quote, rating, initials }: TestimonialCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="group relative p-8 bg-card border border-border rounded-2xl overflow-hidden
        hover:border-primary/50 transition-all duration-300 perspective-1000 will-gpu h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        className="preserve-3d relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          style={{
            backfaceVisibility: "hidden",
          }}
          className="space-y-4"
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 space-y-4">
            <motion.div
              className="absolute -top-8 -right-4 text-6xl text-primary/10 font-serif"
              animate={{ y: [0, -10, 0], rotateZ: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              "
            </motion.div>

            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={`text-lg ${i < Math.floor(rating) ? "text-primary" : "text-muted"}`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: i * 0.1, duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ★
                </motion.span>
              ))}
              <span className="text-xs text-muted-foreground ml-2">{rating}</span>
            </div>

            {/* Quote */}
            <p className="text-foreground italic leading-relaxed">"{quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0 will-gpu"
                style={{ backgroundImage: "linear-gradient(135deg, #25D366, #10b981)" }}
                whileHover={{
                  boxShadow: "0 12px 24px rgba(37, 211, 102, 0.4), inset -2px -2px 8px rgba(0, 0, 0, 0.1)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                {initials}
              </motion.div>
              <div>
                <p className="font-semibold text-foreground text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">
                  {role} at {company}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center justify-center"
        >
          <motion.div className="text-center space-y-4">
            <div className="text-5xl font-bold text-primary">{rating}</div>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < Math.floor(rating) ? "text-primary" : "text-muted"}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Rating from {name}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
