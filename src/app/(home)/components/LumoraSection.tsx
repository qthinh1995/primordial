import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import parse from 'html-react-parser';

interface LumoraSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  images: string[];
}

export function LumoraSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  images,
}: LumoraSectionProps) {
  return (
    <section className="bg-muted py-[64px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-16">
          {/* TEXT */}
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              <div className="flex flex-col gap-3">
                <p className="font-sans text-base font-bold tracking-[-0.32px] text-accent">
                  {badge}
                </p>

                <h2 className="font-display text-[32px] leading-[40px] tracking-[-1.2px] text-foreground md:text-[44px] md:leading-[1.4] md:tracking-[-1.76px]">
                  {title}
                </h2>
              </div>

              <div className="flex flex-col gap-10 items-center md:flex-row md:items-start md:justify-between w-full">
                <div className="max-w-[879px] font-sans text-[16px] leading-[1.6] tracking-[-0.3px] text-foreground text-center md:text-left md:text-lg md:leading-[1.4] md:tracking-[-0.54px]">
                  {parse(description)}
                </div>

                <Link href={buttonHref} className="shrink-0">
                  <Button>{buttonText}</Button>
                </Link>
              </div>
            </div>
         <div className="flex gap-4 md:gap-6 overflow-x-auto md:px-0">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative min-w-[320px] aspect-[320/481] md:min-w-0 md:flex-1 md:aspect-[432/518]"
              >
                <Image
                  src={image}
                  alt={`Lumora image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 33vw"
                />
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}