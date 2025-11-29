"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setMessage("Thanks for subscribing!")
      setEmail("")
      setIsLoading(false)
      setTimeout(() => setMessage(""), 3000)
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative group perspective-1000">
        <motion.div
          className="absolute -inset-1 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-all duration-300 will-gpu"
          style={{ backgroundImage: "linear-gradient(135deg, #25D366, #10b981)" }}
          animate={{ opacity: [0, 1, 0.8] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <div
          className="relative flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 group-focus-within:border-primary transition-all duration-300 will-gpu"
          style={{
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Mail className="w-4 h-4 text-muted-foreground" />
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
            aria-label="Email for newsletter subscription"
            whileFocus={{
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-semibold
          hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 transition-all perspective-1000 will-gpu"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </motion.button>
      {message && (
        <motion.p
          className="text-xs text-primary text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {message}
        </motion.p>
      )}
    </form>
  )
}
