"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface MatchInputProps {
  currentId: string;
  currentType: "applicant" | "company";
}

export default function MatchInput({ currentId, currentType }: MatchInputProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const otherType = currentType === "applicant" ? "企業" : "応募者";
  const placeholder = currentType === "applicant"
    ? "企業の診断結果IDまたはURL"
    : "応募者の診断結果IDまたはURL";

  const extractId = (value: string): string | null => {
    const trimmed = value.trim();

    // UUID format
    const uuidRegex =
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
    const match = trimmed.match(uuidRegex);
    if (match) return match[0];

    return null;
  };

  const handleMatch = () => {
    const otherId = extractId(inputValue);
    if (!otherId) {
      setError("有効なIDまたはURLを入力してください");
      return;
    }

    const params =
      currentType === "applicant"
        ? `applicant=${currentId}&company=${otherId}`
        : `applicant=${otherId}&company=${currentId}`;

    router.push(`/diagnosis/match?${params}`);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6">
      <h3 className="text-base font-bold text-[#1A2B4A] mb-2">
        カルチャーマッチング
      </h3>
      <p className="text-xs text-[#95A5A6] mb-4">
        {otherType}の診断結果IDを入力して、カルチャーの相性を確認できます
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (error) setError("");
          }}
          placeholder={placeholder}
          className={`flex-1 px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-[#E1E5EB] focus:border-[#2ABFBF]"
          }`}
        />
        <button
          onClick={handleMatch}
          disabled={!inputValue.trim()}
          className="bg-[#2ABFBF] text-white font-medium px-5 py-2.5 rounded-md hover:opacity-85 active:scale-[0.97] transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          マッチング
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}

      <div className="mt-3 p-3 bg-[#F5F7FA] rounded-lg">
        <p className="text-[11px] text-[#95A5A6]">
          あなたの診断結果ID:
        </p>
        <p className="text-xs text-[#1A2B4A] font-mono mt-0.5 break-all">
          {currentId}
        </p>
      </div>
    </div>
  );
}
