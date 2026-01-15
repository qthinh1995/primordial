import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-[1440px]", // Design uses 1440px max-width
  full: "max-w-full",
};

/**
 * Container component that handles max-width and horizontal padding
 * Based on the design's grid system with 48px (3rem) horizontal padding
 * and max-width of 1440px (screen-2xl)
 */
export function Container({
  children,
  className,
  maxWidth = "2xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-12", // 48px horizontal padding matching design
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}
