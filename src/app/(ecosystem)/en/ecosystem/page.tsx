import { Hero } from "../../components/Hero";
import { PillarsSection } from "../../components/PillarsSection";
import { TimelineSection } from "../../components/TimelineSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { QuoteSection } from "../../components/QuoteSection";

// Hero image
const heroImage =
  "https://www.figma.com/api/mcp/asset/677c6de2-a2e7-4937-986b-ee56c8e426cf";

// Pillar logo images
const stoufferLogo =
  "https://www.figma.com/api/mcp/asset/ca289a91-0d30-4153-a2b8-6eb3e07249a6";
const hwbLogo =
  "https://www.figma.com/api/mcp/asset/0e0b6ec3-5f3a-4c53-9805-0379b6dbe27f";
const lumoraLogo =
  "https://www.figma.com/api/mcp/asset/0d1525d6-9c3c-4ba9-a786-0523d1bca073";

// Project images
const projectImage1 =
  "https://www.figma.com/api/mcp/asset/b1daf2ca-adae-49bf-861d-67a5749024b0";
const projectImage2 =
  "https://www.figma.com/api/mcp/asset/d4e66afa-0a37-4a22-a22e-4346f080015c";
const projectImage3 =
  "https://www.figma.com/api/mcp/asset/795d2ce4-81a0-44f3-a842-a4b73e55944a";

// Quote section image
const quoteImage =
  "https://www.figma.com/api/mcp/asset/3e4038f5-2880-4c3b-ac4c-55a11ebf585a";

export default function EcosystemPage() {
  return (
    <main>
      <Hero
        title="Ecosystem"
        description="An ecosystem designed for lasting connection. Three strategic pillars — Stay · People · Experience — connected and orchestrated through a long-term, integrated mindset."
        image={heroImage}
      />
      <PillarsSection
        subtitle="SUBSIDIARY BRAND"
        title="THREE STRATEGIC PILLARS"
        description="Three strategic pillars - Stay · People · Experience - connected and orchestrated through a long-term, integrated mindset."
        pillars={[
          {
            title: "Stouffer Hotels™",
            tag: "STAY",
            description:
              "Stouffer Hotels™ is a soft-brand affiliation platform for independent hotels and resorts. The platform supports brand positioning, operational structure, and market credibility - while owners retain full ownership, legal control, and business decision-making authority. Stouffer focuses on establishing operational discipline and consistency without compromising the unique identity of each individual asset.",
            logoImage: stoufferLogo,
            logoType: "Stouffer Hotels",
            link: "/en/stouffer-hotels",
          },
          {
            title: "Hoteliers Without Borders™",
            tag: "WORK",
            description:
              "Hoteliers Without Borders™ is a flexible hospitality talent coordination platform, connecting hotels with experienced professionals for seasonal or project-based needs. The platform enables hotels to access the right expertise at the right time, reduce long-term payroll pressure, and remain agile during peak periods or transitional phases.",
            logoImage: hwbLogo,
            logoType: "Hoteliers Without Borders",
            link: "/en/hoteliers-without-borders",
          },
          {
            title: "Lumora IX.IX Agenda",
            tag: "EXPERIENCE",
            description:
              "Lumora IX.IX Agenda™ is a cultural and experiential platform dedicated to curating thoughtfully selected programs that bring emotional depth and distinctive character to hotel spaces. Lumora does not deliver mass-market events. Instead, it designs moments with lasting value - aligning experience with brand identity and long-term commercial performance.",
            logoImage: lumoraLogo,
            logoType: "Lumora",
            link: "/en/lumora",
          },
        ]}
      />
      <TimelineSection
        title="AN ECOSYSTEM APPLIED IN STAGES"
        description="Not every project requires the full ecosystem to be deployed at once. Primordial designs its ecosystem to be activated flexibly, aligning with each stage of development and the project's real operational need"
        phases={[
          {
            number: "Phase 1",
            title: "Foundation",
            subtitle: "STAY · Stouffer Hotels™",
            description:
              "Establishing clear positioning, operational discipline, and consistency in the core guest experience. Stouffer provides a stable foundation while preserving the project's independence.",
          },
          {
            number: "Phase 2",
            title: "Support & Scaling",
            subtitle: "WORK · Hoteliers Without Borders™",
            description:
              "Activated during peak periods, transitions, or when short-term expertise is required. Ensures operational flexibility without expanding long-term payroll.",
          },
          {
            number: "Phase 3",
            title: "Differentiation",
            subtitle: "EXPERIENCE · Lumora IX.IX Agenda™",
            description:
              "Introduced once the foundation is secure to add experiential depth and emotional identity. Designed to create memorable moments and strengthen long-term brand value.",
          },
        ]}
      />
      <ProjectsSection
        title="DESIGNED FOR PROJECTS THAT REQUIRE LONG-TERM MINDSET"
        description="The Primordial ecosystem is not built for every project. It is designed for owners and assets that require clear structure without being constrained by rigid, predefined models."
        projects={[
          {
            title: "For Independent Hotel Owners",
            description:
              "Owners who wish to retain full control of their projects, while relying on a strong strategic framework and structure to make informed decisions at every stage.",
            image: projectImage1,
          },
          {
            title: "For Boutique, Lifestyle & Luxury Projects",
            description:
              "Assets where experience, identity, and emotional connection are as critical as operations and revenue performance.",
            image: projectImage2,
          },
          {
            title: "For Family Investors & Long-Term Developers",
            description:
              "Projects that do not follow mass-market models, but prioritize sustainable performance, adaptability, and long-term asset value.",
            image: projectImage3,
          },
        ]}
      />
      <QuoteSection
        quote="Primordial does not build ecosystems to be used the most. We build them to be used correctly - for the right project, at the right time, and for the right purpose."
        image={quoteImage}
      />
    </main>
  );
}
