import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface QuoteSectionProps {
  image: Img;
  text: string; // supports \n or \\n
}

export function QuoteSection({ image, text }: QuoteSectionProps) {
  const content = String(text).replaceAll("\\n", "\n");

  return (
    <section className="relative  h-[224px] md:h-[360px] md:h-[512px] w-full overflow-hidden">
      <Image src={image.src} alt={image.alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/10" />

      <Container className="px-4 md:px-12">
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-0">
          <p className="mx-auto text-center md:max-w-[1200px] whitespace-pre-line font-display text-2xl leading-[1.35] text-white md:text-[32px] md:leading-[1.4]">
            {content}
          </p>
        </div>
      </Container>
    </section>
  );
}
