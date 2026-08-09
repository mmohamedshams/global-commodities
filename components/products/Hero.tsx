import { useTranslations } from "next-intl";

export default function ProductsHero() {
  const t = useTranslations("products.hero");

  return (
    <section className="bg-[#0B4EA2] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-white/10 px-5 py-2 text-sm backdrop-blur">
          {t("badge")}
        </span>

        <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          {t("description")}
        </p>

      </div>
    </section>
  );
}