"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PricingCard from "@/components/ui/pricing-card"

const pricingTiers = [
  {
    name: "Starter",
    price: 2999,
    description: "Perfect for small teams",
    features: [
      "Up to 1,000 messages/month",
      "Basic auto-reply",
      "Simple analytics",
      "Email support",
      "5 contact groups",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 9999,
    description: "For growing businesses",
    features: [
      "Unlimited messages",
      "Advanced AI replies",
      "CRM integration",
      "Priority support",
      "Unlimited contact groups",
      "Advanced analytics",
      "API access",
    ],
    cta: "Get Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions",
    features: [
      "Full API access",
      "Custom integrations",
      "Dedicated manager",
      "24/7 support",
      "Custom workflows",
      "White-label option",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative py-24 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-muted"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual billing"
            >
              <motion.div
                className="h-7 w-7 rounded-full bg-primary shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual <span className="text-primary text-xs">Save 20%</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PricingCard
                {...tier}
                price={tier.price ? (isAnnual ? Math.floor(tier.price * 12 * 0.8) : tier.price) : undefined}
                isAnnual={isAnnual}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
