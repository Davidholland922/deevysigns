import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <div
          className={cn(
            "mb-5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em]",
            invert ? "text-white/60" : "text-charcoal-900/50"
          )}
        >
          <span className="h-px w-8 bg-crimson" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "display text-[clamp(2.25rem,5.5vw,4.75rem)]",
            invert ? "text-white" : "text-charcoal-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              invert ? "text-white/65" : "text-charcoal-900/65"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
