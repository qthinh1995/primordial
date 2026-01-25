"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/lib/constants";
import { LanguageSwitch } from "./language-switch";
import { useMenuAnimation } from "@/hooks/useMenuAnimation";

interface NavbarProps {
  content: NavContent;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
}

export function Navbar({ content, logo, className }: NavbarProps) {
  const pathname = usePathname();
  const { setOpen, shouldRender, isVisible } = useMenuAnimation(pathname);

  const logoConfig = logo ?? {
    src: "/navbar-logo.png",
    alt: "Primordial Hospitium",
    width: 173,
    height: 40,
  };

  const isActive = (href: string) => {
    // Home: only active on /en or /vi (and /en/ or /vi/)
    if (href === "/en/" || href === "/vi/") {
      return pathname === href.slice(0, -1) || pathname === href;
    }

    // Introduction: active on exact match
    if (href === "/en/introduction" || href === "/vi/introduction") {
      return pathname === href;
    }

    // Ecosystem: active on ecosystem and related pages
    if (href === "/en/ecosystem" || href === "/vi/ecosystem") {
      return (
        pathname === `/en/ecosystem` ||
        pathname === `/vi/ecosystem` ||
        pathname === `/en/stouffer-hotels` ||
        pathname === `/vi/stouffer-hotels` ||
        pathname === `/en/hoteliers-without-borders` ||
        pathname === `/vi/hoteliers-without-borders` ||
        pathname === `/en/lumora` ||
        pathname === `/vi/lumora`
      );
    }

    // Partners & Affiliates: active on exact match
    if (href === "/en/partnerships" || href === "/vi/partnerships") {
      return pathname === href;
    }

    // Default: check if pathname starts with href
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={cn("z-50 sticky w-full", className)}>
        {/* Blur background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none" />

        {/* INNER WRAPPER – KHÔNG Container */}
        <div className="z-10 relative flex justify-between items-center mx-auto px-4 md:px-12 w-full max-w-[1440px] h-[80px]">
          {/* LEFT */}
          <div className="flex items-center gap-12 ml-[-20px] md:ml-[-25px]">
            <Link
              href={content.items[0]?.href || "/"}
              className="flex items-center"
            >
              <Image {...logoConfig} className="w-auto h-auto" priority />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {content.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "relative flex items-center h-[52px]",
                    "text-white text-base",
                    "after:absolute after:left-0 after:-bottom-[6px]",
                    "after:h-[2px] after:w-full after:origin-left",
                    "after:scale-x-0 after:bg-white",
                    "after:transition-transform after:duration-300",
                    "hover:after:scale-x-100",
                    isActive(item.href) && "after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={content.contactHref}
              className="font-semibold text-white"
            >
              {content.contactLabel}
            </Link>

            <span className="bg-white/40 w-px h-4" />

            <LanguageSwitch />
          </div>

          {/* MOBILE BUTTONS */}
          <div className="lg:hidden flex items-center gap-6">
            <LanguageSwitch />

            <span className="bg-white/40 w-px h-4" />

            <button
              onClick={() => setOpen(true)}
              className="flex justify-center items-center w-[44px] h-[44px] text-white"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M3 6h13.5M3 12h18M3 18h9"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {shouldRender && (
        <>
          {/* BACKDROP */}
          <div
            className={cn(
              "lg:hidden z-40 fixed inset-0 bg-black/60 transition-opacity duration-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <aside
            className={cn(
              "top-0 right-0 z-50 fixed bg-[#121212]/95 w-[320px] h-full transition-transform duration-300 ease-out",
              isVisible ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 h-[88px]">
              <Image
                {...logoConfig}
                className="w-auto h-[52px] object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="flex justify-center items-center w-[44px] h-[44px] text-white"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M18 6L6 18M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-6 px-6 pt-6">
              {content.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-white text-2xl tracking-tight",
                    isActive(item.href) && "font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="bg-white/20 my-6 h-px" />

              <Link
                href={content.contactHref}
                onClick={() => setOpen(false)}
                className="font-semibold text-white"
              >
                {content.mobileContactLabel}
              </Link>
            </nav>

            {/* FOOTER */}
            <div className="space-y-4 mt-auto px-6 pb-6">
              <div className="flex gap-6">
                {content.mobileSocialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer">
                    <Image src={s.icon} alt={s.name} width={24} height={24} />
                  </a>
                ))}
              </div>

              <p className="text-white/80 text-sm">{content.mobileCopyright}</p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
