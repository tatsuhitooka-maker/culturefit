import { AxisScores, AxisDefinition } from "@/types";
import { AXES } from "@/data/axes";
import { cosineSimilarity } from "@/lib/typeClassifier";

export interface AxisDifference {
  axis: AxisDefinition;
  applicantScore: number;
  companyScore: number;
  difference: number;
  assessment: "excellent" | "good" | "caution" | "mismatch";
}

export interface CompatibilityInfo {
  label: string;
  description: string;
  color: string;
}

export function calculateMatchScore(
  applicantScores: AxisScores,
  companyScores: AxisScores
): number {
  const aVector = AXES.map((axis) => applicantScores[axis.key] || 0);
  const bVector = AXES.map((axis) => companyScores[axis.key] || 0);
  return cosineSimilarity(aVector, bVector);
}

export function analyzeAxisDifferences(
  applicantScores: AxisScores,
  companyScores: AxisScores
): AxisDifference[] {
  return AXES.map((axis) => {
    const a = applicantScores[axis.key] || 0;
    const c = companyScores[axis.key] || 0;
    const diff = Math.abs(a - c);
    let assessment: AxisDifference["assessment"];
    if (diff <= 10) assessment = "excellent";
    else if (diff <= 20) assessment = "good";
    else if (diff <= 35) assessment = "caution";
    else assessment = "mismatch";
    return {
      axis,
      applicantScore: a,
      companyScore: c,
      difference: diff,
      assessment,
    };
  });
}

export function getCompatibilityText(matchScore: number): CompatibilityInfo {
  if (matchScore >= 0.95) {
    return {
      label: "Best Match",
      description:
        "非常に高い相性です！価値観や働き方の方向性がほぼ一致しています。",
      color: "#27AE60",
    };
  }
  if (matchScore >= 0.85) {
    return {
      label: "Good Match",
      description:
        "良い相性です。多くの価値観が一致しており、円滑な協働が期待できます。",
      color: "#2ABFBF",
    };
  }
  if (matchScore >= 0.7) {
    return {
      label: "Fair Match",
      description:
        "まずまずの相性です。いくつかの違いがありますが、相互理解によって補えます。",
      color: "#F39C12",
    };
  }
  return {
    label: "Needs Discussion",
    description:
      "価値観に違いが見られます。事前にお互いの期待値をすり合わせることが大切です。",
    color: "#E74C3C",
  };
}
