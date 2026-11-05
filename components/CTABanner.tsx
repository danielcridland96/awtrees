export default function CTABanner() {
  return (
    <section className="bg-gold py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="text-white/90 mt-1 text-sm">
            Free site visits · No-obligation quotes · Fast turnaround
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="tel:01635282750"
            className="bg-forest text-cream font-bold px-6 py-3 rounded-lg hover:bg-forest-dark transition-colors text-sm whitespace-nowrap"
          >
            Call 01635 282750
          </a>
          <a
            href="#enquiry"
            className="bg-white text-forest-dark font-bold px-6 py-3 rounded-lg hover:bg-cream transition-colors text-sm whitespace-nowrap"
          >
            Send an Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
