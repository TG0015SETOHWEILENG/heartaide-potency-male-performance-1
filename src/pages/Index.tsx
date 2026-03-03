import PricingCard from "@/components/PricingCard";
import WhySection from "@/components/WhySection";
import FourDropsSection from "@/components/FourDropsSection";
import IngredientsSection from "@/components/IngredientsSection";
import ThreeStepsSection from "@/components/ThreeStepsSection";
import StockUpSection from "@/components/StockUpSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Shield, Zap, Clock, Heart, Leaf, Star, BadgeCheck, Award, MapPin, ShieldCheck } from "lucide-react";

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
      <section className="px-4 pt-6 pb-8 md:px-8 md:pt-10 md:pb-14 bg-secondary relative bg-cover bg-right bg-no-repeat" style={{ backgroundImage: `linear-gradient(to right, rgba(10, 15, 30, 0.8) 0%, rgba(10, 15, 30, 0.5) 50%, rgba(10, 15, 30, 0.25) 100%), url('/images/hero-bg.webp')` }}>
        <div className="container-narrow text-center mb-5 md:mb-8">
          <h1 className="font-heading text-[32px] md:text-display text-white mb-3 leading-[1.15]">
            The Recommended Blood Flow Formula Men Over 40 Are Choosing Over{" "}
            <span className="text-red-500 font-bold">Vxxxxx</span>
          </h1>
          <p className="font-body text-[18px] md:text-body-lg text-white/70 max-w-2xl mx-auto mb-1">
            The natural 4-drop solution top urologists are calling
          </p>
          <p className="font-body text-[18px] md:text-body-lg text-white font-semibold italic max-w-2xl mx-auto">
            "the most significant advance in male performance in 30 years."
          </p>
        </div>

        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.badge} {...plan} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 mx-auto px-4" style={{ maxWidth: '1300px' }}>
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
      <section className="section-padding bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/stockup-bg.png)' }}>
        <div className="container-narrow">
          <h2 className="font-heading text-[28px] md:text-[42px] text-foreground text-center mb-10 leading-tight">
            What Men Are Reporting <span className="md:whitespace-nowrap">After Just Days on HeartAide:</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/benefits-couple.webp"
              alt="Happy confident couple embracing in warm morning light"
              className="w-full rounded-2xl shadow-xl order-2 md:order-1"
              loading="lazy"
            />
            <div className="flex flex-col order-1 md:order-2">
              {[
                { icon: Zap, title: "Steel-Hard Erections", desc: "Blood flows freely for maximum firmness and confidence" },
                { icon: Clock, title: "Lasting Stamina", desc: "Performance that goes as long as you want, not just a few minutes" },
                { icon: Shield, title: "All-Night Recovery", desc: "Ready for round 2, 3, and beyond like you're 25 again" },
                { icon: Heart, title: "Restored Confidence", desc: "Walk into the bedroom knowing you're the man she married" },
                { icon: Leaf, title: "Natural Safety", desc: "No dangerous side effects or prescription risks" },
              ].map(({ icon: Icon, title, desc }, index, arr) => (
                <div key={title} className="flex items-start gap-4">
                  {/* Icon + connector line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-cta/15 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cta" strokeWidth={2} />
                    </div>
                    {index < arr.length - 1 && (
                      <div className="w-[2px] h-16 bg-cta/30 mt-1" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading text-[20px] md:text-[22px] text-foreground leading-tight mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-[18px] md:text-body text-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          {/* Aggregate Rating */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-cta fill-cta" />
              ))}
            </div>
            <h2 className="font-heading text-[28px] md:text-[42px] text-foreground leading-tight mb-2">
              Join 47,000+ Men Who've Restored Their Sexual Power
            </h2>
            <p className="font-heading text-[22px] md:text-[28px] text-foreground leading-tight mb-1">
              4.9 out of 5 Stars
            </p>
            <p className="font-body text-[16px] text-muted-foreground">
              Based on <span className="font-bold text-foreground">12,847</span> verified reviews
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              { quote: "My wife actually said 'where did THAT come from?' Best feeling ever.", name: "Mike R.", age: 52, avatar: "/images/avatar-mike.webp" },
              { quote: "From 2 minutes to 45+ minutes. My confidence is through the roof.", name: "David K.", age: 48, avatar: "/images/avatar-david.webp" },
              { quote: "Haven't felt this virile since my 20s. My wife is happier than ever.", name: "Robert L.", age: 56, avatar: "/images/avatar-robert.webp" },
              { quote: "At 59, I thought my best days were behind me. This brought back the passion my wife and I thought was gone forever.", name: "James T.", age: 59, avatar: "/images/avatar-james.webp" },
              { quote: "The difference is night and day. My stamina returned and my wife can't keep her hands off me.", name: "Carlos M.", age: 44, avatar: "/images/avatar-carlos.webp" },
              { quote: "I was skeptical but desperate. Now I feel like I'm 25 again. My marriage has never been stronger.", name: "Tony P.", age: 51, avatar: "/images/avatar-tony.webp" },
              { quote: "My wife said it's like being with a completely different man. I wish I'd found this years ago.", name: "Mark D.", age: 53, avatar: "/images/avatar-mark.webp" },
            ].map(({ quote, name, age, avatar }) => (
              <div
                key={name}
                className="break-inside-avoid bg-card rounded-xl p-5 shadow-md border border-border"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cta fill-cta" />
                  ))}
                </div>
                <p className="font-body text-[16px] md:text-[17px] text-foreground leading-relaxed mb-4 italic">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-body font-bold text-[14px] text-foreground leading-tight">
                      {name}, {age}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <BadgeCheck className="w-3.5 h-3.5 text-green-500" />
                      <span className="font-body text-[12px] text-green-500 font-semibold">Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges Row */}
          <div className="mt-12 flex flex-wrap justify-center items-start gap-8 md:gap-14">
            {[
              { icon: ShieldCheck, label: "FDA-Registered Facility" },
              { icon: Award, label: "GMP Certified" },
              { icon: MapPin, label: "Made in USA" },
              { icon: Star, label: "365-Day Guarantee" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-600" strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] md:text-[13px] text-foreground/70 font-semibold text-center leading-tight max-w-[100px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HeartAide Works Better */}
      <WhySection />

      {/* Why 4 Drops Work Faster */}
      <FourDropsSection />

      {/* Ingredients */}
      <IngredientsSection />

      {/* 3 Simple Steps */}
      <ThreeStepsSection />

      {/* Stock Up & Save */}
      <StockUpSection />

      {/* Choose Your Transformation — repeated pricing */}
      <section className="section-padding bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/images/transformation-bg.jpg')` }}>
        <div className="container-narrow text-center mb-8 md:mb-10">
          <p className="font-body text-[18px] md:text-[22px] text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Choose the "6 Bottles" package below for maximum savings and sexual transformation!
          </p>
          <h2 className="font-heading text-[32px] md:text-[48px] text-white leading-tight">
            Choose Your Sexual Transformation:
          </h2>
        </div>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={`transform-${plan.badge}`} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee Ticker */}
      <div className="bg-cta overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 mx-5">
              <img src="/images/guarantee-icon.svg" alt="" className="w-5 h-5" />
              <span className="font-heading text-[16px] md:text-[18px] text-[#001c38] tracking-wide">
                Money-Back Guarantee
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Index;
