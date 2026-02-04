import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { InstagramIcon } from "./icons/instagram-icon";
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
    src: "/footer-logo.png",
    alt: "Primordial Hospitium",
    width: 246,
    height: 56,
  };

  const logoConfig = logo || defaultLogo;

  return (
    <footer
      className={cn(
        "flex flex-col justify-center items-center bg-[var(--yellow-200)] px-4 md:px-12 py-4 md:py-12",
        className
      )}
    >
      {/* BACKGROUND CHÍNH – GIỮ NGUYÊN */}
      <div className="flex flex-col items-start md:items-center gap-20 bg-[var(--yellow-50)] py-20 w-full">
        <Container className="flex flex-col gap-10 md:gap-20 px-4 md:px-12">
          {/* ================= LOGO + TAGLINE ================= */}
          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-6 w-full md:text-left">
            <div className="flex justify-start">
              <div className="justify-start mt-[-80px] md:mt-[-80px] ml-[-30px] md:ml-[-40px] w-[246px] h-14">
                <Image
                  src={logoConfig.src}
                  alt={logoConfig.alt}
                  width={logoConfig.width}
                  height={logoConfig.height}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="font-display font-normal text-[18px] text-black md:text-[32px] xl:text-[44px] leading-[1.4] tracking-[-1px] md:tracking-[-1.76px] whitespace-normal">
              {content.tagline}
            </p>
          </div>

          {/* ================= 3 COLUMNS ================= */}
          <div className="flex md:flex-row flex-col items-start gap-10 md:gap-16 mt-[-20px] md:mt-0 w-full">
            {/* -------- SITE NAV (MOBILE FIRST) -------- */}
            <div className="flex flex-col flex-1 gap-2 order-1 md:order-2">
              <p className="py-2 font-sans font-bold text-black text-base leading-6 tracking-[-0.32px]">
                {content.siteNav.title}
              </p>

              {content.siteNav.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:opacity-80 py-2 font-sans font-normal text-black text-base leading-6 tracking-[-0.32px] transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* -------- ECOSYSTEM -------- */}
            <div className="flex flex-col flex-1 gap-2 order-2 md:order-3">
              <p className="py-2 font-sans font-bold text-black text-base leading-6 tracking-[-0.32px]">
                {content.ecosystem.title}
              </p>

              {content.ecosystem.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:opacity-80 py-2 font-sans font-normal text-black text-base leading-6 tracking-[-0.32px] transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* -------- CONTACT (MOBILE LAST) -------- */}
            <div className="flex flex-col flex-1 items-start gap-5 order-3 md:order-1">
              {/* EMAIL */}
              <div className="flex flex-col gap-1 w-full">
                <p className="font-sans font-bold">
                  {content.contact.email.label}
                </p>
                <div className="flex flex-col gap-2">
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

              {/* PHONE */}
              <div className="flex flex-col gap-1 w-full">
                <p className="font-sans font-bold">
                  {content.contact.phone.label}
                </p>

                <div className="flex flex-wrap items-center gap-1">
                  {content.contact.phone.numbers.map((phone, index) => (
                    <div key={index} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-2 text-black/60 select-none">
                          |
                        </span>
                      )}

                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="hover:opacity-80 whitespace-nowrap transition-opacity"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-1 w-full">
                <p className="font-sans font-bold">
                  {content.contact.address.label}
                </p>
                <p>{content.contact.address.text}</p>
              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="bg-black/60 w-full h-px" />

          {/* ================= BOTTOM ================= */}
          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-6 w-full text-left md:text-left">
            <p className="order-2 md:order-1 font-normalleading-6 font-sans text-[var(--grey-500)] text-base tracking-[-0.32px]">
              {content.copyright}
            </p>

            <div className="flex md:justify-end gap-4 order-1 md:order-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/posts/primordial-hospitium_ending-the-year-with-gratitude-clarity-activity-7409604075568152577-J8UA?utm_source=share&utm_medium=member_android&rcm=ACoAAB12saYB16aCzHAZa5FakSBrPOZYtqYLQHM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8"
              >
                <LinkedInIcon />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/primordialhospitium?utm_source=qr&igsh=Mmd3OWRuMnhjejBv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
