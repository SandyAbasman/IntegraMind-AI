import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <Link
            href="/#case-studies"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-fit"
            )}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Case Study</Badge>
            <Badge variant="outline">{study.industry}</Badge>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9EFEC]">
              {study.company}
            </h1>
            <p className="text-lg text-[#B3B3B2] max-w-3xl">
              {study.overview}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {study.results.map((result) => (
            <div key={result.label} className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-[#DA9E8B]">
                {result.metric}
              </div>
              <div className="text-[10px] sm:text-xs text-[#B3B3B2] mt-1 leading-tight">
                {result.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Challenge</CardTitle>
                <CardDescription>{study.challenge}</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution</CardTitle>
                <CardDescription>{study.solution}</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {study.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#B3B3B2]"
                    >
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {study.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#B3B3B2]"
                    >
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#B3B3B2]">
                  {study.timeline.map((item) => (
                    <li key={item.label} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="text-[#F9EFEC]">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
