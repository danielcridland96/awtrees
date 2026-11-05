import Image from "next/image";

const year = new Date().getFullYear();

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/logo-dark.svg"
            alt="A.W. Land & Tree Care"
            width={242}
            height={183}
            unoptimized
            className="h-24 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed">
            NPTC qualified tree surgeons serving Newbury and the surrounding
            North Berkshire area. Fully insured, locally trusted.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-cream mb-4">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-cream transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-cream mb-4">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="tel:01635282750"
                className="hover:text-cream transition-colors font-semibold text-cream"
              >
                01635 282750
              </a>
            </li>
            <li className="text-cream/60">
              North of Newbury, Berkshire
            </li>
            <li className="pt-2">
              <a
                href="tel:01635282750"
                className="inline-block bg-gold text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
              >
                Call for a Free Quote
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <p>
            &copy; {year} A.W. Land &amp; Tree Care LTD. All rights reserved.
          </p>
          <p>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
