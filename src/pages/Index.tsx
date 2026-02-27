const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Ready for copy */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-display-md md:text-display text-foreground mb-6">
            Your Headline Goes Here
          </h1>
          <p className="text-body-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Subheadline copy will go here. Share your copy and we'll build this section by section.
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-body font-semibold px-8 py-4 min-h-[56px] hover:opacity-90 transition-opacity">
            Call to Action
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
