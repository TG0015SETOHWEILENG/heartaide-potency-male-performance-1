import PricingCard from "@/components/PricingCard";
import { Shield, Zap, Clock, Heart, Leaf } from "lucide-react";

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
      <section className="px-4 pt-6 pb-8 md:px-8 md:pt-10 md:pb-14 bg-secondary relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to right, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(10, 15, 30, 0.5) 100%), url('/images/hero-bg.webp')` }}>
        <div className="container-narrow text-center mb-5 md:mb-8">
          <h1 className="font-heading text-[32px] md:text-display text-white mb-3 leading-[1.15]">
            The Recommended Blood Flow Formula Men Over 40 Are Choosing Over{" "}
            <span className="line-through opacity-60">Vxxxxx</span>
          </h1>
          <p className="font-body text-[18px] md:text-body-lg text-white/70 max-w-2xl mx-auto mb-1">
            The natural 4-drop solution top urologists are calling
          </p>
          <p className="font-body text-[18px] md:text-body-lg text-white font-semibold italic max-w-2xl mx-auto">
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

        <div className="container-narrow text-center mt-8">
          <p className="font-body text-[18px] md:text-body-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Experience the natural breakthrough that's giving men their sexual
            power back. HeartAide works by optimizing blood flow to restore the
            performance you remember from your 20s.
          </p>
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Fix My Bloodflow
          </button>
          <p className="font-body text-[16px] text-white/50 mt-3 uppercase tracking-wide">
            Try Risk-Free
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-heading text-[28px] md:text-[42px] text-foreground text-center mb-10 leading-tight">
            What Men Are Reporting After Just Days on HeartAide:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/benefits-couple.webp"
              alt="Happy confident couple embracing in warm morning light"
              className="w-full rounded-2xl shadow-xl order-2 md:order-1"
              loading="lazy"
            />
            <div className="flex flex-col gap-6 order-1 md:order-2">
              {[
                { icon: Zap, title: "Steel-Hard Erections", desc: "Blood flows freely for maximum firmness and confidence" },
                { icon: Clock, title: "Lasting Stamina", desc: "Performance that goes as long as you want, not just a few minutes" },
                { icon: Shield, title: "All-Night Recovery", desc: "Ready for round 2, 3, and beyond like you're 25 again" },
                { icon: Heart, title: "Restored Confidence", desc: "Walk into the bedroom knowing you're the man she married" },
                { icon: Leaf, title: "Natural Safety", desc: "No dangerous side effects or prescription risks" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cta/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cta" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-body font-extrabold text-[20px] md:text-[22px] text-foreground leading-tight mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-[18px] md:text-body text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
