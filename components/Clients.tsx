const clients = [
  { name: "West Berkshire Council", abbr: "WBC" },
  { name: "Newbury Racecourse", abbr: "NRC" },
  { name: "David Wilson Homes", abbr: "DWH" },
  { name: "Mary Hare School", abbr: "MHS" },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-cream-dark py-14 sm:py-16 border-y border-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Trusted by organisations across Berkshire
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {clients.map(({ name, abbr }) => (
            <div key={name} className="flex items-center gap-3 group">
              {/* Placeholder logo badge */}
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-forest">{abbr}</span>
              </div>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-forest transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
