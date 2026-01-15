import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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
    <section className="bg-background py-[123px]">
      <Container>
        <div className="flex gap-6 items-center max-md:flex-col">
          {/* Image */}
          <div className="relative h-[778px] w-[648px] shrink-0 overflow-hidden max-md:w-full max-md:h-[400px]">
            <div className="absolute inset-0 bg-black">
              <Image
                src={image}
                alt="Hoteliers Without Borders"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-12 px-12 max-md:px-0">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-sans text-base font-bold leading-6 tracking-[-0.32px] text-accent">
                  {badge}
                </p>
                <h2 className="font-display text-[44px] font-normal leading-[1.4] tracking-[-1.76px] text-foreground">
                  {title}
                </h2>
              </div>
              <p className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-foreground">
                {description}
              </p>
            </div>
            <Link href={buttonHref}>
              <Button variant="default">{buttonText}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
