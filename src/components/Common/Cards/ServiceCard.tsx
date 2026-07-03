import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

// Luxury service card used in the Services grid section.
export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl2 bg-white shadow-soft hover:shadow-card transition-shadow duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-sm text-charcoal/70 mb-4 line-clamp-2">{service.shortDescription}</p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
        >
          Explore Service
          <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
