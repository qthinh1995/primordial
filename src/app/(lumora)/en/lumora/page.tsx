import { Hero } from "../../components/Hero";
import { WhatIsLumoraSection } from "../../components/WhatIsLumoraSection";
import { WhenActivatedSection } from "../../components/WhenActivatedSection";
import { WhoBuiltForSection } from "../../components/WhoBuiltForSection";

// Images
const heroImage = "/lumora/lumora-hero.jpg";
const lumoraImage1 = "/lumora/lumora-1.jpg";
const lumoraImage2 = "/lumora/lumora-2.jpg";
const lumoraImage3 = "/lumora/lumora-3.jpg";
const lumoraImage4 = "/lumora/lumora-4.jpg";

export default function LumoraPage() {
  return (
    <main>
      <Hero
        tag="Where Hospitality Becomes Memory"
        title="Curated Experiences."
        subtitle="Designed to Be Remembered"
        description="Lumora IX.IX Agenda™ is an experiential and cultural platform that elevates hotel spaces beyond accommodation into places where emotions are remembered - and revisited."
        image={heroImage}
      />
      <WhatIsLumoraSection
        title="WHAT IS LUMORA?"
        paragraphs={[
          {
            text: "A Curated Experiential Platform Lumora IX.IX Agenda™ is built as a curated experiential platform, dedicated to designing cultural, artistic, and culinary programs that are tailored to the context, space, and positioning of each hotel project.",
          },
          {
            text: "Lumora does not operate as a conventional event agency. We do not sell fixed program packages, nor do we impose a uniform experiential language across different projects.",
          },
          {
            text: "Instead, Lumora works closely with Primordial to ensure that every experience is intentionally designed to serve brand identity, guest experience, and long-term commercial value.",
          },
          {
            text: "Experience is not an add-on - it is a deliberately designed component of the hospitality ecosystem.",
            isHighlight: true,
          },
        ]}
        images={[
          { src: lumoraImage1, alt: "Lumora experience 1" },
          { src: lumoraImage2, alt: "Lumora experience 2" },
          { src: lumoraImage3, alt: "Lumora experience 3" },
        ]}
      />
      <WhenActivatedSection
        title="WHEN LUMORA IS ACTIVATED"
        subtitle="Applied at the Right Moment"
        description="Lumora does not need to be present from day one of operations. The platform is activated when a project is ready to differentiate."
        phases={[
          {
            number: "Phase 1",
            title: "Shaping Experiential Identity",
            description:
              "Supporting the definition of an experiential language aligned with the hotel's positioning, preventing fragmented or directionless activations.",
          },
          {
            number: "Phase 2",
            title: "Activating Space & Community",
            description:
              "Designing carefully curated programs that bring rhythm and vitality to the space while fostering meaningful connection with the surrounding community.",
          },
          {
            number: "Phase 3",
            title: "Creating Lasting Impact",
            description:
              "Once the brand is established, Lumora focuses on crafting memorable moments that encourage return visits and long-term engagement.",
            note: "Not more events - but the right experiences.",
          },
        ]}
      />
      <WhoBuiltForSection
        title="WHO LUMORA IS BUILT FOR"
        description="Lumora IX.IX Agenda™ is designed for projects that treat experience as a strategic component, not a short-term marketing tool."
        suitedFor={{
          title: "Well-suited for",
          items: [
            "Boutique and lifestyle hotels",
            "Luxury projects seeking emotional depth",
            "Spaces that aim to connect with art, culture, and gastronomy",
          ],
        }}
        coreValue={{
          title: "Core value",
          items: [
            "Curated experiences, not mass-produced activations",
            "Brand value enhanced through emotional resonance",
            "Meaningful connection between the hotel and its local culture and community",
            "Sustainable indirect revenue support",
          ],
        }}
        conclusion={{
          text: "Lumora does not create experiences to attract attention - it creates experiences that are",
          highlight: "remembered and returned to.",
        }}
        image={lumoraImage4}
      />
    </main>
  );
}
