const services = [
  {
    title: "Tree Surgery",
    description:
      "Crown reductions, pollarding, felling, and dead wood removal — all carried out to British Standard BS3998.",
    icon: TreeSurgeryIcon,
  },
  {
    title: "Hedge Cutting",
    description:
      "Garden hedges to large roadside hedges. We leave every site clean, tidy, and looking its best.",
    icon: HedgeIcon,
  },
  {
    title: "Landscaping & Fencing",
    description:
      "From post-and-rail fencing to full garden redesigns — we source materials locally and handle projects of any scale.",
    icon: FencingIcon,
  },
  {
    title: "Grounds Maintenance",
    description:
      "Regular upkeep contracts for residential estates, commercial properties, and schools across Berkshire.",
    icon: MaintenanceIcon,
  },
  {
    title: "Woodland Management",
    description:
      "Hazardous tree removal, selective felling, ride maintenance, and fencing for private woodland owners.",
    icon: WoodlandIcon,
  },
  {
    title: "Seasoned Logs",
    description:
      "Locally sourced hardwood logs, kiln-dried and ready to burn. Delivered across the Newbury area.",
    icon: LogsIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            What we do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mt-2">
            Our Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Whether it&apos;s a single tree or a large estate, we have the
            experience, equipment, and insurance to get the job done right.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="bg-white rounded-2xl p-6 border border-cream-dark hover:border-forest/20 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/8 flex items-center justify-center mb-4 group-hover:bg-forest/12 transition-colors">
                <Icon />
              </div>
              <h3 className="font-display font-bold text-forest text-lg mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Not sure what you need? We offer free site visits and no-obligation
            quotes.
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-forest text-cream font-semibold px-6 py-3 rounded-lg hover:bg-forest-dark transition-colors text-sm"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* SVG icons */
function TreeSurgeryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12L8 8" />
      <path d="M12 12L16 8" />
      <path d="M8 8C6 6 5 3 7 2s4 1 4 3" />
      <path d="M16 8c2-2 3-5 1-6s-4 1-4 3" />
      <path d="M10 14H7a4 4 0 0 1 0-8 4 4 0 0 1 8 0 4 4 0 0 1 0 8h-5z" />
    </svg>
  );
}

function HedgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17h18" />
      <path d="M5 17V9a3 3 0 0 1 6 0v8" />
      <path d="M13 17V9a3 3 0 0 1 6 0v8" />
      <path d="M2 9h4" />
      <path d="M18 9h4" />
    </svg>
  );
}

function FencingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="6" y1="3" x2="6" y2="21" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="18" y1="3" x2="18" y2="21" />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function WoodlandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 22V12l-5-8-5 8v10" />
      <path d="M7 22h10" />
      <path d="M12 14v8" />
    </svg>
  );
}

function LogsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#58595B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="9" ry="5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 7v10" />
      <path d="M7.5 9.5L16.5 14.5" />
      <path d="M7.5 14.5L16.5 9.5" />
    </svg>
  );
}
