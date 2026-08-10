import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative min-h-[620px] h-[85vh] w-full overflow-hidden sm:min-h-[650px] md:h-[90vh] md:min-h-[700px]">
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

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] sm:text-5xl md:mt-8 md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>

         <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}