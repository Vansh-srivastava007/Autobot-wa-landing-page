"use client"

import { motion } from "framer-motion"
import { Phone3DmockUp } from "@/components/ui/phone-mockup"
import FloatingParticles from "@/components/ui/floating-particles"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative z-10 min-h-screen bg-background pt-32 pb-16 overflow-hidden" id="hero">
      <FloatingParticles />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance leading-tight text-3d-depth will-gpu">
                Automate Your WhatsApp{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #25D366, #10b981)" }}
                >
                  Like Never Before
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Send bulk messages, smart auto-replies, and scheduled chats effortlessly. Boost communication efficiency
                and save hours daily.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 perspective-1000">
              <motion.button
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold
                  hover:shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                  will-gpu"
                whileHover={{
                  scale: 1.08,
                  rotateY: 8,
                  boxShadow: "0 20px 40px rgba(37, 211, 102, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label="Get Started Free"
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold
                  hover:bg-primary/10 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                  perspective-1000 will-gpu"
                whileHover={{
                  scale: 1.08,
                  rotateY: -8,
                  boxShadow: "0 12px 24px rgba(37, 211, 102, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label="Watch Demo video"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center h-[600px] perspective-1000"
          >
            {/* 3D floating orbs around phone */}
            {[
              { x: -60, y: -80, delay: 0 },
              { x: 80, y: -60, delay: 0.2 },
              { x: 60, y: 100, delay: 0.4 },
              { x: -80, y: 80, delay: 0.6 },
            ].map((orb, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl"
                animate={{
                  y: [orb.y, orb.y - 30, orb.y],
                  x: [orb.x, orb.x + 20, orb.x],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: orb.delay,
                }}
                style={{ pointerEvents: "none" }}
              />
            ))}
            <Phone3DmockUp />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
