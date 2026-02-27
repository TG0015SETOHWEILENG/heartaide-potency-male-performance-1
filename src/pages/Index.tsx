import PricingCard from "@/components/PricingCard";

const pricingPlans = [
  {
    badge: "Starter",
    bottleCount: "1",
    supply: "1 Bottle Supply",
    tagline: "A 30-Day Test Drive to Sexual Excellence",
    pricePerBottle: "$59",
    savings: "$40",
  },
  {
    badge: "Best Value",
    bottleCount: "6",
    supply: "6 Bottle Supply",
    tagline: "Maximize & Sustain Peak Sexual Performance",
    pricePerBottle: "$33",
    savings: "$396",
    isFeatured: true,
  },
  {
    badge: "Most Popular",
    bottleCount: "3",
    supply: "3 Bottle Supply",
    tagline: "Get Consistent Rock-Hard Results Your Wife Will Notice",
    pricePerBottle: "$49",
    savings: "$150",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero + Pricing — single above-the-fold section */}
      <section className="px-4 pt-6 pb-8 md:px-8 md:pt-10 md:pb-14 bg-secondary">
        <div className="container-narrow text-center mb-5 md:mb-8">
          <h1 className="font-heading text-[32px] md:text-display text-foreground mb-3 leading-[1.15]">
            The Recommended Blood Flow Formula Men Over 40 Are Choosing Over{" "}
            <span className="line-through opacity-60">Vxxxxx</span>
          </h1>
          <p className="font-body text-[18px] md:text-body-lg text-muted-foreground max-w-2xl mx-auto mb-1">
            The natural 4-drop solution top urologists are calling
          </p>
          <p className="font-body text-[18px] md:text-body-lg text-foreground font-semibold italic max-w-2xl mx-auto">
            "the most significant advance in male performance in 30 years."
          </p>
        </div>

        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.badge} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="font-body text-body md:text-body-lg text-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the natural breakthrough that's giving men their sexual
            power back. HeartAide works by optimizing blood flow to restore the
            performance you remember from your 20s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
              Fix My Bloodflow
            </button>
            <button className="bg-primary hover:opacity-90 text-primary-foreground font-body font-bold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide min-h-[60px] w-full sm:w-auto">
              Try Risk-Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
