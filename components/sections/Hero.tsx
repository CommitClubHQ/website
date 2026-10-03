import { Button } from "@/components/ui/Button";
import { joinHref } from "@/lib/config";
import { CommitGraph } from "./CommitGraph";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div>
          <h1
            id="hero-heading"
            className="rise text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            A <span className="whitespace-nowrap">student-led</span> developer community.
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg text-muted sm:text-xl"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            Helping university students learn, build, collaborate, and prepare for careers in
            software.
          </p>
          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            <Button href={joinHref}>Join the Program</Button>
            <Button href="#about" variant="secondary">
              Explore
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <CommitGraph />
        </div>
      </div>
    </section>
  );
}
