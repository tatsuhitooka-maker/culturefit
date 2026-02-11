export interface AnswerDetail {
  score: number;
  text: string;
  question: string;
}

export interface DiagnosisRow {
  id: string;
  type: "applicant" | "company";
  email: string | null;
  answers: { [questionIndex: number]: number };
  answer_details: { [questionIndex: number]: AnswerDetail } | null;
  scores: { [key: string]: number };
  main_type: string;
  sub_type: string;
  created_at: string;
}

export interface SaveDiagnosisRequest {
  type: "applicant" | "company";
  email: string;
  answers: { [questionIndex: number]: number };
  answer_details: { [questionIndex: number]: AnswerDetail };
}

export interface SaveDiagnosisResponse {
  id: string;
}
