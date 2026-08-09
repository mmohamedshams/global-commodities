import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function PrimaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
    >
      {children}
    </Link>
  );
}