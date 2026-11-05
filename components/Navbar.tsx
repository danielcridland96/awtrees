"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-cream-dark shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="A.W. Land & Tree Care home">
          <Image
            src="/logo.svg"
            alt="A.W. Land & Tree Care"
            width={242}
            height={183}
            unoptimized
            priority
            className="h-16 sm:h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink">
          <a href="#services" className="hover:text-forest transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-forest transition-colors">
            About
          </a>
          <a href="#clients" className="hover:text-forest transition-colors">
            Clients
          </a>
          <a href="#contact" className="hover:text-forest transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:01635282750"
            className="bg-gold text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
          >
            Call 01635 282750
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-ink hover:bg-cream-dark transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream-dark bg-cream px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#services" onClick={() => setOpen(false)} className="text-ink hover:text-forest">Services</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-ink hover:text-forest">About</a>
          <a href="#clients" onClick={() => setOpen(false)} className="text-ink hover:text-forest">Clients</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-ink hover:text-forest">Contact</a>
          <a
            href="tel:01635282750"
            className="bg-gold text-white font-semibold px-4 py-2 rounded-lg text-center hover:bg-gold-dark transition-colors"
          >
            Call 01635 282750
          </a>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  );
}
