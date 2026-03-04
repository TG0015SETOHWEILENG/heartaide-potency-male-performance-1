import { useMemo } from "react";
import dropperSerum from "@/assets/dropper-serum.png";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const ingredients = [
  { name: "Red Yeast Rice", image: "/images/ingredient-red-yeast-rice.png", subtitle: "Clears arterial blockages", details: ["Optimizes circulation", "Essential for hard erections"] },
  { name: "CoQ10", image: "/images/ingredient-coq10.png", subtitle: "Energizes blood vessels", details: ["Creates flexible arteries", "Maximum blood flow"] },
  { name: "Inositol", image: "/images/ingredient-inositol.png", subtitle: "Healthy blood pressure", details: ["Proper vascular function", "Sustained circulation"] },
  { name: "Mango Extract", image: "/images/ingredient-mango.png", subtitle: "Protects blood vessels", details: ["Cardiovascular support", "Long-term sexual health"] },
  { name: "Pomegranate Extract", image: "/images/ingredient-pomegranate.png", subtitle: "Powerful antioxidants", details: ["Clean, healthy arteries", "Blocks circulation damage"] },
];

const SEGMENT_COUNT = 5;
const GAP_DEG = 3;
const SEGMENT_DEG = 360 / SEGMENT_COUNT;

function getPoint(angleDeg: number, radius = 50) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + radius * Math.sin(rad);
  const y = 50 - radius * Math.cos(rad);
  return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
}

function buildClipPath(index: number) {
  const startAngle = index * SEGMENT_DEG + GAP_DEG / 2;
  const endAngle = (index + 1) * SEGMENT_DEG - GAP_DEG / 2;
  const steps = 12;
  const points: string[] = ["50% 50%"];
  for (let i = 0; i <= steps; i++) {
    const angle = startAngle + ((endAngle - startAngle) * i) / steps;
    points.push(getPoint(angle));
  }
  return `polygon(${points.join(", ")})`;
}

function getLabelPosition(index: number) {
  const midAngle = index * SEGMENT_DEG + SEGMENT_DEG / 2;
  const rad = (midAngle * Math.PI) / 180;
  const distance = 46;
  const x = 50 + distance * Math.sin(rad);
  const y = 50 - distance * Math.cos(rad);
  return { x, y, midAngle };
}

function getLabelAlignment(midAngle: number) {
  if (midAngle > 315 || midAngle <= 45) return "center";
  if (midAngle > 45 && midAngle <= 135) return "left";
  if (midAngle > 135 && midAngle <= 225) return "center";
  return "right";
}

const IngredientsSection = () => {
  const clipPaths = useMemo(() => ingredients.map((_, i) => buildClipPath(i)), []);
  const labelPositions = useMemo(() => ingredients.map((_, i) => getLabelPosition(i)), []);

  return (
    <section className="px-5 pt-8 pb-12 md:px-8 md:pt-12 md:pb-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--background)) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.7) 80%, hsl(var(--background)) 100%), url('/images/ingredients-bg.jpg')` }}>
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <ScrollReveal animation="fade-down">
          <h2 className="font-heading text-[36px] md:text-[54px] text-foreground leading-[1.08] text-center mb-4">
            5 Proven Ingredients That <span className="whitespace-nowrap">Restore Sexual Power</span>
          </h2>
          <p className="font-body text-[20px] md:text-[22px] text-foreground text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Each ingredient targets a different part of your vascular system for complete blood flow restoration.
          </p>
        </ScrollReveal>

        {/* Segmented circle — desktop only */}
        <ScrollReveal animation="scale-in" className="hidden md:block relative mx-auto" style={{ width: 700, height: 700 } as any}>
          <div className="absolute inset-0" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            {ingredients.map((ingredient, i) => (
              <div key={ingredient.name} className="absolute inset-0 overflow-hidden" style={{ clipPath: clipPaths[i] }}>
                <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full bg-background z-10" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <img src="/images/bottle-1.png" alt="HeartAide bottle" className="h-[300px] object-contain drop-shadow-2xl" />
          </div>
          {ingredients.map((ingredient, i) => {
            const { x, y, midAngle } = labelPositions[i];
            const align = getLabelAlignment(midAngle);
            const customTransforms: Record<string, string> = { "Red Yeast Rice": "translate(-30%, -80%)", "Inositol": "translate(-50%, -30%)" };
            const transform = customTransforms[ingredient.name] || (align === "center" ? "translate(-80%, -80%)" : align === "left" ? "translate(0%, -50%)" : "translate(-100%, -50%)");
            return (
              <div key={`label-${ingredient.name}`} className="absolute w-[350px]" style={{ left: `${x}%`, top: `${y}%`, transform }}>
                <p className="font-heading text-[22px] md:text-[24px] text-foreground leading-tight font-bold" style={{ textAlign: align === "left" ? "left" : align === "right" ? "right" : "center" }}>{ingredient.name}</p>
                <p className="font-body text-[18px] md:text-[20px] text-foreground mt-1.5" style={{ textAlign: align === "left" ? "left" : align === "right" ? "right" : "center" }}>{ingredient.subtitle}</p>
                {ingredient.details.map((detail) => (
                  <p key={detail} className="font-body text-[18px] md:text-[20px] text-foreground" style={{ textAlign: align === "left" ? "left" : align === "right" ? "right" : "center" }}>{detail}</p>
                ))}
              </div>
            );
          })}
        </ScrollReveal>

        {/* Mobile layout — stacked cards */}
        <div className="md:hidden space-y-4 mb-10">
          <ScrollReveal animation="scale-in">
            <div className="flex justify-center mb-6">
              <img src="/images/bottle-1.png" alt="HeartAide bottle" className="h-[200px] object-contain drop-shadow-xl" />
            </div>
          </ScrollReveal>
          {ingredients.map(({ name, image, subtitle, details }, i) => (
            <ScrollReveal key={name} animation="fade-up" delay={i * 80}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" loading="lazy" />
                <div>
                  <h3 className="font-heading text-[22px] text-foreground leading-tight">{name}</h3>
                  <p className="font-body text-[18px] text-foreground leading-snug mt-1">{subtitle}</p>
                  {details.map((d) => (
                    <p key={d} className="font-body text-[16px] text-foreground leading-snug">{d}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up">
          <div className="text-center mt-14 md:mt-20">
            <button className="bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-body py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-full sm:w-auto">
              Fix My Blood Flow
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IngredientsSection;
