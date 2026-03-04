import { Droplets, Zap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const steps: { number: string; title: string; body: string; icon: LucideIcon }[] = [
  { number: "01", title: "Optimize Blood Flow", body: "Natural ingredients clear arterial blockages that prevent strong erections", icon: Droplets },
  { number: "02", title: "Boost Performance", body: "Enhanced circulation delivers maximum firmness and extended stamina", icon: Zap },
  { number: "03", title: "Maintain Results", body: "Continued use keeps your sexual performance at peak levels", icon: ShieldCheck },
];

const ThreeStepsSection = () => {
  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 30, 0.55), rgba(10, 15, 30, 0.65)), url('/images/three-steps-bg.png')` }}
    >
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <ScrollReveal animation="fade-down">
          <h2 className="font-heading text-[36px] md:text-[54px] text-white leading-[1.08] text-center mb-12 md:mb-16">
            3 Simple Steps to Sexual Excellence
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map(({ number, title, body, icon: Icon }, i) => (
            <ScrollReveal key={number} animation="fade-up" delay={i * 150}>
              <div className="flex flex-col items-center text-center">
                <p className="font-heading text-[20px] md:text-[22px] text-white/60 mb-4">{number}</p>
                <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex items-center justify-center mb-6">
                  <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl" />
                  <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-amber-400/20 flex items-center justify-center">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-amber-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-heading text-[24px] md:text-[28px] text-white leading-tight mb-2">{title}</h3>
                <p className="font-body text-[18px] md:text-[20px] text-white/80 leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="flex flex-wrap justify-center gap-3 mt-12 md:mt-16">
            {["No complicated routines", "No dangerous chemicals", "Just natural, powerful results"].map((text) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 shadow-lg whitespace-nowrap">
                <span className="w-5 h-5 rounded-full bg-cta flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#001C38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className="font-body text-[18px] md:text-[20px] text-white font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
