import {
  Eye,
  Target,
  Gem,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about.cards");

  const cards = [
    {
      icon: Target,
      title: t("mission.title"),
      text: t("mission.text"),
    },
    {
      icon: Eye,
      title: t("vision.title"),
      text: t("vision.text"),
    },
    {
      icon: Gem,
      title: t("values.title"),
      text: t("values.text"),
    },
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            {t("heading")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-10 shadow-lg transition hover:-translate-y-2 dark:bg-slate-900"
            >
              <card.icon
                size={45}
                className="text-[#0B4EA2]"
              />

              <h3 className="mt-6 text-3xl font-bold">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-500 dark:text-gray-400">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}