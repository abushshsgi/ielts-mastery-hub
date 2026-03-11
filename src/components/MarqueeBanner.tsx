import { ArrowRight } from "lucide-react";

const MarqueeBanner = () => {
  const text = "Achieve Band 8.0+ with IELTS AI";

  return (
    <div className="w-full py-4 bg-background border-b border-border overflow-hidden cursor-pointer group">
      <a href="#premium" className="flex items-center gap-2 max-w-[1400px] mx-auto px-6">
        <span className="text-sm font-medium text-foreground whitespace-nowrap">
          {text}
        </span>
        <ArrowRight className="w-4 h-4 text-foreground group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default MarqueeBanner;
