import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brendan Deevy Signs logo — the real faceted "dv" mark presented in a clean
 * white chip so it reads crisply on both light and dark backgrounds.
 */
export function LogoMark({
  className,
  withWordmark = false,
  invert = false,
}: {
  className?: string;
  withWordmark?: boolean;
  invert?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex aspect-square h-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <Image
          src="/logo.jpg"
          alt="Deevy Signs"
          width={72}
          height={72}
          priority
          className="h-full w-full scale-[1.32] object-contain"
        />
      </span>

      {withWordmark && (
        <span
          className={cn(
            "text-[1.05em] font-black leading-none tracking-tightest",
            invert ? "text-white" : "text-charcoal-900"
          )}
        >
          Deevy<span className="text-crimson"> Signs</span>
        </span>
      )}
    </span>
  );
}
