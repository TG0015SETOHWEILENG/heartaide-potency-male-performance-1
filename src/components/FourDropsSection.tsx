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
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] mb-6">
            Why 4 Drops Work Faster Than Any Pill
          </h2>
        </div>

        {/* Body copy — follows the provided copy exactly */}
        <div className="max-w-2xl mx-auto mb-14 space-y-6">
          <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed">
            Here's something the supplement industry doesn't want you to know: when you swallow a pill, your stomach acid destroys up to <span className="font-extrabold">80% of the active ingredients</span> before they reach your bloodstream.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-muted-foreground leading-relaxed">
            That's why most ED supplements take 30–60 minutes to kick in… <em>if they work at all.</em>
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed">
            HeartAide uses a <span className="font-extrabold">sublingual delivery system.</span> You place 4 drops under your tongue, where they absorb directly into your bloodstream — bypassing your digestive system entirely.
          </p>

          <p className="font-body text-[20px] md:text-[22px] text-foreground leading-relaxed font-bold">
            The result: faster onset, full-strength delivery, and no wasted ingredients sitting in your stomach.
          </p>

          <p className="font-heading text-[28px] md:text-[38px] text-foreground leading-tight text-center italic mt-8">
            4 drops. Once a day. That's it.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-muted-foreground leading-relaxed">
            No horse pills. No timing it 60 minutes before you need it like Vxxxxx. No stomach upset. Just precise, efficient delivery of the exact formula doctors are recommending.
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
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Try HeartAide Risk-Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourDropsSection;
