import { CenteredFixedAnimatedHero } from "@/components/hero";
import { LogosSection } from "../../components/LogosSection";
import { TPOModelSection } from "../../components/TPOModelSection";
import { ImplementTPOSection } from "../../components/ImplementTPOSection";
import { ValueSection } from "../../components/ValueSection";
import { QuoteSection } from "../../components/QuoteSection";
import { ContactFormSection } from "../../components/ContactFormSection";

// Images
const heroImage = "/partnerships/partnerships-hero.jpg";
const heroImage1 = "/partnerships/partnerships-hero-1.jpg";
const tpoImage1 = "/partnerships/partnerships-hero.jpg";
const tpoImage2 = "/partnerships/partnerships-tpo-1.jpg";
const valueImage = "/partnerships/partnerships-value.jpg";
const quoteImage = "/partnerships/partnerships-quote.jpg";

// Partner logos
const partnerLogos = [
  { src: "/partnerships/partner-logo-stouffer.png", alt: "Stouffer Hotels" },
  { src: "/partnerships/partner-logo-seebot.png", alt: "SeeBOT" },
  { src: "/partnerships/partner-logo-primordial.png", alt: "Primordial" },
];

export default function PartnershipsPage() {
  return (
    <main>
      <CenteredFixedAnimatedHero
        title="Partner & Affiliates"
        description={
          <>
            <p>
              Primordial Hospitium collaborates with independent hotel owners,
            </p>
            <p>
              creative partners, and investors through a flexible Third-Party
              Operator (TPO) model.
            </p>
          </>
        }
        image={heroImage}
      />
      <LogosSection logos={partnerLogos} />
      <TPOModelSection
        title="WHAT IS THE TPO MODEL?"
        description={
          <>
            <p className="mb-4">
              The <strong>Third-Party Operator (TPO)</strong> model enables
              hotel projects to access specialist expertise, operational
              standards, and strategic resources without transferring ownership
              or decision-making authority.
            </p>
            <p className="mb-4">
              Within this model, Primordial does not act as an owner, does not
              franchise, and does not operate the property. We serve as a{" "}
              <strong>strategic partner</strong>, deploying the right expertise
              at the right time to help projects achieve operational and
              commercial effectiveness while preserving their independence.
            </p>
            <p className="text-accent italic">
              TPO is not a replacement - it is the right form of support,
              applied at the right moment.
            </p>
          </>
        }
        items={[
          {
            title: "1. Flexible by Phase",
            content:
              "The TPO model allows projects to access the right expertise exactly when it is needed. The system can be activated, scaled, or reduced in line with each stage of development.",
          },
          {
            title: "2. Full Owner Control Retained",
            content:
              "Ownership, legal authority, and all operational decisions remain fully with the owner. Primordial acts as an advisory and coordination partner, not as an operator or controlling entity.",
          },
          {
            title: "3. High Standards Without Organizational Expansion",
            content:
              "TPO enables access to curated standards and specialist expertise without expanding a fixed internal structure. This approach helps control long-term costs and operational risk throughout the project lifecycle.",
          },
        ]}
      />
      <ImplementTPOSection
        title="HOW PRIMORDIAL IMPLEMENTS THE TPO MODEL"
        description={
          <>
            <p className="mb-4">
              Primordial implements the TPO model based on the principles of{" "}
              <strong>flexibility - transparency - phased engagement.</strong>
            </p>
            <p className="mb-4">
              We work alongside each project at critical points of intersection,
              including:
            </p>
            <ul className="space-y-1 mb-4 ml-6 list-disc">
              <li>Defining the operational structure and core standards</li>
              <li>
                Connecting platforms within the Stay · Work · Experience
                ecosystem
              </li>
              <li>
                Coordinating partners, specialists, and resources in line with
                each stage of development
              </li>
            </ul>
            <p>
              Every partnership is custom-designed to reflect the project&apos;s
              scale, context, and long-term objectives - never applied as a
              one-size-fits-all model.
            </p>
          </>
        }
        image1={tpoImage1}
        image2={tpoImage2}
      />
      <ValueSection
        title="THE VALUE OF PARTNERSHIP"
        description={
          <>
            <p className="mb-4">Through the TPO model, Primordial delivers:</p>
            <ul className="space-y-1 mb-4 ml-6 list-disc">
              <li>
                Access to <strong>curated expertise</strong> without spreading
                resources too thin
              </li>
              <li>
                Optimized cost and performance with reduced reliance on fixed
                organizational structures
              </li>
              <li>Full owner control retained across all critical decisions</li>
              <li>
                The ability to <strong>scale up or scale down</strong> flexibly
                in line with each project phase
              </li>
            </ul>
            <p>
              We do not seek to control projects. We help ensure they are{" "}
              <strong>operated in the right way</strong>.
            </p>
          </>
        }
        image={valueImage}
      />
      <QuoteSection
        quote={
          <>
            <p className="mb-0">
              Primordial does not build partnerships to &quot;participate the
              most.&quot;
            </p>
            <p>
              We choose to collaborate where real value can be created - for the
              right project, at the right time, and with the right long-term
              objective.
            </p>
          </>
        }
        classWidth="font-display font-normal text-[32px] max-md:text-[24px] leading-[1.5] text-white lg:w-[960px] md:mx-auto"
        image={quoteImage}
      />
      <ContactFormSection
        labels={{
          title: "Become a Partner with Us",
          description:
            "To learn more about Primordial Hospitality, please complete the contact form and we will get in touch with you as soon as possible.",
          fullName: "Full name",
          fullNamePlaceholder: "Mr Joe",
          email: "Email",
          emailPlaceholder: "JaneSmith@gmail.com",
          phone: "Phone number",
          phonePlaceholder: "234 234 235",
          message: "Message",
          messagePlaceholder: "Enter your message here",
          required: "(Required)",
          submitButton: "SUBMIT",
          countryCode: "+ 123",
        }}
      />
    </main>
  );
}
