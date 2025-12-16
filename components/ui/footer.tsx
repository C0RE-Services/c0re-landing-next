import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="text-center">
            <div className="mb-4">
              <Logo />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-400 mb-3">
              <Link
                className="hover:text-white transition duration-150 ease-in-out"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600" aria-hidden="true">
                •
              </span>
              <Link
                className="hover:text-white transition duration-150 ease-in-out"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-slate-300">
              © c0re.com — All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
