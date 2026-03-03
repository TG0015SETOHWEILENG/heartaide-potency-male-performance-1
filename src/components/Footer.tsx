const Footer = () => {
  return (
    <footer className="bg-[#153F67] text-white/80 px-5 md:px-8 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top row: Logo | Disclaimer | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_240px] gap-8 md:gap-12 mb-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/simple-promise-logo.png"
              alt="Simple Promise - We Follow The Science"
              className="w-[140px] h-auto object-contain"
            />
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-body text-[16px] text-white font-bold mb-3">Disclaimer</h4>
            <p className="font-body text-[13px] text-white/60 leading-relaxed mb-3">
              * These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat, cure, or prevent
              any disease. Please Note: The material on this site is provided for informational
              purposes only and is not medical advice. Always consult your physician before
              beginning any diet or exercise program.
            </p>
            <p className="font-body text-[13px] text-white/60 leading-relaxed">
              † Testimonials within our advertisement are real life reactions of real customer at
              Simple Promise™; however their name has been changed for privacy. Individual
              results may vary.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[16px] text-white font-bold mb-3">Contact Information</h4>
            <p className="font-body text-[13px] text-white/60 leading-relaxed mb-2 italic">
              3242 NE 3rd Avenue #1051<br />
              Camas, WA 98607
            </p>
            <p className="font-body text-[13px] text-white/60 mb-2 italic">
              1-800-259-9522
            </p>
            <p className="font-body text-[13px] text-white/60">
              Click{" "}
              <a href="#" className="text-cta underline hover:brightness-110">
                here
              </a>{" "}
              to submit a ticket
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {["Privacy", "Terms & Disclaimer", "Affiliate Program"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-[13px] text-white/70 uppercase tracking-wider hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-[12px] text-white/40 text-center uppercase tracking-wider">
          Copyright © 2019 – 2026 Simple Promise™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
