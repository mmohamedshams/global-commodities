import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/hero.jpg"
        alt={t("title")}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/85 via-[#0B4EA2]/60 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <span className="rounded-full bg-orange-500/20 px-5 py-2 text-sm font-medium text-orange-300 backdrop-blur">
            🌍 {t("badge")}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            {t("title")}
            <span className="mt-2 block text-orange-400">
              {t("highlight")}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/products"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600"
            >
              {t("explore")}
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-[#0B4EA2]"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}