import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Products />
      <About />
      <Process />
      <CaseStudies />
      <Contact />
      </main>
  )
}
