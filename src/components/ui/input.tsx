import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "centered" | "two-column";
  error?: boolean;
  errorMessage?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "centered",
      error,
      errorMessage,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col gap-2", wrapperClassName)}>
        <input
          ref={ref}
          className={cn(
            "bg-white border rounded focus:outline-none w-full transition-colors",
            error && "border-red-500",
            variant === "centered"
              ? "p-4 border-[var(--grey-100)] focus:border-[var(--yellow-500)] text-[var(--grey-500)] placeholder:text-[var(--grey-200)] text-base leading-6 tracking-[-0.32px]"
              : "px-4 py-3 md:py-4 border-[#bebebe] focus:ring-[var(--primary)] focus:ring-1 font-sans font-normal text-black placeholder:text-[#9e9e9e] text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px]",
            className
          )}
          {...props}
        />
        {error && errorMessage && (
          <span className="font-sans text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
