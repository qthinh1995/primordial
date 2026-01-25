import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef, SelectHTMLAttributes, ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "centered" | "two-column";
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
      variant = "centered",
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
    const defaultIcon =
      variant === "two-column" ? (
        <ChevronDown className="top-1/2 right-2 absolute w-4 md:w-5 h-4 md:h-5 text-[#1f1f1f] -translate-y-1/2 pointer-events-none" />
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--grey-500)]"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    if (variant === "centered") {
      return (
        <div className={cn("flex flex-col gap-2", wrapperClassName)}>
          <div className="flex items-center gap-2 bg-white px-3 py-4 border border-[var(--grey-100)] rounded shrink-0">
            <select
              ref={ref}
              className={cn(
                "bg-transparent border-none focus:outline-none font-sans text-[var(--grey-700)] text-base leading-6 tracking-[-0.32px] appearance-none cursor-pointer",
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
            <span className="font-sans text-red-500 text-sm">
              {errorMessage}
            </span>
          )}
        </div>
      );
    }

    return (
      <div className={cn("flex flex-col gap-2", wrapperClassName)}>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "bg-white px-3 py-3 md:py-4 pr-8 border rounded focus:outline-none appearance-none cursor-pointer transition-colors",
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
