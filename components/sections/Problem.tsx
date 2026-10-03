import { Section } from "@/components/ui/Section";

export function Problem() {
  return (
    <Section
      id="about"
      eyebrow="The problem"
      headingId="problem-heading"
      heading="University teaches you to study software engineering. Becoming a developer takes more."
    >
      <div className="reveal grid gap-8 md:grid-cols-2 md:gap-16">
        <p className="text-lg text-muted">
          Students need direction, practical experience, meaningful projects, collaboration, career
          preparation, and people to learn from.
        </p>
        <p className="text-lg">
          CommitClubHQ exists to help bridge that gap, from the classroom to real-world development.
        </p>
      </div>
    </Section>
  );
}
