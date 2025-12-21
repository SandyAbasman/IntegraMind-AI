import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "TechCorp Global",
    industry: "Technology",
    challenge: "Manual customer support processes causing delays",
    solution: "Implemented SupportBot Pro for 24/7 customer support",
    results: [
      { metric: "87%", label: "Faster Response Time" },
      { metric: "$2.5M", label: "Annual Cost Savings" },
      { metric: "4.9/5", label: "Customer Satisfaction" },
    ],
  },
  {
    company: "RetailMax Inc",
    industry: "E-commerce",
    challenge: "Inefficient order processing and inventory management",
    solution: "Deployed WorkflowMaster for end-to-end automation",
    results: [
      { metric: "60%", label: "Faster Processing" },
      { metric: "95%", label: "Error Reduction" },
      { metric: "+40%", label: "Order Volume Capacity" },
    ],
  },
  {
    company: "FinanceFirst",
    industry: "Financial Services",
    challenge: "Data analysis and reporting taking weeks",
    solution: "Integrated DataMind Analytics for real-time insights",
    results: [
      { metric: "10x", label: "Faster Analysis" },
      { metric: "99.2%", label: "Data Accuracy" },
      { metric: "Real-time", label: "Reporting" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#F9EFEC] mb-4">Case Studies</h2>
        <p className="text-lg text-[#B3B3B2] max-w-2xl mx-auto">
          See how leading companies have transformed their operations with our
          AI automation solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Card key={study.company}>
            <CardHeader>
              <div className="text-sm text-[#B3B3B2] mb-2">
                {study.industry}
              </div>
              <CardTitle className="text-2xl">{study.company}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#F9EFEC] mb-2">Challenge</h4>
                <CardDescription>{study.challenge}</CardDescription>
              </div>
              <div>
                <h4 className="font-semibold text-[#F9EFEC] mb-2">Solution</h4>
                <CardDescription>{study.solution}</CardDescription>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-[#F9EFEC] mb-4">Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-[#DA9E8B]">
                        {result.metric}
                      </div>
                      <div className="text-xs text-[#B3B3B2] mt-1">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Read Full Case Study
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
