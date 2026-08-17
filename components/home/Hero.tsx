"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[620px] lg:min-h-[650px]">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      >
        <Image
          src="/images/hero/hero.jpg"
          alt={t("title")}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Main Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#073B7A]/90 via-[#0B4EA2]/60 to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated Glow */}
      <motion.div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-16 sm:min-h-[620px] lg:min-h-[650px]">

        <div className="max-w-2xl text-white">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md sm:text-xs"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="mr-1.5"
            >
              🌍
            </motion.span>

            {t("badge")}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="max-w-2xl text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            {t("title")}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: "easeOut",
            }}
            className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:text-[15px] sm:leading-7 lg:text-base"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.95,
              ease: "easeOut",
            }}
            className="mt-7 flex flex-wrap gap-3"
          >

            {/* Company Profile */}
            <motion.a
              href="/documents/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-colors hover:bg-orange-600"
            >
              {t("companyProfile")}
            </motion.a>

            {/* Contact */}
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/contact"
                className="block rounded-lg border border-white/60 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B4EA2]"
              >
                {t("contact")}
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Small Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-5 rounded-full border border-white/40 p-1"
        >
          <div className="mx-auto h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>

    </section>
  );
}