import { CenteredFixedHero } from "@/components/hero";
import { PillarsSection } from "../../components/PillarsSection";
import { TimelineSection } from "../../components/TimelineSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { QuoteSection } from "../../components/QuoteSection";

// Hero image
const heroImage = "/ecosystem-hero.jpg";

// Pillar logo images
const stoufferLogo = "/ecosystem-stouffer-logo.jpg";
const hwbLogo = "/ecosystem-hwb-logo.jpg";
const lumoraLogo = "/ecosystem-lumora-logo.jpg";

// Project images
const projectImage1 = "/ecosystem-project-1.jpg";
const projectImage2 = "/ecosystem-project-2.jpg";
const projectImage3 = "/ecosystem-project-3.jpg";

// Quote section image
const quoteImage = "/ecosystem-quote.jpg";

export default function EcosystemPage() {
  return (
    <main>
      <CenteredFixedHero
        title="Hệ sinh thái"
        description="Một hệ sinh thái được thiết kế để kết nối bền vững. Ba trụ cột chiến lược — Lưu trú · Con người · Trải nghiệm — được kết nối và điều phối trong một tư duy dài hạn."
        image={heroImage}
      />
      <PillarsSection
        subtitle="THƯƠNG HIỆU PHỤ"
        title="BA TRỤ CỘT CHIẾN LƯỢC"
        description="Lưu trú - Con người - Trải nghiệm. Hệ sinh thái Primordial được triển khai thông qua ba trụ cột, mỗi trụ cột giải quyết một bài toán cốt lõi trong vòng đời của một dự án."
        pillars={[
          {
            title: "Stouffer Hotels™",
            tag: "STAY - LƯU TRÚ",
            description:
              "Stouffer Hotels™ là nền tảng soft-brand affiliation dành cho khách sạn và khu nghỉ dưỡng độc lập. Nền tảng này hỗ trợ định vị thương hiệu, cấu trúc vận hành và uy tín thị trường - trong khi chủ đầu tư vẫn giữ toàn quyền sở hữu, pháp lý và quyết định kinh doanh. Stouffer tập trung tạo kỷ luật vận hành và sự nhất quán, mà không làm mất đi bản sắc riêng của từng tài sản.",
            logoImage: stoufferLogo,
            logoType: "Stouffer Hotels",
            link: "/vi/stouffer-hotels",
          },
          {
            title: "Hoteliers Without Borders™",
            tag: "WORK - CON NGƯỜI",
            description:
              "Hoteliers Without Borders™ là nền tảng điều phối nhân sự hospitality linh hoạt, kết nối khách sạn với các chuyên gia giàu kinh nghiệm cho nhu cầu theo mùa hoặc theo dự án. Nền tảng này giúp khách sạn tiếp cận đúng người, đúng thời điểm, giảm áp lực payroll dài hạn và tăng khả năng thích ứng trong các giai đoạn cao điểm hoặc chuyển đổi.",
            logoImage: hwbLogo,
            logoType: "Hoteliers Without Borders",
            link: "/vi/hoteliers-without-borders",
          },
          {
            title: "Lumora IX.IX Agenda",
            tag: "EXPERIENCE - TRẢI NGHIỆM",
            description:
              "Lumora IX.IX Agenda™ là nền tảng trải nghiệm và văn hoá, chuyên kiến tạo các chương trình được tuyển chọn - giúp không gian khách sạn có chiều sâu cảm xúc và dấu ấn riêng. Lumora không tổ chức sự kiện đại trà, mà tập trung thiết kế những khoảnh khắc có giá trị lâu dài, gắn trải nghiệm với bản sắc thương hiệu và hiệu quả thương mại.",
            logoImage: lumoraLogo,
            logoType: "Lumora",
            link: "/vi/lumora",
          },
        ]}
      />
      <TimelineSection
        title="MỘT HỆ SINH THÁI, ĐƯỢC SỬ DỤNG THEO TỪNG GIAI ĐOẠN."
        description="Không phải mọi dự án đều cần triển khai toàn bộ hệ sinh thái cùng lúc. Primordial thiết kế hệ sinh thái để có thể kích hoạt linh hoạt, phù hợp với từng giai đoạn phát triển và nhu cầu thực tế của dự án."
        phases={[
          {
            number: "Giai đoạn 1",
            title: "Ổn định nền tảng",
            subtitle: "STAY · Stouffer Hotels™",
            description:
              "Ở giai đoạn đầu, trọng tâm là thiết lập cấu trúc lưu trú rõ ràng: định vị, kỷ luật vận hành và sự nhất quán trong trải nghiệm cơ bản. Stouffer được sử dụng như một lớp nền, giúp dự án đi vào hoạt động ổn định mà không làm mất tính độc lập.",
          },
          {
            number: "Giai đoạn 2",
            title: "Hỗ trợ vận hành & mở rộng",
            subtitle: "WORK · Hoteliers Without Borders™",
            description:
              "Khi dự án bước vào giai đoạn cao điểm, tái cấu trúc hoặc cần chuyên môn đặc thù trong thời gian ngắn, Hoteliers Without Borders được kích hoạt để bổ sung nguồn lực phù hợp. Điều này giúp dự án giữ được sự linh hoạt, mà không làm phình to bộ máy hay tăng rủi ro dài hạn.",
          },
          {
            number: "Giai đoạn 3",
            title: "Khác biệt hoá & tạo dấu ấn",
            subtitle: "EXPERIENCE · Lumora IX.IX Agenda™",
            description:
              'Khi nền tảng đã vững, Lumora được triển khai để tạo chiều sâu trải nghiệm và bản sắc cảm xúc. Các chương trình của Lumora không nhằm "làm cho vui", mà để giúp dự án trở nên đáng nhớ, có câu chuyện và tăng giá trị thương hiệu trong dài hạn.',
          },
        ]}
      />
      <ProjectsSection
        title="ĐƯỢC THIẾT KẾ CHO NHỮNG DỰ ÁN CẦN TƯ DUY DÀI HẠN"
        description="Hệ sinh thái Primordial không được xây dựng cho tất cả mọi dự án. Nó được thiết kế cho những chủ đầu tư và tài sản cần cấu trúc rõ ràng, nhưng không muốn bị ràng buộc bởi mô hình cứng."
        projects={[
          {
            title: "Dành cho chủ khách sạn độc lập",
            description:
              "Những chủ sở hữu muốn giữ toàn quyền kiểm soát dự án, nhưng cần một hệ tư duy và cấu trúc đủ vững để đưa ra quyết định đúng ở từng giai đoạn.",
            image: projectImage1,
          },
          {
            title: "Dành cho dự án boutique, lifestyle & luxury",
            description:
              "Những tài sản mà trải nghiệm, bản sắc và cảm xúc có vai trò quan trọng không kém vận hành và doanh thu.",
            image: projectImage2,
          },
          {
            title: "Dành cho nhà đầu tư gia đình & developer dài hạn",
            description:
              "Những dự án không chạy theo mô hình đại trà, mà ưu tiên hiệu quả bền vững, khả năng thích ứng và giá trị lâu dài của tài sản.",
            image: projectImage3,
          },
        ]}
      />
      <QuoteSection
        quote='Primordial không xây dựng hệ sinh thái để "được sử dụng nhiều nhất". Chúng tôi xây dựng nó để được sử dụng đúng cách - đúng dự án, đúng thời điểm và đúng mục tiêu.'
        image={quoteImage}
      />
    </main>
  );
}
