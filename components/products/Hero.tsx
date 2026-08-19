import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProductsHero() {
  const t = useTranslations("products.hero");

  return (
    <section className="relative overflow-hidden py-24 text-white md:py-28">
      
      {/* Background Image */}
      <Image
        src="/images/products/products-hero.jpg"
        alt="Global Commodities Products"
        fill
        priority
        className="object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/75" />

      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        {/* Badge */}
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
          {t("badge")}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
          {t("description")}
        </p>

      </div>
    </section>
  );
}