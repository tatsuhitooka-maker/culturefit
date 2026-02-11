"use client";
import { CultureType } from "@/types";
import { motion } from "framer-motion";

interface TypeCardProps {
  mainType: CultureType;
  subType: CultureType;
}

export default function TypeCard({ mainType, subType }: TypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl border border-[#E1E5EB] shadow-md p-6"
    >
      <div className="text-center mb-4">
        <span className="text-4xl mb-2 block">{mainType.icon}</span>
        <h2 className="text-2xl font-bold text-[#1A2B4A]">{mainType.name}</h2>
      </div>
      <p className="text-sm text-[#636E72] leading-relaxed text-center mb-4">
        {mainType.description}
      </p>
      <div className="text-center pt-3 border-t border-[#E1E5EB]">
        <span className="text-xs text-[#95A5A6]">サブタイプ：</span>
        <span className="text-sm font-medium text-[#4A6B8A]">
          {subType.icon} {subType.name}
        </span>
      </div>
    </motion.div>
  );
}
