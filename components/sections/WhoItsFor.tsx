import { Section } from "@/components/ui/Section";
import { audiences } from "@/lib/content";

export function WhoItsFor() {
  return (
    <Section
      id="who-its-for"
      eyebrow="Who it’s for"
      headingId="who-heading"
      heading="University students, starting from Sri Lanka."
    >
      <ul className="reveal grid border-t border-line md:grid-cols-2 md:gap-x-16">
        {audiences.map((audience) => (
          <li
            key={audience}
            className="flex items-baseline gap-4 border-b border-line py-5 text-lg"
          >
            <span aria-hidden="true" className="size-2 shrink-0 translate-y-[-1px] bg-ink" />
            {audience}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-muted">
        CommitClubHQ is not tied to any one university. If you study, or are about to study,
        software at any university, you belong here.
      </p>
    </Section>
  );
}
