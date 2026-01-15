"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { FOOTER_CONTENT_EN, FOOTER_CONTENT_VI } from "@/lib/constants";

export function FooterWrapper() {
  const pathname = usePathname();
  const isVietnamese = pathname.startsWith("/vi");
  const content = isVietnamese ? FOOTER_CONTENT_VI : FOOTER_CONTENT_EN;

  return <Footer content={content} />;
}
