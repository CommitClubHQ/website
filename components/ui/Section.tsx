import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  headingId: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  heading,
  headingId,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-sm font-medium tracking-wide text-muted uppercase">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
        >
          {heading}
        </h2>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
