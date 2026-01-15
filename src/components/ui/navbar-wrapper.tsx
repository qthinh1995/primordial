"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { NAV_CONTENT_EN, NAV_CONTENT_VI } from "@/lib/constants";

export function NavbarWrapper() {
  const pathname = usePathname();
  const isVietnamese = pathname.startsWith("/vi");
  const content = isVietnamese ? NAV_CONTENT_VI : NAV_CONTENT_EN;

  return <Navbar content={content} />;
}
