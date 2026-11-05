const points = [
  {
    icon: ShieldIcon,
    title: "Fully Insured",
    body: "Public liability and employers' liability insurance as standard — protecting you, your property, and our team on every job.",
  },
  {
    icon: CertIcon,
    title: "NPTC Qualified",
    body: "All our arborists hold current NPTC certificates and we work to British Standard BS3998 for tree work.",
  },
  {
    icon: RepeatIcon,
    title: "Repeat Business & Referrals",
    body: "The majority of our work comes from returning clients and recommendations — a testament to the quality we deliver.",
  },
  {
    icon: LeafIcon,
    title: "Tidy & Responsible",
    body: "We leave every site clean and tidy. Green waste is recycled wherever possible; logs and woodchip are put to good use.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-forest-dark py-20 sm:py-24 text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            Why choose us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            The A.W. Difference
          </h2>
          <p className="mt-3 text-cream/70 max-w-xl mx-auto">
            A small, dedicated team that treats every property as if it were our own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Icon />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#43B02A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#43B02A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#43B02A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#43B02A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
