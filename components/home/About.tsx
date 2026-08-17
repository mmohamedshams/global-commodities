import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Handshake,
  TrendingUp,
} from "lucide-react";
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
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 md:py-32">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#0B4EA2]/5 blur-3xl dark:bg-blue-500/5" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ===================================================== */}
          {/* IMAGE SIDE */}
          {/* ===================================================== */}

          <div className="relative">

            {/* Main Image */}
            <div className="group relative h-[480px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[560px]">

              <Image
                src="/images/about/about.jpg"
                alt={t("title")}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Image Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500">
                    <Globe2 size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-200">
                      {t("globalTrade")}
                    </p>

                    <p className="font-semibold">
                      {t("globalTradeDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* EXPERIENCE CARD */}
            {/* ================================================= */}

            <div
              className="
                absolute
                -bottom-8
                left-4
                rounded-3xl
                bg-[#0B4EA2]
                px-7
                py-6
                text-white
                shadow-2xl
                transition
                duration-500
                hover:-translate-y-2
                sm:left-8
                sm:px-9
                sm:py-7
              "
            >
              <div className="flex items-center gap-5">

                <div>
                  <p className="text-4xl font-extrabold sm:text-5xl">
                    80+
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    {t("experience")}
                  </p>
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200">
                    {t("since")}
                  </p>

                  <p className="mt-1 font-bold">
                    {t("sinceYear")}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* CONTENT SIDE */}
          {/* ===================================================== */}

          <div>

            {/* Badge */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-sm font-bold uppercase tracking-[4px] text-orange-500">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t("title")}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-400">
              {t("description")}
            </p>

            {/* ================================================= */}
            {/* COMPANY VALUES */}
            {/* ================================================= */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <Globe2 className="text-[#0B4EA2]" size={26} />

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  {t("cards.global.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {t("cards.global.text")}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <Handshake className="text-orange-500" size={26} />

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  {t("cards.partnership.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {t("cards.partnership.text")}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <TrendingUp className="text-[#0B4EA2]" size={26} />

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  {t("cards.growth.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {t("cards.growth.text")}
                </p>
              </div>

            </div>

            {/* ================================================= */}
            {/* FEATURES */}
            {/* ================================================= */}

            <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div className="mt-10">

              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#0B4EA2]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-900/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#083d80]
                  hover:shadow-xl
                "
              >
                {t("button")}

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}