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
    <section className="bg-background py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
          <h2 className="font-display text-[44px] leading-[1.1] text-foreground">
            {title}
          </h2>
          <div className="max-w-[680px] font-sans text-[15px] leading-[1.7] text-foreground/70">
            {intro}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name}>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image src={m.image.src} alt={m.image.alt} fill className="object-cover" />
              </div>

              <div className="mt-5 font-sans font-medium text-foreground">
                {m.name}
              </div>
              <div className="mt-2 font-serif text-sm italic text-accent">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
