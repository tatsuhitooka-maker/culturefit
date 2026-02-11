"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import Link from "next/link";
import Character from "@/components/Character";
import DiagnosisResultView from "@/components/DiagnosisResultView";
import { APPLICANT_QUESTIONS } from "@/data/applicantQuestions";
import { COMPANY_QUESTIONS } from "@/data/companyQuestions";
import { calculateScores } from "@/lib/scoring";
import { determineType } from "@/lib/typeClassifier";
import { DiagnosisResult } from "@/types";

function ResultContent() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");

  const result: DiagnosisResult | null = useMemo(() => {
    if (!dataParam) return null;
    try {
      const parsed = JSON.parse(decodeURIComponent(dataParam));
      const questions =
        parsed.type === "company" ? COMPANY_QUESTIONS : APPLICANT_QUESTIONS;
      const scores = calculateScores(parsed.answers, questions);
      const { main, sub } = determineType(scores);
      return { scores, mainType: main, subType: sub };
    } catch {
      return null;
    }
  }, [dataParam]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center">
        <Character size={120} expression="neutral" />
        <p className="mt-4 text-[#636E72]">
          診断データが見つかりませんでした
        </p>
        <Link
          href="/"
          className="mt-4 text-[#2ABFBF] hover:underline text-sm"
        >
          トップに戻る
        </Link>
      </div>
    );
  }

  return <DiagnosisResultView result={result} />;
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
          <Character size={100} expression="thinking" />
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
