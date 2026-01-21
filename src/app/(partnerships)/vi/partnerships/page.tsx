import { CenteredFixedAnimatedHero } from "@/components/hero";
import { LogosSection } from "../../components/LogosSection";
import { TPOModelSection } from "../../components/TPOModelSection";
import { ImplementTPOSection } from "../../components/ImplementTPOSection";
import { ValueSection } from "../../components/ValueSection";
import { QuoteSection } from "../../components/QuoteSection";
import { ContactFormSection } from "../../components/ContactFormSection";

// Images
const heroImage = "/partnerships/partnerships-hero.jpg";
const tpoImage1 = "/partnerships/partnerships-hero.jpg";
const tpoImage2 = "/partnerships/partnerships-tpo-2.jpg";
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
        title="Đối tác & Liên kết"
        description={
          <>
            <p>
              Primordial Hospitium hợp tác cùng các chủ khách sạn độc lập, đối
              tác sáng tạo và nhà đầu tư thông qua mô hình Third-Party Operator
              (TPO) linh hoạt.
            </p>
            <p className="italic mt-2">
              Đảm bảo tiêu chuẩn cao, mà không cần mở rộng quá mức nguồn lực nội
              bộ.
            </p>
          </>
        }
        image={heroImage}
      />
      <LogosSection logos={partnerLogos} />
      <TPOModelSection
        title="MÔ HÌNH TPO LÀ GÌ"
        description={
          <>
            <p className="mb-4">
              Mô hình <strong>Third-Party Operator (TPO)</strong> cho phép các
              dự án khách sạn tiếp cận năng lực chuyên môn, hệ tiêu chuẩn và
              nguồn lực vận hành mà{" "}
              <strong>
                không cần chuyển giao quyền sở hữu hay quyền quyết định.
              </strong>
            </p>
            <p className="mb-4">
              Trong mô hình này, Primordial không đóng vai trò chủ sở hữu, không
              nhượng quyền và không vận hành thay. Chúng tôi hiện diện như một{" "}
              <strong>đối tác chiến lược</strong>, điều phối đúng chuyên môn vào
              đúng thời điểm, giúp dự án đạt được hiệu quả vận hành và thương
              mại mà vẫn giữ được tính độc lập.
            </p>
            <p className="italic text-[var(--accent)]">
              TPO không phải là thay thế - mà là bổ sung đúng cách.
            </p>
          </>
        }
        items={[
          {
            title: "1. Linh hoạt theo giai đoạn",
            content:
              "Mô hình TPO cho phép dự án tiếp cận đúng năng lực chuyên môn tại những thời điểm cần thiết. Hệ thống có thể được kích hoạt, mở rộng hoặc thu hẹp linh hoạt theo từng giai đoạn phát triển.",
          },
          {
            title: "2. Giữ trọn quyền kiểm soát cho chủ đầu tư",
            content:
              "Quyền sở hữu, pháp lý và mọi quyết định vận hành vẫn hoàn toàn thuộc về chủ đầu tư. Primordial đóng vai trò tư vấn và điều phối, không vận hành thay hay áp đặt mô hình.",
          },
          {
            title: "3. Tiếp cận tiêu chuẩn cao mà không phình bộ máy",
            content:
              "TPO giúp dự án tiếp cận hệ tiêu chuẩn và chuyên môn chọn lọc mà không cần mở rộng bộ máy cố định. Nhờ đó, chi phí và rủi ro dài hạn được kiểm soát tốt hơn trong suốt vòng đời dự án.",
          },
        ]}
      />
      <ImplementTPOSection
        title="CÁCH PRIMORDIAL TRIỂN KHAI TPO"
        description={
          <>
            <p className="mb-4">
              Primordial triển khai mô hình TPO dựa trên nguyên tắc{" "}
              <strong>linh hoạt - minh bạch - theo giai đoạn.</strong>
            </p>
            <p className="mb-4">
              Chúng tôi làm việc cùng dự án tại những điểm giao thoa quan trọng,
              bao gồm:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Định hình cấu trúc vận hành và tiêu chuẩn cốt lõi</li>
              <li>
                Kết nối các nền tảng trong hệ sinh thái Stay · Work · Experience
              </li>
              <li>
                Điều phối đối tác, chuyên gia và nguồn lực theo từng giai đoạn
                phát triển
              </li>
            </ul>
            <p>
              Mỗi mối quan hệ hợp tác đều được thiết kế riêng, phù hợp với quy
              mô, bối cảnh và mục tiêu dài hạn của dự án - không áp dụng mô hình
              &quot;một cho tất cả&quot;.
            </p>
          </>
        }
        image1={tpoImage1}
        image2={tpoImage2}
      />
      <ValueSection
        title="GIÁ TRỊ HỢP TÁC"
        description={
          <>
            <p className="mb-4">Thông qua mô hình TPO, Primordial mang lại:</p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>
                <strong>Tiếp cận chuyên môn chọn lọc</strong>, không dàn trải
                nguồn lực
              </li>
              <li>
                <strong>Tối ưu chi phí và hiệu quả</strong>, giảm gánh nặng bộ
                máy cố định
              </li>
              <li>
                <strong>Giữ quyền chủ động cho chủ đầu tư</strong> trong mọi
                quyết định then chốt
              </li>
              <li>
                <strong>Khả năng mở rộng và rút gọn linh hoạt</strong> theo từng
                giai đoạn dự án
              </li>
            </ul>
            <p>
              Chúng tôi không tìm cách kiểm soát dự án, mà giúp dự án{" "}
              <strong>được vận hành đúng cách.</strong>
            </p>
          </>
        }
        image={valueImage}
      />
      <QuoteSection
        quote={
          <>
            <p className="mb-0">
              Primordial không xây dựng quan hệ đối tác để &quot;tham gia nhiều
              nhất&quot;.
            </p>
            <p>
              Chúng tôi lựa chọn hợp tác khi có thể tạo ra{" "}
              <strong>giá trị thực</strong> - đúng dự án, đúng thời điểm và đúng
              mục tiêu dài hạn.
            </p>
          </>
        }
        classWidth="font-display font-normal text-[32px] max-md:text-[24px] leading-[1.5] text-white lg:w-[1200px] md:mx-auto"
        image={quoteImage}
      />
      <ContactFormSection
        labels={{
          title: "Trở thành đối tác với chúng tôi",
          description:
            "Để tìm hiểu thêm về Primordial Hospitality, vui lòng điền vào mẫu liên hệ và chúng tôi sẽ liên lạc với bạn sớm nhất.",
          fullName: "Họ & Tên",
          fullNamePlaceholder: "Nguyễn Ngọc Giao",
          email: "Email",
          emailPlaceholder: "JaneSmith@gmail.com",
          phone: "Số điện thoại",
          phonePlaceholder: "234 234 235",
          message: "Lời nhắn",
          messagePlaceholder: "Nhập lời nhắn của bạn tại đây",
          required: "(Bắt buộc)",
          submitButton: "GỬI THÔNG TIN",
          countryCode: "+ 84",
        }}
      />
    </main>
  );
}
