import { motion } from "framer-motion";

// Inline section loader (skeleton pulse) used within lazy-loaded page sections.
export default function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="font-heading text-primary tracking-widest text-sm uppercase"
      >
        Story Of Walls
      </motion.div>
    </div>
  );
}
