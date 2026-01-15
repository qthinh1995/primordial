import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface StoufferSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  images: string[];
}

export function StoufferSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  images,
}: StoufferSectionProps) {
  return (
    <section className="bg-muted py-[120px]">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Text Content */}
          <div className="mx-auto flex max-w-[960px] flex-col items-center gap-8 px-12">
            <div className="flex flex-col items-center gap-3">
              <p className="font-sans text-base font-bold leading-6 tracking-[-0.32px] text-accent">
                {badge}
              </p>
              <h2 className="font-display text-[44px] font-normal leading-[1.4] tracking-[-1.76px] text-foreground">
                {title}
              </h2>
            </div>
            <p className="text-center font-sans text-lg leading-[1.4] tracking-[-0.54px] text-foreground">
              {description}
            </p>
            <Link href={buttonHref}>
              <Button variant="default">{buttonText}</Button>
            </Link>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-2 items-center justify-center flex-wrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[320px] shrink-0 overflow-hidden max-md:hidden"
                style={{
                  width:
                    index === 0
                      ? "427px"
                      : index === 1
                        ? "214px"
                        : index === 2
                          ? "426px"
                          : index === 3
                            ? "240px"
                            : "640px",
                }}
              >
                <div className="absolute inset-0 bg-black">
                  <Image
                    src={image}
                    alt={`Stouffer Hotels image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
