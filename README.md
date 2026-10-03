# CommitClubHQ Website

The official landing page of **CommitClubHQ**, a student-led developer community based in Sri Lanka.

## About CommitClubHQ

CommitClubHQ helps university students learn, build, collaborate, and prepare for careers in
software. It exists to bridge the gap between studying software engineering and becoming a
real-world developer, and it is open to university students broadly, not to any single university.

## Features

- Single-page landing: hero, the problem, what we do, how it works, the _Break the Loop_ book
  (coming soon), who it's for, and a Join the Program call to action
- Responsive layout with a dedicated mobile navigation
- Accessible: semantic HTML, skip link, visible focus states, keyboard-friendly menu,
  `prefers-reduced-motion` support
- Restrained, CSS-only animation (no animation library)
- SEO: metadata, Open Graph and Twitter cards, favicon, optional canonical URL
- External URLs (sign-up form, socials) are configured through environment variables

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) and React
- TypeScript (strict)
- Tailwind CSS v4
- ESLint and Prettier
- Fonts via `next/font`: Geist (body/UI) and Sedgwick Ave Display (brand display text)

## Requirements

- Node.js 20.9 or newer (developed on Node 22)
- npm 10 or newer

## Getting Started

```bash
git clone <repository-url>
cd website
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

## Environment Variables

Copy `.env.example` to `.env.local`. All variables are optional in development, and none of them
are secrets: `NEXT_PUBLIC_*` values are embedded in the browser bundle.

| Variable                       | Purpose                                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_PROGRAM_FORM_URL` | Optional override for the Google Form behind every "Join the Program" button (defaults to the official sign-up form). |
| `NEXT_PUBLIC_SITE_URL`         | Production origin (no trailing slash). Enables the canonical URL and absolute Open Graph URLs.                        |
| `NEXT_PUBLIC_INSTAGRAM_URL`    | Optional override for the footer Instagram link (defaults to the official profile).                                   |
| `NEXT_PUBLIC_LINKEDIN_URL`     | Optional override for the footer Linkedin link (defaults to the official profile).                                    |
| `NEXT_PUBLIC_GITHUB_URL`       | Optional override for the footer Github link (defaults to the official profile).                                      |
| `NEXT_PUBLIC_BOOK_URL`         | Optional page for _Break the Loop_. "Learn More" falls back to the Join section.                                      |

Do not collect sensitive personal information in the sign-up form, and never commit `.env.local`.

## Available Scripts

```bash
npm run dev          # start the development server
npm run build        # create a production build
npm run start        # serve the production build
npm run lint         # run ESLint
npm run typecheck    # generate route types and run the TypeScript compiler
npm run format       # format the codebase with Prettier
npm run format:check # check formatting without writing
```

## Project Structure

```text
app/                 App Router: layout, page, global styles, icon and social images
components/
  layout/            Header (with mobile menu) and Footer
  sections/          One component per landing-page section
  ui/                Small reusable pieces (Button, Section)
lib/
  config.ts          Site metadata, navigation, and environment-driven URLs
  content.ts         Copy for the repeated lists (pillars, steps, audiences)
public/brand/        Logo assets used by the site (wordmark and monogram)
pics/                Original logo files as supplied (source only, not served)
```

## Development Standards

- **TypeScript:** strict mode, no `any`.
- **ESLint and Prettier:** `npm run lint` and `npm run format:check` must pass before opening a PR.
- **Components:** small and single-purpose. Pages and sections are server components. Add
  `"use client"` only when state or browser APIs are needed (currently only the Header).
- **Naming:** `PascalCase` for components and their files, `camelCase` for variables and functions.
- **Content and URLs:** keep copy in `lib/content.ts` or the section component, and external URLs
  in `lib/config.ts`. Never hardcode a URL in a component.
- **Brand:** white `#FFFFFF` and dark `#3E3E3E` only (plus tints of those two). Use the Sedgwick
  Ave Display font sparingly for display text, never for body copy.
- **Accessibility:** semantic landmarks, one `h1`, ordered headings, visible focus, sufficient
  contrast, decorative graphics marked `aria-hidden`, and motion that respects
  `prefers-reduced-motion`.
- **Honesty:** no invented statistics, testimonials, partners, or achievements.

## Git Workflow

`main` is the stable branch. Changes are made on a short-lived branch and merged through a pull
request.

```text
main
  ↑
  Pull Request
  ↑
feature branch
```

Branch names use a prefix that matches the change: `feat/`, `fix/`, `docs/`, `style/`,
`refactor/`, or `chore/`. Do not commit directly to `main`.

## Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/) prefixes:

```text
feat:
fix:
docs:
style:
refactor:
chore:
```

Examples:

```text
feat: add program signup section
fix: improve mobile navigation
docs: update setup instructions
chore: update dependencies
```

## Deployment

The site deploys to [Vercel](https://vercel.com/) with no extra configuration.

1. Import the GitHub repository in Vercel (framework preset: Next.js).
2. Add the environment variables from the table above under **Project Settings → Environment
   Variables**.
3. Deploy. Every push to `main` produces a production deployment, and every pull request gets a
   preview.

## Contributing

Contributions are welcome.

1. Fork the repository and create a branch (`git checkout -b feat/my-change`).
2. Make your change and run `npm run lint`, `npm run typecheck`, and `npm run build`.
3. Commit using the conventions above and push your branch.
4. Open a pull request describing what changed and why.

## License

Released under the [MIT License](LICENSE). The CommitClubHQ name and logo are not covered by this
license and remain the property of CommitClubHQ.
