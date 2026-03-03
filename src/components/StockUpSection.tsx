const StockUpSection = () => {
  return (
    <section className="section-padding overflow-hidden relative">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, hsl(38 90% 55% / 0.12) 0%, transparent 60%),
                       linear-gradient(180deg, hsl(var(--background)) 0%, hsl(40 40% 95%) 50%, hsl(var(--background)) 100%)`,
        }}
      />

      <div className="container-narrow">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block font-body text-[13px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-cta bg-cta/10 border border-cta/20 rounded-full px-5 py-2">
            Limited Time Offer
          </span>
        </div>

        <h2 className="font-heading text-[32px] md:text-[52px] text-foreground leading-[1.1] text-center mb-3">
          STOCK UP & SAVE
          <span className="block text-[28px] md:text-[42px] mt-1">With Our Multi-Bottle Discounts</span>
        </h2>

        <p className="font-body text-[18px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-center">
          Our warehouse is currently stocked with HeartAide, so take advantage
          now before this limited-time opportunity disappears!
        </p>

        {/* Hero card: Bottle + Discount */}
        <div className="relative max-w-lg mx-auto mb-14">
          <div
            className="absolute inset-0 rounded-3xl -z-10"
            style={{
              background: `radial-gradient(circle at 50% 40%, hsl(38 90% 55% / 0.15), transparent 70%)`,
            }}
          />
          <div className="flex flex-col items-center py-8 px-6">
            <img
              src="/images/bottle-ingredients.png"
              alt="HeartAide bottle with natural ingredients"
              className="h-[260px] md:h-[340px] object-contain drop-shadow-2xl mb-8"
            />
            <p className="font-heading text-[52px] md:text-[80px] text-foreground font-extrabold leading-none tracking-tight">
              Up to <span className="text-cta">79% OFF</span>
            </p>
            <p className="font-body text-[16px] md:text-[18px] text-foreground/60 font-semibold uppercase tracking-[0.15em] mt-2">
              While inventory lasts
            </p>
          </div>
        </div>

        <p className="font-body text-[18px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          Our premium HeartAide formula combines clinically-studied blood flow
          enhancers with performance nutrients designed for men over 40.
        </p>

        {/* Delivers everything */}
        <div className="max-w-4xl mx-auto mb-12">
          <h4 className="font-heading text-[22px] md:text-[28px] text-foreground font-bold text-center mb-8">
            Delivers everything you need:
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { num: "01", title: "Rock-hard erections", desc: "Maximum firmness and confidence every time", image: "/images/benefit-erections.jpg" },
              { num: "02", title: "Extended stamina", desc: "Go as long as you want, not just a few minutes", image: "/images/benefit-stamina.jpg" },
              { num: "03", title: "Superior blood flow", desc: "Optimized circulation where it matters most", image: "/images/benefit-bloodflow.jpg" },
              { num: "04", title: "Confidence restoration", desc: "Walk into the bedroom like the man she married", image: "/images/benefit-confidence.jpg" },
            ].map(({ num, title, desc, image }) => (
              <div key={num} className="group text-left">
                <p className="font-heading text-[13px] text-cta/60 font-semibold tracking-wider mb-2">{num}</p>
                <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <h5 className="font-heading text-[17px] md:text-[19px] text-foreground leading-tight mb-1">
                  {title}
                </h5>
                <p className="font-body text-[14px] md:text-[15px] text-foreground/60 leading-snug">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency close */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-[18px] md:text-[20px] text-foreground/80 leading-relaxed">
            We typically face shortages due to exceptional quality and high demand
            from men getting life-changing results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StockUpSection;
