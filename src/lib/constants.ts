// Shared constants and data for the Primordial website
// This file will contain shared data structures and constants used across pages

import type { FooterContent } from "@/components/ui/footer";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/home" },
  { label: "Introduction", href: "/introduction" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Stouffer Hotels", href: "/stouffer-hotels" },
  { label: "Hoteliers Without Borders", href: "/hoteliers-without-borders" },
  { label: "Lumora", href: "/lumora" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer content for English
export const FOOTER_CONTENT_EN: FooterContent = {
  tagline: "Everybody is Somebody™",
  contact: {
    email: {
      label: "Email",
      addresses: [
        "bao.nguyen@primordial.com.vn",
        "phuong.mai@primordial.com.vn",
      ],
    },
    phone: {
      label: "Phone",
      numbers: ["+84 916 910 512", "+84 945 008 896"],
    },
    address: {
      label: "Address",
      text: "Cua Duong, Phu Quoc, Kien Giang, Vietnam",
    },
  },
  siteNav: {
    title: "Website",
    items: [
      { label: "Home", href: "/en/home" },
      { label: "Introduction", href: "/en/introduction" },
      { label: "Ecosystem", href: "/en/ecosystem" },
      { label: "Partners & Links", href: "/en/partnerships" },
      { label: "Contact", href: "/en/contact" },
    ],
  },
  ecosystem: {
    title: "Subsidiary brand",
    items: [
      { label: "Stouffer Hotels™", href: "/en/stouffer-hotels" },
      {
        label: "Hoteliers Without Borders™",
        href: "/en/hoteliers-without-borders",
      },
      { label: "Lumora IX.IX Agenda™", href: "/en/lumora" },
    ],
  },
  copyright: "© 2025 All rights reserved by · Primordial Hospitium.",
  socialLinks: [
    { name: "LinkedIn", href: "#", icon: "/social-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/social-youtube.png" },
    { name: "Facebook", href: "#", icon: "/social-facebook.png" },
  ],
};

// Footer content for Vietnamese
export const FOOTER_CONTENT_VI: FooterContent = {
  tagline: "Everybody is Somebody™",
  contact: {
    email: {
      label: "Email",
      addresses: [
        "bao.nguyen@primordial.com.vn",
        "phuong.mai@primordial.com.vn",
      ],
    },
    phone: {
      label: "Số điện thoại",
      numbers: ["+84 916 910 512", "+84 945 008 896"],
    },
    address: {
      label: "Địa chỉ",
      text: "Cua Duong, Phu Quoc, Kien Giang, Vietnam",
    },
  },
  siteNav: {
    title: "Trang web",
    items: [
      { label: "Trang chủ", href: "/vi/home" },
      { label: "Giới thiệu", href: "/vi/introduction" },
      { label: "Hệ sinh thái", href: "/vi/ecosystem" },
      { label: "Đối tác & Liên kết", href: "/vi/partnerships" },
      { label: "Liên hệ", href: "/vi/contact" },
    ],
  },
  ecosystem: {
    title: "Thương hiệu phụ",
    items: [
      { label: "Stouffer Hotels™", href: "/vi/stouffer-hotels" },
      {
        label: "Hoteliers Without Borders™",
        href: "/vi/hoteliers-without-borders",
      },
      { label: "Lumora IX.IX Agenda™", href: "/vi/lumora" },
    ],
  },
  copyright: "© 2025 Tất cả các quyền được bảo lưu bởi · Primordial Hospitium.",
  socialLinks: [
    { name: "LinkedIn", href: "#", icon: "/social-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/social-youtube.png" },
    { name: "Facebook", href: "#", icon: "/social-facebook.png" },
  ],
};

// Navigation content for English
export interface NavItem {
  label: string;
  href: string;
}

export interface NavContent {
  items: NavItem[];
  subsidiaryBrandItems: NavItem[];
  contactLabel: string;
  contactHref: string;
  languageLabel: string;
  languageHref: string;
  mobileContactLabel: string;
  mobileSubsidiaryBrandLabel: string;
  mobileCopyright: string;
  mobileSocialLinks: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
}

export const NAV_CONTENT_EN: NavContent = {
  items: [
    { label: "Home", href: "/en/" },
    { label: "Introduction", href: "/en/introduction" },
    { label: "Ecosystem", href: "/en/ecosystem" },
    { label: "Partners & Affiliates", href: "/en/partnerships" },
  ],
  subsidiaryBrandItems: [
    { label: "Stouffer Hotels™", href: "/en/stouffer-hotels" },
    {
      label: "Hoteliers Without Borders™",
      href: "/en/hoteliers-without-borders",
    },
    { label: "Lumora IX.IX Agenda™", href: "/en/lumora" },
  ],
  contactLabel: "CONTACT",
  contactHref: "/en/contact",
  languageLabel: "EN",
  languageHref: "/en",
  mobileContactLabel: "Contact us",
  mobileSubsidiaryBrandLabel: "SUBSIDIARY BRAND",
  mobileCopyright: "© 2025 Primordial Hospitium · All Rights Reserved.",
  mobileSocialLinks: [
    { name: "LinkedIn", href: "#", icon: "/menu-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/menu-youtube.png" },
    { name: "Facebook", href: "#", icon: "/menu-facebook.png" },
  ],
};

// Navigation content for Vietnamese
export const NAV_CONTENT_VI: NavContent = {
  items: [
    { label: "Trang chủ", href: "/vi/" },
    { label: "Giới thiệu", href: "/vi/introduction" },
    { label: "Hệ sinh thái", href: "/vi/ecosystem" },
    { label: "Đối tác", href: "/vi/partnerships" },
  ],
  subsidiaryBrandItems: [
    { label: "Stouffer Hotels™", href: "/vi/stouffer-hotels" },
    {
      label: "Hoteliers Without Borders™",
      href: "/vi/hoteliers-without-borders",
    },
    { label: "Lumora IX.IX Agenda™", href: "/vi/lumora" },
  ],
  contactLabel: "LIÊN HỆ",
  contactHref: "/vi/contact",
  languageLabel: "VN",
  languageHref: "/vi",
  mobileContactLabel: "Liên hệ",
  mobileSubsidiaryBrandLabel: "THƯƠNG HIỆU PHỤ",
  mobileCopyright:
    "© 2025 Primordial Hospitium · Tất cả các quyền được bảo lưu.",
  mobileSocialLinks: [
    { name: "LinkedIn", href: "#", icon: "/menu-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/menu-youtube.png" },
    { name: "Facebook", href: "#", icon: "/menu-facebook.png" },
  ],
};

// Country code options for contact forms
export interface CountryCodeOption {
  value: string;
  label: string;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { value: "+84", label: "+ 84" }, // Vietnam
  { value: "+1", label: "+ 1" }, // USA/Canada
  { value: "+44", label: "+ 44" }, // UK
  { value: "+61", label: "+ 61" }, // Australia
  { value: "+86", label: "+ 86" }, // China
  { value: "+81", label: "+ 81" }, // Japan
  { value: "+82", label: "+ 82" }, // South Korea
  { value: "+65", label: "+ 65" }, // Singapore
  { value: "+60", label: "+ 60" }, // Malaysia
  { value: "+66", label: "+ 66" }, // Thailand
  { value: "+62", label: "+ 62" }, // Indonesia
  { value: "+63", label: "+ 63" }, // Philippines
  { value: "+91", label: "+ 91" }, // India
  { value: "+33", label: "+ 33" }, // France
  { value: "+49", label: "+ 49" }, // Germany
  { value: "+39", label: "+ 39" }, // Italy
  { value: "+34", label: "+ 34" }, // Spain
  { value: "+31", label: "+ 31" }, // Netherlands
  { value: "+32", label: "+ 32" }, // Belgium
  { value: "+41", label: "+ 41" }, // Switzerland
  { value: "+46", label: "+ 46" }, // Sweden
  { value: "+47", label: "+ 47" }, // Norway
  { value: "+45", label: "+ 45" }, // Denmark
  { value: "+358", label: "+ 358" }, // Finland
  { value: "+7", label: "+ 7" }, // Russia
  { value: "+971", label: "+ 971" }, // UAE
  { value: "+966", label: "+ 966" }, // Saudi Arabia
  { value: "+27", label: "+ 27" }, // South Africa
  { value: "+55", label: "+ 55" }, // Brazil
  { value: "+52", label: "+ 52" }, // Mexico
  { value: "+54", label: "+ 54" }, // Argentina
  { value: "+64", label: "+ 64" }, // New Zealand
];

// Add other shared constants here as needed
