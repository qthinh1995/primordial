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
        title="Liên hệ"
        subtitle="Cảm thấy hứng thú với Primordial Hospitality."
        image={heroImage}
      />
      <ContactFormSection
        title="THÔNG TIN LIÊN HỆ"
        description="Để tìm hiểu thêm về Primordial Hospitality, vui lòng điền vào mẫu liên hệ và chúng tôi sẽ liên lạc với bạn sớm nhất."
        form={{
          fullNameLabel: "Họ & Tên",
          fullNamePlaceholder: "Nguyễn Ngọc Giao",
          fullNameRequired: "(Bắt buộc)",
          emailLabel: "Email",
          emailPlaceholder: "JaneSmith@gmail.com",
          emailRequired: "(Bắt buộc)",
          phoneLabel: "Số điện thoại",
          phonePlaceholder: "234 234 235",
          phoneRequired: "(Bắt buộc)",
          messageLabel: "Lời nhắn",
          messagePlaceholder: "Nhập lời nhắn của bạn tại đây",
          submitButton: "GỬI THÔNG TIN",
        }}
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
