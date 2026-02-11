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

        {/* LINE CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6 mb-8 text-center"
        >
          <p className="text-sm font-bold text-[#1A2B4A] mb-4">
            採用や離職でお悩みの方はこちら
          </p>
          <a
            href="https://entry.line.biz/start/jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white font-medium px-8 py-3 rounded-md hover:opacity-90 active:scale-[0.97] transition-all text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE公式アカウントに登録する
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
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
