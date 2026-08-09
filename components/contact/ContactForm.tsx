"use client";

import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-900">
      <h2 className="text-3xl font-bold">
        {t("title")}
      </h2>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        {t("description")}
      </p>

      <form className="mt-8 space-y-6">
        <input
          type="text"
          placeholder={t("name")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <input
          type="text"
          placeholder={t("company")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <input
          type="email"
          placeholder={t("email")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <input
          type="text"
          placeholder={t("phone")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <input
          type="text"
          placeholder={t("country")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <select className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700">
          <option>{t("product")}</option>
          <option>Potato Seeds</option>
          <option>Sesame Seeds</option>
          <option>Popcorn</option>
          <option>Cowpeas</option>
          <option>Canadian Beans</option>
          <option>Lithuanian Beans</option>
          <option>Australian Beans</option>
        </select>

        <textarea
          rows={6}
          placeholder={t("message")}
          className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none transition focus:border-[#0B4EA2] dark:border-slate-700"
        />

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
          <Send size={18} />
          {t("button")}
        </button>
      </form>
    </div>
  );
}