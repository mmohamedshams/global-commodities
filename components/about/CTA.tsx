import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl rounded-[40px] bg-[#0B4EA2] p-16 text-center text-white">
        <h2 className="text-5xl font-bold">
          {t("title")}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-blue-100">
          {t("description")}
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-xl bg-orange-500 px-10 py-4 font-semibold transition hover:bg-orange-600"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}