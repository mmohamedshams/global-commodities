import {
  Clock3,
  Globe,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyContact() {
  const t = useTranslations("contact.why");

  const items = [
    {
      icon: Clock3,
      title: t("fast.title"),
      description: t("fast.description"),
    },
    {
      icon: Globe,
      title: t("global.title"),
      description: t("global.description"),
    },
    {
      icon: ShieldCheck,
      title: t("quality.title"),
      description: t("quality.description"),
    },
    {
      icon: Handshake,
      title: t("partner.title"),
      description: t("partner.description"),
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2] text-white">
                <item.icon size={30} />
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}