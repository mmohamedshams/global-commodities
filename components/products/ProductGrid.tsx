"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import {
  Wheat,
  Apple,
  Sprout,
} from "lucide-react";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductType =
  | "Agricultural Commodities"
  | "Vegetables"
  | "Fruits"
  | "Seeds";

const productTypes: {
  value: ProductType;
  icon: typeof Wheat;
  en: string;
  ar: string;
  descriptionEn: string;
  descriptionAr: string;
  colors: {
    active: string;
    icon: string;
    inactiveIcon: string;
    border: string;
    hoverBorder: string;
    badge: string;
    decoration: string;
  };
}[] = [
  {
    value: "Agricultural Commodities",
    icon: Wheat,
    en: "Agricultural Commodities",
    ar: "الحاصلات الزراعية",
    descriptionEn:
      "Premium grains, pulses, oilseeds and agricultural commodities.",
    descriptionAr:
      "حبوب وبقوليات وبذور زيتية وحاصلات زراعية عالية الجودة.",

    colors: {
      active:
        "border-emerald-500 bg-emerald-500 text-white shadow-xl shadow-emerald-500/20",
      icon:
        "bg-white/15 text-white",
      inactiveIcon:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      border:
        "border-slate-200 dark:border-slate-800",
      hoverBorder:
        "hover:border-emerald-300 dark:hover:border-emerald-700",
      badge:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
      decoration:
        "bg-emerald-500/5",
    },
  },

  {
    value: "Fruits",
    icon: Apple,
    en: "Vegetables and Fruits",
    ar: "الخضروات والفواكه",
    descriptionEn:
      "Fresh premium fruits and vegetables sourced from trusted origins.",
    descriptionAr:
      "فواكه وخضروات طازجة عالية الجودة من مصادر موثوقة.",

    colors: {
      active:
        "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/20",
      icon:
        "bg-white/15 text-white",
      inactiveIcon:
        "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      border:
        "border-slate-200 dark:border-slate-800",
      hoverBorder:
        "hover:border-orange-300 dark:hover:border-orange-700",
      badge:
        "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400",
      decoration:
        "bg-orange-500/5",
    },
  },

  {
    value: "Seeds",
    icon: Sprout,
    en: "Seeds",
    ar: "التقاوي",
    descriptionEn:
      "High-quality seeds for commercial and professional farming.",
    descriptionAr:
      "تقاوي وبذور عالية الجودة للزراعة التجارية والاحترافية.",

    colors: {
      active:
        "border-blue-500 bg-blue-500 text-white shadow-xl shadow-blue-500/20",
      icon:
        "bg-white/15 text-white",
      inactiveIcon:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      border:
        "border-slate-200 dark:border-slate-800",
      hoverBorder:
        "hover:border-blue-300 dark:hover:border-blue-700",
      badge:
        "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
      decoration:
        "bg-blue-500/5",
    },
  },
];

export default function ProductGrid() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [activeType, setActiveType] =
    useState<ProductType>("Agricultural Commodities");

  const activeCategory = productTypes.find(
    (type) => type.value === activeType
  );

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.productType?.en === activeType
    );
  }, [activeType]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950 sm:py-24">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">

            <Sprout className="h-4 w-4" />

            {isArabic ? "منتجاتنا" : "Our Products"}

          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">

            {isArabic
              ? "اكتشف منتجاتنا"
              : "Discover Our Products"}

          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">

            {isArabic
              ? "مجموعة متنوعة من الحاصلات الزراعية والخضروات والفواكه والتقاوي عالية الجودة."
              : "A diverse selection of premium agricultural commodities, vegetables, fruits, and seeds."}

          </p>

        </div>

        {/* Category Selector */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">

          {productTypes.map((type) => {

            const Icon = type.icon;

            const isActive =
              activeType === type.value;

            const count = products.filter(
              (product) =>
                product.productType?.en === type.value
            ).length;

            return (
              <button
                key={type.value}
                type="button"
                onClick={() =>
                  setActiveType(type.value)
                }
                className={`group relative overflow-hidden rounded-2xl border p-6 text-start transition-all duration-200 ${
                  isActive
                    ? type.colors.active
                    : `${type.colors.border} bg-white hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 ${type.colors.hoverBorder}`
                }`}
              >

                {/* Decorative circle */}
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                    isActive
                      ? "bg-white/10"
                      : type.colors.decoration
                  }`}
                />

                <div className="relative">

                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? type.colors.icon
                        : type.colors.inactiveIcon
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold ${
                      isActive
                        ? "text-white"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {isArabic
                      ? type.ar
                      : type.en}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2 min-h-[48px] text-sm leading-6 ${
                      isActive
                        ? "text-white/80"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {isArabic
                      ? type.descriptionAr
                      : type.descriptionEn}
                  </p>

                  {/* Count */}
                  <div
                    className={`mt-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      isActive
                        ? "bg-white/15 text-white"
                        : type.colors.badge
                    }`}
                  >
                    {count}{" "}

                    {isArabic
                      ? count === 1
                        ? "منتج"
                        : "منتجات"
                      : count === 1
                      ? "Product"
                      : "Products"}
                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* Active Category Header */}
        {activeCategory && (
          <div
            key={`category-${activeType}`}
            className="mb-8 mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >

            <div>

              <div className="mb-2 flex items-center gap-2">

                <div
                  className={`h-1 w-8 rounded-full ${
                    activeType === "Agricultural Commodities"
                      ? "bg-emerald-500"
                      : activeType === "Fruits"
                      ? "bg-orange-500"
                      : "bg-blue-500"
                  }`}
                />

                <span
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    activeType === "Agricultural Commodities"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : activeType === "Fruits"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {isArabic
                    ? "الفئة المختارة"
                    : "Selected Category"}
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">

                {isArabic
                  ? activeCategory.ar
                  : activeCategory.en}

              </h3>

            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400">

              {filteredProducts.length}{" "}

              {isArabic
                ? filteredProducts.length === 1
                  ? "منتج"
                  : "منتجات"
                : filteredProducts.length === 1
                ? "product"
                : "products"}

            </div>

          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 ? (

          <div
            key={`products-${activeType}`}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          /* Empty State */
          <div
            key={`empty-${activeType}`}
            className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center dark:border-slate-700 dark:bg-slate-900"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">

              <Sprout className="h-8 w-8 text-emerald-500" />

            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">

              {isArabic
                ? "لا توجد منتجات حاليًا"
                : "No Products Available"}

            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">

              {isArabic
                ? "سيتم إضافة منتجات جديدة إلى هذه الفئة قريبًا."
                : "New products will be added to this category soon."}

            </p>

          </div>

        )}

      </div>

    </section>
  );
}