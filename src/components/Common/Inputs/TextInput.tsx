import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Reusable, accessible text input with floating label style used in forms.
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-charcoal/70">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-beige-dark bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-primary",
            error && "border-red-400",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
