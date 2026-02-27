import React from "react";

interface PricingCardProps {
  badge: string;
  bottleCount: string;
  supply: string;
  tagline: string;
  pricePerBottle: string;
  savings: string;
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  badge,
  bottleCount,
  supply,
  tagline,
  pricePerBottle,
  savings,
  isFeatured = false,
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex flex-col items-center text-center ${
        isFeatured ? "ring-4 ring-cta scale-[1.03] z-10" : ""
      }`}
      style={{
        background: `linear-gradient(180deg, hsl(var(--pricing-highlight)) 0%, hsl(var(--pricing-bg)) 40%)`,
      }}
    >
      {/* Badge */}
      <div className="w-full bg-cta py-2.5 px-4">
        <span className="font-body font-extrabold text-[16px] md:text-[18px] uppercase tracking-wider text-cta-foreground">
          {badge}
        </span>
      </div>

      <div className="px-5 py-6 flex flex-col items-center gap-3 flex-1">
        {/* Supply info */}
        <p className="font-body font-bold text-[18px] md:text-[20px] text-primary-foreground uppercase tracking-wide">
          {supply}
        </p>

        {/* Tagline */}
        <p className="font-body text-[15px] md:text-[16px] text-primary-foreground/80 leading-snug max-w-[220px]">
          {tagline}
        </p>

        {/* Savings bubble */}
        <div
          className="bg-cta rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center rotate-12 shadow-lg my-1"
        >
          <span className="font-body font-extrabold text-[13px] text-cta-foreground uppercase leading-none">Save</span>
          <span className="font-body font-extrabold text-[20px] text-cta-foreground leading-none">{savings}</span>
        </div>

        {/* Price */}
        <p className="font-body font-extrabold text-[42px] md:text-[50px] text-primary-foreground leading-none">
          {pricePerBottle}
        </p>

        {/* Shipping & guarantee */}
        <div className="space-y-0.5">
          <p className="font-body font-bold text-[14px] text-primary-foreground/90 uppercase tracking-wide">
            Fast &amp; FREE Shipping
          </p>
          <p className="font-body text-[13px] text-primary-foreground/70">
            365-Day Money-Back Guarantee
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-3 w-full bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[18px] md:text-[20px] py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[56px]">
          Fix My Performance
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
