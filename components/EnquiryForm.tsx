"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";

const SERVICES = [
  "Tree Surgery",
  "Hedge Cutting",
  "Landscaping & Fencing",
  "Grounds Maintenance",
  "Woodland Management",
  "Seasoned Logs",
  "Other / Not Sure",
];

const initial: EnquiryState = { status: "idle" };

export default function EnquiryForm() {
  const [state, action, isPending] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center" id="enquiry">
        <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="font-display text-xl font-bold text-forest mb-2">
          Thank you!
        </h3>
        <p className="text-sm text-gray-600">
          We&apos;ll be in touch shortly. For urgent enquiries call{" "}
          <a href="tel:01635282750" className="font-semibold text-forest hover:underline">
            01635 282750
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      id="enquiry"
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-4"
    >
      <div>
        <h3 className="font-display text-xl font-bold text-forest">
          Get a Free Quote
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          We aim to respond within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07700 000000"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition bg-white text-gray-700"
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
            Brief Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us a little about the work you need…"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition resize-none"
          />
        </div>
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 rounded-lg transition-colors text-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Request My Free Quote"}
      </button>

      <p className="text-center text-xs text-gray-400">
        Or call us directly:{" "}
        <a href="tel:01635282750" className="font-semibold text-forest hover:underline">
          01635 282750
        </a>
      </p>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="5 14 11 20 23 8" />
    </svg>
  );
}
