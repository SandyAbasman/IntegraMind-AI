import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F9EFEC] mb-4">
          Case Studies
        </h2>
        <p className="text-lg text-[#B3B3B2] max-w-2xl mx-auto">
          See how leading companies have transformed their operations with our
          AI automation solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
              <Link
                href={`/case-studies/${study.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full mt-4"
                )}
              >
                Read Full Case Study
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
