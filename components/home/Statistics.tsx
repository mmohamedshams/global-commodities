"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe2, Ship, Users, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Statistics() {
  const t = useTranslations("home.statistics");

  const stats = [
    {
      icon: Globe2,
      number: 40,
      suffix: "+",
      title: t("countries"),
    },
    {
      icon: Ship,
      number: 1500,
      suffix: "+",
      title: t("shipments"),
    },
    {
      icon: Award,
      number: 25,
      suffix: "+",
      title: t("experience"),
    },
    {
      icon: Users,
      number: 98,
      suffix: "%",
      title: t("satisfaction"),
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-[#0B4EA2] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <item.icon size={36} />
              </div>

              <h2 className="text-5xl font-extrabold">
                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />
                )}
                {item.suffix}
              </h2>

              <p className="mt-3 text-lg text-blue-100">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}