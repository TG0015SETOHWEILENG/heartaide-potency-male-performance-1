const steps = [
  {
    number: "01",
    title: "Optimize Blood Flow",
    body: "Natural ingredients clear arterial blockages that prevent strong erections",
    image: "/images/step-1-blood-flow.webp",
  },
  {
    number: "02",
    title: "Boost Performance",
    body: "Enhanced circulation delivers maximum firmness and extended stamina",
    image: "/images/step-2-performance.webp",
  },
  {
    number: "03",
    title: "Maintain Results",
    body: "Continued use keeps your sexual performance at peak levels",
    image: "/images/step-3-results.webp",
  },
];

const ThreeStepsSection = () => {
  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/three-steps-bg.png')` }}
    >
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-12 md:mb-16">
          3 Simple Steps to Sexual Excellence
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map(({ number, title, body, image }) => (
            <div key={number}>
              <p className="font-heading text-[20px] md:text-[22px] text-foreground/60 mb-3">
                {number}
              </p>
              <div className="rounded-2xl overflow-hidden mb-5">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[220px] md:h-[240px] object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-[24px] md:text-[28px] text-foreground leading-tight mb-2">
                {title}
              </h3>
              <p className="font-body text-[18px] md:text-[20px] text-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Subheadline */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 md:mt-16">
          {["No complicated routines", "No dangerous chemicals", "Just natural, powerful results"].map((text) => (
            <div key={text} className="flex items-center gap-2 border border-foreground/20 rounded-full px-5 py-3">
              <span className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="font-body text-[18px] md:text-[20px] text-foreground font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
