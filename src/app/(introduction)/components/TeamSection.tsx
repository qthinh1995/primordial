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
        <div className="items-start gap-10 lg:gap-20 grid grid-cols-1 lg:grid-cols-[260px_1fr]">
          <h2 className="font-display text-[44px] text-foreground leading-[1.1]">
            {title}
          </h2>
          <div className="max-w-[680px] font-sans text-[15px] text-foreground/70 leading-[1.7]">
            {intro}
          </div>
        </div>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14">
          {members.map((m) => (
            <div key={m.name}>
              <div className="relative bg-muted w-full aspect-[3/4] overflow-hidden">
                <Image src={m.image.src} alt={m.image.alt} fill className="object-cover" />
              </div>

              <div className="mt-5 font-sans font-medium text-foreground">
                {m.name}
              </div>
              <div className="mt-2 font-serif text-accent text-sm italic">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
