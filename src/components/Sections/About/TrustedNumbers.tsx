import CountUp from "react-countup";
import { motion } from "framer-motion";
import { STATS } from "@/data/stats";

// Animated counter stat band shown right below the hero.
export default function TrustedNumbers() {
  return (
    <section className="bg-charcoal py-12">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-heading text-3xl md:text-4xl font-semibold text-primary">
              <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </p>
            <p className="text-xs md:text-sm text-white/60 mt-2 tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
