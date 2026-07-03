import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hoverLift?: boolean;
}

// Generic reusable card wrapper with optional glassmorphism + hover lift.
export default function Card({ children, className, glass = false, hoverLift = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -8 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-xl2 p-6 shadow-soft",
        glass ? "glass" : "bg-white border border-beige",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
