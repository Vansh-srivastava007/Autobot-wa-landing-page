"use client"

import { motion } from "framer-motion"
import FeatureCard from "@/components/ui/feature-card"

const features = [
  {
    icon: "📤",
    title: "Bulk Messaging",
    description: "Send personalized messages to thousands at once. Import contacts easily and track delivery rates.",
  },
  {
    icon: "🤖",
    title: "Smart Auto-Reply",
    description: "AI-powered responses that handle FAQs 24/7. Customize rules for different scenarios.",
  },
  {
    icon: "⏰",
    title: "Message Scheduling",
    description: "Plan campaigns ahead. Set recurring broadcasts or one-time sends with calendar integration.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Real-time insights on open rates, clicks, and engagement. Make data-driven decisions.",
  },
  {
    icon: "🔗",
    title: "CRM Integration",
    description: "Seamless sync with HubSpot, Salesforce, and Google Sheets. Centralize your customer data.",
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    description: "GDPR compliant with end-to-end encryption. Role-based access and audit logs.",
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features Built for Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate customer communication and drive results
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
