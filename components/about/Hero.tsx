import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
      <Image
        src="/images/about/about-hero.jpg"
        alt="About Global Commodities"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0B4EA2]/75" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm backdrop-blur">
            {t("badge")}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}