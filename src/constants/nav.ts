import type { NavLink, MegaMenuColumn } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Our Projects", path: "/projects" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Cost Estimator", path: "/cost-estimator" },
  { label: "Commercial", path: "/commercial" },
  { label: "More", path: "#" },
];

export const MEGA_MENU: MegaMenuColumn[] = [
  {
    heading: "Get Started",
    items: [
      { label: "Our Packages", description: "Explore packages tailored to every budget.", path: "/packages" },
      { label: "How It Works", description: "See how your home build comes together.", path: "/about#process" },
      { label: "Interior Design", description: "Curated interiors that tell your story.", path: "/interior" },
      { label: "Architecture", description: "Bespoke architectural planning & design.", path: "/architecture" },
      { label: "Renovation", description: "Transform existing spaces beautifully.", path: "/renovation" },
    ],
  },
  {
    heading: "Resources & Community",
    items: [
      { label: "Free Cost Estimator", description: "Get accurate estimates for your dream home.", path: "/cost-estimator", badge: "FREE" },
      { label: "Gallery", description: "Browse our finished project galleries.", path: "/gallery" },
      { label: "Blogs", description: "Expert articles for stress-free home building.", path: "/blogs" },
      { label: "Testimonials", description: "Hear from satisfied homeowners.", path: "/about#testimonials" },
      { label: "Careers", description: "Join the Story Of Walls family.", path: "/careers" },
      { label: "Contact Us", description: "Talk to our construction experts today.", path: "/contact" },
    ],
  },
];
