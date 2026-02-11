import { AxisScores, CultureType } from "@/types";
import { AXES } from "@/data/axes";
import { CULTURE_TYPES } from "@/data/cultureTypes";

export function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}

export function determineType(scores: AxisScores): {
  main: CultureType;
  sub: CultureType;
} {
  const userVector = AXES.map((axis) => scores[axis.key] || 0);

  const similarities = CULTURE_TYPES.map((type) => ({
    type,
    similarity: cosineSimilarity(userVector, type.idealVector),
  }));

  similarities.sort((a, b) => b.similarity - a.similarity);

  return {
    main: similarities[0].type,
    sub: similarities[1].type,
  };
}
