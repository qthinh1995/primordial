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
        "bg-[var(--yellow-200)] flex flex-col items-center justify-center px-4 py-4 md:py-12 md:px-12",
        className
      )}
    >
      {/* BACKGROUND CHÍNH – GIỮ NGUYÊN */}
      <div className="bg-[var(--yellow-50)] flex flex-col gap-20 items-start md:items-center py-20 w-full">
        <Container className="flex flex-col gap-10 px-4 md:px-12 md:gap-20 ">

          {/* ================= LOGO + TAGLINE ================= */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:text-left w-full">
            <div className="flex justify-start">
              <div className="h-14 w-[246px] ml-[-30px] justify-start mt-[-80px] md:mt-[-80px] md:ml-[-40px]">
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

            <p className="font-display font-normal leading-[1.4] text-[18px] tracking-[-1px] text-black md:text-[32px] xl:text-[44px] md:tracking-[-1.76px] whitespace-normal">
              {content.tagline}
            </p>
          </div>

          {/* ================= 3 COLUMNS ================= */}
          <div className="flex flex-col mt-[-20px] md:mt-0 md:flex-row gap-10 md:gap-16 items-start w-full">

            {/* -------- SITE NAV (MOBILE FIRST) -------- */}
            <div className="order-1 md:order-2 flex flex-1 flex-col gap-2">
              <p className="font-sans font-bold leading-6 text-base text-black tracking-[-0.32px] py-2">
                {content.siteNav.title}
              </p>

              {content.siteNav.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="py-2 font-sans font-normal leading-6 text-base text-black tracking-[-0.32px] hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* -------- ECOSYSTEM -------- */}
            <div className="order-2 md:order-3 flex flex-1 flex-col gap-2">
              <p className="font-sans font-bold leading-6 text-base text-black tracking-[-0.32px] py-2">
                {content.ecosystem.title}
              </p>

              {content.ecosystem.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="py-2 font-sans font-normal leading-6 text-base text-black tracking-[-0.32px] hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* -------- CONTACT (MOBILE LAST) -------- */}
            <div className="order-3 md:order-1 flex flex-1 flex-col gap-5 items-start">

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

              <div className="flex gap-1 flex-wrap items-center">
                {content.contact.phone.numbers.map((phone, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-2 text-black/60 select-none">
                        |
                      </span>
                    )}

                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:opacity-80 transition-opacity whitespace-nowrap"
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
          <div className="w-full h-px bg-black/60"/>

          {/* ================= BOTTOM ================= */}
          <div className="flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between md:text-left w-full">
            <p className=" order-2 md:order-1 font-sans font-normalleading-6 text-[var(--grey-500)] text-base tracking-[-0.32px]">
              {content.copyright}
            </p>

            <div className="flex order-1 md:order-2 md:justify-end gap-4">
              {/* LinkedIn */}
             <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-8 w-8"
              >
                <svg
                  viewBox="0 0 27.9918 28"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0278 0H13.964C6.25191 0 0 6.25374 0 13.9681V14.0319C0 21.7463 6.25191 28 13.964 28H14.0278C21.7399 28 27.9918 21.7463 27.9918 14.0319V13.9681C27.9918 6.25374 21.7399 0 14.0278 0Z"
                    fill="#C5A25D"
                  />
                  <path
                    d="M6.67565 9.30729C6.30691 8.96492 6.12354 8.54115 6.12354 8.03693C6.12354 7.5327 6.30789 7.09028 6.67565 6.74694C7.04439 6.40458 7.51905 6.23291 8.10059 6.23291C8.68214 6.23291 9.13817 6.40458 9.50592 6.74694C9.87466 7.0893 10.058 7.51995 10.058 8.03693C10.058 8.5539 9.87368 8.96492 9.50592 9.30729C9.13719 9.64965 8.66939 9.82132 8.10059 9.82132C7.53179 9.82132 7.04439 9.64965 6.67565 9.30729ZM9.74815 11.2712V21.7676H6.43244V11.2712H9.74815Z"
                    fill="white"
                  />
                  <path
                    d="M20.7857 12.308C21.5085 13.0928 21.8694 14.1699 21.8694 15.5413V21.5822H18.7204V15.9671C18.7204 15.2755 18.541 14.7379 18.183 14.3553C17.8251 13.9727 17.3426 13.7805 16.7385 13.7805C16.1344 13.7805 15.6518 13.9718 15.2939 14.3553C14.9359 14.7379 14.7565 15.2755 14.7565 15.9671V21.5822H11.5889V11.2417H14.7565V12.6131C15.0772 12.156 15.5097 11.795 16.053 11.5291C16.5963 11.2633 17.2072 11.1309 17.8868 11.1309C19.097 11.1309 20.0639 11.5232 20.7857 12.307Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* YouTube */}
             <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-8 w-8"
              >
                <svg
                  viewBox="0 0 27.9917 28"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9917 14C27.9917 6.26801 21.7256 0 13.9959 0C6.26617 0 0 6.26801 0 14C0 21.732 6.26617 28 13.9959 28C21.7256 28 27.9917 21.732 27.9917 14Z"
                    fill="#C5A25D"
                  />
                  <path
                    d="M22.8092 11.0978C22.699 10.0344 22.462 8.85878 21.5897 8.24097C20.914 7.76188 20.026 7.74417 19.1969 7.74515C17.4443 7.74515 15.6908 7.74811 13.9382 7.74909C12.2525 7.75106 10.5669 7.75204 8.88118 7.75401C8.17701 7.75401 7.49251 7.6999 6.83849 8.00487C6.27693 8.26655 5.83731 8.76434 5.57276 9.3182C5.20592 10.0885 5.12921 10.9611 5.08495 11.813C5.00333 13.3644 5.01218 14.9198 5.10954 16.4702C5.18134 17.6015 5.36328 18.8519 6.23759 19.573C7.01257 20.2115 8.10619 20.2429 9.11131 20.2439C12.3017 20.2469 15.4931 20.2498 18.6845 20.2518C19.0936 20.2528 19.5204 20.2449 19.9374 20.1997C20.7577 20.1111 21.5395 19.876 22.0667 19.268C22.5987 18.6551 22.7354 17.8022 22.8161 16.9945C23.0128 15.0349 23.0108 13.0565 22.8092 11.0978ZM12.0932 16.7456V11.2513L16.8493 13.998L12.0932 16.7456Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Facebook */}
             <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-8 w-8"
              >
                <svg
                  viewBox="0 0 27.9927 28"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9907 14.0005C27.9907 21.0714 22.7509 26.917 15.944 27.8656C15.3075 27.9539 14.6563 28 13.9953 28C13.2324 28 12.4831 27.9392 11.7535 27.8215C5.08975 26.7483 0 20.9684 0 14.0005C0 6.26843 6.26657 0 13.9963 0C21.7261 0 27.9927 6.26843 27.9927 14.0005H27.9907Z"
                    fill="#C5A25D"
                  />
                  <path
                    d="M15.9456 11.2404V14.2903H19.7173L19.12 18.3986H15.9456V27.8641C15.3091 27.9523 14.6579 27.9985 13.9969 27.9985C13.234 27.9985 12.4847 27.9376 11.7551 27.8199V18.3986H8.27661V14.2903H11.7551V10.5587C11.7551 8.24356 13.6311 6.36597 15.9465 6.36597V6.36793C15.9534 6.36793 15.9593 6.36597 15.9662 6.36597H19.7183V9.91907H17.2665C16.5379 9.91907 15.9465 10.5106 15.9465 11.2395L15.9456 11.2404Z"
                    fill="white"
                  />
                </svg>
              </a>

            </div>
          </div>

        </Container>
      </div>
    </footer>
  );
}
