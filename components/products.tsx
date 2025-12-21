import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const products = [
  {
    id: "supportbot",
    title: "SupportBot Pro",
    description:
      "AI-powered customer support agent that handles inquiries, resolves issues, and escalates complex cases to human agents.",
    features: [
      "24/7 multilingual support",
      "Smart ticket routing",
      "Knowledge base integration",
      "Sentiment analysis",
      "Real-time escalation",
    ],
    metrics: [
      { value: "< 2 seconds", label: "Response Time" },
      { value: "87%", label: "Resolution Rate" },
      { value: "4.8/5", label: "Customer Satisfaction" },
    ],
    pricing: "Starting at $299/month",
    popular: true,
    imageBg:
      "bg-[url('https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center ",
  },
  {
    id: "sales",
    title: "SalesAccelerator AI",
    description:
      "Intelligent sales agent that qualifies leads, schedules meetings, and nurtures prospects through personalized interactions.",
    features: [
      "Lead qualification scoring",
      "Automated follow-ups",
      "Meeting scheduling",
      "CRM integration",
      "Performance analytics",
    ],
    metrics: [
      { value: "+45%", label: "Lead Conversion" },
      { value: "78%", label: "Meeting Show Rate" },
      { value: "-30%", label: "Sales Cycle" },
    ],
    pricing: "Starting at $599/month",
    popular: false,
    imageBg:
      "bg-[url('https://plus.unsplash.com/premium_photo-1682002193011-9c0d5e58d6b1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ",
  },
  // {
  //   id: "datamind",
  //   title: "DataMind Analytics",
  //   description:
  //     "Advanced AI agent that processes, analyzes, and generates insights from your business data automatically.",
  //   features: [
  //     "Automated data processing",
  //     "Predictive modeling",
  //     "Real-time dashboards",
  //     "Anomaly detection",
  //     "Custom report generation",
  //   ],
  //   metrics: [
  //     { value: "10x faster", label: "Data Processing" },
  //     { value: "99.2%", label: "Accuracy Rate" },
  //     { value: "Real-time", label: "Insight Generation" },
  //   ],
  //   pricing: "Starting at $799/month",
  //   popular: false,
  //   imageBg:
  //     "bg-[url('https://images.unsplash.com/photo-1760087616415-62270db23966?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ",
  // },
  // {
  //   id: "workflow",
  //   title: "WorkflowMaster",
  //   description:
  //     "Comprehensive workflow automation agent that streamlines complex business processes and eliminates manual tasks.",
  //   features: [
  //     "Process automation",
  //     "API integrations",
  //     "Approval workflows",
  //     "Error handling",
  //     "Performance monitoring",
  //   ],
  //   metrics: [
  //     { value: "75%", label: "Time Savings" },
  //     { value: "92%", label: "Error Reduction" },
  //     { value: "+160%", label: "Process Efficiency" },
  //   ],
  //   pricing: "Starting at $399/month",
  //   popular: false,
  //   imageBg:
  //     "bg-[url('https://images.unsplash.com/photo-1763568258235-f40425a94af9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ",
  // },
];

export function Products() {
  return (
    <section
      id="products"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F9EFEC] mb-4">
          Our AI Product Suite
        </h2>
        <p className="text-lg text-[#B3B3B2] max-w-2xl mx-auto">
          Powerful AI agents and automation tools designed to transform specific
          areas of your business. Each product is built with enterprise-grade
          reliability and can be customized to your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            {/* {product.popular && (
              <div className="bg-gray-900 text-white px-4 py-2 flex items-center gap-2">
                <Star className="h-4 w-4 fill-white" />
                <span className="text-sm font-medium">Most Popular</span>
              </div>
            )} */}
            <div
              className={`h-40 sm:h-48 ${product.imageBg} relative overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl sm:text-6xl">
                {product.id === "supportbot" && "💬"}
                {product.id === "sales" && "📈"}
                {product.id === "datamind" && "📊"}
                {product.id === "workflow" && "⚙️"}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
              <CardDescription className="text-base mt-2">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#B3B3B2] mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-sm text-[#B3B3B2]"
                    >
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                {product.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-[#DA9E8B]">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#B3B3B2] mt-1 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-[#B3B3B2] mb-2">Pricing</div>
                <div className="text-2xl font-bold text-[#DA9E8B] mb-4">
                  {product.pricing}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                  <Button className="flex-1 gap-2">
                    Start Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
