import type { Package } from "@/types";

export const PACKAGES: Package[] = [
  {
    id: "pkg1",
    name: "Essential",
    tagline: "Smart, budget-friendly construction without compromising quality.",
    pricePerSqft: 1699,
    features: ["Standard Grade Materials", "Basic Electrical & Plumbing", "2 Design Consultations", "12 Month Structural Warranty"],
    color: "beige",
  },
  {
    id: "pkg2",
    name: "Signature",
    tagline: "Our most popular package — premium finishes, balanced pricing.",
    pricePerSqft: 2199,
    popular: true,
    features: ["Premium Grade Materials", "Branded Fittings", "5 Design Consultations", "Dedicated Project Manager", "24 Month Structural Warranty"],
    color: "primary",
  },
  {
    id: "pkg3",
    name: "Prestige",
    tagline: "Luxury construction with fully customised architecture & interiors.",
    pricePerSqft: 2899,
    features: ["Luxury Grade Materials", "Designer Fittings & Fixtures", "Unlimited Design Consultations", "Dedicated Architect + PM", "Full Interior Package Included", "30 Month Structural Warranty"],
    color: "charcoal",
  },
];
