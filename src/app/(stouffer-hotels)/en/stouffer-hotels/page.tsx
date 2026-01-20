import { Hero } from "../../components/Hero";
import { IntroductionSection } from "../../components/IntroductionSection";
import { WhatIsStoufferSection } from "../../components/WhatIsStoufferSection";
import { MarketingSection } from "../../components/MarketingSection";
import { BrandValuesGallerySection } from "../../components/BrandValuesGallerySection";
import { ContactSection } from "../../components/ContactSection";

// Hero image
const heroImage = "/stouffer/stouffer-hero.jpg";

// Introduction image
const introduceImage = "/stouffer/stouffer-introduce.jpg";

// What is Stouffer image
const whatIsStoufferImage = "/stouffer/what-is-stouffer.jpg";

// Marketing images
const marketingImage1 = "/stouffer/marketing-1.jpg";
const marketingImage2 = "/stouffer/marketing-2.jpg";

// Gallery images
const galleryImages = [
  "/stouffer/gallery-1.jpg",
  "/stouffer/gallery-2.jpg",
  "/stouffer/gallery-3.jpg",
  "/stouffer/gallery-4.jpg",
];

export default function StoufferHotelsPage() {
  return (
    <main>
      <Hero
        title="STOUFFER HOTELS™ "
        description="A brand affiliation platform for independent hotels and resorts, enhancing brand value and operational standards while owners retain full control."
        image={heroImage}
      />
      <IntroductionSection
        sectionTitle="INTRODUCE"
        paragraphs={[
          {
            text: "Stouffer Hotels™ is a soft-brand platform for independent hotels and resorts, connecting individual properties under a shared mark of endorsement without compromising their identity or the owner's control.",
            boldPhrases: ["a soft-brand platform"],
          },
          {
            text: '"A Stouffer Hotel" does not imply franchising or hotel management. It represents alignment with a shared set of values - from service culture and operational standards to the philosophy of Everybody is Somebody.',
            boldPhrases: ['"A Stouffer Hotel"', "Everybody is Somebody"],
          },
          {
            text: "Stouffer Hotels™ does not create a uniform chain. Instead, it forms a community of independent hotels connected by values, not by control.",
          },
        ]}
        image={introduceImage}
      />
      <WhatIsStoufferSection
        title="WHAT IS STOUFFER?"
        description="Within the Stouffer model, Primordial Hospitium serves as the advisory and integration partner, ensuring that standards are clearly understood and properly applied - while all operational, financial, and human resource decisions remain fully with the project owner."
        isTitle="Stouffer Hotels™ is"
        isList={[
          "A soft-brand platform for independent hotels",
          "A mark of endorsement for shared standards and core values",
          "A community of hotels connected by mindset, not control",
        ]}
        isNotTitle="Stouffer Hotels™ is not"
        isNotList={[
          "A hotel chain",
          "A franchise",
          "An operating management company",
          "A replacement for the owner or executive team",
        ]}
        image={whatIsStoufferImage}
      />
      <MarketingSection
        title="Partnerships & Communications"
        description={
          <>
            <p className="mb-4">
              Primordial develops marketing and partnership strategies
              leveraging selected travel trade networks, direct channels, and
              carefully curated partners to optimize booking velocity and
              maximize room value.
            </p>
            <p className="mb-4">
              Digital marketing, performance optimization, and brand
              communications are aligned with the owner&apos;s identity, while
              drawing on the endorsement of &quot;A Stouffer Hotel&quot; to
              strengthen market credibility.
            </p>
            <p>
              All campaigns and touchpoints are designed with commercial
              effectiveness in mind, without requiring owners to invest in
              additional systems or commit to fixed long-term costs.
            </p>
          </>
        }
        image1={marketingImage1}
        image2={marketingImage2}
      />
      <BrandValuesGallerySection
        title="Independent in Identity. Connected by Values."
        description='Primordial ensures that all communications and brand touchpoints remain fully aligned with the owner&apos;s identity, while integrating the "A Stouffer Hotel" mark as a trusted endorsement of standards and credibility. Brand messaging is managed consistently across websites, OTAs, partner channels, and guest-facing touchpoints, ensuring clarity, coherence, and long-term brand integrity.'
        images={galleryImages}
      />
      <ContactSection
        title="Contact"
        description="Our head office is located in Adelaide, Australia. We also operate a branch office in Phu Quoc, Vietnam. Both offices are staffed with hospitality professionals ready to support your needs."
        buttonText="Contact with us"
        buttonHref="/en/contact"
      />
    </main>
  );
}
