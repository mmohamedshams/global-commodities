"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    router.replace(pathname, {
      locale: locale === "en" ? "ar" : "en",
    });
  };

  return (
    <button
      onClick={switchLanguage}
      className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}