import { Droplets, Pill, Zap, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

const FourDropsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        {/* Big headline */}
        <div className="text-center mb-12">
          <p className="font-body text-[14px] md:text-[16px] uppercase tracking-[0.2em] text-cta font-bold mb-4">
            The Science They Don't Want You to Know
          </p>
          <h2 className="font-heading text-[36px] md:text-[54px] leading-[1.1] mb-6">
            Why 4 Drops Work Faster <br className="hidden md:block" />
            Than Any Pill
          </h2>
        </div>

        {/* The Problem — dramatic stat */}
        <div className="relative rounded-2xl bg-destructive/10 border border-destructive/20 p-8 md:p-12 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 flex items-center justify-center w-28 h-28 rounded-full bg-destructive/15 border-2 border-destructive/30">
              <span className="font-heading text-[48px] md:text-[56px] text-destructive font-bold leading-none">80%</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-[24px] md:text-[32px] leading-tight mb-3">
                Your Stomach Acid Is Destroying Your Supplements
              </h3>
              <p className="font-body text-[18px] md:text-[20px] text-primary-foreground/70 leading-relaxed">
                When you swallow a pill, up to <span className="font-extrabold text-primary-foreground">80% of the active ingredients</span> are destroyed before they ever reach your bloodstream. That's why most ED supplements take 30–60 minutes to kick in… <em>if they work at all.</em>
              </p>
            </div>
          </div>
        </div>

        {/* The Absorption Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pill path */}
          <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="w-7 h-7 text-destructive" strokeWidth={2} />
              <h4 className="font-heading text-[20px] md:text-[24px]">The Pill Path</h4>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { step: "1", text: "Swallow pill", sub: "Clock starts ticking…" },
                { step: "2", text: "Stomach acid attacks", sub: "80% of ingredients destroyed" },
                { step: "3", text: "Slow liver processing", sub: "30–60 min before anything happens" },
                { step: "4", text: "Diluted delivery", sub: "Only 20% reaches where it matters" },
              ].map(({ step, text, sub }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="font-body text-[14px] font-bold text-destructive">{step}</span>
                  </div>
                  <div>
                    <p className="font-body text-[18px] md:text-[20px] font-bold leading-snug">{text}</p>
                    <p className="font-body text-[16px] md:text-[18px] text-primary-foreground/60 leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HeartAide path */}
          <div className="rounded-2xl bg-green-500/5 border-2 border-green-400/20 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cta text-cta-foreground font-body text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Better Way
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="w-7 h-7 text-green-400" strokeWidth={2} />
              <h4 className="font-heading text-[20px] md:text-[24px]">The HeartAide Path</h4>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { step: "1", text: "4 drops under tongue", sub: "Takes 5 seconds" },
                { step: "2", text: "Bypasses stomach entirely", sub: "Zero ingredient destruction" },
                { step: "3", text: "Direct bloodstream absorption", sub: "Works in minutes, not hours" },
                { step: "4", text: "Full-strength delivery", sub: "100% of the formula, where it counts" },
              ].map(({ step, text, sub }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="font-body text-[14px] font-bold text-green-400">{step}</span>
                  </div>
                  <div>
                    <p className="font-body text-[18px] md:text-[20px] font-bold leading-snug">{text}</p>
                    <p className="font-body text-[16px] md:text-[18px] text-primary-foreground/60 leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result callout */}
        <div className="text-center mb-10">
          <p className="font-heading text-[28px] md:text-[40px] leading-tight mb-4 italic">
            "Faster onset. Full-strength delivery. <br className="hidden md:block" />
            No wasted ingredients."
          </p>
        </div>

        {/* Bottom stat badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Droplets, stat: "4 Drops", label: "Once a day" },
            { icon: Zap, stat: "Minutes", label: "Not hours" },
            { icon: ShieldAlert, stat: "Zero", label: "Stomach upset" },
            { icon: CheckCircle2, stat: "100%", label: "Full delivery" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 text-center">
              <Icon className="w-7 h-7 text-cta mx-auto mb-2" strokeWidth={2} />
              <p className="font-heading text-[26px] md:text-[32px] leading-none mb-1">{stat}</p>
              <p className="font-body text-[14px] md:text-[16px] text-primary-foreground/60">{label}</p>
            </div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div className="text-center">
          <p className="font-body text-[18px] md:text-[22px] text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-6">
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
