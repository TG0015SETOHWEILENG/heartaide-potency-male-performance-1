const StockUpSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-narrow">
        <h2 className="font-heading text-[32px] md:text-[48px] text-foreground leading-tight text-center mb-8">
          STOCK UP & SAVE
          <span className="block">With Our Multi-Bottle Discounts</span>
        </h2>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Our warehouse is currently stocked with HeartAide, so take advantage
          now before this limited-time opportunity disappears!
        </p>

        <p className="font-heading text-[48px] md:text-[72px] text-foreground font-extrabold leading-none text-center mb-2">
          Up to 79% OFF
        </p>
        <p className="font-heading text-[20px] md:text-[24px] text-foreground font-bold text-center mb-8">
          While inventory lasts
        </p>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Our premium HeartAide formula combines clinically-studied blood flow
          enhancers with performance nutrients designed for men over 40.
        </p>

        <h4 className="font-heading text-[20px] md:text-[24px] text-foreground font-bold max-w-3xl mx-auto mb-4">
          Delivers everything you need:
        </h4>

        <ul className="font-body text-[18px] md:text-[20px] text-foreground max-w-3xl mx-auto mb-8 leading-relaxed list-disc pl-8 space-y-1">
          <li>Rock-hard erections</li>
          <li>Extended stamina</li>
          <li>Superior blood flow</li>
          <li>Confidence restoration</li>
        </ul>

        <p className="font-body text-[18px] md:text-[22px] text-foreground max-w-3xl mx-auto leading-relaxed">
          We typically face shortages due to exceptional quality and high demand
          from men getting life-changing results.
        </p>
      </div>
    </section>
  );
};

export default StockUpSection;
