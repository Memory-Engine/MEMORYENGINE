export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold tracking-tight text-foreground">
          MEMORY<span className="text-primary"> ENGINE</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Twitter / X
          </a>
          <a
            href="https://cal.com/potik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Book a Call
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Memory Engine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
