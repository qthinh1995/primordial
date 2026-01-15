// Shared constants and data for the Primordial website
// This file will contain shared data structures and constants used across pages

import type { FooterContent } from "@/components/ui/footer";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
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
      addresses: ["bao.nguyen@primordial.com.vn", "phuong.mai@primordial.com.vn"],
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
      { label: "Home", href: "/en" },
      { label: "Introduction", href: "/en/introduction" },
      { label: "Partners & Links", href: "/en/partnerships" },
      { label: "News & Stories", href: "/en/news" },
      { label: "Contact", href: "/en/contact" },
    ],
  },
  ecosystem: {
    title: "Ecosystem",
    items: [
      { label: "Stouffer Hotels™", href: "/en/stouffer-hotels" },
      { label: "Hoteliers Without Borders™", href: "/en/hoteliers-without-borders" },
      { label: "Lumora IX.IX Agenda™", href: "/en/lumora" },
    ],
  },
  copyright: "© 2025 All rights reserved by · Primordial Hospitium.",
  socialLinks: [
    { name: "LinkedIn", href: "#", icon: "/figma/social-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/figma/social-youtube.png" },
    { name: "Facebook", href: "#", icon: "/figma/social-facebook.png" },
  ],
};

// Footer content for Vietnamese
export const FOOTER_CONTENT_VI: FooterContent = {
  tagline: "Everybody is Somebody™",
  contact: {
    email: {
      label: "Email",
      addresses: ["bao.nguyen@primordial.com.vn", "phuong.mai@primordial.com.vn"],
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
      { label: "Trang chủ", href: "/vi" },
      { label: "Giới thiệu", href: "/vi/introduction" },
      { label: "Đối tác & Liên kết", href: "/vi/partnerships" },
      { label: "Tin tức & Câu chuyện", href: "/vi/news" },
      { label: "Liên hệ", href: "/vi/contact" },
    ],
  },
  ecosystem: {
    title: "Hệ sinh thái",
    items: [
      { label: "Stouffer Hotels™", href: "/vi/stouffer-hotels" },
      { label: "Hoteliers Without Borders™", href: "/vi/hoteliers-without-borders" },
      { label: "Lumora IX.IX Agenda™", href: "/vi/lumora" },
    ],
  },
  copyright: "© 2025 Tất cả các quyền được bảo lưu bởi · Primordial Hospitium.",
  socialLinks: [
    { name: "LinkedIn", href: "#", icon: "/figma/social-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/figma/social-youtube.png" },
    { name: "Facebook", href: "#", icon: "/figma/social-facebook.png" },
  ],
};

// Navigation content for English
export interface NavItem {
  label: string;
  href: string;
}

export interface NavContent {
  items: NavItem[];
  contactLabel: string;
  contactHref: string;
  languageLabel: string;
  languageHref: string;
  mobileContactLabel: string;
  mobileCopyright: string;
  mobileSocialLinks: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
}

export const NAV_CONTENT_EN: NavContent = {
  items: [
    { label: "Home", href: "/en" },
    { label: "Introduction", href: "/en/introduction" },
    { label: "Ecosystem", href: "/en/ecosystem" },
    { label: "Partners", href: "/en/partnerships" },
    { label: "News & Stories", href: "/en/news" },
  ],
  contactLabel: "CONTACT",
  contactHref: "/en/contact",
  languageLabel: "EN",
  languageHref: "/en",
  mobileContactLabel: "Contact us",
  mobileCopyright: "© 2025 Primordial Hospitium · All Rights Reserved.",
  mobileSocialLinks: [
    { name: "LinkedIn", href: "#", icon: "/figma/menu-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/figma/menu-youtube.png" },
    { name: "Facebook", href: "#", icon: "/figma/menu-facebook.png" },
  ],
};

// Navigation content for Vietnamese
export const NAV_CONTENT_VI: NavContent = {
  items: [
    { label: "Trang chủ", href: "/vi" },
    { label: "Giới thiệu", href: "/vi/introduction" },
    { label: "Hệ sinh thái", href: "/vi/ecosystem" },
    { label: "Đối tác", href: "/vi/partnerships" },
    { label: "Tin tức & Câu chuyện", href: "/vi/news" },
  ],
  contactLabel: "LIÊN HỆ",
  contactHref: "/vi/contact",
  languageLabel: "VN",
  languageHref: "/vi",
  mobileContactLabel: "Liên hệ",
  mobileCopyright: "© 2025 Primordial Hospitium · Tất cả các quyền được bảo lưu.",
  mobileSocialLinks: [
    { name: "LinkedIn", href: "#", icon: "/figma/menu-linkedin.png" },
    { name: "YouTube", href: "#", icon: "/figma/menu-youtube.png" },
    { name: "Facebook", href: "#", icon: "/figma/menu-facebook.png" },
  ],
};

// Add other shared constants here as needed
