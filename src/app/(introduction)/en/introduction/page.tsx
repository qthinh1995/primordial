import { Hero } from "../../components/Hero";
import { StorySection } from "../../components/StorySection";
import { VisionSection } from "../../components/VisionSection";
import { KeyFunctionsSection } from "../../components/KeyFunctionsSection";
import { TeamSection } from "../../components/TeamSection";

// Hero image
const heroImage =
  "https://www.figma.com/api/mcp/asset/af16cee6-55ce-448c-9c91-73b49d8a9886";

// Story section images
const storyImage =
  "https://www.figma.com/api/mcp/asset/c1e09740-c7cc-4cd4-b1bd-7ee51d95e854";
const storyImage2 =
  "https://www.figma.com/api/mcp/asset/0d4b30d2-ec52-477d-9f3b-1a0005cca618";
const storyImage3 =
  "https://www.figma.com/api/mcp/asset/d4c84026-3c13-4394-8786-6168385943ad";

// Vision section images
const visionImage =
  "https://www.figma.com/api/mcp/asset/91ba4ae1-b648-447b-bb3b-04426b2ae7f4";
const visionValueImage =
  "https://www.figma.com/api/mcp/asset/6a505b7e-d206-4ad9-a4cf-b300c399b4b2";
const teamMemberImage =
  "https://www.figma.com/api/mcp/asset/7045630d-b3d1-42c8-84e7-489775ac910d";

// Team member images
const teamImages = {
  member1: "https://www.figma.com/api/mcp/asset/7045630d-b3d1-42c8-84e7-489775ac910d",
  member2: "https://www.figma.com/api/mcp/asset/8890004c-0f33-4b58-9837-432eeb448aee",
  member3: "https://www.figma.com/api/mcp/asset/66bdd25f-6029-415a-9135-4216bbfebdd7",
  member4: "https://www.figma.com/api/mcp/asset/05446a27-5b8f-4d9c-84fc-071c35e163ed",
};

export default function IntroductionPage() {
  return (
    <main>
      <Hero
        title="About us"
        image={heroImage}
      />
      <StorySection
        title="The Origin - Perfect Balance"
        overviewTitle="Overview"
        content={[
          "Primordial is an independent hospitality advisory and coordination platform, working alongside owners at critical points of intersection between design, operations, and commercial performance.",
          "We do not operate on behalf of our partners, nor do we impose predefined models. Primordial is present to help projects maintain a clear long-term perspective, make the right decisions at each stage, and evolve in alignment with their true character.",
          "This is how we create balance - between vision and reality, between experience and sustainable performance.",
        ]}
        image={storyImage}
        imageAlt="Our Story"
        additionalImages={[storyImage2, storyImage3]}
      />
      <VisionSection
        title="VISION"
        content={[
          "Primordial believes that a sustainable hospitality project is shaped from the very beginning - starting with the earliest decisions around design, structure, and commercial logic. We view hospitality as an interconnected system where experience, operations, and financial performance are inseparable, and where every choice directly impacts cash flow and long-term growth potential.",
          "For this reason, Primordial operates at the earliest strategic level, providing an independent perspective that integrates design thinking, operational logic, and financial analysis - enabling owners to make informed decisions and guide their projects toward sustainable, long-term success.",
        ]}
        teamMember={{
          name: "Bao Nguyen",
          role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
          bio: "Providing strategic direction, feasibility analysis, and project structuring, working closely with owners on decisions that have long-term impact on operations, brand positioning, and financial performance.",
          image: teamMemberImage,
        }}
        image={visionImage}
        valueStatement="Centered on the owner, guided by operations, grounded in financial discipline."
        valueImage={visionValueImage}
      />
      <KeyFunctionsSection
        title="KEY FUNCTION"
        functions={[
          {
            title: "1. Strategic Advisory & Feasibility",
            description:
              "Assessing project feasibility through market analysis, financial modeling, and brand positioning, supporting owners in making the right decisions from the earliest stages.",
          },
          {
            title: "2. Design & Technical Advisory",
            description:
              "Reviewing design from an operational and long-term performance perspective, ensuring that design decisions support guest experience, cost efficiency, and real-world operational viability.",
          },
          {
            title: "3. Pre-Opening & Operational Setup",
            description:
              "Establishing a solid operational foundation prior to opening, enabling projects to launch smoothly and operate sustainably from day one.",
          },
          {
            title: "4. Asset Management & Performance",
            description:
              "Providing independent assessments of operational and financial performance, helping owners identify issues, optimize efficiency, and unlock improvement opportunities.",
          },
          {
            title: "5. Sales, Marketing & Revenue Strategy",
            description:
              "Developing revenue structures and marketing direction aligned with brand positioning, reducing short-term dependency while strengthening long-term control and resilience.",
          },
          {
            title: "6. F&B · Spa · Wellness",
            description:
              "Positioning F&B, Spa, and Wellness as strategic components of the asset, creating differentiated guest experiences and sustainable revenue value.",
          },
        ]}
      />
      <TeamSection
        title="OUR TEAM"
        description="Our team is the heart of Primordial Hospitium. We are a diverse group of professionals united by a shared passion for hospitality and a commitment to excellence. Meet the people behind our promise to deliver exceptional service and meaningful, memorable experiences."
        members={[
          {
            name: "Bao Nguyen",
            role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
            image: teamImages.member1,
          },
          {
            name: "Nguyen Ngoc",
            role: "CHIEF FINANCIAL OFFICER",
            image: teamImages.member2,
          },
          {
            name: "Cang Lam",
            role: "Director of Operation - Advisor",
            image: teamImages.member3,
          },
          {
            name: "Ty Nguyen",
            role: "Director of Sale & Marketing - Advisor",
            image: teamImages.member4,
          },
        ]}
      />
    </main>
  );
}
