"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/lib/constants";
import { LanguageSwitch } from "./language-switch";
import { useMenuAnimation } from "@/hooks/useMenuAnimation";

interface NavbarProps {
  readonly content: NavContent;
  readonly logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  readonly className?: string;
}

export function Navbar({ content, logo, className }: NavbarProps) {
  const pathname = usePathname();
  const { setOpen, shouldRender, isVisible } = useMenuAnimation(pathname);

  const logoConfig = logo ?? {
    src: "/navbar-logo-white.png",
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

    // Subsidiary brand items: active on exact match
    if (
      href === "/en/stouffer-hotels" ||
      href === "/vi/stouffer-hotels" ||
      href === "/en/hoteliers-without-borders" ||
      href === "/vi/hoteliers-without-borders" ||
      href === "/en/lumora" ||
      href === "/vi/lumora"
    ) {
      return pathname === href;
    }

    // Default: check if pathname starts with href
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={cn("top-0 z-50 fixed w-full", className)}>
        {/* Blur background */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md pointer-events-none" />

        {/* INNER WRAPPER – KHÔNG Container */}
        <div className="z-10 relative flex justify-between items-center mx-auto px-4 md:px-12 w-full max-w-[1440px] h-[80px]">
          {/* LEFT */}
          <div className="flex items-center gap-12">
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
                    "relative flex items-center",
                    "text-white text-base",
                    "after:absolute after:left-0 after:-bottom-[2px]",
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
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
              }
            }}
            role="presentation"
            tabIndex={-1}
            aria-hidden="true"
          />

          {/* PANEL */}
          <aside
            className={cn(
              "top-0 right-0 z-50 fixed flex flex-col bg-[#121212] w-[311px] h-full transition-transform duration-300 ease-out",
              isVisible ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* HEADER */}
            <div className="top-0 sticky flex justify-end items-center bg-[#121212] backdrop-blur-[4px] px-4 py-5 shrink-0">
              <button
                onClick={() => setOpen(false)}
                className="flex justify-center items-center w-6 h-6 text-white"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 6L6 18M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* MENU CONTENT */}
            <div className="flex flex-col flex-1 items-start px-6 py-[10px] overflow-y-auto">
              <div className="flex flex-col flex-1 items-start gap-6 w-full">
                {/* MAIN NAVIGATION */}
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  {content.items.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex justify-start items-center py-2 w-full text-white text-base leading-6 tracking-[-0.32px]",
                        isActive(item.href) && "font-bold underline"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="bg-white/20 w-32 h-px" />

                {/* SUBSIDIARY BRAND SECTION */}
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <p className="text-white/60 text-base uppercase leading-6 tracking-[-0.32px]">
                    {content.mobileSubsidiaryBrandLabel}
                  </p>
                  {content.subsidiaryBrandItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex justify-start items-center py-2 w-full text-white text-base leading-6 tracking-[-0.32px]",
                        isActive(item.href) && "font-bold underline"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="bg-white/20 w-32 h-px" />

                {/* CONTACT */}
                <Link
                  href={content.contactHref}
                  onClick={() => setOpen(false)}
                  className="flex justify-start items-center py-2 font-bold text-white text-base leading-6 tracking-[-0.32px]"
                >
                  {content.mobileContactLabel}
                </Link>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
