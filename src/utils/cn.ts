import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes intelligently while allowing conditional classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
