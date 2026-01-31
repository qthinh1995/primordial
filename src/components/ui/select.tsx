import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef, SelectHTMLAttributes, ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  showIcon?: boolean;
  customIcon?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  wrapperClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      showIcon = true,
      customIcon,
      error,
      errorMessage,
      className,
      wrapperClassName,
      children,
      ...props
    },
    ref
  ) => {
    const defaultIcon = (
      <ChevronDown className="top-1/2 right-2 absolute w-4 md:w-5 h-4 md:h-5 text-[#1f1f1f] -translate-y-1/2 pointer-events-none" />
    );

    return (
      <div className={cn("flex flex-col gap-2", wrapperClassName)}>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "bg-white px-3 py-3 md:py-4 pr-8 border rounded focus:outline-none transition-colors appearance-none cursor-pointer",
              error && "border-red-500",
              "border-[#bebebe] focus:ring-[var(--primary)] focus:ring-1 font-sans font-normal text-[#1f1f1f] text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px]",
              className
            )}
            {...props}
          >
            {children ||
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          {showIcon && (customIcon || defaultIcon)}
        </div>
        {error && errorMessage && (
          <span className="font-sans text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
