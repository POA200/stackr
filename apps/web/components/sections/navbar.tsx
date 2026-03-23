"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Token Feed", href: "#features" },
  { label: "Agents", href: "#how-it-works" },
  { label: "Launch A Token", href: "#cta" },
  { label: "Docs", href: "#" },
  { label: "API Keys", href: "#" },
  { label: "LLM", href: "#" },
  { label: "Talk to Stackr", href: "#" },
  { label: "Bankr Swap", href: "#" },
] as const;

export function NavbarSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background text-foreground ">
        <div className="mx-auto flex h-18 w-full items-center gap-6 px-4 md:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Stackr home"
          >
            <Image
              src="/stackr-logo.svg"
              alt="Stackr logo"
              width={30}
              height={32}
              priority
            />
            <span className="text-3xl leading-none font-black tracking-tight">
              tackr.
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center md:flex">
            <ul className="flex w-full items-center gap-2 md:justify-end">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="shrink-0">
                  <Link
                    href={item.href}
                    className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
            className="ml-auto inline-flex size-10 items-center justify-center rounded-md bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-foreground/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`relative ml-auto flex h-full w-full flex-col border-l border-border bg-background p-6 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Stackr home"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/stackr-logo.svg"
                alt="Stackr logo"
                width={30}
                height={32}
              />
              <span className="text-3xl leading-none font-black tracking-tight">
                tackr.
              </span>
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-md bg-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-11 items-center rounded-md border border-foreground px-4 text-sm font-regular tracking-wide uppercase transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
