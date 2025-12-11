import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Workflow, Database, Mail, BarChart3, Settings } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description: "Deploy intelligent chatbots that handle customer inquiries, lead qualification, and support tickets 24/7.",
    features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training"],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive business processes, from data entry to document processing and approvals.",
    features: ["Workflow Design", "API Integrations", "Error Handling"],
  },
  {
    icon: Database,
    title: "Data Processing & Analysis",
    description: "Transform raw data into actionable insights with automated data collection, cleaning, and analysis.",
    features: ["Data Mining", "Predictive Analytics", "Real-time Processing"],
  },
  {
    icon: Mail,
    title: "Communication Automation",
    description: "Streamline internal and external communications with automated emails, notifications, and follow-ups.",
    features: ["Email Sequences", "SMS Automation"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Generate automated reports and dashboards that provide real-time insights into your business performance.",
    features: ["Custom Dashboards", "Automated Reports"],
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    description: "Tailored AI solutions designed specifically for your unique business requirements and challenges.",
    features: ["Bespoke Development", "Machine Learning"],
  },
]

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Our AI Automation Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive AI automation solutions that transform how your
          business operates, from simple task automation to complex intelligent systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.title}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

