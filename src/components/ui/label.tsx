import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface LabelProps {
  children: ReactNode;
  required?: boolean;
  requiredText?: string;
  variant?: "centered" | "two-column";
  className?: string;
}

export function Label({
  children,
  required = false,
  requiredText,
  variant = "centered",
  className,
}: LabelProps) {
  return (
    <label className={cn("flex items-center gap-1", className)}>
      <span
        className={cn(
          "font-sans font-semibold text-sm leading-5 tracking-[-0.28px]",
          variant === "centered"
            ? "text-[var(--grey-700)]"
            : "text-[#1f1f1f] text-xs md:text-sm leading-4 md:leading-5"
        )}
      >
        {children}
      </span>
      {required && (
        <span
          className={cn(
            "font-sans text-sm leading-5 tracking-[-0.28px]",
            variant === "centered"
              ? "text-[var(--grey-200)]"
              : "text-[#9e9e9e] text-xs md:text-sm leading-4 md:leading-5"
          )}
        >
          {requiredText || "(Required)"}
        </span>
      )}
    </label>
  );
}
