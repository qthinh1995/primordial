"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VN" },
] as const;

export function LanguageSwitch() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isVietnamese = pathname.startsWith("/vi");
  const currentCode = isVietnamese ? "vi" : "en";
  const currentLabel = isVietnamese ? "VN" : "EN";

  // Extract the path without the language prefix
  const pathWithoutLang = pathname.replace(/^\/(en|vi)/, "") || "/";
  const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang;

  const getHref = (code: "en" | "vi") =>
    code === "vi" ? `/vi${suffix}` : `/en${suffix}`;

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "relative flex items-center font-semibold text-white text-base",
          "after:absolute after:left-0 after:-bottom-[2px]",
          "after:h-[2px] after:w-full after:origin-left",
          "after:scale-x-0 after:bg-white",
          "after:transition-transform after:duration-300",
          "hover:after:scale-x-100",
          open && "after:scale-x-100"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {currentLabel}
      </button>

      {/* DROPDOWN - same style as navbar submenu */}
      {open && (
        <div className="top-full right-0 z-50 absolute pt-2">
          <div className="bg-black/50 shadow-lg backdrop-blur-md py-2 border border-white/20 rounded-md min-w-[120px]">
            {LANGUAGES.map((lang) => {
              const isCurrent = lang.code === currentCode;
              if (isCurrent) {
                return (
                  <span
                    key={lang.code}
                    className={cn(
                      "block px-4 py-2 text-white text-base",
                      "bg-white/10 font-semibold cursor-default"
                    )}
                    aria-current="true"
                  >
                    {lang.label}
                  </span>
                );
              }
              return (
                <Link
                  key={lang.code}
                  href={getHref(lang.code)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-white text-base transition-colors",
                    "hover:bg-white/10"
                  )}
                >
                  {lang.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
