import { Expression } from "@/types";

interface SpeechConfig {
  text: string;
  expression: Expression;
}

export function getApplicantSpeech(questionIndex: number): SpeechConfig {
  const q = questionIndex + 1;
  if (q <= 5) return { text: "まずはウォーミングアップ！直感で選んでね", expression: "neutral" };
  if (q <= 10) return { text: "いい調子！自分に正直に答えるのがコツだよ", expression: "neutral" };
  if (q <= 15) return { text: "半分まで来たよ！もう少しがんばろう", expression: "happy" };
  if (q <= 20) return { text: "あなたのことがだんだん見えてきた…！", expression: "thinking" };
  if (q <= 25) return { text: "あと少し！精度が上がるから最後まで頑張って", expression: "neutral" };
  return { text: "ラストスパート！もうすぐ結果が出るよ！", expression: "excited" };
}

export function getCompanySpeech(questionIndex: number): SpeechConfig {
  const q = questionIndex + 1;
  if (q <= 5) return { text: "まずは御社の基本的な文化について教えてください", expression: "neutral" };
  if (q <= 10) return { text: "社内のコミュニケーションスタイルを見ていきましょう", expression: "neutral" };
  if (q <= 15) return { text: "折り返し地点です！御社の特徴が見えてきました", expression: "happy" };
  if (q <= 20) return { text: "評価や成長環境について掘り下げますね", expression: "thinking" };
  if (q <= 25) return { text: "あと少しです。より正確な結果のために丁寧にお願いします", expression: "neutral" };
  return { text: "最後のセクションです！もうすぐ完了です", expression: "excited" };
}
