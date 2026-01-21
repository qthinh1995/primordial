import { FullscreenSplitHero } from "@/components/hero";
import { IntroductionSection } from "../../components/IntroductionSection";
import { WhatIsStoufferSection } from "../../components/WhatIsStoufferSection";
import { MarketingSection } from "../../components/MarketingSection";
import { BrandValuesGallerySection } from "../../components/BrandValuesGallerySection";
import { ContactSection } from "../../components/ContactSection";

// Hero image
const heroImage = "/stouffer/stouffer-hero.jpg";

// Introduction image
const introduceImage = "/stouffer/stouffer-introduce.jpg";

// What is Stouffer image
const whatIsStoufferImage = "/stouffer/what-is-stouffer.jpg";

// Marketing images
const marketingImage1 = "/stouffer/marketing-1.jpg";
const marketingImage2 = "/stouffer/marketing-2.jpg";

// Gallery images
const galleryImages = [
  "/stouffer/gallery-1.jpg",
  "/stouffer/gallery-2.jpg",
  "/stouffer/gallery-3.jpg",
  "/stouffer/gallery-4.jpg",
];

export default function StoufferHotelsPage() {
  return (
    <main>
      <FullscreenSplitHero
        title="STOUFFER HOTELS™ "
        description="Một nền tảng liên kết thương hiệu dành cho các khách sạn và khu nghỉ dưỡng độc lập, giúp gia tăng giá trị thương hiệu và chuẩn mực vận hành trong khi chủ đầu tư vẫn giữ toàn quyền kiểm soát."
        image={heroImage}
      />
      <IntroductionSection
        sectionTitle="GIỚI THIỆU"
        paragraphs={[
          {
            text: "Stouffer Hotels™ là một nền tảng soft-brand dành cho các khách sạn và khu nghỉ dưỡng độc lập, kết nối các tài sản dưới một dấu chứng thực chung mà không làm mất đi bản sắc hay quyền kiểm soát của chủ đầu tư.",
            boldPhrases: ["nền tảng soft-brand"],
          },
          {
            text: '"A Stouffer Hotel" không phải là nhượng quyền hay quản lý, mà thể hiện sự gắn kết với một hệ giá trị chung về văn hoá phục vụ, chuẩn mực vận hành và triết lý Everybody is Somebody.',
            boldPhrases: ['"A Stouffer Hotel"', "Everybody is Somebody"],
          },
          {
            text: "Stouffer Hotels™ không tạo ra một chuỗi đồng nhất, mà hình thành một cộng đồng các khách sạn độc lập được kết nối bằng giá trị - không phải sự kiểm soát.",
          },
        ]}
        image={introduceImage}
      />
      <WhatIsStoufferSection
        title="STOUFFER LÀ GÌ?"
        description="Trong mô hình Stouffer: Primordial Hospitium đóng vai trò tư vấn và tích hợp, đảm bảo các chuẩn mực được hiểu đúng và vận dụng đúng - trong khi mọi quyết định vận hành, tài chính và nhân sự vẫn thuộc về chủ sở hữu dự án."
        isTitle="Stouffer Hotels™ là"
        isList={[
          "Một nền tảng soft-brand dành cho khách sạn độc lập",
          "Một dấu chứng thực về chuẩn mực & hệ giá trị chung",
          "Một cộng đồng các khách sạn được kết nối bằng tư duy, không phải kiểm soát",
        ]}
        isNotTitle="Stouffer Hotels™ không phải"
        isNotList={[
          "Không phải chuỗi khách sạn",
          "Không phải nhượng quyền (franchise)",
          "Không phải đơn vị quản lý vận hành",
          "Không thay thế vai trò chủ đầu tư hay ban điều hành",
        ]}
        image={whatIsStoufferImage}
      />
      <MarketingSection
        title="Liên kết & Truyền thông"
        description={
          <>
            <p className="mb-4">
              Primordial triển khai chiến lược tiếp thị và liên kết dựa trên
              mạng lưới đại lý du lịch, kênh trực tiếp và các đối tác được chọn
              lọc nhằm tối ưu tốc độ bán và tối đa giá trị phòng đổi.
            </p>
            <p className="mb-4">
              Hoạt động marketing số, hiệu suất và truyền thông thương hiệu được
              đồng bộ theo nhận diện của Chủ sở hữu, đồng thời tận dụng chứng
              thực <strong>&quot;A Stouffer Hotel&quot;</strong> để tăng uy tín.
            </p>
            <p>
              Tất cả chiến dịch và điểm chạm được thiết kế hướng đến hiệu quả
              thương mại, không yêu cầu chủ khách sạn đầu tư thêm hệ thống hay
              chi phí cố định.
            </p>
          </>
        }
        image1={marketingImage1}
        image2={marketingImage2}
      />
      <BrandValuesGallerySection
        title="Độc lập trong bản sắc. Gắn kết bằng giá trị"
        description={
          <>
            Primordial đảm bảo mọi hoạt động truyền thông và giao tiếp đều tuân
            thủ nhận diện của Chủ sở hữu, đồng thời tích hợp nhãn{" "}
            <strong>&quot;A Stouffer Hotel&quot;</strong> như dấu chứng thực uy
            tín. Các thông điệp thương hiệu được quản lý nhất quán trên website,
            OTA, kênh đối tác và điểm chạm khách hàng.
          </>
        }
        images={galleryImages}
      />
      <ContactSection
        title="Liên hệ"
        description="Văn phòng chính của chúng tôi nằm ở Adelaide, Úc. Chúng tôi cũng có một văn phòng chi nhánh tại Phú Quốc, Việt Nam. Cả hai văn phòng đều có đội ngũ chuyên gia trong ngành khách sạn sẵn sàng hỗ trợ bạn."
        buttonText="Liên hệ với chúng tôi"
        buttonHref="/vi/contact"
      />
    </main>
  );
}
