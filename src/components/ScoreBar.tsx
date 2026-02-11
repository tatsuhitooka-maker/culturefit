"use client";
import { motion } from "framer-motion";

interface ScoreBarProps {
  label: string;
  score: number;
  lowLabel: string;
  highLabel: string;
  index: number;
}

function getBarColor(score: number): string {
  if (score >= 80) return "#27AE60";
  if (score >= 60) return "#2ABFBF";
  if (score >= 40) return "#F39C12";
  return "#95A5A6";
}

export default function ScoreBar({
  label,
  score,
  lowLabel,
  highLabel,
  index,
}: ScoreBarProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-[#2D3436]">{label}</span>
        <span
          className="text-sm font-bold"
          style={{ color: getBarColor(score), fontFamily: "'Inter', sans-serif" }}
        >
          {score}/100
        </span>
      </div>
      <div className="w-full h-3 bg-[#E1E5EB] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: getBarColor(score) }}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-[#95A5A6]">{lowLabel}</span>
        <span className="text-[10px] text-[#95A5A6]">{highLabel}</span>
      </div>
    </div>
  );
}
