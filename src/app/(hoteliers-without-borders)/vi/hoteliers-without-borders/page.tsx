import { FullscreenSplitHero } from "@/components/hero";
import { WhatIsHWBSection } from "../../components/WhatIsHWBSection";
import { ValueSection } from "../../components/ValueSection";

// Images
const heroImage = "/hwb/hwb-hero.jpg";
const valueImage = "/hwb/hwb-value.jpg";

export default function HoteliersWithoutBordersPage() {
  return (
    <main>
      <FullscreenSplitHero
        tagline="Where Hospitality Becomes Memory"
        title="Hospitality Works Best When People Arrive at the Right Time"
        description="Hoteliers Without Borders™ là mạng lưới nhân sự hospitality linh hoạt, được thiết kế để hỗ trợ dự án đúng lúc - khi tuyển dụng toàn thời gian không còn là giải pháp tối ưu."
        subdescription="Không thay thế đội ngũ hiện hữu. Không làm phình bộ máy. Chỉ xuất hiện khi dự án cần đúng năng lực."
        image={heroImage}
      />
      <WhatIsHWBSection
        title={`HOTELS WITHOUT\nBORDERS LÀ GÌ?`}
        paragraphs={[
          {
            text: "A Flexible Talent Network for Hospitality Hoteliers Without Borders™ là một mạng lưới điều phối nhân sự hospitality theo dự án, kết nối các khách sạn và khu nghỉ dưỡng với những chuyên gia giàu kinh nghiệm trong các giai đoạn ngắn hạn, theo mùa hoặc theo nhu cầu chuyên môn cụ thể.",
            boldPhrases: [
              "mạng lưới điều phối nhân sự",
              "hospitality theo dự án",
            ],
          },
          {
            text: "Nền tảng này không hoạt động như một đơn vị tuyển dụng truyền thống, cũng không thay thế vai trò của bộ phận nhân sự nội bộ.",
          },
          {
            text: "Hoteliers Without Borders™ được tạo ra để bổ sung đúng năng lực vào đúng thời điểm, khi việc tuyển dụng dài hạn gây áp lực chi phí hoặc không phù hợp với bối cảnh vận hành.",
            boldPhrases: ["bổ sung đúng năng lực vào đúng thời điểm"],
          },
          {
            text: "Mọi sự kết nối đều dựa trên sự minh bạch, linh hoạt và sự tôn trọng vai trò của cả hai phía — khách sạn và chuyên gia.",
          },
        ]}
        highlightText="WORK không phải là số lượng người — mà là chất lượng hiện diện."
        image={valueImage}
      />
      <ValueSection
        title="DÀNH CHO AI & GIÁ TRỊ MANG LẠI"
        subtitle="Hoteliers Without Borders™ được xây dựng cho những dự án cần **sự linh hoạt cao nhưng không đánh đổi chất lượng.**"
        suitableFor={{
          title: "Phù hợp với",
          items: [
            "Khách sạn và khu nghỉ dưỡng độc lập",
            "Dự án boutique, lifestyle",
            "Chủ đầu tư cần giải pháp nhân sự theo giai đoạn",
          ],
        }}
        coreValue={{
          title: "Giá trị cốt lõi",
          items: [
            "Giảm áp lực payroll dài hạn",
            "Tiếp cận đúng chuyên môn, đúng thời điểm",
            "Giữ ổn định vận hành trong các giai đoạn nhạy cảm",
            "Không can thiệp vào quyền kiểm soát của chủ đầu tư",
          ],
        }}
        highlightText="Hoteliers Without Borders™ không xây dựng đội ngũ lớn nhất, mà xây dựng"
        highlightBoldText="đội ngũ phù hợp nhất cho từng thời điểm."
        image={valueImage}
      />
    </main>
  );
}
