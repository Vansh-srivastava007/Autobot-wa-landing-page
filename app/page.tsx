import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}
