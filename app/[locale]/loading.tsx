import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-950">

      <div className="flex flex-col items-center">

        <Image
          src="/images/logo/logo3.png"
          alt="Global Commodities"
          width={90}
          height={90}
          priority
          className="animate-pulse"
        />

        <h2 className="mt-6 text-2xl font-bold text-[#0B4EA2]">
          Global Commodities
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Loading...
        </p>

        <div className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-[#F97316]" />
        </div>

      </div>

    </div>
  );
}