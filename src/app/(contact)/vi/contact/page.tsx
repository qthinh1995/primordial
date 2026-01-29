import { CenteredFixedSubtitleHero } from "@/components/hero";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { OfficesSection } from "../../components/OfficesSection";

// Images
const heroImage = "/contact/contact-hero.jpg";
const officeImage = "/contact/office-phuquoc.jpg";

export default function ContactPage() {
  return (
    <main>
      <CenteredFixedSubtitleHero
        title="Liên hệ"
        subtitle="Chia sẻ dự án của bạn với chúng tôi"
        image={heroImage}
      />
      <ContactFormSection
        locale="vi"
        variant="two-column"
        title="THÔNG TIN LIÊN HỆ"
        description="Hãy để chúng tôi hiểu thêm về dự án của bạn."
      />
      <OfficesSection
        title="Chi Nhánh"
        description="Văn phòng chính của chúng tôi nằm ở Adelaide, Úc. Chúng tôi cũng có một văn phòng chi nhánh tại Phú Quốc, Việt Nam. Cả hai văn phòng đều có đội ngũ chuyên gia trong ngành khách sạn sẵn sàng hỗ trợ bạn."
        classWidth="font-sans font-normal text-[#2c2c2c] text-base leading-6 md:text-xl md:leading-7 tracking-[-0.32px] md:tracking-[-0.6px] md:w-[1060px] md:mx-auto"
        office={{
          title: "Chi nhánh Phú Quốc",
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
