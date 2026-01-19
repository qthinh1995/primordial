import { Hero } from "@/app/(introduction)/components/Hero";
import { OverviewSection } from "@/app/(introduction)/components/OverviewSection";
import { VisionSection } from "@/app/(introduction)/components/VisionSection";
import { QuoteSection } from "@/app/(introduction)/components/QuoteSection";
import { CoreFunctionsSection } from "@/app/(introduction)/components/CoreFunctionsSection";
import { TeamSection } from "@/app/(introduction)/components/TeamSection";

// ===== HERO =====
const heroImage = "/figma/introduction/intro-hero.jpg";

// ===== OVERVIEW =====
const overviewMainImage = "/figma/introduction/origin-main.jpg";
const overviewThumbs = [
  "/figma/introduction/origin-thumb-1.jpg",
  "/figma/introduction/origin-thumb-2.jpg",
] as const;

// ===== VISION =====
const visionRightImage = "/figma/introduction/vision-right.jpg";
const visionAvatar = "/figma/introduction/team-bao.jpg";

// ===== QUOTE =====
const quoteBannerImage = "/figma/introduction/quote-banner.jpg";

// ===== TEAM =====
const teamImages = [
  "/figma/introduction/team-bao.jpg",
  "/figma/introduction/team-ngoc.jpg",
  "/figma/introduction/team-cang.jpg",
  "/figma/introduction/team-ty.jpg",
] as const;

export default function IntroductionPageEN() {
  return (
    <main>
      <Hero title="About us" image={{ src: heroImage, alt: "About us hero" }} />

      <OverviewSection
        leftImage={{
          src: overviewMainImage,
          alt: "Origin overview",
          objectPosition: "50% 70%",
        }}
        title={"THE ORIGIN – PERFECT\nBALANCE"}
        eyebrow="Overview"
        paragraphs={[
          "Primordial is an independent hospitality advisory and coordination platform, working alongside owners at critical points of intersection between design, operations, and commercial performance.",
          "We do not operate on behalf of our partners, nor do we impose predefined models. Primordial is present to help projects maintain a clear long-term perspective, make the right decisions at each stage, and evolve in alignment with their true character.",
          "This is how we create balance - between vision and reality, between experience and sustainable performance.",
        ]}
        thumbs={[
          { src: overviewThumbs[0], alt: "Overview thumb 1" },
          { src: overviewThumbs[1], alt: "Overview thumb 2" },
        ]}
      />

      <VisionSection
        title="VISION"
        paragraphs={[
          "Primordial believes that a sustainable hospitality project is shaped from the very beginning - starting with the earliest decisions around design, structure, and commercial logic.",
          "We view hospitality as an interconnected system where experience, operations, and financial performance are inseparable, and where every choice directly impacts cash flow and long-term growth potential.",
          "For this reason, Primordial operates at the earliest strategic level, providing an independent perspective that integrates design thinking, operational logic, and financial analysis - enabling owners to make informed decisions and guide their projects toward sustainable, long-term success.",
        ]}
        feature={{
          avatar: { src: visionAvatar, alt: "Bao Nguyen" },
          name: "Bao Nguyen",
          role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
          bio: "Providing strategic direction, feasibility analysis, and project structuring, working closely with owners on decisions that have long-term impact on operations, brand positioning, and financial performance.",
        }}
        rightImage={{ src: visionRightImage, alt: "Vision" }}
      />

      <QuoteSection
        image={{ src: quoteBannerImage, alt: "Quote banner" }}
        text="Centered on the owner, guided by operations, grounded in financial discipline."
      />

      <CoreFunctionsSection
        title="KEY FUNCTION"
        defaultOpenIndex={0}
        items={[
          {
            title: "Strategic Advisory & Feasibility",
            description:
              "Assessing project feasibility through market analysis, financial modeling, and brand positioning, supporting owners in making the right decisions from the earliest stages.",
          },
          {
            title: "Design & Technical Advisory",
            description:
              "Supporting design direction and technical coordination to ensure feasibility, coherence, and long-term operational logic.",
          },
          {
            title: "Pre-Opening & Operational Setup",
            description:
              "Building operational frameworks and pre-opening readiness so that service delivery aligns with concept, budget, and staffing realities.",
          },
          {
            title: "Asset Management & Performance",
            description:
              "Monitoring performance and aligning stakeholder decisions with sustainable value creation across the asset lifecycle.",
          },
          {
            title: "Sales, Marketing & Revenue Strategy",
            description:
              "Defining go-to-market, distribution, and pricing strategy to protect positioning while maximizing commercial outcomes.",
          },
          {
            title: "F&B · Spa · Wellness",
            description:
              "Concept development and operational planning for F&B and wellness experiences that complement the property’s identity and demand profile.",
          },
        ]}
      />

      <TeamSection
        title="OUR TEAM"
        intro={
          <>
            Our team is the heart of <b>Primordial Hospitium</b>. We are a diverse
            group of professionals united by a shared passion for hospitality and a
            commitment to excellence. Meet the people behind our promise to deliver
            exceptional service and meaningful, memorable experiences.
          </>
        }
        members={[
          {
            name: "Bao Nguyen",
            role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
            image: { src: teamImages[0], alt: "Bao Nguyen" },
          },
          {
            name: "Nguyen Ngoc",
            role: "CHIEF FINANCIAL OFFICER",
            image: { src: teamImages[1], alt: "Nguyen Ngoc" },
          },
          {
            name: "Cang Lam",
            role: "DIRECTOR OF OPERATION - ADVISOR",
            image: { src: teamImages[2], alt: "Cang Lam" },
          },
          {
            name: "Ty Nguyen",
            role: "DIRECTOR OF SALE & MARKETING - ADVISOR",
            image: { src: teamImages[3], alt: "Ty Nguyen" },
          },
        ]}
      />
    </main>
  );
}
