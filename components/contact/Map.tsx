import { MapPin, Navigation } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ContactMap() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            OUR LOCATION
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500 dark:text-gray-400">
            We welcome visitors and business partners at our office.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">

          <iframe
            src="https://maps.google.com/maps?q=28.103147,30.754771&z=16&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
          />

          <div className="flex flex-col items-center justify-between gap-6 border-t p-8 md:flex-row">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#0B4EA2] p-4 text-white">
                <MapPin size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Global Commodities LLC
                </h3>

                <p className="text-gray-500 dark:text-gray-400">
                  El Minya, Egypt
                </p>

              </div>

            </div>

            <a
              href="https://www.google.com/maps?q=28.103147,30.754771"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              <Navigation size={20} />
              Open in Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}