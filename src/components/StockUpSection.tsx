const StockUpSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-narrow">
        <h2 className="font-heading text-[32px] md:text-[48px] text-foreground leading-tight text-center mb-8">
          STOCK UP & SAVE
          <span className="block">With Our Multi-Bottle Discounts</span>
        </h2>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-center">
          Our warehouse is currently stocked with HeartAide, so take advantage
          now before this limited-time opportunity disappears!
        </p>

        {/* Bottle image + discount callout */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/bottle-ingredients.png"
            alt="HeartAide bottle with natural ingredients"
            className="h-[280px] md:h-[380px] object-contain mb-6"
          />
          <p className="font-heading text-[48px] md:text-[72px] text-foreground font-extrabold leading-none mb-2">
            Up to 79% OFF
          </p>
          <p className="font-heading text-[20px] md:text-[24px] text-foreground font-bold mb-8">
            While inventory lasts
          </p>
        </div>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-center">
          Our premium HeartAide formula combines clinically-studied blood flow
          enhancers with performance nutrients designed for men over 40.
        </p>

        <h4 className="font-heading text-[20px] md:text-[24px] text-foreground font-bold max-w-3xl mx-auto mb-6 text-center">
          Delivers everything you need:
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
          {[
            { num: "01", title: "Rock-hard erections", desc: "Maximum firmness and confidence every time", image: "/images/benefit-erections.jpg" },
            { num: "02", title: "Extended stamina", desc: "Go as long as you want, not just a few minutes", image: "/images/benefit-stamina.jpg" },
            { num: "03", title: "Superior blood flow", desc: "Optimized circulation where it matters most", image: "/images/benefit-bloodflow.jpg" },
            { num: "04", title: "Confidence restoration", desc: "Walk into the bedroom like the man she married", image: "/images/benefit-confidence.jpg" },
          ].map(({ num, title, desc, image }) => (
            <div key={num} className="text-left">
              <p className="font-heading text-[14px] text-foreground/40 mb-2">{num}</p>
              <img
                src={image}
                alt={title}
                className="w-full aspect-square object-cover rounded-xl mb-3"
                loading="lazy"
              />
              <h5 className="font-heading text-[18px] md:text-[20px] text-foreground leading-tight mb-1">
                {title}
              </h5>
              <p className="font-body text-[15px] md:text-[16px] text-foreground/70 leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto leading-relaxed text-center">
          We typically face shortages due to exceptional quality and high demand
          from men getting life-changing results.
        </p>
      </div>
    </section>
  );
};

export default StockUpSection;
