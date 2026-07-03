import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "cta";
  className?: string;
}

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  const styles: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    dark: "bg-charcoal text-white",
    light: "bg-white text-charcoal border border-beige",
    cta: "bg-cta/10 text-cta",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
