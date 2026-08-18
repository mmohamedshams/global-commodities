import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
   <section className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[580px]">
  <Image
    src="/images/about/about-hero1.png"
    alt="About Global Commodities"
    fill
    priority
    className="object-cover"
  />

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#0B4EA2]/75" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
    <div className="mx-auto max-w-4xl">

      {/* Badge */}
      <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm">
        {t("badge")}
      </span>

      {/* Title */}
      <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-[64px]">
        {t("title")}
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">
        {t("description")}
      </p>

    </div>
  </div>
</section>
  );
}