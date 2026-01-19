import { Hero } from "@/app/(introduction)/components/Hero";
import { OverviewSection } from "@/app/(introduction)/components/OverviewSection";
import { VisionSection } from "@/app/(introduction)/components/VisionSection";
import { QuoteSection } from "@/app/(introduction)/components/QuoteSection";
import { CoreFunctionsSection } from "@/app/(introduction)/components/CoreFunctionsSection";
import { TeamSection } from "@/app/(introduction)/components/TeamSection";

// ===== HERO =====
const heroImage = "/figma/introduction/intro-hero.jpg";

// ===== OVERVIEW =====
const overviewMainImage = "/figma/introduction/origin-main.jpg";
const overviewThumbs = [
  "/figma/introduction/origin-thumb-1.jpg",
  "/figma/introduction/origin-thumb-2.jpg",
] as const;

// ===== VISION =====
const visionRightImage = "/figma/introduction/vision-right.jpg";
const visionAvatar = "/figma/introduction/team-bao.jpg";

// ===== QUOTE =====
const quoteBannerImage = "/figma/introduction/quote-banner.jpg";

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
        title={"NGUỒN GỐC –\nSỰ CÂN BẰNG HOÀN HẢO"}
        eyebrow="Tổng quan"
        paragraphs={[
          "Primordial là nền tảng tư vấn và điều phối trong lĩnh vực khách sạn, đồng hành cùng chủ đầu tư tại các điểm giao thoa quan trọng giữa thiết kế, vận hành và hiệu quả thương mại.",
          "Chúng tôi không vận hành thay đối tác, cũng không áp đặt mô hình có sẵn. Primordial hiện diện để giúp dự án giữ tầm nhìn dài hạn, đưa ra quyết định đúng ở từng giai đoạn và phát triển phù hợp với bản sắc thật của chính nó.",
          "Đó là cách chúng tôi tạo ra sự cân bằng — giữa tầm nhìn và thực tế, giữa trải nghiệm và hiệu suất bền vững.",
        ]}
        thumbs={[
          { src: overviewThumbs[0], alt: "Ảnh minh hoạ 1" },
          { src: overviewThumbs[1], alt: "Ảnh minh hoạ 2" },
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
          name: "Bảo Nguyễn",
          role: "ĐỒNG SÁNG LẬP & GIÁM ĐỐC PHÁT TRIỂN KINH DOANH",
          bio: "Định hướng chiến lược, đánh giá tính khả thi và cấu trúc dự án, làm việc sát với chủ đầu tư trong các quyết định ảnh hưởng dài hạn tới vận hành, định vị thương hiệu và hiệu quả tài chính.",
        }}
        rightImage={{ src: visionRightImage, alt: "Tầm nhìn" }}
      />

      <QuoteSection
        image={{ src: quoteBannerImage, alt: "Banner trích dẫn" }}
        text="Lấy chủ sở hữu làm trung tâm, lấy vận hành làm định hướng, lấy kỷ luật tài chính làm nền tảng."
      />

      <CoreFunctionsSection
        title="CHỨC NĂNG CHÍNH"
        defaultOpenIndex={0}
        items={[
          {
            title: "Tư vấn chiến lược & Thẩm định tính khả thi",
            description:
              "Đánh giá tính khả thi dự án qua phân tích thị trường, mô hình tài chính và định vị thương hiệu, hỗ trợ chủ đầu tư đưa ra quyết định đúng ngay từ giai đoạn đầu.",
          },
          {
            title: "Tư vấn thiết kế & kỹ thuật",
            description:
              "Định hướng thiết kế và phối hợp kỹ thuật để đảm bảo tính khả thi, đồng bộ và logic vận hành dài hạn.",
          },
          {
            title: "Tiền khai trương & thiết lập vận hành",
            description:
              "Xây dựng khung vận hành và chuẩn bị tiền khai trương để việc triển khai dịch vụ bám sát concept, ngân sách và nhân sự thực tế.",
          },
          {
            title: "Quản trị tài sản & hiệu suất",
            description:
              "Theo dõi hiệu suất và đồng bộ quyết định các bên liên quan nhằm tạo giá trị bền vững trong suốt vòng đời tài sản.",
          },
          {
            title: "Kinh doanh, Marketing & chiến lược doanh thu",
            description:
              "Xây dựng chiến lược go-to-market, phân phối và giá để bảo vệ định vị và tối ưu hiệu quả thương mại.",
          },
          {
            title: "F&B · Spa · Wellness",
            description:
              "Phát triển concept và hoạch định vận hành cho F&B và wellness phù hợp bản sắc dự án và nhu cầu thị trường.",
          },
        ]}
      />

      <TeamSection
        title="ĐỘI NGŨ"
        intro={
          <>
            Đội ngũ của chúng tôi là trái tim của <b>Primordial Hospitium</b>. Chúng
            tôi là tập thể chuyên gia đa dạng, cùng chung đam mê ngành hiếu khách và
            cam kết về chất lượng. Hãy gặp những con người đứng sau lời hứa về dịch vụ
            xuất sắc và trải nghiệm đáng nhớ.
          </>
        }
        members={[
          {
            name: "Bảo Nguyễn",
            role: "ĐỒNG SÁNG LẬP & GIÁM ĐỐC PHÁT TRIỂN KINH DOANH",
            image: { src: teamImages[0], alt: "Bảo Nguyễn" },
          },
          {
            name: "Nguyễn Ngọc",
            role: "GIÁM ĐỐC TÀI CHÍNH",
            image: { src: teamImages[1], alt: "Nguyễn Ngọc" },
          },
          {
            name: "Cang Lam",
            role: "GIÁM ĐỐC VẬN HÀNH - CỐ VẤN",
            image: { src: teamImages[2], alt: "Cang Lam" },
          },
          {
            name: "Ty Nguyen",
            role: "GIÁM ĐỐC KINH DOANH & MARKETING - CỐ VẤN",
            image: { src: teamImages[3], alt: "Ty Nguyen" },
          },
        ]}
      />
    </main>
  );
}
