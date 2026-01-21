import { CenteredFixedSubtitleHero } from "@/components/hero";
import { ContactFormSection } from "../../components/ContactFormSection";
import { OfficesSection } from "../../components/OfficesSection";

// Images
const heroImage = "/contact/contact-hero.jpg";
const officeImage = "/contact/office-phuquoc.jpg";

export default function ContactPage() {
  return (
    <main>
      <CenteredFixedSubtitleHero
        title="Contact"
        subtitle="Feeling excited about Primordial Hospitality."
        image={heroImage}
      />
      <ContactFormSection
        title="CONTACT INFORMATION"
        description="To learn more about Primordial Hospitality, please fill out the contact form and we will get in touch with you as soon as possible."
        form={{
          fullNameLabel: "Full Name",
          fullNamePlaceholder: "Nguyen Ngoc Giao",
          fullNameRequired: "(Required)",
          emailLabel: "Email",
          emailPlaceholder: "JaneSmith@gmail.com",
          emailRequired: "(Required)",
          phoneLabel: "Phone number",
          phonePlaceholder: "234 234 235",
          phoneRequired: "(Required)",
          messageLabel: "Message",
          messagePlaceholder: "Enter your message here",
          submitButton: "SUBMIT",
        }}
      />
      <OfficesSection
        title="OFFICES"
        description="Our head office is located in Adelaide, Australia. We also operate a branch office in Phu Quoc, Vietnam. Both offices are staffed with hospitality professionals ready to support your needs."
        classWidth="font-sans font-normal text-[#2c2c2c] text-base leading-6 md:text-xl md:leading-7 tracking-[-0.32px] md:tracking-[-0.6px] md:w-[834px]"
        office={{
          title: "Phu Quoc Island",
          emails: [
            "bao.nguyen@primordial.com.vn",
            "phuong.mai@primordial.com.vn",
          ],
          phones: ["+84 916 910 512", "+84 945 008 896"],
          address: "Cua Duong, Phu Quoc, Kien Giang, Vietnam",
          image: officeImage,
        }}
      />
    </main>
  );
}
