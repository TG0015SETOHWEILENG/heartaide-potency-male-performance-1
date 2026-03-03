const ingredients = [
  {
    name: "Red Yeast Rice",
    image: "/images/ingredient-red-yeast-rice.png",
    subtitle: "Clears arterial blockages",
    position: "top-left" as const,
  },
  {
    name: "CoQ10",
    image: "/images/ingredient-coq10.png",
    subtitle: "Energizes blood vessels",
    position: "top-right" as const,
  },
  {
    name: "Inositol",
    image: "/images/ingredient-inositol.png",
    subtitle: "Healthy blood pressure",
    position: "bottom-right" as const,
  },
  {
    name: "Mango Extract",
    image: "/images/ingredient-mango.png",
    subtitle: "Protects blood vessels",
    position: "bottom-left" as const,
  },
  {
    name: "Pomegranate Extract",
    image: "/images/ingredient-pomegranate.png",
    subtitle: "Powerful antioxidants",
    position: "bottom-center" as const,
  },
];

const IngredientsSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-6">
          5 Proven Ingredients That Restore Sexual Power
        </h2>
        <p className="font-body text-[20px] md:text-[22px] text-muted-foreground text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Each ingredient targets a different part of your vascular system for complete blood flow restoration.
        </p>

        {/* Wheel layout — desktop only */}
        <div className="hidden md:block relative mx-auto mb-14" style={{ width: 620, height: 620 }}>
          {/* Circular ingredient images arranged in a ring */}
          {/* Top-left */}
          <div className="absolute" style={{ top: 20, left: 30 }}>
            <img src={ingredients[0].image} alt={ingredients[0].name} className="w-[200px] h-[200px] rounded-full object-cover shadow-lg border-4 border-card" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full text-right w-40">
              <p className="font-heading text-[20px] text-foreground leading-tight">{ingredients[0].name}</p>
              <p className="font-body text-[14px] text-muted-foreground mt-1">{ingredients[0].subtitle}</p>
            </div>
          </div>

          {/* Top-right */}
          <div className="absolute" style={{ top: 20, right: 30 }}>
            <img src={ingredients[1].image} alt={ingredients[1].name} className="w-[200px] h-[200px] rounded-full object-cover shadow-lg border-4 border-card" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full text-left w-40">
              <p className="font-heading text-[20px] text-foreground leading-tight">{ingredients[1].name}</p>
              <p className="font-body text-[14px] text-muted-foreground mt-1">{ingredients[1].subtitle}</p>
            </div>
          </div>

          {/* Bottom-left */}
          <div className="absolute" style={{ bottom: 80, left: 30 }}>
            <img src={ingredients[3].image} alt={ingredients[3].name} className="w-[200px] h-[200px] rounded-full object-cover shadow-lg border-4 border-card" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full text-right w-40">
              <p className="font-heading text-[20px] text-foreground leading-tight">{ingredients[3].name}</p>
              <p className="font-body text-[14px] text-muted-foreground mt-1">{ingredients[3].subtitle}</p>
            </div>
          </div>

          {/* Bottom-right */}
          <div className="absolute" style={{ bottom: 80, right: 30 }}>
            <img src={ingredients[2].image} alt={ingredients[2].name} className="w-[200px] h-[200px] rounded-full object-cover shadow-lg border-4 border-card" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full text-left w-40">
              <p className="font-heading text-[20px] text-foreground leading-tight">{ingredients[2].name}</p>
              <p className="font-body text-[14px] text-muted-foreground mt-1">{ingredients[2].subtitle}</p>
            </div>
          </div>

          {/* Bottom-center */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: -20 }}>
            <img src={ingredients[4].image} alt={ingredients[4].name} className="w-[180px] h-[180px] rounded-full object-cover shadow-lg border-4 border-card" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full text-center w-48 pt-2">
              <p className="font-heading text-[20px] text-foreground leading-tight">{ingredients[4].name}</p>
              <p className="font-body text-[14px] text-muted-foreground mt-1">{ingredients[4].subtitle}</p>
            </div>
          </div>

          {/* Center bottle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src="/images/bottle-1.png"
              alt="HeartAide bottle"
              className="h-[440px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Mobile layout — stacked cards */}
        <div className="md:hidden space-y-4 mb-10">
          {/* Bottle centered on mobile */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/bottle-1.png"
              alt="HeartAide bottle"
              className="h-[200px] object-contain drop-shadow-xl"
            />
          </div>
          {ingredients.map(({ name, image, subtitle }) => (
            <div key={name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" loading="lazy" />
              <div>
                <h3 className="font-heading text-[22px] text-foreground leading-tight">{name}</h3>
                <p className="font-body text-[18px] text-muted-foreground leading-snug mt-1">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-20">
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Fix My Blood Flow
          </button>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
