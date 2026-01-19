import { Hero } from "../../components/Hero";
import { StorySection } from "../../components/StorySection";
import { VisionSection } from "../../components/VisionSection";
import { KeyFunctionsSection } from "../../components/KeyFunctionsSection";
import { TeamSection } from "../../components/TeamSection";

// Hero image
const heroImage = "/introduction-hero.jpg";

// Story section images
const storyImage = "/introduction-story-1.jpg";
const storyImage2 = "/introduction-story-2.jpg";
const storyImage3 = "/introduction-story-3.jpg";

// Vision section images
const visionImage = "/introduction-vision.jpg";
const visionValueImage = "/introduction-vision-value.jpg";
const teamMemberImage = "/introduction-team-member-1.jpg";

// Team member images
const teamImages = {
  member1: "/introduction-team-member-1.jpg",
  member2: "/introduction-team-member-2.jpg",
  member3: "/introduction-team-member-3.jpg",
  member4: "/introduction-team-member-4.jpg",
};

export default function IntroductionPage() {
  return (
    <main>
      <Hero title="VỀ CHÚNG TÔI" image={heroImage} />
      <StorySection
        title="KHỞI NGUYÊN - CÂN BẰNG TRỌN VẸN"
        overviewTitle="Giới thiệu chung"
        content={[
          "Primordial là nền tảng tư vấn và điều phối độc lập trong lĩnh vực khách sạn – nghỉ dưỡng, đồng hành cùng chủ đầu tư tại những điểm giao thoa quan trọng giữa thiết kế, vận hành và hiệu quả thương mại.",
          "Chúng tôi không vận hành thay, không áp đặt mô hình. Primordial hiện diện để giúp các dự án nhìn rõ bức tranh dài hạn, đưa ra quyết định đúng ở từng giai đoạn và phát triển đúng với bản chất của mình.",
          "Đó là cách chúng tôi kiến tạo sự cân bằng - giữa tầm nhìn và thực tế, giữa trải nghiệm và hiệu quả bền vững.",
        ]}
        image={storyImage}
        imageAlt="Câu Chuyện Của Chúng Tôi"
        additionalImages={[storyImage2, storyImage3]}
      />
      <VisionSection
        title="TẦM NHÌN"
        content={[
          "Primordial tin rằng một dự án khách sạn bền vững được định hình từ rất sớm - ngay tại những quyết định đầu tiên về thiết kế, cấu trúc và logic thương mại.",
          "Chúng tôi tạo ra một hệ thống liên kết giữa trải nghiệm, vận hành và hiệu quả tài chính, nơi mà mỗi lựa chọn đều tác động trực tiếp đến dòng tiền và khả năng phát triển dài hạn.",
          "Vì vậy, Primordial làm việc ở tầng chiến lược sớm nhất, cung cấp góc nhìn độc lập kết hợp tư duy thiết kế, vận hành và phân tích tài chính, để giúp chủ đầu tư đưa ra quyết định đúng và đưa dự án phát triển bền vững.",
        ]}
        teamMember={{
          name: "Nguyễn Hồ Gia Bảo (Bao Nguyen)",
          role: "Người sáng lập & CEO",
          bio: "Dẫn dắt định hướng chiến lược, phân tích khả thi và cấu trúc dự án, đồng hành cùng chủ đầu tư trong các quyết định có ảnh hưởng dài hạn đến vận hành, thương hiệu và hiệu quả tài chính.",
          image: teamMemberImage,
        }}
        image={visionImage}
        valueStatement="Lấy chủ đầu tư làm trung tâm, dẫn dắt bởi vận hành, dựa trên nền tảng tài chính"
        valueImage={visionValueImage}
      />
      <KeyFunctionsSection
        title="CHỨC NĂNG CỐT LÕI"
        functions={[
          {
            title: "01. Tư vấn chiến lược & Khả thi",
            description:
              "Đánh giá tính khả thi dự án dựa trên thị trường, tài chính và định vị thương hiệu, hỗ trợ chủ đầu tư đưa ra quyết định đúng ngay từ giai đoạn đầu.",
          },
          {
            title: "02. Thiết kế & Kỹ thuật",
            description:
              "Rà soát thiết kế dưới góc nhìn vận hành và hiệu quả dài hạn, đảm bảo thiết kế phục vụ trải nghiệm, chi phí và khả năng vận hành thực tế.",
          },
          {
            title: "03. Tiền khai trương & Thiết lập vận hành",
            description:
              "Thiết lập nền tảng vận hành trước khai trương, giúp dự án đi vào hoạt động ổn định và bền vững ngay từ đầu.",
          },
          {
            title: "04. Quản lý tài sản & Hiệu suất",
            description:
              "Đánh giá độc lập hiệu quả vận hành và tài chính, hỗ trợ chủ đầu tư nhận diện vấn đề và cơ hội cải thiện.",
          },
          {
            title: "05. Bán hàng, Marketing & Doanh thu",
            description:
              "Xây dựng cấu trúc doanh thu và định hướng marketing phù hợp định vị, giảm phụ thuộc ngắn hạn và tăng khả năng kiểm soát dài hạn.",
          },
          {
            title: "06. F&B/ Spa & Wellness",
            description:
              "Phát triển F&B, Spa và Wellness như các cấu phần chiến lược, tạo khác biệt trải nghiệm và giá trị doanh thu bền vững.",
          },
        ]}
      />
      <TeamSection
        title="ĐỘI NGŨ VẬN HÀNH"
        description="Đội ngũ của chúng tôi là trái tim của Primordial Hospitium. Chúng tôi là một nhóm đa dạng các chuyên gia với niềm đam mê chung về ngành khách sạn và sự xuất sắc. Hãy làm quen với những gương mặt đứng sau cam kết của chúng tôi trong việc cung cấp dịch vụ xuất sắc và những trải nghiệm khó quên."
        members={[
          {
            name: "Bao Nguyen",
            role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
            image: teamImages.member1,
          },
          {
            name: "Mai Phuong",
            role: "CHIEF FINANCIAL OFFICER",
            image: teamImages.member2,
          },
          {
            name: "Cang Lam",
            role: "Director of Operation - Advisor",
            image: teamImages.member3,
          },
          {
            name: "Ty Nguyen",
            role: "Director of Sale & Marketing - Advisor",
            image: teamImages.member4,
          },
        ]}
      />
    </main>
  );
}
