import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface HWBSectionProps {
  badge: string;
  title: ReactNode;
  description: ReactNode;
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
        <div className="flex lg:flex-row flex-col lg:items-center gap-10 md:gap-12 lg:gap-16">
          {/* TEXT – luôn ở trên mobile */}
          <div className="flex flex-col flex-1 gap-10 order-1 lg:order-2 lg:text-left text-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 lg:max-w-[576px]">
                <p className="font-sans font-bold text-accent text-sm md:text-base tracking-[-0.32px]">
                  {badge}
                </p>

                <h2 className="mx-auto w-[343px] md:w-full font-display text-[32px] lg:text-[44px] leading-[1.5] md:leading-[40px] lg:leading-[1.4] tracking-[-1.2px] lg:tracking-[-1.76px]">
                  {title}
                </h2>
              </div>

              <div className="md:space-y-6 font-sans text-base lg:text-lg leading-[1.6] lg:leading-[1.4] tracking-[-0.3px] lg:tracking-[-0.54px]">
                {description}
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link href={buttonHref}>
                <Button>{buttonText}</Button>
              </Link>
            </div>
          </div>

          {/* IMAGE – mobile nằm dưới, desktop nằm trái */}
          <div className="relative order-2 lg:order-1 w-full lg:w-[648px] lg:h-[778px] aspect-[3/4] md:aspect-[4/5] lg:aspect-auto overflow-hidden shrink-0">
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
