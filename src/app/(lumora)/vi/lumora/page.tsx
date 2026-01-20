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
        description="Lumora IX.IX Agenda™ là nền tảng kiến tạo trải nghiệm và văn hoá, giúp không gian khách sạn vượt ra khỏi chức năng lưu trú để trở thành nơi cảm xúc được ghi nhớ và quay lại."
        image={heroImage}
      />
      <WhatIsLumoraSection
        title="LUMORA LÀ GÌ"
        paragraphs={[
          {
            text: "A Curated Experiential Platform Lumora IX.IX Agenda™ được xây dựng như một nền tảng trải nghiệm được tuyển chọn, chuyên thiết kế các chương trình văn hoá, nghệ thuật và ẩm thực phù hợp với bối cảnh, không gian và định vị của từng dự án khách sạn.",
          },
          {
            text: "Lumora không hoạt động như một đơn vị tổ chức sự kiện thông thường. Chúng tôi không bán gói chương trình cố định và không áp đặt một ngôn ngữ trải nghiệm chung cho mọi dự án.",
          },
          {
            text: "Thay vào đó, Lumora làm việc chặt chẽ với Primordial để đảm bảo mỗi trải nghiệm được triển khai đều phục vụ cho bản sắc thương hiệu, trải nghiệm của khách và giá trị thương mại dài hạn.",
          },
          {
            text: "Experience không phải là hoạt động thêm vào - mà là phần được thiết kế có chủ đích trong hệ sinh thái hospitality.",
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
        title="KHI NÀO LUMORA ĐƯỢC KÍCH HOẠT"
        description="Lumora không cần xuất hiện ngay từ ngày đầu vận hành. Nền tảng này được kích hoạt khi dự án đã sẵn sàng để tạo khác biệt."
        phases={[
          {
            number: "Giai đoạn 1",
            title: "Định hình bản sắc trải nghiệm",
            description:
              "Hỗ trợ xác lập ngôn ngữ trải nghiệm phù hợp với định vị khách sạn, tránh việc triển khai các hoạt động rời rạc, thiếu định hướng.",
          },
          {
            number: "Giai đoạn 2",
            title: "Kích hoạt không gian & cộng đồng",
            description:
              "Thiết kế các chương trình chọn lọc giúp không gian trở nên sống động, có nhịp điệu và kết nối được với cộng đồng xung quanh.",
          },
          {
            number: "Giai đoạn 3",
            title: "Tạo dấu ấn & giá trị lâu dài",
            description:
              "Khi thương hiệu đã ổn định, Lumora tập trung vào việc xây dựng những khoảnh khắc đáng nhớ, giúp khách quay lại và gắn bó với trải nghiệm.",
            note: "Không phải nhiều sự kiện hơn - mà là đúng trải nghiệm hơn.",
          },
        ]}
      />
      <WhoBuiltForSection
        title="DÀNH CHO AI & GIÁ TRỊ MANG LẠI"
        description="Lumora IX.IX Agenda™ được thiết kế cho những dự án coi trải nghiệm là một phần của chiến lược, không phải công cụ marketing ngắn hạn."
        suitedFor={{
          title: "Phù hợp với",
          items: [
            "Khách sạn boutique & lifestyle",
            "Dự án luxury cần chiều sâu cảm xúc",
            "Không gian muốn gắn kết với nghệ thuật, văn hoá và ẩm thực",
          ],
        }}
        coreValue={{
          title: "Giá trị cốt lõi",
          items: [
            "Trải nghiệm có chọn lọc, không đại trà",
            "Gia tăng giá trị thương hiệu thông qua cảm xúc",
            "Kết nối khách sạn với cộng đồng và văn hoá địa phương",
            "Hỗ trợ doanh thu gián tiếp một cách bền vững",
          ],
        }}
        conclusion={{
          text: "Lumora không tạo ra trải nghiệm để gây chú ý, mà để",
          highlight: "được nhớ đến và quay lại.",
        }}
        image={lumoraImage4}
      />
    </main>
  );
}
