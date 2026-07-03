import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "s1",
    slug: "residential-construction",
    title: "Residential Construction",
    shortDescription: "End-to-end construction of custom dream homes built on trust and transparency.",
    fullDescription:
      "From foundation to finishing, our residential construction service covers every stage of building your dream home. We combine structural engineering excellence with premium materials and a dedicated project manager for complete peace of mind.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    icon: "FaHome",
    features: ["Dedicated Project Manager", "Fixed Timeline Guarantee", "Premium Grade Materials", "Live Progress Tracking"],
  },
  {
    id: "s2",
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "Bespoke interiors that turn every room into a chapter of your story.",
    fullDescription:
      "Our interior design team crafts personalised spaces that balance aesthetics with functionality — from modular kitchens to statement living rooms, designed around how you actually live.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    icon: "FaCouch",
    features: ["3D Visualisation", "Modular Furniture", "Premium Finishes", "Turnkey Delivery"],
  },
  {
    id: "s3",
    slug: "architecture-planning",
    title: "Architecture & Planning",
    shortDescription: "Thoughtful architectural plans balancing light, space and Vastu.",
    fullDescription:
      "Our in-house architects design floor plans optimised for natural light, ventilation and functional flow, tailored to your plot size, family needs and local building codes.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    icon: "FaDraftingCompass",
    features: ["Custom Floor Plans", "3D Elevation Design", "Vastu Compliant", "Structural Engineering"],
  },
  {
    id: "s4",
    slug: "commercial-construction",
    title: "Commercial Construction",
    shortDescription: "Scalable commercial builds for offices, retail and hospitality spaces.",
    fullDescription:
      "We deliver commercial projects on time and on budget, with rigorous quality control across offices, retail outlets, warehouses and hospitality properties.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    icon: "FaBuilding",
    features: ["Fast-Track Delivery", "Compliance Handling", "Cost Optimisation", "Facility Management"],
  },
  {
    id: "s5",
    slug: "renovation",
    title: "Renovation & Remodelling",
    shortDescription: "Breathe new life into existing spaces with expert renovation.",
    fullDescription:
      "Whether it's a single room refresh or a full home remodel, our renovation team works around your schedule to minimise disruption while maximising transformation.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
    icon: "FaHammer",
    features: ["Structural Upgrades", "Space Optimisation", "Minimal Disruption", "Budget Friendly"],
  },
  {
    id: "s6",
    slug: "cost-estimator",
    title: "Free Cost Estimator",
    shortDescription: "Get an instant, accurate construction cost estimate in minutes.",
    fullDescription:
      "Use our free online cost estimator to get a transparent, itemised breakdown of your construction cost based on plot size, city and material grade — no hidden charges.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    icon: "FaCalculator",
    features: ["Instant Results", "City-wise Pricing", "Material Grade Options", "Downloadable PDF"],
  },
];
