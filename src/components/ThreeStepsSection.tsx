const steps = [
  {
    step: "STEP 1:",
    title: "Optimize Blood Flow",
    body: "Natural ingredients clear arterial blockages that prevent strong erections",
  },
  {
    step: "STEP 2:",
    title: "Boost Performance",
    body: "Enhanced circulation delivers maximum firmness and extended stamina",
  },
  {
    step: "STEP 3:",
    title: "Maintain Results",
    body: "Continued use keeps your sexual performance at peak levels",
  },
];

const ThreeStepsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-12 md:mb-16">
          3 Simple Steps to Sexual Excellence
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-foreground/20 rounded-xl overflow-hidden">
          {steps.map(({ step, title, body }, i) => (
            <div
              key={step}
              className={`text-center p-6 md:p-8 ${i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-foreground/20" : ""}`}
            >
              <p className="font-heading text-[20px] md:text-[22px] text-foreground font-bold leading-tight">
                {step}
              </p>
              <p className="font-heading text-[22px] md:text-[26px] text-foreground font-bold leading-tight mb-4">
                {title}
              </p>
              <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Subheadline */}
        <p className="font-heading text-[22px] md:text-[28px] text-foreground font-bold text-center mt-10 md:mt-14 leading-snug max-w-3xl mx-auto">
          No complicated routines. No dangerous chemicals. Just natural, powerful results.
        </p>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
