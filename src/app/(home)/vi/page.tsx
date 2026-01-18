import { Hero } from "../components/Hero";
import { StoufferSection } from "../components/StoufferSection";
import { HWBSection } from "../components/HWBSection";
import { LumoraSection } from "../components/LumoraSection";
import { PartnershipSection } from "../components/PartnershipSection";

// Hero images - these will be replaced with actual image paths
const heroImages = [
  "https://www.figma.com/api/mcp/asset/251e8876-a52e-4c7e-9e3b-a84d4e30e84d",
  "https://www.figma.com/api/mcp/asset/c3016c54-bbc5-42fb-8f9b-a99eac03ac7c",
  "https://www.figma.com/api/mcp/asset/a49a23c1-851e-4703-858a-3ac5cfe06f29",
  "https://www.figma.com/api/mcp/asset/f703562f-8562-4318-919c-0e4c71759355",
];

// Stouffer Hotels images
const stoufferImages = [
  "https://www.figma.com/api/mcp/asset/115ab436-d65c-424b-b395-4c9814479961",
  "https://www.figma.com/api/mcp/asset/3d08b2e0-d3b6-4fbd-9e96-1a20bfd9211e",
  "https://www.figma.com/api/mcp/asset/dc03a565-2169-4a9a-a060-26cb6a155882",
  "https://www.figma.com/api/mcp/asset/487cf1df-59e4-410e-8983-39869e32a97f",
  "https://www.figma.com/api/mcp/asset/2dd346ba-e1c1-408f-982e-73b2630d0597",
];

// Lumora images
const lumoraImages = [
  "https://www.figma.com/api/mcp/asset/6732359e-a0be-43c0-9bb2-ffde598bc0e8",
  "https://www.figma.com/api/mcp/asset/c85507b8-d8ec-4fb1-9429-882c51e75e3a",
  "https://www.figma.com/api/mcp/asset/7f2a7fe3-48ea-4d2e-8593-48bb4bef2444",
];

// Partnership image
const partnershipImage =
  "https://www.figma.com/api/mcp/asset/5324af3e-7587-45a4-81cf-ef2a9e97ad99";

// HWB image
const hwbImage =
  "https://www.figma.com/api/mcp/asset/6030590d-99e0-4e1a-a8f1-aab1b6ea44f0";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Tái định nghĩa cách khách sạn được thiết kế và vận hành"
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
        title="KHÁCH SẠN\nKHÔNG BIÊN GIỚI"
        description="Hoteliers Without Borders là nền tảng điều phối nhân sự hospitality linh hoạt, kết nối các chuyên gia giàu kinh nghiệm với khách sạn và khu nghỉ dưỡng cho nhu cầu ngắn hạn, theo mùa hoặc theo dự án - khi tuyển dụng toàn thời gian không còn là giải pháp tối ưu.\nNền tảng được thiết kế để giúp khách sạn tiếp cận đúng người, đúng thời điểm, đồng thời giúp nhân sự ngành khách sạn mở rộng cơ hội nghề nghiệp theo cách chủ động."
        buttonText="ĐĂNG KÝ THAM GIA"
        buttonHref="/vi/hoteliers-without-borders"
        image={hwbImage}
      />
      <LumoraSection
        badge="TRẢI NGHIỆM"
        title="LUMORA IX.IX AGENDA"
        description="Lumora IX.IX Agenda là nền tảng trải nghiệm và văn hoá trong hệ sinh thái Primordial, chuyên kiến tạo các **chương trình, sự kiện và hợp tác sáng tạo** được tuyển chọn - lấy khách sạn và không gian lưu trú làm trung tâm.\n 
        Lumora tập trung xây dựng những khoảnh khắc có chiều sâu cảm xúc, góp phần định hình bản sắc thương hiệu, tăng giá trị trải nghiệm và tạo dấu ấn lâu dài trong tâm trí khách hàng."
        buttonText="Khám phá ngay"
        buttonHref="/vi/lumora"
        images={lumoraImages}
      />
      <PartnershipSection
        badge="PARTNERSHIP"
        title="Primordial Hospitium"
        description="Primordial Hospitium đồng hành cùng các chủ khách sạn độc lập, đối tác sáng tạo và nhà đầu tư thông qua mô hình hợp tác linh hoạt và minh bạch. Chúng tôi không quản lý, không nhượng quyền, không thay thế quyền quyết định - Primordial đóng vai trò tư vấn, điều phối và hỗ trợ để mỗi dự án phát triển đúng bản chất của mình. Bởi với chúng tôi, Everybody is Somebody không chỉ là một triết lý, mà là cách chúng tôi lựa chọn đồng hành."
        buttonText="Liên hệ hợp tác"
        classwidth="font-sans mb-[10px] md:mb-0 text-[16px] leading-[1.6] tracking-[-0.3px] md:text-xl md:leading-[28px] md:tracking-[-0.6px] text-foreground md:w-[1272px]"
        buttonHref="/vi/partnerships"
        image={partnershipImage}
      />
    </main>
  );
}