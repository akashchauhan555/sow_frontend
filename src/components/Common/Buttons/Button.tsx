import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const VARIANT_STYLES: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-600 shadow-card",
  secondary: "bg-charcoal text-white hover:bg-charcoal-light",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-charcoal hover:bg-beige",
  cta: "bg-cta text-white hover:bg-cta-hover shadow-card",
};

const SIZE_STYLES: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// Reusable, animated, accessible button component used across the site.
export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className
      )}
      {...(props as any)}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </motion.button>
  );
}
