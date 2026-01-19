import Image from "next/image";
import { Container } from "@/components/ui/container";

export type HeroImage = {
  src: string;
  alt: string;
};

interface HeroProps {
  title: string;
  image: HeroImage;
}

export function Hero({ title, image }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <Container>
        <div className="relative flex justify-center items-center h-[600px] text-center">
          <h1 className="font-display text-[52px] text-white md:text-[64px] leading-[1.05] tracking-[-0.6px]">
            {title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
