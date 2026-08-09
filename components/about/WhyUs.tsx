import {
  Award,
  Globe,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
  Headset,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("home.whyChoose");

  const features = [
    {
      icon: Award,
      title: t("quality.title"),
      text: t("quality.description"),
    },
    {
      icon: Globe,
      title: t("network.title"),
      text: t("network.description"),
    },
    {
      icon: Truck,
      title: t("logistics.title"),
      text: t("logistics.description"),
    },
    {
      icon: ShieldCheck,
      title: t("supplier.title"),
      text: t("supplier.description"),
    },
    {
      icon: BadgeDollarSign,
      title: t("pricing.title"),
      text: t("pricing.description"),
    },
    {
      icon: Headset,
      title: t("support.title"),
      text: t("support.description"),
    },
  ];

  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[5px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2] text-white transition group-hover:bg-orange-500">
                <item.icon size={30} />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}