import { X, Check } from "lucide-react";

const pillProblems = [
  "Only works temporarily — wears off in hours",
  "Dangerous side effects (headaches, vision issues, heart risk)",
  "Doesn't fix the root cause of poor blood flow",
  "Requires planning — kills spontaneity",
];

const heartAideBenefits = [
  "Clears arterial blockages that restrict blood flow",
  "Restores healthy circulation throughout your body",
  "Rebuilds natural stamina without chemicals",
  "Works 24/7 — not just when you take a pill",
];

const WhySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-[28px] md:text-[42px] text-foreground leading-tight mb-4">
            Why HeartAide Works Better
          </h2>
          <p className="font-body text-[18px] md:text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unlike dangerous pills, HeartAide targets the root cause of ED:{" "}
            <span className="font-extrabold text-foreground">Poor Blood Flow.</span>
          </p>
          <p className="font-body text-[16px] text-muted-foreground max-w-xl mx-auto mt-3 leading-relaxed">
            Pills force temporary results by artificially dilating blood vessels.
            But they don't address <em>WHY</em> blood flow is restricted in the first place.
          </p>
        </div>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pills Side */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 md:p-8">
            <h3 className="font-heading text-[20px] md:text-[24px] text-foreground mb-1">
              The Pill Approach
            </h3>
            <p className="font-body text-[14px] text-muted-foreground mb-5 uppercase tracking-wide font-semibold">
              Temporary & Risky
            </p>
            <ul className="flex flex-col gap-4">
              {pillProblems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive/15 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-destructive" strokeWidth={3} />
                  </div>
                  <span className="font-body text-[16px] text-foreground/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* HeartAide Side */}
          <div className="rounded-2xl border-2 border-cta/40 bg-cta/5 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cta text-cta-foreground font-body text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              Better Way
            </div>
            <h3 className="font-heading text-[20px] md:text-[24px] text-foreground mb-1">
              The HeartAide Approach
            </h3>
            <p className="font-body text-[14px] text-muted-foreground mb-5 uppercase tracking-wide font-semibold">
              Natural & Lasting
            </p>
            <ul className="flex flex-col gap-4">
              {heartAideBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                  </div>
                  <span className="font-body text-[16px] text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA line */}
        <p className="font-heading text-[22px] md:text-[28px] text-foreground text-center mt-10 leading-tight">
          HeartAide is different.
        </p>
      </div>
    </section>
  );
};

export default WhySection;
