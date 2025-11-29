"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ rotateY: -5 }} transition={{ duration: 0.3 }} className="perspective-1000">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm relative will-gpu"
                style={{ backgroundColor: "#25D366" }}
                whileHover={{
                  boxShadow: "0 12px 24px rgba(37, 211, 102, 0.4), inset -2px -2px 8px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                A
              </motion.div>
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                AutoBot WA
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "#hero", onClick: handleHomeClick },
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((link) => (
              <motion.div key={link.label} className="relative perspective-1000" whileHover={{ rotateX: 2 }}>
                <Link
                  href={link.href}
                  onClick={link.onClick}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                  aria-label={`${link.label} section`}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm
              hover:shadow-lg hover:shadow-primary/50 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
              perspective-1000 will-gpu"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 15px 35px rgba(37, 211, 102, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label="Get started with AutoBot WA"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
