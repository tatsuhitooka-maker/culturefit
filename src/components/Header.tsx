"use client";
import Link from "next/link";

interface HeaderProps {
  rightAction?: { label: string; href: string };
}

export default function Header({ rightAction }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#E1E5EB]">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#1A2B4A]" style={{ fontFamily: "'Inter', sans-serif" }}>
            CultureFit
          </span>
        </Link>
        {rightAction && (
          <Link
            href={rightAction.href}
            className="text-sm text-[#636E72] hover:text-[#1A2B4A] transition-colors"
          >
            {rightAction.label}
          </Link>
        )}
      </div>
    </header>
  );
}
