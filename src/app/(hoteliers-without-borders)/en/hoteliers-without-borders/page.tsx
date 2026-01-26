import { FullscreenSplitHero } from "@/components/hero";
import { WhatIsHWBSection } from "../../components/WhatIsHWBSection";
import { ValueSection } from "../../components/ValueSection";

// Images
const heroImage = "/hwb/hwb-hero.png";
const valueImage = "/hwb/hwb-value.jpg";

export default function HoteliersWithoutBordersPage() {
  return (
    <main>
      <FullscreenSplitHero
        tagline="Where Hospitality Becomes Memory"
        title="Hospitality Works Best When People Arrive at the Right Time"
        description="Hoteliers Without Borders™ is a flexible hospitality talent network, designed to support projects precisely when full-time hiring is no longer the optimal solution."
        subdescription="Does not replace existing teams. Does not inflate the organization. Appears only when the right expertise is needed."
        image={heroImage}
      />
      <WhatIsHWBSection
        title={`WHAT IS HOTELS\nWITHOUT BORDERS?`}
        paragraphs={[
          {
            text: "A Flexible Talent Network for Hospitality Hoteliers Without Borders™ is a project-based hospitality talent coordination network, connecting hotels and resorts with experienced professionals for short-term, seasonal, or specialized needs.",
            boldPhrases: [
              "a project-based hospitality talent coordination network",
            ],
          },
          {
            text: "The platform does not operate as a traditional recruitment agency, nor does it replace the role of an internal HR team. Hoteliers Without Borders™ exists to deploy the right expertise at the right moment, when long-term hiring creates cost pressure or is misaligned with operational realities.",
            boldPhrases: ["deploy the right expertise at the right moment"],
          },
          {
            text: "All engagements are built on transparency, flexibility, and respect for the roles of both sides — hotels and professionals.",
          },
        ]}
        highlightText="WORK is not about headcount — it is about the quality of presence."
        image={valueImage}
      />
      <ValueSection
        title="WHO IT'S FOR & THE VALUE IT DELIVERS"
        subtitle="Hoteliers Without Borders™ is built for projects that require **high flexibility without compromising quality.**"
        suitableFor={{
          title: "Well-suited for",
          items: [
            "Independent hotels and resorts",
            "Boutique and lifestyle projects",
            "Owners seeking phase-based staffing solutions",
          ],
        }}
        coreValue={{
          title: "Core value",
          items: [
            "Reduces long-term payroll pressure",
            "Provides the right expertise at the right time",
            "Maintains operational stability during sensitive phases",
            "Does not interfere with the owner's decision-making authority",
          ],
        }}
        highlightText="Hoteliers Without Borders™ does not build the largest workforce - it builds"
        highlightBoldText="the right workforce for each moment."
        image={valueImage}
      />
    </main>
  );
}
