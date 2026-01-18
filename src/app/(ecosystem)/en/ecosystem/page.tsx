import { Hero } from "../../components/Hero";
import { PillarsSection } from "../../components/PillarsSection";
import { TimelineSection } from "../../components/TimelineSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { QuoteSection } from "../../components/QuoteSection";

// Hero image
const heroImage = "/ecosystem-hero.jpg";

// Pillar logo images
const stoufferLogo = "/ecosystem-stouffer-logo.jpg";
const hwbLogo = "/ecosystem-hwb-logo.jpg";
const lumoraLogo = "/ecosystem-lumora-logo.jpg";

// Project images
const projectImage1 = "/ecosystem-project-1.jpg";
const projectImage2 = "/ecosystem-project-2.jpg";
const projectImage3 = "/ecosystem-project-3.jpg";

// Quote section image
const quoteImage = "/ecosystem-quote.jpg";

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
