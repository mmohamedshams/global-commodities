"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { usePathname } from "@/i18n/navigation";

import { motion } from "framer-motion";
import TopBar from "./TopBar";

export default function Navbar() {

  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = useTranslations("navbar");
  
const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products" },
    { name: t("certificates"), href: "/#" },
  
    { name: t("contact"), href: "/contact" },
  ];

  return (
    
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900">
        <TopBar />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo3.png"
            alt="Global Commodities"
            width={55}
            height={55}
            priority
          />

          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-[#0B4EA2] dark:text-white">
              Global Commodities
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400">
               General Trading LLC
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
      <nav className="hidden items-center gap-10 lg:flex">
  {links.map((link) => {
    const active =
      pathname === link.href ||
      (link.href !== "/" && pathname.startsWith(link.href));

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`relative py-2 text-[15px] font-semibold transition-colors duration-300 ${
          active
            ? "text-[#F97316]"
            : "text-gray-700 hover:text-[#F97316] dark:text-gray-200"
        }`}
      >
        {link.name}

        {active && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#F97316]"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </Link>
    );
  })}
</nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="rounded-full border p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          )}

         

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border p-2 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white px-6 py-6 dark:border-slate-700 dark:bg-slate-900">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium transition hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}

          
          </nav>
        </div>
      </div>
    </header>
  );
}