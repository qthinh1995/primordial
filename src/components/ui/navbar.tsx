"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/lib/constants";

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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isVietnamese = pathname.startsWith("/vi");

  const logoConfig = logo ?? {
    src: "/figma/navbar-logo.png",
    alt: "Primordial Hospitium",
    width: 173,
    height: 40,
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/en" || href === "/vi"
      ? pathname === href || pathname === `${href}/`
      : pathname.startsWith(href);

  return (
    <>
      {/* ================= NAVBAR ================= */}
<header className={cn("sticky top-0 z-50 w-full", className)}>
  {/* Blur background */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

  {/* INNER WRAPPER – KHÔNG Container */}
  <div className="relative z-10 mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-4 md:px-12">
    
    {/* LEFT */}
    <div className="flex items-center gap-12 ml-[-20px] md:ml-[-25px]">
      <Link href={content.items[0]?.href || "/"} className="flex items-center">
        <Image
          {...logoConfig}
          className="h-auto w-auto"
          priority
        />
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
        className="text-white font-semibold"
      >
        {content.contactLabel}
      </Link>

      <span className="h-4 w-px bg-white/40" />

      <Link
        href={isVietnamese ? "/en" : "/vi"}
        className="text-white font-semibold"
      >
        {isVietnamese ? "EN" : "VN"}
      </Link>
    </div>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setOpen(true)}
      className="lg:hidden flex h-[44px] w-[44px] items-center justify-center text-white"
      aria-label="Open menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    </button>
  </div>
</header>


      {/* ================= MOBILE MENU ================= */}
      {open && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <aside className="fixed right-0 top-0 z-50 h-full w-[320px] bg-[#121212]/95 animate-in slide-in-from-right duration-300">
            {/* HEADER */}
            <div className="h-[88px] flex items-center justify-between px-6">
              <Image
                {...logoConfig}
                className="h-[52px] w-auto object-contain"
              />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <Image
                  src="/figma/menu-close.png"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* NAV */}
            <nav className="px-6 pt-6 flex flex-col gap-6">
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

              <div className="h-px bg-white/20 my-6" />

              <Link
                href={content.contactHref}
                onClick={() => setOpen(false)}
                className="text-white font-semibold"
              >
                {content.mobileContactLabel}
              </Link>
            </nav>

            {/* FOOTER */}
            <div className="mt-auto px-6 pb-6 space-y-4">
              <div className="flex gap-6">
                {content.mobileSocialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer">
                    <Image src={s.icon} alt={s.name} width={24} height={24} />
                  </a>
                ))}
              </div>

              <p className="text-sm text-white/80">
                {content.mobileCopyright}
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
