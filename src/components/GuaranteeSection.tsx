import { ShieldCheck, Calendar, HeadphonesIcon, Package, Banknote } from "lucide-react";

const guaranteeSteps = [
  { icon: ShieldCheck, label: "Order today with confidence" },
  { icon: Calendar, label: "Use for up to 365 days" },
  { icon: HeadphonesIcon, label: "Not satisfied? Contact us" },
  { icon: Package, label: "Return bottles (we cover shipping)" },
  { icon: Banknote, label: "Get every penny back in 5-7 days" },
];

const GuaranteeSection = () => {
  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 15, 30, 0.82) 0%, rgba(10, 15, 30, 0.6) 50%, rgba(10, 15, 30, 0.15) 100%), url('/images/guarantee-bg.jpg')`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          {/* Seal */}
          <div className="mb-6">
            <img
              src="/images/mbg-seal.svg"
              alt="365-Day Money-Back Guarantee Seal"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Headline */}
          <h2 className="font-heading text-[32px] md:text-[48px] text-white leading-tight mb-4">
            Your Sexual Power GUARANTEED or Money Back
          </h2>

          {/* Subheadline */}
          <p className="font-body text-[18px] md:text-[22px] text-white font-bold mb-6">
            Try HeartAide for a FULL YEAR completely risk-free.
          </p>

          {/* Body copy */}
          <p className="font-body text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-5">
            If you don't experience rock-hard erections, extended stamina, and renewed confidence
            within 365 days, simply return your bottles, <strong>even if empty</strong>, for a complete refund.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-6">
            Every man's body is different. We give you a full year to experience HeartAide's
            complete transformation.
          </p>

          {/* How It Works */}
          <h3 className="font-heading text-[22px] md:text-[26px] text-white font-bold mb-4">
            How It Works:
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {guaranteeSteps.slice(0, 3).map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                </div>
                <span className="font-body text-[14px] md:text-[16px] text-white/90 leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-[66%] mx-auto mb-6">
            {guaranteeSteps.slice(3).map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                </div>
                <span className="font-body text-[14px] md:text-[16px] text-white/90 leading-tight">{label}</span>
              </div>
            ))}
          </div>

          {/* Bold statement */}
          <p className="font-body text-[18px] md:text-[20px] text-white font-bold mb-5">
            No fine print. No hassles. No questions asked.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8">
            The only thing you risk losing is weak erections and sexual disappointment.
          </p>

          {/* CTA */}
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[18px] md:text-[20px] py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Claim My Risk-Free HeartAide Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
