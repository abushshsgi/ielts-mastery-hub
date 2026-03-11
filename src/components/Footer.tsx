const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" className="text-foreground">
            <path d="M14 2L2 8l12 6 12-6-12-6z" fill="currentColor" opacity="0.8"/>
            <path d="M2 14l12 6 12-6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M2 20l12 6 12-6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
          <span className="font-satoshi font-bold text-sm tracking-wider text-foreground">
            IELTS AI
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Blog</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 IELTS AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
