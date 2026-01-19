import { Hero } from "@/app/(introduction)/components/Hero";
import { OverviewSection } from "@/app/(introduction)/components/OverviewSection";
import { VisionSection } from "@/app/(introduction)/components/VisionSection";
import { QuoteSection } from "@/app/(introduction)/components/QuoteSection";
import { CoreFunctionsSection } from "@/app/(introduction)/components/CoreFunctionsSection";
import { TeamSection } from "@/app/(introduction)/components/TeamSection";

// ===== HERO =====
const heroImage = "/figma/introduction/intro-hero.jpg";

// ===== OVERVIEW =====
const overviewMainImage = "/figma/Origin1.jpg";
const overviewThumbs = [
  "/figma/Origin1.jpg",
  "/figma/Origin2.jpg",
  "/figma/Origin3.jpg",
  
] as const;

// ===== VISION =====
const visionRightImage = "/figma/Vision1.png";
const visionAvatar = "/figma/introduction/team-bao.jpg";

// ===== QUOTE =====
const quoteBannerImage = "/figma/Centered on.png";

// ===== TEAM =====
const teamImages = [
  "/figma/introduction/team-bao.jpg",
  "/figma/introduction/team-ngoc.jpg",
  "/figma/introduction/team-cang.jpg",
  "/figma/introduction/team-ty.jpg",
] as const;

export default function IntroductionPageVI() {
  return (
    <main>
      <Hero title="Giới thiệu" image={{ src: heroImage, alt: "Giới thiệu hero" }} />

      <OverviewSection
        leftImage={{
          src: overviewMainImage,
          alt: "Tổng quan",
          objectPosition: "50% 70%",
        }}
        title={"KHỞI NGUYÊN - CÂN BẰNG\nTRỌN VẸN"}
        eyebrow="Giới thiệu chung"
        paragraphs={[
          "Primordial là nền tảng tư vấn và điều phối độc lập trong lĩnh vực khách sạn – nghỉ dưỡng, đồng hành cùng chủ đầu tư tại những điểm giao thoa quan trọng giữa thiết kế, vận hành và hiệu quả thương mại.",
          "Chúng tôi không vận hành thay, không áp đặt mô hình.Primordial hiện diện để giúp các dự án nhìn rõ bức tranh dài hạn, đưa ra quyết định đúng ở từng giai đoạn và phát triển đúng với bản chất của mình.",
          "Đó là cách chúng tôi kiến tạo sự cân bằng - giữa tầm nhìn và thực tế, giữa trải nghiệm và hiệu quả bền vững.Giữa tầm nhìn và thực tế, giữa trải nghiệm và hiệu quả bền vững.",
        ]}
        thumbs={[
          { src: overviewThumbs[1], alt: "Ảnh minh hoạ 1" },
          { src: overviewThumbs[2], alt: "Ảnh minh hoạ 2" },
        ]}
      />

      <VisionSection
        title="TẦM NHÌN"
        paragraphs={[
          "Primordial tin rằng một dự án khách sạn bền vững được định hình ngay từ đầu — bắt đầu từ những quyết định sớm nhất về thiết kế, cấu trúc và logic thương mại.",
          "Chúng tôi nhìn khách sạn như một hệ thống liên kết, nơi trải nghiệm, vận hành và hiệu quả tài chính không thể tách rời; và mỗi lựa chọn đều tác động trực tiếp đến dòng tiền cũng như tiềm năng tăng trưởng dài hạn.",
          "Vì vậy, Primordial tham gia ở tầng chiến lược sớm, cung cấp góc nhìn độc lập kết hợp tư duy thiết kế, logic vận hành và phân tích tài chính — giúp chủ đầu tư ra quyết định đúng và dẫn dắt dự án tới thành công bền vững.",
        ]}
        feature={{
          avatar: { src: visionAvatar, alt: "Bảo Nguyễn" },
          name: "Nguyễn Hồ Gia Bảo (Bao Nguyen)",
          role: "Người sáng lập & CEO",
          bio: "Dẫn dắt định hướng chiến lược, phân tích khả thi và cấu trúc dự án, đồng hành cùng chủ đầu tư trong các quyết định có ảnh hưởng dài hạn đến vận hành, thương hiệu và hiệu quả tài chính.",
        }}
        rightImage={{ src: visionRightImage, alt: "Tầm nhìn" }}
      />

      <QuoteSection
        image={{ src: quoteBannerImage, alt: "Banner trích dẫn" }}
        text="Lấy chủ đầu tư làm trung tâm, dẫn dắt bởi vận hành, dựa trên nền tảng tài chính."
      />

      <CoreFunctionsSection
        title="CHỨC NĂNG CỐT LÕI"
        defaultOpenIndex={0}
        items={[
          {
            title: "Tư vấn chiến lược & Khả thi",
            description:
              "Đánh giá tính khả thi dự án dựa trên thị trường, tài chính và định vị thương hiệu, hỗ trợ chủ đầu tư đưa ra quyết định đúng ngay từ giai đoạn đầu.",
          },
          {
            title: "Thiết kế & Kỹ thuật",
            description:
              "Định hướng thiết kế và phối hợp kỹ thuật để đảm bảo tính khả thi, đồng bộ và logic vận hành dài hạn.",
          },
          {
            title: "Tiền khai trương & Thiết lập vận hành",
            description:
              "Xây dựng khung vận hành và chuẩn bị tiền khai trương để việc triển khai dịch vụ bám sát concept, ngân sách và nhân sự thực tế.",
          },
          {
            title: "Quản lý tài sản & Hiệu suất",
            description:
              "Theo dõi hiệu suất và đồng bộ quyết định các bên liên quan nhằm tạo giá trị bền vững trong suốt vòng đời tài sản.",
          },
          {
            title: "Bán hàng, Marketing & Doanh thu",
            description:
              "Xây dựng chiến lược go-to-market, phân phối và giá để bảo vệ định vị và tối ưu hiệu quả thương mại.",
          },
          {
            title: "F&B/ Spa & Wellness",
            description:
              "Phát triển concept và hoạch định vận hành cho F&B và wellness phù hợp bản sắc dự án và nhu cầu thị trường.",
          },
        ]}
      />

      <TeamSection
        title="ĐỘI NGŨ VẬN HÀNH"
        intro={
          <>
            Đội ngũ của chúng tôi là trái tim của <b>Primordial Hospitium</b>. Chúng tôi là một nhóm đa dạng các chuyên gia với niềm đam mê chung về ngành khách sạn và sự xuất sắc. Hãy làm quen với những gương mặt đứng sau cam kết của chúng tôi trong việc cung cấp dịch vụ xuất sắc và những trải nghiệm khó quên.
          </>
        }
        members={[
          {
            name: "Bảo Nguyễn",
            role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
            image: { src: teamImages[0], alt: "Bảo Nguyễn" },
          },
          {
            name: "Nguyễn Ngọc",
            role: "CHIEF FINANCIAL OFFICER",
            image: { src: teamImages[1], alt: "Nguyễn Ngọc" },
          },
          {
            name: "Cang Lam",
            role: "Director of Operation - Advisor",
            image: { src: teamImages[2], alt: "Cang Lam" },
          },
          {
            name: "Ty Nguyen",
            role: "Director of Sale & Marketing - Advisor",
            image: { src: teamImages[3], alt: "Ty Nguyen" },
          },
        ]}
      />
    </main>
  );
}
