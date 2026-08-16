import Image from "next/image";
import { useTranslations } from "next-intl";



export default function Companies() {
  const t = useTranslations("home.companies");

  const companies = [
    {
      id: "global",
      name: t("global.name"),
      image: "/images/companies/global.png",
    },
    {
      id: "al-shorouk",
      name: t("shorouk.name"),
      image: "/images/companies/al-shorouk.png",
    },
    {
      id: "al-farouk",
      name: t("farouk.name"),
      image: "/images/companies/al-farouk.png",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 dark:text-gray-400">
            {t("description")}
          </p>

        </div>

        {/* Companies */}
        <div className="grid gap-8 md:grid-cols-3">

          {companies.map((company) => (
            <div
              key={company.id}
              className="group flex flex-col items-center"
            >

              {/* Logo Card */}
              <div
                className="
                  relative
                  flex
                  h-56
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <Image
                  src={company.image}
                  alt={company.name}
                  width={300}
                  height={180}
                  className="
                    max-h-40
                    w-auto
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Company Name */}
              <h3
                className="
                  mt-6
                  text-center
                  text-2xl
                  font-bold
                  text-gray-900
                  transition-colors
                  duration-300
                  group-hover:text-[#0B4EA2]
                  dark:text-white
                  dark:group-hover:text-orange-400
                "
              >
                {company.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}