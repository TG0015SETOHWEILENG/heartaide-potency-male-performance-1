import { Package, Truck, Lock } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const StockUpSection = () => {
  return (
    <section className="section-padding border-t border-border bg-cover bg-right md:bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/stockup-bg.png)' }}>
      <div className="container-narrow">
        <ScrollReveal animation="fade-down">
          <h2 className="font-heading text-[32px] md:text-[48px] text-foreground leading-tight text-center mb-8">
            STOCK UP & SAVE
            <span className="block">With Our Multi-Bottle Discounts</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-center">
            Our warehouse is currently stocked with HeartAide, so take advantage
            now before this limited-time opportunity disappears!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scale-in">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src="/images/bottle-ingredients.png"
              alt="HeartAide bottle with natural ingredients"
              className="h-[280px] md:h-[380px] object-contain mb-6"
            />
            <p className="font-heading text-[48px] md:text-[72px] text-foreground font-extrabold leading-none mb-2 whitespace-nowrap">
              Up to 79% OFF
            </p>
            <p className="font-heading text-[20px] md:text-[24px] text-foreground font-bold mb-8">
              While inventory lasts
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-center">
            Our premium HeartAide formula combines clinically-studied blood flow
            enhancers with performance nutrients designed for men over 40.
          </p>

          <h4 className="font-heading text-[20px] md:text-[24px] text-foreground font-bold max-w-3xl mx-auto mb-6 text-center">
            Delivers everything you need:
          </h4>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto mb-8">
          {[
            { num: "01", title: "Rock-hard erections", desc: "Maximum firmness and confidence every time", image: "/images/benefit-erections.jpg" },
            { num: "02", title: "Extended stamina", desc: "Go as long as you want, not just a few minutes", image: "/images/benefit-stamina.jpg" },
            { num: "03", title: "Superior blood flow", desc: "Optimized circulation where it matters most", image: "/images/benefit-bloodflow.jpg" },
            { num: "04", title: "Confidence restoration", desc: "Walk into the bedroom like the man she married", image: "/images/benefit-confidence.jpg" },
          ].map(({ num, title, desc, image }, i) => (
            <ScrollReveal key={num} animation="fade-up" delay={i * 100}>
              <div className="text-left">
                <p className="font-heading text-[20px] md:text-[22px] text-foreground/50 mb-2">{num}</p>
                <img src={image} alt={title} className="w-full aspect-[6/4] object-cover rounded-xl mb-3" loading="lazy" />
                <h5 className="font-heading text-[18px] md:text-[20px] text-foreground leading-tight mb-1">{title}</h5>
                <p className="font-body text-[15px] md:text-[16px] text-foreground leading-snug">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up">
          <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-center">
            We typically face shortages due to exceptional quality and high demand
            from men getting life-changing results.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-down">
          <h3 className="font-heading text-[28px] md:text-[40px] text-foreground leading-tight text-center mb-6">
            Right Now You Can:
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {[
            { icon: Package, text: "Get 6 bottles for 79% OFF" },
            { icon: Truck, text: "FREE Shipping on entire order" },
            { icon: Lock, text: "Lock in this price forever" },
          ].map(({ icon: Icon, text }, i) => (
            <ScrollReveal key={text} animation="fade-up" delay={i * 100}>
              <div className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl px-6 py-5">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-600" strokeWidth={2} />
                </div>
                <p className="font-body text-[18px] md:text-[20px] text-foreground font-semibold leading-snug">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up">
          <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-6 leading-relaxed text-center">
            Once you experience steel-hard erections and sexual confidence, you'll never want to run out.
          </p>
          <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto leading-relaxed text-center">
            Demand is skyrocketing and we may sell out. When inventory runs low, we return to standard pricing.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StockUpSection;
