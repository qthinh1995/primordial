import { Hero } from "../components/Hero";
import { StoufferSection } from "../components/StoufferSection";
import { HWBSection } from "../components/HWBSection";
import { LumoraSection } from "../components/LumoraSection";
import { PartnershipSection } from "../components/PartnershipSection";

// Hero images - these will be replaced with actual image paths
const heroImages = [
  "https://www.figma.com/api/mcp/asset/251e8876-a52e-4c7e-9e3b-a84d4e30e84d",
  "https://www.figma.com/api/mcp/asset/c3016c54-bbc5-42fb-8f9b-a99eac03ac7c",
  "https://www.figma.com/api/mcp/asset/a49a23c1-851e-4703-858a-3ac5cfe06f29",
  "https://www.figma.com/api/mcp/asset/f703562f-8562-4318-919c-0e4c71759355",
];

// Stouffer Hotels images
const stoufferImages = [
  "https://www.figma.com/api/mcp/asset/115ab436-d65c-424b-b395-4c9814479961",
  "https://www.figma.com/api/mcp/asset/3d08b2e0-d3b6-4fbd-9e96-1a20bfd9211e",
  "https://www.figma.com/api/mcp/asset/dc03a565-2169-4a9a-a060-26cb6a155882",
  "https://www.figma.com/api/mcp/asset/487cf1df-59e4-410e-8983-39869e32a97f",
  "https://www.figma.com/api/mcp/asset/2dd346ba-e1c1-408f-982e-73b2630d0597",
];

// Lumora images
const lumoraImages = [
  "https://www.figma.com/api/mcp/asset/6732359e-a0be-43c0-9bb2-ffde598bc0e8",
  "https://www.figma.com/api/mcp/asset/c85507b8-d8ec-4fb1-9429-882c51e75e3a",
  "https://www.figma.com/api/mcp/asset/7f2a7fe3-48ea-4d2e-8593-48bb4bef2444",
];

// Partnership image
const partnershipImage =
  "https://www.figma.com/api/mcp/asset/5324af3e-7587-45a4-81cf-ef2a9e97ad99";

// HWB image
const hwbImage =
  "https://www.figma.com/api/mcp/asset/6030590d-99e0-4e1a-a8f1-aab1b6ea44f0";



export default function HomePage() {
  return (
    <main>
      <Hero
        title="Redefining How Hotels Are Designed and Operated"
        description="Where design, operations, and financial performance converge within a unified hospitality ecosystem.
                      Primordial is an independent hospitality advisory and coordination platform,
                      partnering with owners from early concept through stable, profitable operations."
        images={heroImages}
      />
      <StoufferSection
        badge="SOFT · BRAND PLATFORM"
        title="STOUFFER HOTELS™"
        description="Stouffer Hotels™ is a soft-brand affiliation platform for independent hotels and resorts. It enables owners to strengthen brand presence, establish clear positioning, and access professional support systems - while retaining full ownership, operational control, and decision-making authority."
        buttonText="Contact Now"
        buttonHref="/en/stouffer-hotels"
        images={stoufferImages}
      />
      <HWBSection
        badge="WORK · TALENT PLATFORM"
        title="HOSPITALITY WITHOUT\nBORDERS"
        description="Hoteliers Without Borders is a flexible hospitality workforce coordination platform, connecting experienced professionals with hotels and resorts for short-term, seasonal, or project-based needs - when full-time hiring is no longer the optimal solution.\nThe platform is designed to help hotels access the right people at the right time, while enabling hospitality professionals to expand their career opportunities in a more flexible and intentional way."
        buttonText="JOIN WITH US"
        buttonHref="/en/hoteliers-without-borders"
        image={hwbImage}
      />
      <LumoraSection
        badge="EXPERIENCE"
        title="LUMORA IX.IX AGENDA"
        description="Lumora IX.IX Agenda is the experiential and cultural platform within the Primordial ecosystem, dedicated to creating **curated programs, events, and creative collaborations** with hotels and hospitality spaces at their core.\nLumora focuses on crafting moments with emotional depth - helping shape brand identity, elevate guest experience, and leave a lasting impression that stays with guests long after their visit."
        buttonText="Explore now"
        buttonHref="/en/lumora"
        images={lumoraImages}
      />
      <PartnershipSection
        badge="PARTNERSHIP"
        title="Primordial Hospitium"
        description="Primordial Hospitium partners with independent hotel owners, creative collaborators, and investors through a flexible and transparent model of collaboration. We do not manage, franchise, or replace decision-making authority. Primordial acts as an advisory and coordination partner, supporting each project in developing true to its own character and intent. Because to us, **Everybody is Somebody** is not just a philosophy - it is how we choose to work alongside our partners."
        buttonText="Partner With Us"
        buttonHref="/en/partnerships"
        classwidth="font-sans mb-[10px] md:mb-0 text-[16px] leading-[1.6] tracking-[-0.3px] md:text-xl md:leading-[28px] md:tracking-[-0.6px] text-foreground md:w-[888px]"
        image={partnershipImage}
        
        />
    </main>

  
  );
    
}