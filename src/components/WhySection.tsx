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
    <section className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to right, rgba(30,10,10,0.75) 0%, rgba(50,15,20,0.65) 50%, rgba(60,20,25,0.7) 100%), url('/images/why-section-bg.webp')` }}>
      <div className="container-narrow">
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-[32px] md:text-[48px] text-white leading-tight mb-4 drop-shadow-lg">
            Why HeartAide Works Better
          </h2>
          <p className="font-body text-[20px] md:text-[22px] text-white/80 max-w-2xl mx-auto leading-relaxed">
            Unlike dangerous pills, HeartAide targets the root cause of ED:{" "}
            <span className="font-extrabold text-white">Poor Blood Flow.</span>
          </p>
          <p className="font-body text-[18px] md:text-[20px] text-white/70 max-w-xl mx-auto mt-3 leading-relaxed">
            Pills force temporary results by artificially dilating blood vessels.
            But they don't address <em>WHY</em> blood flow is restricted in the first place.
          </p>
          <p className="font-heading text-[24px] md:text-[32px] text-white mt-6 leading-tight italic drop-shadow-lg">
            HeartAide is different.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="font-heading text-[24px] md:text-[34px] text-white text-center mb-8 leading-tight drop-shadow-lg">
          How HeartAide Restores Natural Function:
        </h3>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pills Side */}
          <div className="rounded-2xl border border-red-500/30 bg-black/50 backdrop-blur-md p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <img
                src="/images/pill-bottle.png"
                alt="Pill bottle"
                className="w-20 h-20 object-contain flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-heading text-[22px] md:text-[28px] text-white drop-shadow-md">
                  The Pill Approach
                </h3>
                <p className="font-body text-[14px] text-red-300 uppercase tracking-wide font-semibold">
                  Temporary & Risky
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-5 mt-6">
              {pillProblems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-400" strokeWidth={2} />
                  </div>
                  <span className="font-body text-[18px] md:text-[20px] text-white drop-shadow-sm leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* HeartAide Side */}
          <div className="rounded-2xl border-2 border-green-400/30 bg-black/50 backdrop-blur-md p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cta text-cta-foreground font-body text-[12px] font-bold uppercase tracking-wider px-5 py-1.5 rounded-bl-xl">
              Better Way
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img
                src="/images/bottle-1.png"
                alt="HeartAide dropper bottle"
                className="w-20 h-20 object-contain flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-heading text-[22px] md:text-[28px] text-white drop-shadow-md">
                  The HeartAide Approach
                </h3>
                <p className="font-body text-[14px] text-green-300 uppercase tracking-wide font-semibold">
                  Natural & Lasting
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-5 mt-6">
              {heartAideBenefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-400" strokeWidth={2} />
                  </div>
                  <span className="font-body text-[18px] md:text-[20px] text-white drop-shadow-sm leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
