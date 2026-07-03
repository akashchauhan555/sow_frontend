import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  error?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ label, options, error, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-charcoal/70">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-beige-dark bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-primary",
            error && "border-red-400",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;
