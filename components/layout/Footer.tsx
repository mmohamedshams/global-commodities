import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/images/logo/logo3.png"
              alt="Global Commodities"
              width={140}
              height={140}
            />

            <h2 className="mt-5 text-2xl font-bold text-orange-500">
              Global Commodities LLC
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              {t("description")}
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="https://www.facebook.com/profile.php?id=61593320767758"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {t("links")}
            </h3>

            <div className="space-y-3">

              <Link href="/">
                {t("home")}
              </Link>

              <br />

              <Link href="/about">
                {t("about")}
              </Link>

              <br />

              <Link href="/products">
                {t("products")}
              </Link>

              <br />

              <Link href="/contact">
                {t("contact")}
              </Link>

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {t("ourProducts")}
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Potato Seeds</p>
              <p>Sesame Seeds</p>
              <p>Popcorn</p>
              <p>Cowpeas</p>
              <p>Canadian Beans</p>

            </div>

          </div>

   {/* Contact */}

<div>

  <h3 className="mb-6 text-xl font-semibold">
    {t("contactInfo")}
  </h3>

  <div className="space-y-5 text-gray-400">

    {/* Minya */}
    <div className="flex items-start gap-3">
      <MapPin
        size={18}
        className="mt-1 shrink-0 text-orange-500"
      />

      <div>
        <p className="font-medium text-white">
          Minya
        </p>

        <p className="text-sm text-gray-400">
          Egypt
        </p>
      </div>
    </div>

    {/* Cairo */}
    <div className="flex items-start gap-3">
      <MapPin
        size={18}
        className="mt-1 shrink-0 text-orange-500"
      />

      <div>
        <p className="font-medium text-white">
          Cairo
        </p>

        <p className="text-sm text-gray-400">
          Egypt
        </p>
      </div>
    </div>

    {/* Abu Dhabi */}
    <div className="flex items-start gap-3">
      <MapPin
        size={18}
        className="mt-1 shrink-0 text-orange-500"
      />

      <div>
        <p className="font-medium text-white">
          Abu Dhabi
        </p>

        <p className="text-sm text-gray-400">
          United Arab Emirates
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-3">
      <Mail
        size={18}
        className="shrink-0 text-orange-500"
      />

      <span>
        info@globalcommoditiesllc.com
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3">
      <Phone
        size={18}
        className="shrink-0 text-orange-500"
      />

      <span>
        +20 106 943 3125
      </span>
    </div>

  </div>

</div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Global Commodities LLC.

          {" "}

          {t("copyright")}

        </div>

      </div>
    </footer>
  );
}