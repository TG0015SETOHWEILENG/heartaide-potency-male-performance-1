const Footer = () => {
  return (
    <footer className="bg-[#153F67] text-white/80 relative">
      {/* Logo half-overlapping top edge */}
      <div className="flex justify-center">
        <div className="-translate-y-1/2">
          <img
            src="/images/simple-promise-logo.png"
            alt="Simple Promise - We Follow The Science"
            className="w-[140px] h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="px-5 md:px-8 pb-12 md:pb-16 -mt-4">
        <div className="mx-auto w-full max-w-xl text-center">
          {/* Contact */}
          <h4 className="font-body text-[16px] text-white font-bold mb-3">Contact Information</h4>
          <p className="font-body text-[13px] text-white/60 leading-relaxed mb-2 italic">
            <span className="inline-block align-middle mr-1">📍</span>
            3242 NE 3rd Avenue #1051 Camas,<br />
            WA 98607
          </p>
          <p className="font-body text-[13px] text-white/60 mb-2 italic">
            1-800-259-9522
          </p>
          <p className="font-body text-[13px] text-white/60 mb-8 italic">
            Click{" "}
            <a href="http://help.simplepromise.com/support/tickets/new?" className="text-cta underline hover:brightness-110">
              here
            </a>{" "}
            to submit a ticket
          </p>

          {/* Disclaimer */}
          <h4 className="font-body text-[16px] text-white font-bold mb-3">Disclaimer</h4>
          <p className="font-body text-[13px] text-white/60 leading-relaxed mb-3">
            * These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat, cure, or prevent
            any disease. Please Note: The material on this site is provided for informational
            purposes only and is not medical advice. Always consult your physician before
            beginning any diet or exercise program.
          </p>
          <p className="font-body text-[13px] text-white/60 leading-relaxed mb-3">
            ** Target and Walmart are in no way associated with VivaSlim™.
          </p>
          <p className="font-body text-[13px] text-white/60 leading-relaxed mb-8">
            *** Lizzy Anderson is a real customer at Simple Promise™; however her name has been changed for privacy.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="https://mysimplepromise.com/pages/privacy-policies"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-white/70 uppercase tracking-wider hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://mysimplepromise.com/pages/terms-disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-white/70 uppercase tracking-wider hover:text-white transition-colors"
            >
              Terms & Disclaimer
            </a>
            <a
              href="http://affiliates.truegenics.com/?site=HeartAide"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-white/70 uppercase tracking-wider hover:text-white transition-colors"
            >
              Affiliate Program
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-[12px] text-white/40 text-center uppercase tracking-wider">
            Copyright © 2019 – 2026 Simple Promise™. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
