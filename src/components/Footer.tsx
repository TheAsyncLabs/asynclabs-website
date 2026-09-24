"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  /** e.g. "/ai" — quick links are generated relative to this. Omit on the hub page and pass `links` instead. */
  basePath?: string;
  links?: FooterLink[];
}

const DEFAULT_SUB_LINKS = ["Process", "Portfolio", "About", "Contact"];

export default function Footer({ basePath, links }: FooterProps) {
  const quickLinks: FooterLink[] =
    links ??
    (basePath
      ? [
          { label: "Home", href: basePath },
          ...DEFAULT_SUB_LINKS.map((label) => ({ label, href: `${basePath}/${label.toLowerCase()}` })),
        ]
      : [{ label: "Home", href: "/" }]);

  return (
    <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
      <div className="flex flex-col gap-1 text-sm text-muted">
        <span className="text-foreground">Async Labs</span>
        <span>hello@theasynclabs.com</span>
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm uppercase tracking-widest text-muted">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex gap-8 text-sm uppercase tracking-widest text-muted">
        <a
          href="https://www.linkedin.com/company/the-async-labs/"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          className="transition-colors hover:text-foreground"
        >
          LinkedIn
        </a>
        <span className="transition-colors hover:text-foreground">X</span>
        <span className="transition-colors hover:text-foreground">GitHub</span>
      </div>

      <span className="text-sm text-muted">© 2026 Async Labs. All rights reserved.</span>
    </div>
  );
}
