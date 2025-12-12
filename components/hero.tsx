"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <Badge variant="default" className="gap-2">
            <Zap className="h-4 w-4" />
            AI-Powered Automation
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9EFEC] leading-tight">
            Transform Your Business with AI Automation
          </h1>

          <p className="text-lg text-[#676665] max-w-xl">
            Scale your operations, reduce costs, and increase efficiency with
            our custom AI automation solutions. We help businesses automate
            repetitive tasks, streamline workflows, and unlock new levels of
            productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Start Your Automation Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative">
          <div className="relative h-[500px] rounded-lg    overflow-hidden ">
            <div className="absolute inset-0  bg-cover bg-center  bg-[url('https://images.unsplash.com/photo-1644165918597-f182dc5e43f8?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold text-black">500+</div>
          <div className="text-gray-600 mt-2">Processes Automated</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold text-black">85%</div>
          <div className="text-gray-600 mt-2">Average Cost Reduction</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold text-black">24/7</div>
          <div className="text-gray-600 mt-2">Automated Operations</div>
        </div>
      </div>
    </section>
  );
}
