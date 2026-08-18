"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("products");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Product Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name[locale]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* View Image Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
            <span className="translate-y-3 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Image
            </span>
          </div>
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
        </div>
      </div>

      {/* Fullscreen Image */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          {/* Image Container */}
          <div
            className="relative h-[90vh] w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.image}
              alt={product.name[locale]}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}