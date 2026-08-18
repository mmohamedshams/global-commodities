import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("contact.hero");

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{
        backgroundImage: "url('/images/contact/contact-hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/80" />

      <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
        <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
          {t("badge")}
        </span>

        <h1 className="mt-6 text-5xl font-bold md:text-6xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          {t("description")}
        </p>
      </div>
    </section>
  );
}