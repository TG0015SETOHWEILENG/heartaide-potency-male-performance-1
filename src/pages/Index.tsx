const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Awaiting copy */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-secondary">
        <div className="container-narrow section-padding">
          <h1 className="font-heading text-display-md md:text-display text-foreground mb-5">
            Your Hero Headline
            <span className="block text-accent font-bold">Goes Right Here</span>
          </h1>
          <p className="text-body md:text-body-lg text-muted-foreground mb-8 max-w-lg">
            Share your hero copy and I'll drop it in. Subheadline text goes here — large and readable.
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-cta text-cta-foreground text-body font-bold px-10 py-4 min-h-[60px] hover:brightness-105 transition-all shadow-lg">
            Try Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
