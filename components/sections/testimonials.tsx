"use client"

import { motion } from "framer-motion"
import TestimonialCard from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah L.",
    role: "Marketing Lead",
    company: "TechCorp",
    quote: "AutoBot WA cut our response time by 80% and tripled engagement!",
    rating: 4.9,
    initials: "SL",
  },
  {
    name: "Raj K.",
    role: "E-commerce Owner",
    company: "ShopIndia",
    quote: "Bulk messaging saved us 20 hours weekly. ROI was immediate.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Emily T.",
    role: "Customer Success",
    company: "FinTech Solutions",
    quote: "The auto-reply feature handles 90% of our support queries automatically.",
    rating: 4.8,
    initials: "ET",
  },
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative py-24 bg-background/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Loved by Teams Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about AutoBot WA
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
