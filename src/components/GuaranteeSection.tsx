const GuaranteeSection = () => {
  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.4) 100%), url('/images/guarantee-bg.jpg')`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          {/* Seal */}
          <div className="mb-6">
            <img
              src="/images/mbg-seal.svg"
              alt="365-Day Money-Back Guarantee Seal"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Headline */}
          <h2 className="font-heading text-[32px] md:text-[48px] text-foreground leading-tight mb-4">
            Your Sexual Power GUARANTEED or Money Back
          </h2>

          {/* Subheadline */}
          <p className="font-body text-[18px] md:text-[22px] text-foreground font-bold mb-6">
            Try HeartAide for a FULL YEAR completely risk-free.
          </p>

          {/* Body copy */}
          <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed mb-5">
            If you don't experience rock-hard erections, extended stamina, and renewed confidence
            within 365 days, simply return your bottles, <strong>even if empty</strong>, for a complete refund.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed mb-6">
            Every man's body is different. We give you a full year to experience HeartAide's
            complete transformation.
          </p>

          {/* How It Works */}
          <h3 className="font-heading text-[22px] md:text-[26px] text-foreground font-bold mb-4">
            How It Works:
          </h3>

          <ol className="list-decimal list-inside space-y-1.5 mb-6 pl-1">
            {[
              "Order today with confidence",
              "Use for up to 365 days",
              "Not satisfied? Contact us",
              "Return bottles (we cover shipping)",
              "Get every penny back in 5-7 days",
            ].map((step) => (
              <li key={step} className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed">
                {step}
              </li>
            ))}
          </ol>

          {/* Bold statement */}
          <p className="font-body text-[18px] md:text-[20px] text-foreground font-bold mb-5">
            No fine print. No hassles. No questions asked.
          </p>

          <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed mb-8">
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
