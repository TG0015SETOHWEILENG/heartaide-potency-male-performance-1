const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        {/* Seal */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/mbg-seal.svg"
            alt="365-Day Money-Back Guarantee Seal"
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>

        {/* Headline */}
        <h2 className="font-heading text-[32px] md:text-[48px] text-foreground leading-tight text-center mb-4">
          Your Sexual Power GUARANTEED or Money Back
        </h2>

        {/* Subheadline */}
        <p className="font-body text-[18px] md:text-[22px] text-foreground font-bold text-center mb-8">
          Try HeartAide for a FULL YEAR completely risk-free.
        </p>

        {/* Body copy */}
        <p className="font-body text-[18px] md:text-[22px] text-foreground leading-relaxed mb-6">
          If you don't experience rock-hard erections, extended stamina, and renewed confidence
          within 365 days, simply return your bottles, <strong>even if empty</strong>, for a complete refund.
        </p>

        <p className="font-body text-[18px] md:text-[22px] text-foreground leading-relaxed mb-8">
          Every man's body is different. We give you a full year to experience HeartAide's
          complete transformation.
        </p>

        {/* How It Works */}
        <h3 className="font-heading text-[24px] md:text-[28px] text-foreground font-bold mb-5">
          How It Works:
        </h3>

        <ol className="list-decimal list-inside space-y-2 mb-8 pl-2">
          {[
            "Order today with confidence",
            "Use for up to 365 days",
            "Not satisfied? Contact us",
            "Return bottles (we cover shipping)",
            "Get every penny back in 5-7 days",
          ].map((step) => (
            <li key={step} className="font-body text-[18px] md:text-[22px] text-foreground leading-relaxed">
              {step}
            </li>
          ))}
        </ol>

        {/* Bold statement */}
        <p className="font-body text-[18px] md:text-[22px] text-foreground font-bold mb-6">
          No fine print. No hassles. No questions asked.
        </p>

        <p className="font-body text-[18px] md:text-[22px] text-foreground leading-relaxed mb-8">
          The only thing you risk losing is weak erections and sexual disappointment.
        </p>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[18px] md:text-[20px] py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Claim My Risk-Free HeartAide Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
