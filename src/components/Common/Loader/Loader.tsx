import { motion } from "framer-motion";

// Full-screen premium loader shown during route-level lazy loading (Suspense fallback).
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-cream">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        className="h-12 w-12 rounded-full border-2 border-primary/20 border-t-primary"
      />
    </div>
  );
}
