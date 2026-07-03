import { motion } from "framer-motion";
import { FaShieldHalved, FaClock, FaUserTie, FaChartLine } from "react-icons/fa6";
import SectionHeading from "@components/Common/SectionHeading";

const REASONS = [
  { icon: FaShieldHalved, title: "Guaranteed Quality", desc: "Every project is inspected at 200+ checkpoints before handover." },
  { icon: FaClock, title: "On-Time Delivery", desc: "Fixed timelines backed by penalty clauses for delays." },
  { icon: FaUserTie, title: "Dedicated Project Manager", desc: "A single point of contact throughout your build journey." },
  { icon: FaChartLine, title: "Transparent Pricing", desc: "No hidden costs — fixed-price contracts from day one." },
];

// Premium cards grid with hover effects highlighting differentiators.
export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Story Of Walls"
          title="Built On Trust, Delivered With Precision"
          description="We combine engineering rigor with design sensibility to deliver homes that last generations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-xl2 bg-white p-7 shadow-soft hover:shadow-card transition-shadow duration-500 border border-beige"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-5">
                <reason.icon />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
