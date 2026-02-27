import { Droplets, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

const FourDropsSection = () => {
  return (
    <section
      className="px-5 pt-20 pb-14 md:px-8 md:pt-28 md:pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background)) 0%, rgba(255,245,240,0.55) 15%, rgba(255,245,240,0.4) 85%, hsl(var(--background)) 100%), url('/images/four-drops-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Headline — full width */}
        <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-12 md:mb-16">
          Why 4 Drops Work Faster Than Any Pill
        </h2>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start mb-14">
          {/* Left — sticky visual */}
          <div className="hidden md:flex flex-col items-center md:sticky md:top-28">
            <img
              src="/images/bottle-1.png"
              alt="HeartAide sublingual dropper bottle"
              className="w-64 lg:w-72 object-contain drop-shadow-xl"
              loading="lazy"
            />
            {/* Mini stat pills below the bottle */}
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-[280px]">
              {[
                { icon: Droplets, stat: "4 Drops", label: "Once a day" },
                { icon: Zap, stat: "Minutes", label: "Not hours" },
                { icon: ShieldAlert, stat: "Zero", label: "Stomach upset" },
                { icon: CheckCircle2, stat: "100%", label: "Full delivery" },
              ].map(({ icon: Icon, stat, label }) => (
                <div key={label} className="rounded-xl bg-card/80 backdrop-blur-sm border border-border p-3 text-center shadow-sm">
                  <Icon className="w-5 h-5 text-cta mx-auto mb-1" strokeWidth={2} />
                  <p className="font-heading text-[18px] text-foreground leading-none mb-0.5">{stat}</p>
                  <p className="font-body text-[11px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — flowing copy */}
          <div className="space-y-7">
            <p className="font-body text-[20px] md:text-[22px] text-foreground leading-relaxed">
              Here's something the supplement industry doesn't want you to know: when you swallow a pill, your stomach acid destroys up to{" "}
              <span className="font-extrabold">80% of the active ingredients</span> before they reach your bloodstream.
            </p>

            <p className="font-body text-[20px] md:text-[22px] text-muted-foreground leading-relaxed">
              That's why most ED supplements take 30–60 minutes to kick in… <em>if they work at all.</em>
            </p>

            {/* Inline stat callout */}
            <div className="rounded-2xl bg-destructive/8 border border-destructive/15 p-6 flex items-center gap-5">
              <span className="font-heading text-[52px] md:text-[64px] text-destructive font-bold leading-none flex-shrink-0">80%</span>
              <p className="font-body text-[18px] md:text-[20px] text-foreground leading-snug">
                of pill ingredients <span className="font-bold">never reach your bloodstream</span>
              </p>
            </div>

            <p className="font-body text-[20px] md:text-[22px] text-foreground leading-relaxed">
              HeartAide uses a <span className="font-extrabold">sublingual delivery system.</span> You place 4 drops under your tongue, where they absorb directly into your bloodstream — bypassing your digestive system entirely.
            </p>

            <p className="font-body text-[20px] md:text-[22px] text-foreground leading-relaxed font-bold">
              The result: faster onset, full-strength delivery, and no wasted ingredients sitting in your stomach.
            </p>

            {/* Pull quote */}
            <div className="py-6 border-l-4 border-cta pl-6">
              <p className="font-heading text-[30px] md:text-[40px] text-foreground leading-tight italic">
                4 drops. Once a day. That's it.
              </p>
            </div>

            <p className="font-body text-[20px] md:text-[22px] text-muted-foreground leading-relaxed">
              No horse pills. No timing it 60 minutes before you need it like Vxxxxx. No stomach upset. Just precise, efficient delivery of the exact formula doctors are recommending.
            </p>
          </div>
        </div>

        {/* Mobile-only stat badges (hidden on desktop since they're in the sticky column) */}
        <div className="grid grid-cols-2 gap-3 mb-10 md:hidden">
          {[
            { icon: Droplets, stat: "4 Drops", label: "Once a day" },
            { icon: Zap, stat: "Minutes", label: "Not hours" },
            { icon: ShieldAlert, stat: "Zero", label: "Stomach upset" },
            { icon: CheckCircle2, stat: "100%", label: "Full delivery" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="rounded-xl bg-card/80 backdrop-blur-sm border border-border p-4 text-center shadow-sm">
              <Icon className="w-6 h-6 text-cta mx-auto mb-1.5" strokeWidth={2} />
              <p className="font-heading text-[22px] text-foreground leading-none mb-0.5">{stat}</p>
              <p className="font-body text-[12px] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Try HeartAide Risk-Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourDropsSection;
