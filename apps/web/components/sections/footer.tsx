const DOCS_URL = "https://stackr.gitbook.io/stackr-overview/~/changes/2";

export function FooterSection() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 border-t px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
      <p>© {new Date().getFullYear()} Stackr. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a
          className="hover:text-foreground"
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
        <a className="hover:text-foreground" href="#">
          Support
        </a>
      </div>
    </footer>
  );
}
