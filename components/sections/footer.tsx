"use client"

import { motion } from "framer-motion"
import NewsletterForm from "@/components/ui/newsletter-form"

export default function Footer() {
  return (
    <footer className="relative bg-muted border-t border-border overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              className="flex items-center gap-3 perspective-1000"
              whileHover={{ rotateY: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl text-primary-foreground will-gpu"
                style={{ backgroundImage: "linear-gradient(135deg, #25D366, #10b981)" }}
                whileHover={{
                  boxShadow: "0 12px 24px rgba(37, 211, 102, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                📱
              </motion.div>
              <span className="text-xl font-bold text-foreground">AutoBot WA</span>
            </motion.div>
            <p className="text-sm text-muted-foreground">
              The smart WhatsApp automation platform trusted by teams worldwide.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Features", "Pricing", "Security", "Roadmap"].map((item, index) => (
                <li key={item}>
                  <motion.a
                    href={index === 0 || index === 1 ? `#${item.toLowerCase()}` : "#"}
                    className="hover:text-primary transition-colors perspective-1000 inline-block will-gpu"
                    whileHover={{ rotateX: 8, x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Blog", "Support", "Contact", "Status"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="hover:text-primary transition-colors perspective-1000 inline-block will-gpu"
                    whileHover={{ rotateX: 8, x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <NewsletterForm />
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">© 2025 AutoBot WA. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05 }}>
              Terms of Service
            </motion.a>
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05 }}>
              Cookies
            </motion.a>
          </div>
          <div className="flex gap-4">
            {[
              { label: "Twitter", icon: "𝕏", href: "#" },
              { label: "LinkedIn", icon: "in", href: "#" },
              { label: "YouTube", icon: "▶", href: "#" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-colors flex items-center justify-center text-sm font-semibold perspective-1000 will-gpu"
                whileHover={{
                  rotateY: 180,
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
