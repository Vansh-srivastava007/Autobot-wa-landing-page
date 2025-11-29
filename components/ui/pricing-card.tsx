"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price?: number
  description: string
  features: string[]
  cta: string
  popular: boolean
  isAnnual?: boolean
}

export default function PricingCard({ name, price, description, features, cta, popular }: PricingCardProps) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border transition-all duration-300 perspective-1000 will-gpu ${
        popular ? "border-primary shadow-2xl shadow-primary/20" : "border-border bg-card hover:border-primary/50"
      }`}
      style={
        popular
          ? { backgroundImage: "linear-gradient(to bottom right, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05))" }
          : {}
      }
      whileHover={popular ? { scale: 1.02, y: -10, rotateX: 3 } : { y: -5, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Popular Badge */}
      {popular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 perspective-1000"
          initial={{ opacity: 0, y: -10, rotateZ: -180 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/50">
            MOST POPULAR
          </span>
        </motion.div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {price !== undefined ? (
          <motion.div
            className="flex items-baseline gap-2 will-gpu"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{
              textShadow: popular
                ? "0 2px 0 rgba(37, 211, 102, 0.4), 0 4px 0 rgba(37, 211, 102, 0.2), 0 6px 10px rgba(0, 0, 0, 0.2)"
                : undefined,
            }}
          >
            <span className="text-4xl font-bold text-foreground">₹{price.toLocaleString()}</span>
            <span className="text-muted-foreground">/month</span>
          </motion.div>
        ) : (
          <div className="text-3xl font-bold text-foreground">Custom pricing</div>
        )}

        {/* CTA Button */}
        <motion.button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 perspective-1000 will-gpu ${
            popular
              ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
              : "border border-primary text-primary hover:bg-primary/10"
          }`}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {cta}
        </motion.button>

        <div className="space-y-3 pt-6 border-t border-border">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 will-gpu"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 360] }}
                transition={{ delay: 0.05 * index + 0.3, duration: 0.6, type: "spring" }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
              </motion.div>
              <span className="text-sm text-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
