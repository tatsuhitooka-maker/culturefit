"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Character from "@/components/Character";
import DiagnosisResultView from "@/components/DiagnosisResultView";
import { CULTURE_TYPES } from "@/data/cultureTypes";
import { DiagnosisResult, DiagnosisType } from "@/types";
import { DiagnosisRow } from "@/types/database";

export default function ResultByIdPage() {
  const params = useParams();
  const id = params.id as string;

  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [diagnosisType, setDiagnosisType] = useState<DiagnosisType>("applicant");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/diagnosis/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: DiagnosisRow) => {
        const mainType = CULTURE_TYPES.find((t) => t.key === data.main_type);
        const subType = CULTURE_TYPES.find((t) => t.key === data.sub_type);
        if (!mainType || !subType) throw new Error("Invalid type");

        setResult({
          scores: data.scores,
          mainType,
          subType,
        });
        setDiagnosisType(data.type);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center">
        <Character size={100} expression="thinking" />
        <p className="mt-4 text-[#636E72] text-sm">読み込み中...</p>
      </div>
    );
  }

  if (error || !result) {
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

  return (
    <DiagnosisResultView
      result={result}
      diagnosisId={id}
      diagnosisType={diagnosisType}
    />
  );
}
