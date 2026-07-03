import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";
import Badge from "@components/Common/Badges/Badge";
import Button from "@components/Common/Buttons/Button";

// Quality guarantee banner with brand imagery, positioned before the FAQ section.
export default function QualityPromise() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=1000&q=80"
            alt="Quality construction promise"
            className="rounded-xl3 w-full object-cover aspect-[4/3] shadow-card"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl2 shadow-card p-5 flex items-center gap-3">
            <FaAward className="text-primary text-3xl" />
            <div>
              <p className="font-heading font-semibold text-lg">30 Month</p>
              <p className="text-xs text-charcoal/50">Structural Warranty</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-4">Our Promise</Badge>
          <h2 className="heading-md mb-5">
            Quality That's Protected Long After The Project Is Complete
          </h2>
          <p className="text-charcoal/60 mb-8 leading-relaxed">
            Every Story Of Walls project comes with a dedicated Relationship Manager and structural
            warranty, so you have peace of mind long after your keys are handed over.
          </p>
          <Button icon={undefined}>Learn About Our Guarantee</Button>
        </motion.div>
      </div>
    </section>
  );
}
