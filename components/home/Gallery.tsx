import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
];

export default function Gallery() {
  const t = useTranslations("home.gallery");

  return (
    <section className="py-28 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[5px] text-orange-500">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="group relative h-80 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`${t("image")} ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}