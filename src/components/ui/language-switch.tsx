"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitch() {
  const pathname = usePathname();
  const isVietnamese = pathname.startsWith("/vi");

  // Extract the path without the language prefix
  const pathWithoutLang = pathname.replace(/^\/(en|vi)/, "") || "/";
  const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang;

  // Construct the target path with the opposite language
  const targetPath = isVietnamese ? `/en${suffix}` : `/vi${suffix}`;
  const label = isVietnamese ? "EN" : "VN";

  return (
    <Link href={targetPath} className="font-semibold text-white">
      {label}
    </Link>
  );
}
