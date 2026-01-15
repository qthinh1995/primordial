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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isVietnamese = pathname.startsWith("/vi");

  const defaultLogo = {
    src: "/figma/navbar-logo.png",
    alt: "Primordial Hospitium",
    width: 173,
    height: 40,
  };

  const logoConfig = logo || defaultLogo;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/en" || href === "/vi") {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          "backdrop-blur-[4px] bg-[rgba(0,0,0,0.5)] flex items-center justify-between px-12 py-0 sticky top-0 z-50 w-full",
          className
        )}
      >
        <Container className="flex flex-1 items-center justify-between py-5">
          {/* Logo and Navigation */}
          <div className="flex gap-12 items-center">
            <Link href={content.items[0]?.href || "/"} className="relative h-10 w-[173px]">
              <Image
                src={logoConfig.src}
                alt={logoConfig.alt}
                width={logoConfig.width || 173}
                height={logoConfig.height || 40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 items-center">
              {content.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center py-2 font-sans font-normal leading-6 text-base text-white tracking-[-0.32px] transition-opacity hover:opacity-80",
                    isActive(item.href) && "border-b-2 border-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact and Language Selector */}
          <div className="hidden lg:flex gap-6 items-center">
            <Link
              href={content.contactHref}
              className="flex gap-2 items-center justify-center py-2 rounded-[99px] font-sans font-semibold leading-6 text-base text-white tracking-[-0.32px] hover:opacity-80 transition-opacity"
            >
              {content.contactLabel}
            </Link>
            <div className="flex h-6 items-center justify-center w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-6">
                  <Image
                    src="/figma/navbar-divider.png"
                    alt=""
                    width={24}
                    height={24}
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
            <Link
              href={isVietnamese ? "/en" : "/vi"}
              className="flex items-center justify-center py-2 rounded font-sans font-semibold leading-6 text-base text-white tracking-[-0.32px] hover:opacity-80 transition-opacity"
            >
              {isVietnamese ? "EN" : "VN"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex items-center justify-center p-2 text-white"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 lg:hidden">
            <div className="backdrop-blur-[4px] bg-[#121212] flex flex-col items-end h-full w-[311px] animate-in slide-in-from-right duration-300">
              {/* Mobile Header */}
              <div className="backdrop-blur-[4px] bg-[#121212] flex items-center justify-between overflow-clip px-4 py-0 sticky top-0 w-full">
                <div className="flex flex-1 items-center justify-between py-5">
                  <Link href={content.items[0]?.href || "/"} className="relative h-10 w-[173px]">
                    <Image
                      src={logoConfig.src}
                      alt={logoConfig.alt}
                      width={logoConfig.width || 173}
                      height={logoConfig.height || 40}
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center p-2 text-white"
                    aria-label="Close menu"
                  >
                    <Image
                      src="/figma/menu-close.png"
                      alt="Close"
                      width={24}
                      height={24}
                      className="block"
                    />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="bg-[#121212] flex flex-1 flex-col gap-5 items-start overflow-clip px-6 py-3 w-[311px]">
              {/* Navigation Items */}
              <div className="flex flex-1 flex-col gap-6 items-start w-full">
                <nav className="flex flex-col gap-2 items-start justify-center w-full">
                  {content.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "flex items-center py-2 font-sans font-normal leading-8 text-2xl text-white tracking-[-0.72px] w-full hover:opacity-80 transition-opacity",
                        isActive(item.href) && "font-semibold"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="h-0 relative w-[128px]">
                  <Image
                    src="/figma/menu-divider.png"
                    alt=""
                    width={128}
                    height={1}
                    className="block max-w-none w-full h-full"
                  />
                </div>

                {/* Contact Link */}
                <Link
                  href={content.contactHref}
                  className="flex items-center py-2 font-sans font-bold leading-6 text-base text-white tracking-[-0.32px] hover:opacity-80 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content.mobileContactLabel}
                </Link>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-6 items-start pb-6 pt-0 px-0 w-full">
                {/* Social Icons Section */}
                <div className="flex flex-col gap-3 items-start w-full">
                  {/* Top Divider */}
                  <div className="h-0 relative w-full">
                    <Image
                      src="/figma/menu-social-divider.png"
                      alt=""
                      width={300}
                      height={1}
                      className="block max-w-none w-full h-full"
                    />
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-6 items-center w-full">
                    {content.mobileSocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative size-6 hover:opacity-80 transition-opacity"
                        aria-label={social.name}
                      >
                        <Image
                          src={social.icon}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="block max-w-none size-full"
                        />
                      </a>
                    ))}
                  </div>

                  {/* Bottom Divider */}
                  <div className="h-0 relative w-full">
                    <Image
                      src="/figma/menu-social-divider.png"
                      alt=""
                      width={300}
                      height={1}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>

                {/* Copyright */}
                <p className="font-sans font-semibold leading-5 text-sm text-white tracking-[-0.28px] w-full whitespace-pre-wrap">
                  {content.mobileCopyright}
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}
