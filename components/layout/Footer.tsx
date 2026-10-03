import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src="/brand/wordmark.png"
            alt={siteConfig.name}
            width={573}
            height={163}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-muted">A student-led developer community.</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm" aria-label="Social links">
          {siteConfig.socials.map(({ label, href }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-muted"
                >
                  {label}
                </a>
              ) : (
                <span className="text-muted" title="Coming soon">
                  {label} <span className="sr-only">(coming soon)</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted sm:px-8">
          © 2026 {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
