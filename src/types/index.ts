export type DiagnosisType = "applicant" | "company";

export type AxisKey = "autonomy" | "structure" | "speed" | "innovation" | "teamwork" | "growth" | "worklife" | "transparency";

export interface AxisDefinition {
  key: AxisKey;
  label: string;
  lowLabel: string;
  highLabel: string;
}

export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  axis: AxisKey;
  categoryLabel: string;
  text: string;
  options: QuestionOption[];
}

export type Expression = "neutral" | "thinking" | "happy" | "excited";

export interface CultureType {
  key: string;
  name: string;
  icon: string;
  description: string;
  idealVector: number[];
  strength: string;
  caution: string;
  goodFit: string;
  cautionFit: string;
}

export interface AxisScores {
  [key: string]: number;
}

export interface DiagnosisState {
  type: DiagnosisType;
  currentQuestion: number;
  answers: { [questionIndex: number]: number };
  isCompleted: boolean;
}

export interface DiagnosisResult {
  scores: AxisScores;
  mainType: CultureType;
  subType: CultureType;
}
