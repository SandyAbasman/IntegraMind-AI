"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
      "Sentiment analysis & real-time escalation ",

    ],
    metrics: [
      { value: "< 2 seconds", label: "Response Time" },
      { value: "87%", label: "Resolution Rate" },
      { value: "4.8/5", label: "Customer Satisfaction" },
    ],
    pricing: "Starting at $299/month",
    popular: true,
    imageBg: "bg-[url('/proposalagent.jfif')]  bg-cover bg-center ",
  },
  {
    id: "sales",
    title: "SalesAccelerator AI",
    description:
      "An intelligent sales agent that qualifies leads, schedules meetings, and nurtures prospects with personalized, timely interactions—so your team closes more deals, faster.",
    features: [
      "Lead qualification scoring",
      "Automated follow-ups & meeting scheduling ",
      "Performance analytics & reporting ",
      "Full CRM integration  ",
      
    ],
    metrics: [
      { value: "+45%", label: "Lead Conversion" },
      { value: "78%", label: "Meeting Show Rate" },
      { value: "-30%", label: "Sales Cycle" },
    ],
    pricing: "Starting at $599/month",
    popular: false,
    imageBg: " bg-[url('/onboardingagent.jfif')] bg-cover bg-center ",
  },
  {
    id: "sales",
    title: "WorkflowAutomate AI",
    description:
    "A no-code process automation platform that streamlines repetitive tasks—from data entry to document approvals—so your team can focus on high-impact work.",
    features: [
      "Drag-and-drop workflow designer ",
      "API & cross-platform integration",
      "Advanced error handling & logs ",
      "Custom triggers & actions",
    ],
    metrics: [
      { value: " 120+ hours ", label: "Time Saved/Month" },
      { value: "92%", label: "Error Reduction" },
      { value: "310%", label: "ROI (6 Months)" },
    ],
    pricing: "Starting at $899/month",
    popular: false,
    imageBg: " bg-[url('/onboardingagent.jfif')] bg-cover bg-center ",
  },
  
];

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerViewDesktop = 2;
  const itemsPerView = isMobile ? 1 : itemsPerViewDesktop;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reset index if it exceeds max when screen size changes
    const newMaxIndex = Math.max(0, products.length - itemsPerView);
    setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

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
        Powerful AI agents and automation tools designed to transform every facet of your business—from customer support and sales to process automation and data intelligence. Each product is enterprise-grade, fully customizable, and seamlessly integrates into your existing workflows
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView})))` 
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-[calc(50%-8px)] flex-shrink-0">
                <Card className="overflow-hidden h-full">
                  <div
                    className={`h-40 sm:h-48 ${product.imageBg} relative overflow-hidden`}
                  >
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
                      <div className="text-sm flex text-[#B3B3B2] mb-2">
                        <p className="px-1">Pricing</p>
                        <p>(Includes onboarding, training, and basic integration)</p>
                      </div>
                      <div className="text-2xl font-bold text-[#DA9E8B] mb-4">
                        {product.pricing}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                        <Button className="flex-1 gap-2">
                          Book a Call
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {products.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 rounded-full p-2 shadow-lg transition-all"
              aria-label="Next products"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#DA9E8B]"
                    : "w-2 bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
