"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-indigo-200 transition-colors">
            Claude Code Web
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className={`hover:text-indigo-200 transition-colors ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/features"
              className={`hover:text-indigo-200 transition-colors ${
                isActive("/features") ? "border-b-2 border-white" : ""
              }`}
            >
              機能
            </Link>
            <Link
              href="/tips"
              className={`hover:text-indigo-200 transition-colors ${
                isActive("/tips") ? "border-b-2 border-white" : ""
              }`}
            >
              Tips
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
