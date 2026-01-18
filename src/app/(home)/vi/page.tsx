import { Hero } from "../components/Hero";
import { StoufferSection } from "../components/StoufferSection";
import { HWBSection } from "../components/HWBSection";
import { LumoraSection } from "../components/LumoraSection";
import { PartnershipSection } from "../components/PartnershipSection";

// Hero images
const heroImages = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
];

// Stouffer Hotels images
const stoufferImages = [
  "/stouffer-1.jpg",
  "/stouffer-2.jpg",
  "/stouffer-3.jpg",
  "/stouffer-4.jpg",
  "/stouffer-5.jpg",
];

// Lumora images
const lumoraImages = [
  "/lumora-1.jpg",
  "/lumora-2.jpg",
  "/lumora-3.jpg",
];

// Partnership image
const partnershipImage = "/partnership.jpg";

// HWB image
const hwbImage = "/hwb.jpg";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Where Design Meets Revenue"
        description="Nơi thiết kế, vận hành và hiệu quả tài chính gặp nhau trong một hệ sinh thái thống nhất. Primordial là nền tảng tư vấn và điều phối độc lập trong lĩnh vực khách sạn – nghỉ dưỡng, đồng hành cùng chủ đầu tư từ ý tưởng đến vận hành ổn định và sinh lợi."
        images={heroImages}
      />
      <StoufferSection
        badge="SOFT · BRAND PLATFORM"
        title="STOUFFER HOTELS™"
        description="Stouffer Hotels™ là nền tảng liên kết thương hiệu mềm dành cho các khách sạn và khu nghỉ dưỡng độc lập. Giúp chủ đầu tư tăng cường hiện diện thương hiệu, định vị rõ ràng và tiếp cận hệ thống hỗ trợ chuyên môn - trong khi vẫn giữ toàn quyền sở hữu, vận hành và quyết định kinh doanh."
        buttonText="Liên hệ ngay"
        buttonHref="/vi/stouffer-hotels"
        images={stoufferImages}
      />
      <HWBSection
        badge="WORK · TALENT PLATFORM"
        title="KHÁCH SẠN KHÔNG BIÊN GIỚI"
        description="Hoteliers Without Borders là nền tảng điều phối nhân sự hospitality linh hoạt, kết nối các chuyên gia giàu kinh nghiệm với khách sạn và khu nghỉ dưỡng cho nhu cầu ngắn hạn, theo mùa hoặc theo dự án - khi tuyển dụng toàn thời gian không còn là giải pháp tối ưu. Nền tảng được thiết kế để giúp khách sạn tiếp cận đúng người, đúng thời điểm, đồng thời giúp nhân sự ngành khách sạn mở rộng cơ hội nghề nghiệp theo cách chủ động."
        buttonText="Tham gia cùng chúng tôi"
        buttonHref="/vi/hoteliers-without-borders"
        image={hwbImage}
      />
      <LumoraSection
        badge="TRẢI NGHIỆM"
        title="LUMORA IX.IX AGENDA"
        description="Lumora IX.IX Agenda là nền tảng trải nghiệm và văn hoá trong hệ sinh thái Primordial, chuyên kiến tạo các chương trình, sự kiện và hợp tác sáng tạo được tuyển chọn - lấy khách sạn và không gian lưu trú làm trung tâm. Lumora tập trung xây dựng những khoảnh khắc có chiều sâu cảm xúc, góp phần định hình bản sắc thương hiệu, tăng giá trị trải nghiệm và tạo dấu ấn lâu dài trong tâm trí khách hàng."
        buttonText="Khám phá ngay"
        buttonHref="/vi/lumora"
        images={lumoraImages}
      />
      <PartnershipSection
        badge="PARTNERSHIP"
        title="Primordial Hospitium"
        description="Primordial Hospitium đồng hành cùng các chủ khách sạn độc lập, đối tác sáng tạo và nhà đầu tư thông qua mô hình hợp tác linh hoạt và minh bạch. Chúng tôi không quản lý, không nhượng quyền, không thay thế quyền quyết định - Primordial đóng vai trò tư vấn, điều phối và hỗ trợ để mỗi dự án phát triển đúng bản chất của mình. Bởi với chúng tôi, Everybody is Somebody không chỉ là một triết lý, mà là cách chúng tôi lựa chọn đồng hành."
        buttonText="Trở thành đối tác"
        buttonHref="/vi/partnerships"
        image={partnershipImage}
      />
    </main>
  );
}
