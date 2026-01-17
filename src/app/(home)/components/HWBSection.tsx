import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";

interface HWBSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export function HWBSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  image,
}: HWBSectionProps) {
  return (
    <section className="bg-background py-[64px] md:py-[96px] lg:py-[123px]">
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* TEXT – luôn ở trên mobile */}
          <div className="order-1 flex flex-1 flex-col gap-10 text-center lg:order-2 lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 md:w-[576px]">
                <p className="font-sans text-sm md:text-base font-bold tracking-[-0.32px] text-accent">
                  {badge}
                </p>

                <h2
                  className=" w-[343px] mx-auto md:w-full
                    font-display
                    text-[32px] leading-[1.5] tracking-[-1.2px]
                     md:leading-[40px]
                    lg:text-[44px] lg:leading-[1.4] lg:tracking-[-1.76px]
                  "
                >
                  {parse(title)}
                </h2>
              </div>

              <div
                className="
                  font-sans text-base leading-[1.6] tracking-[-0.3px]
                  lg:text-lg lg:leading-[1.4] lg:tracking-[-0.54px]
                "
              >
                {parse(description)}
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link href={buttonHref}>
                <Button>{buttonText}</Button>
              </Link>
            </div>
          </div>

          {/* IMAGE – mobile nằm dưới, desktop nằm trái */}
          <div
            className="
              order-2
              relative w-full overflow-hidden
              aspect-[3/4]
              md:aspect-[4/5]
              lg:order-1 lg:w-[648px] lg:h-[778px] lg:aspect-auto
              shrink-0
            "
          >
            <Image
              src={image}
              alt="Hoteliers Without Borders"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
