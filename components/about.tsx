import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12">
        <Badge variant="default" className="mb-6">
          About AutomateFlow
        </Badge>
        <h2 className="text-4xl font-bold text-[#F9EFEC] mb-4">
          Pioneering the Future of Business Automation
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-[#B3B3B2]">
            We are a team of AI specialists, software engineers, and business
            strategists dedicated to transforming how businesses operate through
            intelligent automation solutions.
          </p>
          <p className="text-lg text-[#B3B3B2]">
            Founded in 2019, AutomateFlow has been at the forefront of the AI
            automation revolution. We combine cutting-edge artificial
            intelligence with deep business understanding to create solutions
            that not only automate processes but genuinely transform
            organizations.
          </p>
          <p className="text-lg text-[#B3B3B2]">
            Our approach goes beyond simple task automation. We design
            intelligent systems that learn, adapt, and evolve with your
            business, ensuring long-term value and continuous improvement.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-sm">Team Photo Placeholder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "5+ years of AI automation expertise",
          "200+ successful implementations",
          "50+ enterprise clients served",
          "99.9% system uptime guarantee",
        ].map((stat) => (
          <div key={stat} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{stat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
