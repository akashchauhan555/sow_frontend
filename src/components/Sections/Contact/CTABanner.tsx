import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import MagneticButton from "@components/Common/Buttons/MagneticButton";

// Full-width call-to-action banner before the footer contact section.
export default function CTABanner() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%)]" />
      <div className="container-custom relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white">Ready To Begin Your Story?</h2>
          <p className="text-white/80 mt-2">Book a free consultation with our construction experts today.</p>
        </motion.div>
        <Link to="/book-consultation">
          <MagneticButton className="bg-charcoal flex items-center gap-2">
            Book Free Consultation <FaArrowRight />
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
