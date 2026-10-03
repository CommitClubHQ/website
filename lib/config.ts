function optionalUrl(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export const siteConfig = {
  name: "CommitClubHQ",
  title: "CommitClubHQ — A Student-Led Developer Community",
  description:
    "CommitClubHQ helps university students learn, build, collaborate, and prepare for careers in software.",
  // Each NEXT_PUBLIC_* variable must be read literally so Next.js can inline it.
  siteUrl: optionalUrl(process.env.NEXT_PUBLIC_SITE_URL)?.replace(/\/$/, "") ?? null,
  programFormUrl:
    optionalUrl(process.env.NEXT_PUBLIC_PROGRAM_FORM_URL) ?? "https://forms.gle/tZdhbHkPv2Fot68X7",
  bookUrl: optionalUrl(process.env.NEXT_PUBLIC_BOOK_URL),
  socials: [
    {
      label: "Instagram",
      href:
        optionalUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL) ??
        "https://www.instagram.com/commitclubhq/",
    },
    {
      label: "LinkedIn",
      href:
        optionalUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL) ??
        "https://www.linkedin.com/company/commitclubhq",
    },
    {
      label: "GitHub",
      href: optionalUrl(process.env.NEXT_PUBLIC_GITHUB_URL) ?? "https://github.com/CommitClubHQ",
    },
  ],
} as const;

export const joinSectionHref = "#join";

/** Where "Join the Program" buttons point: the form, or the Join section until it is configured. */
export const joinHref = siteConfig.programFormUrl ?? joinSectionHref;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Break the Loop", href: "#break-the-loop" },
  { label: "Join", href: joinSectionHref },
] as const;
