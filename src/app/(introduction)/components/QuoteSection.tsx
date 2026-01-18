import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface QuoteSectionProps {
  image: Img;
  text: string;
}

export function QuoteSection({ image, text }: QuoteSectionProps) {
  return (
    <section className="relative h-[260px] w-full overflow-hidden">
      <Image src={image.src} alt={image.alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/35" />

      <Container>
        <div className="relative flex h-[260px] items-center justify-center text-center">
          <p className="font-display text-2xl text-white md:text-3xl">{text}</p>
        </div>
      </Container>
    </section>
  );
}
