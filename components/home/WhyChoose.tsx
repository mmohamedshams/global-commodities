import Image from "next/image";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("home.whyChoose");

  return (
    <section className="relative overflow-hidden bg-[#0B4EA2] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[180px_1fr_180px]">

          {/* SGS Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/sgs.png"
              alt="SGS ISO Certification"
              width={160}
              height={160}
              className="h-auto w-[140px] object-contain"
            />
          </div>

          {/* Quote Content */}
          <div className="mx-auto max-w-3xl text-center">

            {/* Quote Icon */}
            <Quote
              size={58}
              strokeWidth={0}
              fill="currentColor"
              className="mx-auto mb-6 rotate-180 text-white"
            />

            {/* Main Quote */}
            <p className="text-2xl font-bold leading-relaxed text-white md:text-3xl">
              {t("quote")}
            </p>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-9 text-white md:text-xl">
              {t("quoteDescription")}
            </p>

            {/* Bottom Quote */}
            <Quote
              size={58}
              strokeWidth={0}
              fill="currentColor"
              className="mx-auto mt-5 text-white"
            />

            {/* Person */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white">
                {t("personName")}
              </h3>

              <p className="mt-2 text-base font-medium text-white/90">
                {t("personPosition")}
              </p>
            </div>

            {/* Slider Dots */}
            <div className="mt-10 flex justify-center gap-3">
              <button
                aria-label="Slide 1"
                className="h-3 w-3 rounded-full bg-white"
              />

              <button
                aria-label="Slide 2"
                className="h-3 w-3 rounded-full bg-white/40 transition hover:bg-white"
              />
            </div>
          </div>

          {/* ISO Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/iso1.png"
              alt="ISO"
              width={170}
              height={170}
              className="h-auto w-[155px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}