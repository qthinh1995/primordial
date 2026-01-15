import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export interface FooterContactInfo {
  email: {
    label: string;
    addresses: string[];
  };
  phone: {
    label: string;
    numbers: string[];
  };
  address: {
    label: string;
    text: string;
  };
}

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterEcosystemItem {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterContent {
  tagline: string;
  contact: FooterContactInfo;
  siteNav: {
    title: string;
    items: FooterNavItem[];
  };
  ecosystem: {
    title: string;
    items: FooterEcosystemItem[];
  };
  copyright: string;
  socialLinks: FooterSocialLink[];
}

interface FooterProps {
  content: FooterContent;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
}

export function Footer({ content, logo, className }: FooterProps) {
  const defaultLogo = {
    src: "/figma/footer-logo.png",
    alt: "Primordial Hospitium",
    width: 246,
    height: 56,
  };

  const logoConfig = logo || defaultLogo;

  return (
    <footer
      className={cn(
        "bg-[var(--yellow-200)] flex flex-col items-center justify-center py-12 px-12",
        className
      )}
    >
      <div className="bg-[var(--yellow-50)] flex flex-col gap-20 items-center py-20 w-full">
        <Container className="flex flex-col gap-20">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start py-2.5">
              <div className="relative h-14 w-[246px] pt-[-50px]">
                <Image
                  src={logoConfig.src}
                  alt={logoConfig.alt}
                  width={logoConfig.width || 246}
                  height={logoConfig.height || 56}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="font-display font-normal leading-[1.4] text-[44px] text-black tracking-[-1.76px]">
              {content.tagline}
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="flex gap-16 items-start w-full">
            {/* Contact Info Column */}
            <div className="flex flex-1 flex-col gap-5 items-start">
              <div className="flex flex-col gap-1 items-start leading-6 text-base text-black tracking-[-0.32px] w-full">
                <p className="font-sans font-bold w-full">{content.contact.email.label}</p>
                <div className="flex flex-col font-sans font-normal gap-2.5 items-start w-full">
                  {content.contact.email.addresses.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1 items-start w-full">
                <p className="font-sans font-bold leading-6 text-base text-black tracking-[-0.32px] w-full">
                  {content.contact.phone.label}
                </p>
                <div className="flex gap-3 items-center">
                  {content.contact.phone.numbers.map((phone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {index > 0 && (
                        <div className="flex h-4 items-center justify-center w-0">
                          <div className="flex-none rotate-90">
                            <div className="h-0 relative w-4">
                              <Image
                                src="/figma/footer-divider.png"
                                alt=""
                                width={16}
                                height={16}
                                className="block max-w-none size-full"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="font-sans font-normal leading-6 text-base text-black tracking-[-0.32px] hover:opacity-80 transition-opacity"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1 items-start leading-6 text-base text-black tracking-[-0.32px] w-full">
                <p className="font-sans font-bold w-full">{content.contact.address.label}</p>
                <p className="font-sans font-normal w-full">{content.contact.address.text}</p>
              </div>
            </div>

            {/* Site Navigation Column */}
            <div className="flex flex-1 flex-col gap-2 items-start justify-center">
              <div className="flex items-center py-2 w-full">
                <p className="font-sans font-bold leading-6 text-base text-black tracking-[-0.32px]">
                  {content.siteNav.title}
                </p>
              </div>
              {content.siteNav.items.map((item, index) => (
                <div key={index} className="flex items-center py-2 w-full">
                  <Link
                    href={item.href}
                    className="font-sans font-normal leading-6 text-base text-black tracking-[-0.32px] hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Ecosystem Column */}
            <div className="flex flex-1 flex-col gap-2 items-start justify-center">
              <div className="flex items-center py-2 w-full">
                <p className="font-sans font-bold leading-6 text-base text-black tracking-[-0.32px]">
                  {content.ecosystem.title}
                </p>
              </div>
              {content.ecosystem.items.map((item, index) => (
                <div key={index} className="flex items-center py-2 w-full">
                  <Link
                    href={item.href}
                    className="font-sans font-normal leading-6 text-base text-black tracking-[-0.32px] hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 h-0 left-0 right-0">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  src="/figma/footer-divider.png"
                  alt=""
                  width={1200}
                  height={1}
                  className="block max-w-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="flex items-center justify-between w-full">
            <p className="font-sans font-normal leading-6 text-[var(--grey-500)] text-base tracking-[-0.32px]">
              {content.copyright}
            </p>
            <div className="flex gap-4 items-center">
              {content.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 w-7 hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={28}
                    height={28}
                    className="block max-w-none size-full"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
