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
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={`relative rounded-2xl overflow-hidden flex flex-col items-center text-center cursor-pointer hover:scale-[1.02] transition-transform duration-200 ${
        isFeatured ? "ring-2 ring-cta md:ring-4 md:scale-[1.03] z-10 hover:scale-[1.05]" : ""
      }`}
      style={{
        background: `linear-gradient(180deg, hsl(var(--pricing-highlight)) 0%, hsl(var(--pricing-bg)) 40%)`,
      }}
    >
      {/* FREE SHIPPING ribbon — mobile only */}
      <div className="md:hidden absolute top-[38px] -left-[30px] z-20 w-[120px] rotate-[-45deg]">
        <div className="bg-red-600 text-white font-body font-extrabold text-[10px] uppercase tracking-wider text-center py-1 shadow-lg">
          Free Shipping
        </div>
      </div>

      {/* Badge */}
      <div className="w-full bg-cta py-1.5 md:py-2.5 px-4">
        <span className="font-body font-extrabold text-[16px] md:text-[18px] uppercase tracking-wider text-cta-foreground">
          {badge}
        </span>
      </div>

      {/* MOBILE: horizontal compact layout — 3:7 ratio */}
      <div className="flex md:hidden items-center gap-2 px-2 py-3 w-full">
        {/* Bottle image — 30% width */}
        <div className="relative flex-shrink-0 w-[30%] flex items-center justify-center">
          <img
            src={`/images/bottle-${bottleCount}.png`}
            alt={`${bottleCount} bottle${Number(bottleCount) > 1 ? "s" : ""} of HeartAide`}
            className="w-full h-auto object-contain drop-shadow-xl"
            width={308}
            height={308}
            fetchPriority={bottleCount === "1" ? "high" : "auto"}
          />
          <div className="absolute -right-1 -bottom-1 bg-cta rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center rotate-12 shadow-lg border-2 border-white/20">
            <span className="font-body font-extrabold text-[9px] text-cta-foreground uppercase leading-none">Save</span>
            <span className="font-body font-extrabold text-[14px] text-cta-foreground leading-none">{savings}</span>
          </div>
        </div>

        {/* Info — 70% width, center aligned */}
        <div className="flex flex-col items-center text-center flex-1 min-w-0 gap-0.5">
          <p className="font-body font-bold text-[14px] text-primary-foreground uppercase tracking-wide leading-tight">
            {supply}
          </p>
          <p className="font-body font-medium text-[13px] text-primary-foreground/75 leading-snug">
            {tagline}
          </p>
          <p className="font-body font-extrabold text-[42px] text-primary-foreground leading-none mt-1">
            {pricePerBottle}<span className="text-[18px] font-bold">/bottle</span>
          </p>
          <p className="font-body font-medium text-[10px] text-primary-foreground/70 leading-tight whitespace-nowrap">
            365 Money Back Guarantee
          </p>
        </div>
      </div>
      {/* MOBILE: full-width CTA below the row */}
      <div className="md:hidden px-3 pb-3 -mt-1 w-full">
        <button className="w-full bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[15px] py-2.5 px-4 rounded-lg transition-all uppercase tracking-wide shadow-lg">
          Fix My Performance
        </button>
      </div>

      {/* DESKTOP: original vertical layout */}
      <div className="hidden md:flex px-5 py-6 flex-col items-center gap-3 flex-1">
        <p className="font-body font-bold text-[20px] text-primary-foreground uppercase tracking-wide">
          {supply}
        </p>
        <p className="font-body text-[16px] text-primary-foreground/80 leading-snug max-w-[220px]">
          {tagline}
        </p>
        <div className="relative mb-2">
          <img
            src={`/images/bottle-${bottleCount}.png`}
            alt={`${bottleCount} bottle${Number(bottleCount) > 1 ? "s" : ""} of HeartAide`}
            className="w-44 h-auto object-contain drop-shadow-xl"
            width={308}
            height={308}
          />
          <div className="absolute -right-3 -bottom-2 bg-cta rounded-full w-[72px] h-[72px] flex flex-col items-center justify-center rotate-12 shadow-lg border-[3px] border-white/20">
            <span className="font-body font-extrabold text-[12px] text-cta-foreground uppercase leading-none">Save</span>
            <span className="font-body font-extrabold text-[18px] text-cta-foreground leading-none">{savings}</span>
          </div>
        </div>
        <p className="font-body font-extrabold text-[50px] text-primary-foreground leading-none">
          {pricePerBottle}<span className="text-[24px] font-bold">/bottle</span>
        </p>
        <div className="space-y-0.5">
          <p className="font-body font-bold text-[14px] text-primary-foreground/90 uppercase tracking-wide">
            Fast &amp; FREE Shipping
          </p>
          <p className="font-body text-[13px] text-primary-foreground/70">
            365-Day Money-Back Guarantee
          </p>
        </div>
        <button className="mt-3 w-full bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[20px] py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[56px]">
          Fix My Performance
        </button>
      </div>
    </a>
  );
};

export default PricingCard;
