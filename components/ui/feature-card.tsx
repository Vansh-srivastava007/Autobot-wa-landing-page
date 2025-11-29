"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300
        hover:shadow-[0_20px_40px_rgba(37,211,102,0.1)] perspective-1000 will-gpu"
      whileHover={{ y: -8, rotateX: 5, rotateZ: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"
        style={{
          backgroundImage: "linear-gradient(to bottom right, rgba(37, 211, 102, 0.05), rgba(37, 211, 102, 0.1))",
          transform: "translateZ(0)",
        }}
      />

      <div className="relative z-10 space-y-4">
        <motion.div
          className="text-4xl will-gpu"
          whileHover={{ rotateY: 360, rotateX: 180 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-300" />
      <motion.div
        className="absolute -bottom-2 right-4 text-primary/0 group-hover:text-primary/60 transition-all duration-300"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        ↓
      </motion.div>
    </motion.div>
  )
}
