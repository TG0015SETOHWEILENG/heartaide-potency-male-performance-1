import { Pill, Timer, AlertTriangle, HeartCrack, Droplets, Activity, Flame, Clock } from "lucide-react";

const pillProblems = [
  { icon: Timer, text: "Wears off in hours" },
  { icon: AlertTriangle, text: "Dangerous side effects" },
  { icon: HeartCrack, text: "Ignores root cause" },
  { icon: Pill, text: "Kills spontaneity" },
];

const heartAideBenefits = [
  { icon: Droplets, text: "Clears arterial blockages" },
  { icon: Activity, text: "Restores healthy circulation" },
  { icon: Flame, text: "Rebuilds natural stamina" },
  { icon: Clock, text: "Works 24/7 — always ready" },
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
        </div>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pills Side */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-heading text-[20px] md:text-[24px] text-foreground">
                The Pill Approach
              </h3>
            </div>
            <p className="font-body text-[13px] text-muted-foreground mb-6 uppercase tracking-wide font-semibold">
              Temporary & Risky
            </p>

            {/* Muted pill image */}
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-destructive/[0.06] flex items-center justify-center">
                <Pill className="w-16 h-16 md:w-20 md:h-20 text-destructive/30" strokeWidth={1} />
              </div>
            </div>

            <ul className="flex flex-col gap-4 mt-auto">
              {pillProblems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-destructive/70" strokeWidth={2} />
                  </div>
                  <span className="font-body text-[15px] md:text-[16px] text-foreground/70 leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* HeartAide Side */}
          <div className="rounded-2xl border-2 border-cta/30 bg-cta/[0.04] p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cta text-cta-foreground font-body text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              Better Way
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-heading text-[20px] md:text-[24px] text-foreground">
                The HeartAide Approach
              </h3>
            </div>
            <p className="font-body text-[13px] text-muted-foreground mb-6 uppercase tracking-wide font-semibold">
              Natural & Lasting
            </p>

            {/* Product dropper image */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/bottle-1.png"
                alt="HeartAide dropper bottle"
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>

            <ul className="flex flex-col gap-4 mt-auto">
              {heartAideBenefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-green-600" strokeWidth={2} />
                  </div>
                  <span className="font-body text-[15px] md:text-[16px] text-foreground leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom statement */}
        <p className="font-heading text-[22px] md:text-[28px] text-foreground text-center mt-10 leading-tight italic">
          HeartAide is different.
        </p>
      </div>
    </section>
  );
};

export default WhySection;
