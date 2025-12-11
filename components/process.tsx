import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business goals, current processes, and pain points. Our team conducts a comprehensive analysis to identify automation opportunities.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "We design a customized automation solution tailored to your specific needs. This includes workflow mapping, system architecture, and integration planning.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Our expert developers build your automation solution using cutting-edge AI technology. We conduct rigorous testing to ensure reliability and performance.",
  },
  {
    number: "04",
    title: "Deployment & Training",
    description:
      "We deploy your solution with minimal disruption to your operations. Your team receives comprehensive training and ongoing support to maximize value.",
  },
  {
    number: "05",
    title: "Optimization & Support",
    description:
      "We continuously monitor and optimize your automation solution. Our support team is available 24/7 to ensure smooth operations and continuous improvement.",
  },
]

export function Process() {
  return (
    <section id="process" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Our Proven Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We follow a systematic approach to ensure your AI automation project delivers
          maximum value and exceeds your expectations every step of the way.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <Card key={step.number}>
            <CardHeader>
              <div className="text-4xl font-bold text-gray-300 mb-2">{step.number}</div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

