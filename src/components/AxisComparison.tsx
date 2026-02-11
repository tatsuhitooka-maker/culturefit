"use client";
import { AxisDifference } from "@/lib/matching";
import { motion } from "framer-motion";

interface AxisComparisonProps {
  differences: AxisDifference[];
}

const assessmentConfig = {
  excellent: { label: "一致", color: "#27AE60", bg: "#E8F8EF" },
  good: { label: "近い", color: "#2ABFBF", bg: "#E8F8F8" },
  caution: { label: "差あり", color: "#F39C12", bg: "#FEF5E7" },
  mismatch: { label: "要確認", color: "#E74C3C", bg: "#FDEDEC" },
};

export default function AxisComparison({ differences }: AxisComparisonProps) {
  return (
    <div className="space-y-4">
      {differences.map((diff, i) => {
        const config = assessmentConfig[diff.assessment];
        return (
          <motion.div
            key={diff.axis.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-lg border border-[#E1E5EB] p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#1A2B4A]">
                {diff.axis.label}
              </span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{ color: config.color, backgroundColor: config.bg }}
              >
                {config.label}
              </span>
            </div>

            {/* Applicant bar */}
            <div className="mb-1.5">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] text-[#95A5A6]">応募者</span>
                <span className="text-[10px] font-medium text-[#2ABFBF]">
                  {diff.applicantScore}
                </span>
              </div>
              <div className="h-2 bg-[#F0F2F5] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#2ABFBF" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${diff.applicantScore}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                />
              </div>
            </div>

            {/* Company bar */}
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] text-[#95A5A6]">企業</span>
                <span className="text-[10px] font-medium text-[#9B59B6]">
                  {diff.companyScore}
                </span>
              </div>
              <div className="h-2 bg-[#F0F2F5] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#9B59B6" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${diff.companyScore}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
                />
              </div>
            </div>

            {/* Low/High labels */}
            <div className="flex justify-between mt-1">
              <span className="text-[9px] text-[#B2BEC3]">
                {diff.axis.lowLabel}
              </span>
              <span className="text-[9px] text-[#B2BEC3]">
                {diff.axis.highLabel}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
