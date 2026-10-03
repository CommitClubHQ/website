import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse";

const base =
  "inline-flex items-center justify-center border px-6 py-3 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "border-ink bg-ink text-paper hover:bg-paper hover:text-ink",
  secondary: "border-line text-ink hover:border-ink",
  inverse: "border-paper bg-paper text-ink hover:bg-ink hover:text-paper",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({ href, variant = "primary", className = "", children }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export function DisabledButton({ children }: { children: ReactNode }) {
  return (
    <span
      role="link"
      aria-disabled="true"
      className={`${base} cursor-not-allowed border-paper-line text-paper-muted`}
    >
      {children}
    </span>
  );
}
