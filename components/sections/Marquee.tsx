import { MARQUEE_WORDS } from "@/lib/data";

export function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="relative overflow-hidden border-y border-charcoal-900 bg-charcoal-950 py-6">
      <div className="mask-fade-x flex">
        <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
          {row.map((word, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-2xl font-black uppercase tracking-tight text-white/90 md:text-4xl">
                {word}
              </span>
              <span className="text-2xl text-crimson md:text-4xl">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
