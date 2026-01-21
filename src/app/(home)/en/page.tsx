import { HomeCarouselHero } from "@/components/hero";
import { StoufferSection } from "../components/StoufferSection";
import { HWBSection } from "../components/HWBSection";
import { LumoraSection } from "../components/LumoraSection";
import { PartnershipSection } from "../components/PartnershipSection";

// Hero images
const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

// Stouffer Hotels images
const stoufferImages = [
  "/stouffer-1.jpg",
  "/stouffer-2.jpg",
  "/stouffer-3.jpg",
  "/stouffer-4.jpg",
  "/stouffer-5.jpg",
];

// Lumora images
const lumoraImages = ["/lumora-1.jpg", "/lumora-2.jpg", "/lumora-3.jpg"];

// Partnership image
const partnershipImage = "/partnership.jpg";

// HWB image
const hwbImage = "/hwb.jpg";

export default function HomePage() {
  return (
    <main>
      <HomeCarouselHero
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
        title={
          <>
            HOSPITALITY WITHOUT
            <br />
            BORDERS
          </>
        }
        description={
          <>
            <p>
              Hoteliers Without Borders is a flexible hospitality workforce
              coordination platform, connecting experienced professionals with
              hotels and resorts for short-term, seasonal, or project-based
              needs - when full-time hiring is no longer the optimal solution.
            </p>
            <p>
              The platform is designed to help hotels access the right people at
              the right time, while enabling hospitality professionals to expand
              their career opportunities in a more flexible and intentional way.
            </p>
          </>
        }
        buttonText="JOIN WITH US"
        buttonHref="/en/hoteliers-without-borders"
        image={hwbImage}
      />
      <LumoraSection
        badge="EXPERIENCE"
        title="LUMORA IX.IX AGENDA"
        description={
          <>
            <p>
              Lumora IX.IX Agenda is the experiential and cultural platform
              within the Primordial ecosystem, dedicated to creating{" "}
              <strong className="font-semibold">
                curated programs, events, and creative collaborations
              </strong>{" "}
              with hotels and hospitality spaces at their core.
            </p>
            <p>
              Lumora focuses on crafting moments with emotional depth - helping
              shape brand identity, elevate guest experience, and leave a
              lasting impression that stays with guests long after their visit.
            </p>
          </>
        }
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
