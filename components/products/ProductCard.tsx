import Image from "next/image";
import { Product } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("products");

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name[locale]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category */}
        <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
          {product.category[locale]}
        </span>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-bold">
          {product.name[locale]}
        </h2>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-500 dark:text-gray-400">
          {product.shortDescription[locale]}
        </p>

        {/* Origin */}
        <div className="mt-6">
          <p className="text-sm text-gray-400">
            {t("origin")}
          </p>

          <p className="mt-1 font-semibold">
            {product.origin[locale]}
          </p>
        </div>

        {/* Packaging */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            {t("packaging")}
          </p>

          <p className="mt-1 font-semibold">
            {product.packaging[locale]}
          </p>
        </div>

        {/* Button */}
       
      </div>
    </div>
  );
}