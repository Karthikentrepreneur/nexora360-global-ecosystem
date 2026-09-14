export type Capability = {
  id: string;
  num: string;
  short: string;
  name: string;
  line: string;
  services: string[];
};

export const capabilities: Capability[] = [
  {
    id: "gcc",
    num: "01",
    short: "GCC",
    name: "Global Capability Centre (GCC) Solutions",
    line: "Build, operate and scale a GCC without building everything internally.",
    services: ["Centre setup", "Talent build-out", "Operations governance", "Scale-up model"],
  },
  {
    id: "bpo",
    num: "02",
    short: "BPO",
    name: "Business Process Outsourcing (BPO)",
    line: "Front, middle and back-office outsourcing tailored to your requirements.",
    services: ["Front office", "Middle office", "Back office", "Process transition"],
  },
  {
    id: "cx",
    num: "03",
    short: "Customer Experience",
    name: "Customer Experience & Contact Centre",
    line: "Responsive, professional support aligned with your brand.",
    services: ["Voice support", "Chat & email", "Escalation handling", "Quality management"],
  },
  {
    id: "marketing",
    num: "04",
    short: "Digital Marketing",
    name: "Digital Marketing Services",
    line: "Turn digital presence into measurable business growth.",
    services: ["Performance marketing", "Content", "SEO", "Campaign analytics"],
  },
  {
    id: "sales",
    num: "05",
    short: "Digital Sales",
    name: "Digital Sales & Lead Generation",
    line: "From prospect to customer, managed end to end.",
    services: ["Lead generation", "Pipeline management", "Inside sales", "Conversion support"],
  },
  {
    id: "kpo",
    num: "06",
    short: "KPO",
    name: "Knowledge Process Outsourcing (KPO)",
    line: "Research, analysis and decision-support capability.",
    services: ["Market research", "Business analysis", "Reporting", "Decision support"],
  },
  {
    id: "hr",
    num: "07",
    short: "HR & Recruitment",
    name: "HR & Recruitment Solutions",
    line: "The right people, the right capability.",
    services: ["Talent sourcing", "Recruitment operations", "Onboarding", "HR administration"],
  },
  {
    id: "finance",
    num: "08",
    short: "Finance",
    name: "Finance & Accounting Support",
    line: "Accurate processes, better financial control.",
    services: ["Accounts payable", "Accounts receivable", "Reconciliation", "Reporting support"],
  },
  {
    id: "admin",
    num: "09",
    short: "Administration",
    name: "Administrative & Back-Office Support",
    line: "We handle the details. You focus on growth.",
    services: ["Documentation", "Scheduling", "Records management", "Back-office workflows"],
  },
  {
    id: "support-ops",
    num: "10",
    short: "Sales & Support Ops",
    name: "Sales & Customer Support Operations",
    line: "Extend your team without extending your overheads.",
    services: ["Dedicated teams", "Order support", "Account servicing", "Coverage models"],
  },
  {
    id: "data",
    num: "11",
    short: "Data Management",
    name: "Data Management & Processing",
    line: "Structured data. Smarter decisions.",
    services: ["Data entry", "Data cleansing", "Processing", "Structured reporting"],
  },
  {
    id: "ai",
    num: "12",
    short: "AI & Automation",
    name: "AI & Automation Services",
    line: "Make your business smarter and more efficient.",
    services: ["Workflow automation", "AI-enabled processes", "Tooling", "Productivity design"],
  },
  {
    id: "custom",
    num: "13",
    short: "Customized Support",
    name: "Customized Business Support",
    line: "If you need it, we can build it.",
    services: ["Bespoke functions", "Hybrid teams", "Pilot programmes", "Scaled rollout"],
  },
];
