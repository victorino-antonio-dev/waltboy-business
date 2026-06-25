import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200",
        variant === "primary" &&
          "bg-gradient-to-r from-electric to-violet text-white shadow-glow hover:scale-[1.02]",
        variant === "secondary" &&
          "soft-border bg-white/[0.08] text-white hover:bg-white/[0.14]",
        variant === "ghost" &&
          "text-slate-200 hover:text-white",
        className
      )}
    >
      {children}
      {variant !== "ghost" ? <ArrowRight className="h-4 w-4" /> : null}
    </a>
  );
}
