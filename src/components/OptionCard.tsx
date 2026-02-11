"use client";
import { motion } from "framer-motion";

interface OptionCardProps {
  text: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}

export default function OptionCard({
  text,
  selected,
  onClick,
  index,
}: OptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[#2ABFBF] bg-[#E8F8F8]"
          : "border-[#E1E5EB] bg-white hover:border-[#4A6B8A] hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
            selected ? "border-[#2ABFBF] bg-[#2ABFBF]" : "border-[#E1E5EB]"
          }`}
        >
          {selected && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5L4 7L8 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className="text-sm text-[#2D3436] leading-relaxed">{text}</span>
      </div>
    </motion.button>
  );
}
