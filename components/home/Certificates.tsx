import { ShieldCheck, FileCheck, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Certificates() {
  const t = useTranslations("home.certificates");

  const certificates = [
    {
      title: t("quality"),
      icon: Award,
    },
    {
      title: t("phytosanitary"),
      icon: ShieldCheck,
    },
    {
      title: t("documentation"),
      icon: FileCheck,
    },
  ];

  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="uppercase tracking-[5px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {certificates.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
            >
              <item.icon
                size={45}
                className="mx-auto text-[#0B4EA2]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}