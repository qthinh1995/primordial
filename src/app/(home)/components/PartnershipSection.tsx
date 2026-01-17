import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";

interface PartnershipSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export function PartnershipSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  image,
}: PartnershipSectionProps) {
  return (
    <section className="bg-background py-[64px] md:py-[120px]">

      {/* TEXT */}
      <Container className="px-4 md:px-12">
        <div className="mx-auto flex max-w-[1272px] flex-col items-center gap-6 text-center">
          <p className="font-sans text-base font-bold tracking-[-0.32px] text-accent">
            {badge}
          </p>

          <h2 className="mt-[-10px] md:mt-0 font-display text-[32px] leading-[1.2] tracking-[-0.04em] md:text-[44px] md:tracking-[-0.04em] uppercase text-foreground whitespace-nowrap">
            {title}
          </h2>


          <div className="font-sans mb-[10px] md:mb-0 text-[16px] leading-[1.6] tracking-[-0.3px] md:text-xl md:leading-[28px] md:tracking-[-0.6px] text-foreground">
            {parse(description)}
          </div>
          <div className="md:hidden">
          <Link href={buttonHref}>
            <Button size="lg">{buttonText}</Button>
          </Link>
          </div>

        </div>
      </Container>

      {/* IMAGE – FULL BLEED */}
      <div className="mt-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative aspect-[4/3] md:aspect-[16/6] w-full overflow-hidden">
          <Image
            src={image}
            alt="Primordial Hospitium Partnership"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center mt-12">  
          <Link href={buttonHref}>
            <Button size="lg">{buttonText}</Button>
          </Link>
          </div>



    </section>
  );
}
