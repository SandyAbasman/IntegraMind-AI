export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  approach: string[];
  outcomes: string[];
  stack: string[];
  timeline: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "techcorp-global",
    company: "TechCorp Global",
    industry: "Technology",
    overview:
      "TechCorp Global was handling more than 12k support tickets per month across three regions. Response time was slipping and escalation quality was inconsistent.",
    challenge: "Manual customer support processes causing delays",
    solution: "Implemented SupportBot Pro for 24/7 customer support",
    results: [
      { metric: "87%", label: "Faster Response Time" },
      { metric: "$2.5M", label: "Annual Cost Savings" },
      { metric: "4.9/5", label: "Customer Satisfaction" },
    ],
    approach: [
      "Audit intake, routing, and escalation rules for top ticket categories.",
      "Connect SupportBot Pro to the knowledge base with daily syncs.",
      "Deploy confidence scoring to route complex issues to human agents.",
      "Establish QA review loops for low-confidence responses.",
    ],
    outcomes: [
      "Automated 72% of Tier-1 tickets within the first 60 days.",
      "Cut average response time from 18 minutes to 2 minutes.",
      "Improved escalation context with full conversation history.",
    ],
    stack: [
      "SupportBot Pro",
      "Zendesk API",
      "Slack alerts",
      "Knowledge base sync",
    ],
    timeline: [
      { label: "Discovery", value: "2 weeks" },
      { label: "Build", value: "4 weeks" },
      { label: "Pilot", value: "3 weeks" },
      { label: "Rollout", value: "2 weeks" },
    ],
  },
  {
    slug: "retailmax-inc",
    company: "RetailMax Inc",
    industry: "E-commerce",
    overview:
      "RetailMax Inc struggled with order processing bottlenecks and inventory inaccuracies during peak seasons.",
    challenge: "Inefficient order processing and inventory management",
    solution: "Deployed WorkflowMaster for end-to-end automation",
    results: [
      { metric: "60%", label: "Faster Processing" },
      { metric: "95%", label: "Error Reduction" },
      { metric: "+40%", label: "Order Volume Capacity" },
    ],
    approach: [
      "Map the full order lifecycle from checkout to fulfillment.",
      "Automate inventory updates across POS and warehouse systems.",
      "Introduce exception queues for edge cases and manual review.",
      "Add real-time monitoring for fulfillment delays.",
    ],
    outcomes: [
      "Reduced manual touches per order from 6 to 1.",
      "Maintained accurate inventory during high-demand campaigns.",
      "Enabled same-day processing for priority orders.",
    ],
    stack: [
      "WorkflowMaster",
      "Shopify webhooks",
      "Inventory sync",
      "Custom approval flows",
    ],
    timeline: [
      { label: "Discovery", value: "1 week" },
      { label: "Build", value: "5 weeks" },
      { label: "Pilot", value: "2 weeks" },
      { label: "Rollout", value: "3 weeks" },
    ],
  },
  {
    slug: "financefirst",
    company: "FinanceFirst",
    industry: "Financial Services",
    overview:
      "FinanceFirst was consolidating reports from multiple data sources, taking weeks to deliver insights to leadership.",
    challenge: "Data analysis and reporting taking weeks",
    solution: "Integrated DataMind Analytics for real-time insights",
    results: [
      { metric: "10x", label: "Faster Analysis" },
      { metric: "99.2%", label: "Data Accuracy" },
      { metric: "Real-time", label: "Reporting" },
    ],
    approach: [
      "Consolidate data pipelines into a single automated workflow.",
      "Deploy DataMind Analytics for real-time transformations.",
      "Design dashboards with alerting for key risk indicators.",
      "Train analysts to build custom views and scheduled reports.",
    ],
    outcomes: [
      "Cut reporting cycles from 2 weeks to 2 days.",
      "Improved audit readiness with consistent data lineage.",
      "Enabled leaders to act on anomalies within hours.",
    ],
    stack: ["DataMind Analytics", "ETL automation", "BI dashboards", "Alerts"],
    timeline: [
      { label: "Discovery", value: "2 weeks" },
      { label: "Build", value: "6 weeks" },
      { label: "Pilot", value: "2 weeks" },
      { label: "Rollout", value: "2 weeks" },
    ],
  },
];
