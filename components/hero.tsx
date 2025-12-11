"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight } from "lucide-react"

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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Transform Your Business with AI Automation
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Scale your operations, reduce costs, and increase efficiency with our
            custom AI automation solutions. We help businesses automate repetitive
            tasks, streamline workflows, and unlock new levels of productivity.
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
          <div className="relative h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/20 text-6xl font-bold">🤖</div>
            </div>
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
  )
}

