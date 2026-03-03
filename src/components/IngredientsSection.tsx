const ingredients = [
  {
    name: "Red Yeast Rice",
    benefits: [
      "Clears arterial blockages",
      "Optimizes circulation",
      "Essential for hard erections",
    ],
  },
  {
    name: "CoQ10",
    benefits: [
      "Energizes blood vessels",
      "Creates flexible arteries",
      "Maximum blood flow",
    ],
  },
  {
    name: "Inositol",
    benefits: [
      "Healthy blood pressure",
      "Proper vascular function",
      "Sustained circulation",
    ],
  },
  {
    name: "Mango Extract",
    benefits: [
      "Protects blood vessels",
      "Cardiovascular support",
      "Long-term sexual health",
    ],
  },
  {
    name: "Pomegranate Extract",
    benefits: [
      "Powerful antioxidants",
      "Clean, healthy arteries",
      "Blocks circulation damage",
    ],
  },
];

const IngredientsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-12 md:mb-16">
          5 Proven Ingredients That Restore Sexual Power
        </h2>

        {/* Top row: 3 ingredients */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {ingredients.slice(0, 3).map(({ name, benefits }) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm"
            >
              <h3 className="font-heading text-[22px] md:text-[26px] text-foreground mb-4 leading-tight">
                {name}
              </h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="font-body text-[18px] md:text-[20px] text-muted-foreground leading-snug"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 ingredients, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-[680px] mx-auto mb-12 md:mb-14">
          {ingredients.slice(3).map(({ name, benefits }) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center shadow-sm"
            >
              <h3 className="font-heading text-[22px] md:text-[26px] text-foreground mb-4 leading-tight">
                {name}
              </h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="font-body text-[18px] md:text-[20px] text-muted-foreground leading-snug"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
            Fix My Blood Flow
          </button>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
