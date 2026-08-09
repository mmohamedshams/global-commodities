import { Award, Globe2, Ship, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("home.features");

  const features = [
    {
      icon: Award,
      title: t("quality.title"),
      description: t("quality.description"),
    },
    {
      icon: Globe2,
      title: t("trade.title"),
      description: t("trade.description"),
    },
    {
      icon: Ship,
      title: t("shipping.title"),
      description: t("shipping.description"),
    },
    {
      icon: Handshake,
      title: t("partner.title"),
      description: t("partner.description"),
    },
  ];

  return (
    <section className="relative z-20 mt-14 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 dark:hover:bg-slate-800"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B4EA2] text-white transition duration-300 group-hover:bg-[#F97316]">
                <item.icon size={28} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors dark:text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}