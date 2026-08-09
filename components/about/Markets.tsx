import {
  Globe,
  MapPinned,
  Ship,
  Plane,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Markets() {
  const t = useTranslations("about.markets");

  const markets = [
    {
      icon: Globe,
      title: t("middleEast"),
    },
    {
      icon: Ship,
      title: t("europe"),
    },
    {
      icon: Plane,
      title: t("africa"),
    },
    {
      icon: MapPinned,
      title: t("southAmerica"),
    },
  ];

  return (
    <section className="bg-white py-28 dark:bg-slate-900">
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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {markets.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-slate-50 p-10 text-center transition hover:-translate-y-2 hover:border-orange-500 dark:border-slate-800 dark:bg-slate-950"
            >
              <item.icon
                size={48}
                className="mx-auto text-[#0B4EA2]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}