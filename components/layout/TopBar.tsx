import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px]">

        {/* Contact Information */}
        <div className="flex items-center gap-5">

          {/* Phone */}
          <a
            href="tel:+201069433125"
            className="flex items-center gap-1.5 text-gray-500 transition-colors hover:text-[#F97316] dark:text-gray-400"
          >
            <Phone size={13} strokeWidth={2} />
            <span>+20 106 943 3125</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@globalcommoditiesllc.com"
            className="hidden items-center gap-1.5 text-gray-500 transition-colors hover:text-[#F97316] dark:text-gray-400 sm:flex"
          >
            <Mail size={13} strokeWidth={2} />
            <span>info@globalcommoditiesllc.com</span>
          </a>

        </div>

        {/* Social Media */}
        <div className="flex items-center gap-3">

          {/* Facebook */}
        <a
  href="https://www.facebook.com/profile.php?id=61593320767758"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
>
  <FaFacebookF size={18} />
</a>

          {/* Instagram */}
       <a
  href="#"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
>
  <FaInstagram size={18} />
</a>

<a
  href="#"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
>
  <FaLinkedinIn size={18} />
</a>

        </div>

      </div>
    </div>
  );
}