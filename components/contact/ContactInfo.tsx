import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  const items = [
    {
      id: "minya",
      icon: MapPin,
      title: t("address"),
      value: "El Minya, Egypt",
    },
    {
      id: "cairo",
      icon: MapPin,
      title: t("address"),
      value: "Cairo, Egypt",
    },
    {
      id: "abu-dhabi",
      icon: MapPin,
      title: t("address"),
      value: "Abu Dhabi, United Arab Emirates",
    },
    {
      id: "phone",
      icon: Phone,
      title: t("phone"),
      value: "+20 106 943 3125",
    },
    {
      id: "email",
      icon: Mail,
      title: t("email"),
      value: "info@globalcommoditiesllc.com",
    },
  ];

  return (
    <div>
      <span className="font-semibold uppercase tracking-[4px] text-orange-500">
        {t("badge")}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t("title")}
      </h2>

      <p className="mt-5 text-gray-500 dark:text-gray-400">
        {t("description")}
      </p>

      <div className="mt-10 space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
              <item.icon size={28} />
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}