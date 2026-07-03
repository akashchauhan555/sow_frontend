import { motion } from "framer-motion";
import { FaMobileScreen, FaChartLine, FaCamera, FaShieldHalved } from "react-icons/fa6";
import SectionHeading from "@components/Common/SectionHeading";

const TECH = [
  { icon: FaMobileScreen, title: "Live Progress App", desc: "Track every stage of construction from your phone." },
  { icon: FaCamera, title: "Daily Site Photos", desc: "Timestamped photo updates uploaded every day." },
  { icon: FaChartLine, title: "Budget Dashboard", desc: "Real-time visibility into spends vs. estimates." },
  { icon: FaShieldHalved, title: "Quality Audits", desc: "Third-party structural audits at every milestone." },
];

// Technology-forward differentiators section (app tracking, dashboards, etc.).
export default function TechnologySection() {
  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Technology"
          title="Building Homes, Powered By Technology"
          description="Complete transparency through our proprietary tracking and quality systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary-200 flex items-center justify-center text-xl mb-5">
                <item.icon />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
