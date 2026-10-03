import { Section } from "@/components/ui/Section";
import { pillars } from "@/lib/content";

export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What we do"
      headingId="what-we-do-heading"
      heading="Five parts of one journey."
    >
      <ul className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <li
            key={pillar.title}
            className="bg-paper p-8 transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            <h3 className="text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-3 opacity-75">{pillar.description}</p>
          </li>
        ))}
        <li aria-hidden="true" className="hidden bg-paper lg:block" />
      </ul>
    </Section>
  );
}
