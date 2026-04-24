// ── Data (inline — replace with your imports if preferred) ────────────────────
export const models = [
  {
    id: "fixed",
    label: "Fixed Lease",
    desc: "Guaranteed monthly rent. Zero vacancy risk for you.",
    icon: "fixed",
  },
  {
    id: "revenue",
    label: "Revenue Share",
    desc: "We split the upside — you benefit from strong performance.",
    icon: "revenue",
  },
  {
    id: "management",
    label: "Management Fee",
    desc: "Retain full revenue; pay a flat fee for full management.",
    icon: "management",
  },
  {
    id: "custom",
    label: "Custom Model",
    desc: "Bespoke terms tailored to your property and goals.",
    icon: "custom",
  },
];

export const wheelSegments = [
  { id: 0, label: "Property Onboarding", icon: "clipboard" },
  { id: 1, label: "Market Research", icon: "search" },
  { id: 2, label: "Legal & Compliance", icon: "document" },
  { id: 3, label: "Revenue Optimisation", icon: "cash" },
  { id: 4, label: "Guest Management", icon: "chat" },
  { id: 5, label: "Maintenance", icon: "wrench" },
  { id: 6, label: "Key Handling", icon: "keys" },
  { id: 7, label: "Owner Reporting", icon: "sign" },
];

export const compareData = {
  features: [
    { label: "Guaranteed Monthly Income", fixed: true, revenue: false, management: false, custom: "partial" },
    { label: "Vacancy Risk on Owner", fixed: false, revenue: true, management: true, custom: "partial" },
    { label: "Revenue Upside Potential", fixed: false, revenue: true, management: true, custom: true },
    { label: "Owner Retains Full Revenue", fixed: false, revenue: false, management: true, custom: "partial" },
    { label: "Performance-Based Earnings", fixed: false, revenue: true, management: true, custom: true },
    { label: "Flexible / Custom Terms", fixed: false, revenue: false, management: false, custom: true },
    { label: "24/7 Management Support", fixed: true, revenue: true, management: true, custom: true },
    { label: "Transparent Reporting", fixed: true, revenue: true, management: true, custom: true },
  ],
};