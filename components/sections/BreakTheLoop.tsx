import { Button } from "@/components/ui/Button";
import { joinSectionHref, siteConfig } from "@/lib/config";

export function BreakTheLoop() {
  return (
    <section id="break-the-loop" aria-labelledby="book-heading" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <p className="inline-block border border-ink px-3 py-1 text-sm font-medium">
            Coming Soon
          </p>
          <h2
            id="book-heading"
            className="font-display mt-6 text-5xl leading-none sm:text-6xl md:text-7xl"
          >
            Break the Loop
          </h2>
          <p className="mt-6 max-w-xl text-lg">
            A practical guide for university students who want to make the most of their software
            engineering journey.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            The book is designed for students who feel lost, overwhelmed, or unsure about what they
            should actually be doing during university.
          </p>
          <Button href={siteConfig.bookUrl ?? joinSectionHref} variant="secondary" className="mt-8">
            Learn More
          </Button>
        </div>

        <div aria-hidden="true" className="reveal mx-auto w-full max-w-xs">
          <div className="flex aspect-[3/4] flex-col justify-between border border-ink p-8">
            <span className="text-sm text-muted">A guide for students</span>
            <span className="font-display text-5xl leading-[0.95]">
              Break
              <br />
              the
              <br />
              Loop
            </span>
            <span className="text-sm text-muted">{siteConfig.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
