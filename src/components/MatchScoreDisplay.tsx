"use client";
import { CompatibilityInfo } from "@/lib/matching";
import { motion } from "framer-motion";

interface MatchScoreDisplayProps {
  score: number; // 0-1
  compatibility: CompatibilityInfo;
}

export default function MatchScoreDisplay({
  score,
  compatibility,
}: MatchScoreDisplayProps) {
  const percentage = Math.round(score * 100);
  const circumference = 2 * Math.PI * 54; // radius=54
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-8 text-center">
      <h3 className="text-base font-bold text-[#1A2B4A] mb-6">
        カルチャーマッチ度
      </h3>

      {/* Circular Progress */}
      <div className="relative inline-flex items-center justify-center mb-6">
        <svg width="140" height="140" className="-rotate-90">
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke="#F0F2F5"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <motion.circle
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke={compatibility.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-3xl font-bold"
            style={{ color: compatibility.color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span
          className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-3"
          style={{
            color: compatibility.color,
            backgroundColor: `${compatibility.color}15`,
          }}
        >
          {compatibility.label}
        </span>
        <p className="text-sm text-[#636E72] leading-relaxed max-w-xs mx-auto">
          {compatibility.description}
        </p>
      </motion.div>
    </div>
  );
}
