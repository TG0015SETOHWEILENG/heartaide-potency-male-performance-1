import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const faqs = [
  { q: "How quickly will I see results?", a: "Most men notice firmer erections within the first week. Full performance transformation typically occurs within 2-4 weeks of consistent use." },
  { q: "Is this safe to take with other medications?", a: "HeartAide uses natural ingredients, but always consult your doctor before starting any supplement, especially if you take prescription medications." },
  { q: "How is this different from Viagra or Cialis?", a: "Prescription medications provide temporary results and require doctor visits. HeartAide naturally supports your body's blood flow system for long-term improvement. It's a natural supplement that works with your body rather than forcing a temporary response." },
  { q: "Will this work at my age?", a: "HeartAide works for men 40-80+. Whether you're dealing with age-related decline or circulation issues, the natural ingredients restore blood flow regardless of age. Many of our best results come from men over 60." },
  { q: "What if it doesn't work for me?", a: "You're protected by our 365-day guarantee. Return even empty bottles for a full refund if you're not completely satisfied." },
  { q: "Who should NOT use HeartAide?", a: "Men under 18, those with serious heart conditions, or anyone taking nitrate medications should not use this product. Always consult your doctor first." },
  { q: "Is my order private and discreet?", a: "Absolutely. Plain packaging, discreet billing, and complete privacy. Nobody will know what you ordered." },
  { q: "How many bottles should I order?", a: "For best results, we recommend the 3-bottle supply (3 months). This gives your body time to fully optimize blood flow and restore peak performance." },
  { q: "How long do I need to take it?", a: "Most men take HeartAide daily for ongoing sexual vitality. Think of it like maintaining your car. Consistent use keeps your circulation and sexual performance optimal." },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-14 items-start">
          <ScrollReveal animation="fade-down">
            <h2 className="font-heading text-[36px] md:text-[48px] text-foreground leading-tight">
              Frequently Asked
              <span className="block">Questions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="font-body text-[20px] md:text-[24px] text-foreground text-left py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-[16px] md:text-[18px] text-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up">
          <div className="text-center mt-12 md:mt-16">
            <a href="#transformation" className="inline-block bg-cta hover:brightness-110 text-cta-foreground font-body font-extrabold text-[18px] md:text-[20px] py-4 px-10 rounded-lg transition-all uppercase tracking-wide shadow-lg min-h-[60px] w-auto text-center">
              <span className="md:hidden">Restore My Erections –<br />Order Now</span><span className="hidden md:inline">Restore My Erections - Order Now</span>
            </a>
            <p className="font-body text-[16px] md:text-[18px] text-foreground/70 mt-4 italic">
              Your wife is counting on you.<br className="md:hidden" /> Don't let her down.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
