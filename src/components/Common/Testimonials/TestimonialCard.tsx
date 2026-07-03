import { FaStar, FaQuoteLeft } from "react-icons/fa";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl2 bg-white p-8 shadow-soft border border-beige">
      <FaQuoteLeft className="text-primary/30 text-3xl mb-4" />
      <p className="flex-1 text-charcoal/80 leading-relaxed mb-6">{testimonial.review}</p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-primary text-sm" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-heading text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-charcoal/50">{testimonial.projectType} · {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
