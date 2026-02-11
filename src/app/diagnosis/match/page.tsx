"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Character from "@/components/Character";
import SpeechBubble from "@/components/SpeechBubble";
import TypeCard from "@/components/TypeCard";
import OverlayRadarChart from "@/components/OverlayRadarChart";
import AxisComparison from "@/components/AxisComparison";
import MatchScoreDisplay from "@/components/MatchScoreDisplay";
import { CULTURE_TYPES } from "@/data/cultureTypes";
import { DiagnosisRow } from "@/types/database";
import { DiagnosisResult } from "@/types";
import {
  calculateMatchScore,
  analyzeAxisDifferences,
  getCompatibilityText,
  AxisDifference,
  CompatibilityInfo,
} from "@/lib/matching";
import { motion } from "framer-motion";

interface MatchData {
  applicantResult: DiagnosisResult;
  companyResult: DiagnosisResult;
  matchScore: number;
  compatibility: CompatibilityInfo;
  differences: AxisDifference[];
}

function MatchContent() {
  const searchParams = useSearchParams();
  const applicantId = searchParams.get("applicant");
  const companyId = searchParams.get("company");

  const [matchData, setMatchData] = useState<MatchData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!applicantId || !companyId) {
      setError("応募者と企業の両方の診断IDが必要です");
      setLoading(false);
      return;
    }

    Promise.all([
      fetch(`/api/diagnosis/${applicantId}`).then((r) => {
        if (!r.ok) throw new Error("applicant");
        return r.json();
      }),
      fetch(`/api/diagnosis/${companyId}`).then((r) => {
        if (!r.ok) throw new Error("company");
        return r.json();
      }),
    ])
      .then(([applicantRow, companyRow]: [DiagnosisRow, DiagnosisRow]) => {
        const aMainType = CULTURE_TYPES.find(
          (t) => t.key === applicantRow.main_type
        );
        const aSubType = CULTURE_TYPES.find(
          (t) => t.key === applicantRow.sub_type
        );
        const cMainType = CULTURE_TYPES.find(
          (t) => t.key === companyRow.main_type
        );
        const cSubType = CULTURE_TYPES.find(
          (t) => t.key === companyRow.sub_type
        );

        if (!aMainType || !aSubType || !cMainType || !cSubType) {
          throw new Error("type");
        }

        const applicantResult: DiagnosisResult = {
          scores: applicantRow.scores,
          mainType: aMainType,
          subType: aSubType,
        };
        const companyResult: DiagnosisResult = {
          scores: companyRow.scores,
          mainType: cMainType,
          subType: cSubType,
        };

        const matchScore = calculateMatchScore(
          applicantRow.scores,
          companyRow.scores
        );
        const compatibility = getCompatibilityText(matchScore);
        const differences = analyzeAxisDifferences(
          applicantRow.scores,
          companyRow.scores
        );

        setMatchData({
          applicantResult,
          companyResult,
          matchScore,
          compatibility,
          differences,
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "applicant") {
          setError("応募者の診断データが見つかりませんでした");
        } else if (err.message === "company") {
          setError("企業の診断データが見つかりませんでした");
        } else {
          setError("データの取得に失敗しました");
        }
        setLoading(false);
      });
  }, [applicantId, companyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center">
        <Character size={100} expression="thinking" />
        <p className="mt-4 text-[#636E72] text-sm">マッチング分析中...</p>
      </div>
    );
  }

  if (error || !matchData) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center">
        <Character size={120} expression="neutral" />
        <p className="mt-4 text-[#636E72]">{error || "エラーが発生しました"}</p>
        <Link
          href="/"
          className="mt-4 text-[#2ABFBF] hover:underline text-sm"
        >
          トップに戻る
        </Link>
      </div>
    );
  }

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
          <Character size={100} expression="excited" />
          <div className="pt-4">
            <SpeechBubble text="マッチング結果が出たよ！" />
          </div>
        </motion.div>

        {/* Match Score */}
        <div className="mb-8">
          <MatchScoreDisplay
            score={matchData.matchScore}
            compatibility={matchData.compatibility}
          />
        </div>

        {/* Side-by-side Type Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <div>
            <p className="text-xs text-[#2ABFBF] font-medium mb-2 text-center">
              応募者
            </p>
            <TypeCard
              mainType={matchData.applicantResult.mainType}
              subType={matchData.applicantResult.subType}
            />
          </div>
          <div>
            <p className="text-xs text-[#9B59B6] font-medium mb-2 text-center">
              企業
            </p>
            <TypeCard
              mainType={matchData.companyResult.mainType}
              subType={matchData.companyResult.subType}
            />
          </div>
        </motion.div>

        {/* Overlay Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6 mb-8"
        >
          <h3 className="text-base font-bold text-[#1A2B4A] mb-4 text-center">
            カルチャースコア比較
          </h3>
          <OverlayRadarChart
            applicantScores={matchData.applicantResult.scores}
            companyScores={matchData.companyResult.scores}
          />
        </motion.div>

        {/* Axis Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <h3 className="text-base font-bold text-[#1A2B4A] mb-4">
            軸ごとの比較
          </h3>
          <AxisComparison differences={matchData.differences} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                const url = window.location.href;
                if (typeof navigator !== "undefined" && navigator.share) {
                  navigator.share({
                    title: "CultureFit マッチング結果",
                    text: `カルチャーマッチ度: ${Math.round(matchData.matchScore * 100)}%`,
                    url,
                  });
                } else {
                  navigator.clipboard.writeText(url);
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
              トップに戻る
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

export default function MatchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
          <Character size={100} expression="thinking" />
        </div>
      }
    >
      <MatchContent />
    </Suspense>
  );
}
