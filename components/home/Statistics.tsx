"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe2, Ship, Users, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Statistics() {
  const t = useTranslations("home.statistics");

  const stats = [
    {
      icon: Globe2,
      number: 90,
      suffix: "+",
      title: t("countries"),
    },
    {
      icon: Ship,
      number: 5000,
      suffix: "+",
      title: t("shipments"),
    },
    {
      icon: Award,
      number: 80,
      suffix: "+",
      title: t("experience"),
    },
    {
      icon: Users,
      number: 99,
      suffix: "%",
      title: t("satisfaction"),
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [backgroundPosition, setBackgroundPosition] = useState(30);

  useEffect(() => {
    let ticking = false;

    const updateBackground = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /*
       * Calculate section progress through viewport.
       */
      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      /*
       * Faster vertical movement.
       *
       * 10%  → 90%
       */
      const movement = Math.max(
        10,
        Math.min(90, 10 + progress * 80)
      );

      /*
       * Update directly using transform for
       * smoother GPU rendering.
       */
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPosition =
          `center ${movement}%`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    updateBackground();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;

        if (typeof inViewRef === "function") {
          inViewRef(node);
        }
      }}
      className="relative overflow-hidden py-24 text-white"
    >
      {/* Moving Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-20 scale-110"
        style={{
          backgroundImage:
            "url('/images/home/statistics-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `center ${backgroundPosition}%`,
          willChange: "background-position",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#063b7d]/70" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                <item.icon
                  size={36}
                  strokeWidth={1.8}
                />
              </div>

              {/* Number */}
              <h2 className="text-5xl font-extrabold tracking-tight">
                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />
                )}
                {item.suffix}
              </h2>

              {/* Title */}
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