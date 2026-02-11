"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Character from "@/components/Character";
import SpeechBubble from "@/components/SpeechBubble";
import TypeCard from "@/components/TypeCard";
import RadarChartComponent from "@/components/RadarChart";
import ScoreBar from "@/components/ScoreBar";
import MatchInput from "@/components/MatchInput";
import { AXES } from "@/data/axes";
import { DiagnosisResult, DiagnosisType } from "@/types";
import { motion } from "framer-motion";

interface DiagnosisResultViewProps {
  result: DiagnosisResult;
  diagnosisId?: string;
  diagnosisType?: DiagnosisType;
}

export default function DiagnosisResultView({
  result,
  diagnosisId,
  diagnosisType,
}: DiagnosisResultViewProps) {
  const shareUrl = diagnosisId
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/diagnosis/result/${diagnosisId}`
    : typeof window !== "undefined"
      ? window.location.href
      : "";

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header rightAction={{ label: "トップに戻る", href: "/" }} />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Character + Speech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 justify-center mb-8"
        >
          <Character size={120} expression="excited" />
          <div className="pt-4">
            <SpeechBubble text="あなたのカルチャータイプが判明しました！" />
          </div>
        </motion.div>

        {/* Type Card */}
        <div className="mb-8">
          <TypeCard mainType={result.mainType} subType={result.subType} />
        </div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6 mb-8"
        >
          <h3 className="text-base font-bold text-[#1A2B4A] mb-4 text-center">
            カルチャースコア
          </h3>
          <RadarChartComponent scores={result.scores} />
        </motion.div>

        {/* Score Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6 mb-8"
        >
          <h3 className="text-base font-bold text-[#1A2B4A] mb-6">
            軸ごとのスコア詳細
          </h3>
          {AXES.map((axis, i) => (
            <ScoreBar
              key={axis.key}
              label={axis.label}
              score={result.scores[axis.key] || 0}
              lowLabel={axis.lowLabel}
              highLabel={axis.highLabel}
              index={i}
            />
          ))}
        </motion.div>

        {/* Type Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6 mb-8"
        >
          <h3 className="text-base font-bold text-[#1A2B4A] mb-4">
            あなたの特徴
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-[#27AE60] mb-1">強み</p>
              <p className="text-sm text-[#636E72] leading-relaxed">
                {result.mainType.strength}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#F39C12] mb-1">注意点</p>
              <p className="text-sm text-[#636E72] leading-relaxed">
                {result.mainType.caution}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#2ABFBF] mb-1">
                相性の良い企業文化
              </p>
              <p className="text-sm text-[#636E72] leading-relaxed">
                {result.mainType.goodFit}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#95A5A6] mb-1">
                相性に注意が必要な企業文化
              </p>
              <p className="text-sm text-[#636E72] leading-relaxed">
                {result.mainType.cautionFit}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Matching Section */}
        {diagnosisId && diagnosisType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <MatchInput
              currentId={diagnosisId}
              currentType={diagnosisType}
            />
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.share) {
                  navigator.share({
                    title: `CultureFit - ${result.mainType.name}`,
                    text: `私のカルチャータイプは「${result.mainType.name}」でした！`,
                    url: shareUrl,
                  });
                } else {
                  navigator.clipboard.writeText(shareUrl);
                  alert("URLをコピーしました！");
                }
              }}
              className="bg-white border border-[#E1E5EB] text-[#1A2B4A] font-medium px-6 py-3 rounded-md hover:shadow-md transition-all text-sm"
            >
              結果をシェアする
            </button>
            <Link
              href="/"
              className="bg-white border border-[#E1E5EB] text-[#1A2B4A] font-medium px-6 py-3 rounded-md hover:shadow-md transition-all text-sm"
            >
              もう一度診断する
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-[#E1E5EB]">
          <p className="text-xs text-[#95A5A6]">
            &copy; 2024 CultureFit. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
