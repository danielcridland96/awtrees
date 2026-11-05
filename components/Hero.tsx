import EnquiryForm from "./EnquiryForm";

const USPs = [
  "NPTC qualified arborists on every job",
  "Fully insured — public liability & employers",
  "Free, no-obligation site visits",
];

export default function Hero() {
  return (
    <section className="bg-forest relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-cream">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 text-xs font-semibold text-cream/90 mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Serving Newbury &amp; North Berkshire since 1990
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4">
            Professional Tree Surgery &amp;{" "}
            <span className="text-gold">Land Care</span>
          </h1>

          <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-lg">
            From single tree removal to full estate management — trusted by West
            Berkshire Council, Newbury Racecourse, and hundreds of local
            homeowners.
          </p>

          {/* USP list */}
          <ul className="flex flex-col gap-3 mb-10">
            {USPs.map((usp) => (
              <li key={usp} className="flex items-center gap-3 text-sm text-cream/90">
                <span className="shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <polyline points="1.5 5 4 7.5 8.5 2" stroke="#43B02A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {usp}
              </li>
            ))}
          </ul>

          {/* Phone CTA */}
          <a
            href="tel:01635282750"
            className="inline-flex items-center gap-3 group"
          >
            <span className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <PhoneIcon />
            </span>
            <div>
              <span className="block text-xs text-cream/60 leading-none">Prefer to talk?</span>
              <span className="block text-xl font-bold text-cream group-hover:text-gold transition-colors">
                01635 282750
              </span>
            </div>
          </a>
        </div>

        {/* Right: enquiry form */}
        <div className="lg:pl-4">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#43B02A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
