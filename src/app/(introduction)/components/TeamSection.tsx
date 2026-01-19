import Image from "next/image";
import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface TeamSectionProps {
  title: string;
  intro: ReactNode;
  members: Array<{
    name: string;
    role: string;
    image: Img;
  }>;
}

export function TeamSection({ title, intro, members }: TeamSectionProps) {
  return (
    <section className="bg-background py-[72px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[520px_1fr] lg:gap-20">
          <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.6px] text-foreground md:text-[44px]">
            {title}
          </h2>

          <div className="max-w-[820px] font-sans text-base leading-[1.7] text-foreground md:text-lg">
            {intro}
          </div>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {members.map((m) => (
            <article key={m.name} className="min-w-0">
              <div className="relative aspect-[306/408] w-full overflow-hidden bg-muted">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 md:mt-6 font-serif text-[18px] font-semibold leading-[1.35] text-foreground md:text-xl">
                {m.name}
              </h3>

              <p className="mt-2 whitespace-pre-line font-serif text-sm italic leading-[1.6] text-accent md:text-xl">
                {m.role}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
