import { AxisScores, Question } from "@/types";

export function calculateScores(
  answers: { [questionIndex: number]: number },
  questions: Question[]
): AxisScores {
  const axisScores: { [key: string]: number[] } = {};

  questions.forEach((q, i) => {
    if (answers[i] !== undefined) {
      if (!axisScores[q.axis]) axisScores[q.axis] = [];
      axisScores[q.axis].push(answers[i]);
    }
  });

  const result: AxisScores = {};
  Object.keys(axisScores).forEach((axis) => {
    const scores = axisScores[axis];
    result[axis] = Math.round(
      scores.reduce((a, b) => a + b, 0) / scores.length
    );
  });

  return result;
}
