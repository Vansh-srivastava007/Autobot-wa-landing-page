"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const messages = [
  { type: "bot", text: "Hello! 👋 Thanks for reaching out." },
  { type: "user", text: "Hi, I have a question" },
  { type: "bot", text: "Our team is here to help! What can we do for you?" },
  { type: "user", text: "I'd like to know more" },
  { type: "bot", text: "✓ Message scheduled for 9 AM tomorrow" },
]

export function Phone3DmockUp() {
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const runAnimation = () => {
      setIsAnimating(true)
      setDisplayedMessages([])

      messages.forEach((msg, index) => {
        setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, msg])
        }, index * 600)
      })

      const finalTimer = setTimeout(
        () => {
          setIsAnimating(false)
        },
        messages.length * 600 + 2000,
      )

      return () => clearTimeout(finalTimer)
    }

    runAnimation()
  }, [])

  const messageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <motion.div
      className="relative w-64 h-[480px]"
      style={{ perspective: "1200px" }}
      animate={{ rotateY: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl shadow-2xl shadow-primary/20 border-8 border-slate-950 overflow-hidden bg-slate-950 will-gpu perspective-1000"
        whileHover={{ rotateY: 10, rotateX: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(37, 211, 102, 0.15),
            inset -2px -2px 8px rgba(0, 0, 0, 0.3),
            inset 2px 2px 8px rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="absolute inset-0 pt-8 pb-4 px-2 flex flex-col" style={{ backgroundColor: "#f0f2f5" }}>
          <div
            className="h-12 bg-primary rounded-t-2xl px-3 flex items-center text-white font-semibold text-sm flex-shrink-0 will-gpu"
            style={{
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
            }}
          >
            AutoBot WA
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2" style={{ backgroundColor: "#e8eaed" }}>
            {displayedMessages.map((msg, index) => (
              <motion.div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                variants={messageVariants}
                initial="initial"
                animate="animate"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div
                  className={`max-w-[70%] px-3 py-2 rounded-lg text-xs leading-relaxed will-gpu ${
                    msg.type === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-slate-800 rounded-bl-none"
                  }`}
                  style={{
                    boxShadow:
                      msg.type === "user" ? "0 4px 12px rgba(37, 211, 102, 0.2)" : "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {msg.text}
                </motion.div>
              </motion.div>
            ))}
            {displayedMessages.length === messages.length && (
              <motion.div
                className="text-center text-xs text-slate-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                ✓ All messages delivered
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="h-12 bg-slate-50 border-t border-slate-200 px-3 flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-white border border-slate-300 rounded-full px-3 py-2 text-xs outline-none"
              disabled
              aria-label="Message input disabled for demo"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-3xl blur-2xl pointer-events-none will-gpu"
        style={{ backgroundImage: "linear-gradient(to right, rgba(37, 211, 102, 0.25), rgba(37, 211, 102, 0.08))" }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* 3D depth indicator lights */}
      <motion.div
        className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

export default Phone3DmockUp
