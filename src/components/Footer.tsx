export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient-gold">MEMORY ENGINE</span>
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
            href="https://t.me/memoryengine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Telegram
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

        <p className="text-xs text-muted-foreground text-center md:text-right max-w-sm">
          © {new Date().getFullYear()} Memory Engine. We engineer market systems that protocols, users, and capital commit to.
        </p>
      </div>
    </footer>
  );
};
