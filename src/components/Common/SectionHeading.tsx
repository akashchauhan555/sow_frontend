import { motion } from "framer-motion";
import Badge from "./Badges/Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

// Reusable eyebrow + heading + description block used at the top of every home section.
export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}
    >
      {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
      <h2 className="heading-md">{title}</h2>
      {description && <p className="mt-4 text-charcoal/60">{description}</p>}
    </motion.div>
  );
}
