import { Section } from "@/components/ui/Section";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      headingId="how-it-works-heading"
      heading="Every step is a commit."
    >
      <ol className="max-w-3xl">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.title} className="reveal relative flex gap-6 pb-10 last:pb-0 sm:gap-10">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute top-6 bottom-0 left-[7px] w-px bg-line"
                />
              )}
              <span
                aria-hidden="true"
                className={`relative mt-2 size-4 shrink-0 rounded-full border border-ink ${
                  isLast ? "bg-ink" : "bg-paper"
                }`}
              />
              <div className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:gap-6">
                <span className="font-display text-3xl leading-none sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted">{step.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
