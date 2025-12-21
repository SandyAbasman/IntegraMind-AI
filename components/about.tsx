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
          About Integramind AI
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F9EFEC] mb-4">
          Pioneering the Future of Business Automation
        </h2>
        <div className="mt-6 flex gap-4 lg:hidden">
          <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden bg-cover bg-center bg-[url('/Namdi.jpeg')]"></div>
          <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden bg-cover bg-center bg-[url('/FullSizeRender.jpg')]"></div>
        </div>
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
            Founded in 2019, Integramind AI has been at the forefront of the AI
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
        <div className="hidden lg:flex gap-4">
          <div className="relative h-64 sm:h-80 lg:h-[400px] w-full rounded-lg overflow-hidden bg-cover bg-center bg-[url('/Namdi.jpeg')]"></div>
          <div className="relative h-64 sm:h-80 lg:h-[400px] w-full rounded-lg overflow-hidden bg-cover bg-center bg-[url('/FullSizeRender.jpg')]"></div>
        </div>
      </div>

      {/* Stats/Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "5+ years of AI automation expertise",
          "200+ successful implementations",
          "50+ enterprise clients served",
          "99.9% system uptime guarantee",
        ].map((stat) => (
          <div key={stat} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-[#B3B3B2] ">{stat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
