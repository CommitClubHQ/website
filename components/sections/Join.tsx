import { Button, DisabledButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export function Join() {
  return (
    <section id="join" aria-labelledby="join-heading" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <h2
          id="join-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          Ready to stop waiting and start building?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-paper-muted">
          Join CommitClubHQ and start building your software engineering journey with direction.
        </p>
        <div className="mt-10">
          {siteConfig.programFormUrl ? (
            <Button href={siteConfig.programFormUrl} variant="inverse">
              Join the Program
            </Button>
          ) : (
            <>
              <DisabledButton>Join the Program</DisabledButton>
              <p className="mt-3 text-sm text-paper-muted">Sign-up opens soon.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
