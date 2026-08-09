import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("home.about");

  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
  ];

  return (
    <section className="bg-white py-28 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <Image
              src="/images/about/about.jpg"
              alt={t("title")}
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#0B4EA2] p-8 text-white shadow-2xl">
            <h3 className="text-5xl font-bold">25+</h3>

            <p className="mt-2">
              {t("experience")}
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            {t("title")}
          </h2>

          <p className="mt-8 leading-8 text-gray-600 dark:text-gray-400">
            {t("description")}
          </p>

          {/* Stats */}

          {/* Features */}
          <div className="mt-12 space-y-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  className="text-orange-500"
                  size={24}
                />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-12 inline-block rounded-xl bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}