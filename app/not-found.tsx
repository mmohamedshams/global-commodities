import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-slate-950">

      <div className="max-w-2xl text-center">

        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-orange-100 p-8 dark:bg-orange-900/20">
            <SearchX
              size={80}
              className="text-[#F97316]"
            />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-[#0B4EA2]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

      </div>

    </div>
  );
}