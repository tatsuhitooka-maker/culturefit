"use client";
import { useState, useCallback } from "react";
import { DiagnosisType, Question, AxisScores, DiagnosisResult } from "@/types";
import { AnswerDetail } from "@/types/database";
import { calculateScores } from "@/lib/scoring";
import { determineType } from "@/lib/typeClassifier";

export function useDiagnosis(type: DiagnosisType, questions: Question[]) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [answerDetails, setAnswerDetails] = useState<{ [key: number]: AnswerDetail }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const answer = useCallback(
    (score: number, text?: string) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion]: score }));
      setAnswerDetails((prev) => ({
        ...prev,
        [currentQuestion]: {
          score,
          text: text || "",
          question: questions[currentQuestion].text,
        },
      }));
    },
    [currentQuestion, questions]
  );

  const next = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion, questions.length]);

  const prev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const complete = useCallback(() => {
    setIsCompleted(true);
  }, []);

  const getResult = useCallback((): DiagnosisResult | null => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) return null;

    const scores: AxisScores = calculateScores(answers, questions);
    const { main, sub } = determineType(scores);

    return {
      scores,
      mainType: main,
      subType: sub,
    };
  }, [answers, questions]);

  const hasAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = Object.keys(answers).length === questions.length;

  return {
    currentQuestion,
    answers,
    answerDetails,
    isCompleted,
    answer,
    next,
    prev,
    complete,
    getResult,
    hasAnswered,
    isLastQuestion,
    allAnswered,
    type,
  };
}
