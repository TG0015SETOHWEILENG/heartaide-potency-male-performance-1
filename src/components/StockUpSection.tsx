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

const StockUpSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-[28px] md:text-[42px] text-foreground leading-tight mb-4">
          STOCK UP & SAVE{" "}
          <span className="block md:inline">With Our Multi-Bottle Discounts</span>
        </h2>

        <p className="font-body text-[18px] md:text-body-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
          Our warehouse is currently stocked with HeartAide, so take advantage
          now before this limited-time opportunity disappears!
        </p>

        <p className="font-heading text-[48px] md:text-[72px] text-cta font-extrabold leading-none mb-1">
          Up to 79% OFF
        </p>
        <p className="font-body text-[14px] md:text-[16px] text-muted-foreground uppercase tracking-widest mb-10">
          While inventory lasts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-10">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.badge} {...plan} />
          ))}
        </div>

        <p className="font-body text-[16px] md:text-[18px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our premium HeartAide formula combines clinically-studied blood flow
          enhancers with performance nutrients designed for men over 40.
        </p>
      </div>
    </section>
  );
};

export default StockUpSection;
