import { Droplets, Pill, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

const FourDropsSection = () => {
  return (
    <section
      className="px-5 pt-20 pb-14 md:px-8 md:pt-28 md:pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background)) 0%, rgba(255,245,240,0.6) 15%, rgba(255,245,240,0.4) 85%, hsl(var(--background)) 100%), url('/images/four-drops-bg.png')`,
      }}
    >
      <div className="container-narrow relative z-10">
        {/* Kicker + Headline */}
        <div className="text-center mb-14">
          <p className="font-body text-[13px] md:text-[15px] uppercase tracking-[0.25em] text-cta font-bold mb-3">
            The Science They Don't Want You to Know
          </p>
          <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] mb-5">
            Why 4 Drops Work Faster <br className="hidden md:block" />
            Than Any Pill
          </h2>
          <p className="font-body text-[18px] md:text-[20px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your stomach acid destroys up to 80% of pill ingredients before they reach your bloodstream. HeartAide bypasses that entirely.
          </p>
        </div>

        {/* 80% Stat Callout */}
        <div className="relative rounded-2xl bg-destructive/8 border border-destructive/15 p-7 md:p-10 mb-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-destructive/10 border-2 border-destructive/25">
              <span className="font-heading text-[44px] md:text-[56px] text-destructive font-bold leading-none">80%</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-[22px] md:text-[30px] text-foreground leading-tight mb-2">
                Your Stomach Acid Is Destroying Your Supplements
              </h3>
              <p className="font-body text-[17px] md:text-[19px] text-muted-foreground leading-relaxed">
                That's why most ED supplements take 30–60 minutes to kick in… <em>if they work at all.</em>
              </p>
            </div>
          </div>
        </div>

        {/* Offset Comparison Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {/* Pill path — pushed down on desktop */}
          <div className="rounded-2xl bg-card/90 backdrop-blur-sm border border-border shadow-lg p-6 md:p-8 md:mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Pill className="w-5 h-5 text-destructive" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-heading text-[20px] md:text-[24px] text-foreground">The Pill Path</h4>
                <p className="font-body text-[12px] text-destructive uppercase tracking-wide font-semibold">Slow & Wasteful</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { step: "1", text: "Swallow pill", sub: "Clock starts ticking…" },
                { step: "2", text: "Stomach acid attacks", sub: "80% of ingredients destroyed" },
                { step: "3", text: "Slow liver processing", sub: "30–60 min before anything happens" },
                { step: "4", text: "Diluted delivery", sub: "Only 20% reaches where it matters" },
              ].map(({ step, text, sub }) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center">
                    <span className="font-body text-[13px] font-bold text-destructive">{step}</span>
                  </div>
                  <div>
                    <p className="font-body text-[17px] md:text-[19px] font-bold text-foreground leading-snug">{text}</p>
                    <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HeartAide path — raised on desktop */}
          <div className="rounded-2xl bg-card/90 backdrop-blur-sm border-2 border-green-500/20 shadow-xl p-6 md:p-8 md:-mt-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cta text-cta-foreground font-body text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Better Way
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-green-600" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-heading text-[20px] md:text-[24px] text-foreground">The HeartAide Path</h4>
                <p className="font-body text-[12px] text-green-600 uppercase tracking-wide font-semibold">Fast & Complete</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { step: "1", text: "4 drops under tongue", sub: "Takes 5 seconds" },
                { step: "2", text: "Bypasses stomach entirely", sub: "Zero ingredient destruction" },
                { step: "3", text: "Direct bloodstream absorption", sub: "Works in minutes, not hours" },
                { step: "4", text: "Full-strength delivery", sub: "100% of the formula, where it counts" },
              ].map(({ step, text, sub }) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
                    <span className="font-body text-[13px] font-bold text-green-600">{step}</span>
                  </div>
                  <div>
                    <p className="font-body text-[17px] md:text-[19px] font-bold text-foreground leading-snug">{text}</p>
                    <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result quote */}
        <div className="text-center mb-10">
          <p className="font-heading text-[26px] md:text-[38px] text-foreground leading-tight mb-2 italic">
            "Faster onset. Full-strength delivery. <br className="hidden md:block" />
            No wasted ingredients."
          </p>
        </div>

        {/* Stat badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Droplets, stat: "4 Drops", label: "Once a day" },
            { icon: Zap, stat: "Minutes", label: "Not hours" },
            { icon: ShieldAlert, stat: "Zero", label: "Stomach upset" },
            { icon: CheckCircle2, stat: "100%", label: "Full delivery" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="rounded-xl bg-card/80 backdrop-blur-sm border border-border p-5 text-center shadow-sm">
              <Icon className="w-7 h-7 text-cta mx-auto mb-2" strokeWidth={2} />
              <p className="font-heading text-[24px] md:text-[30px] text-foreground leading-none mb-1">{stat}</p>
              <p className="font-body text-[13px] md:text-[15px] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-[17px] md:text-[20px] text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            No horse pills. No timing it 60 minutes before like Vxxxxx. No stomach upset. Just precise, efficient delivery of the exact formula doctors are recommending.
          </p>
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Try HeartAide Risk-Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourDropsSection;
