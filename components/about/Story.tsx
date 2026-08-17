import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Story() {
  const t = useTranslations("about.story");

  const points = [
    t("point1"),
    t("point2"),
    t("point3"),
    t("point4"),
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="relative h-[550px] overflow-hidden rounded-3xl">
          <Image
            src="/images/about/company.jpg"
            alt="Global Commodities"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
            {t("description")}
          </p>

          <div className="mt-10 space-y-4">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  className="text-orange-500"
                  size={22}
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}