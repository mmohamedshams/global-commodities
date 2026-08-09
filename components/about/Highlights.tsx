import {
  Award,
  Globe2,
  ShipWheel,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Highlights() {
  const t = useTranslations("about.highlights");

  const items = [
    {
      icon: Globe2,
      number: "40+",
      title: t("countries"),
    },
    {
      icon: ShipWheel,
      number: "1500+",
      title: t("shipments"),
    },
    {
      icon: Award,
      number: "25+",
      title: t("experience"),
    },
    {
      icon: Users,
      number: "98%",
      title: t("customers"),
    },
  ];

  return (
    <section className="bg-[#0B4EA2] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <item.icon
                size={50}
                className="mx-auto text-orange-400"
              />

              <h2 className="mt-6 text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-blue-100">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}