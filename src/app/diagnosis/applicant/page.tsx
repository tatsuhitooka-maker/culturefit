"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import Character from "@/components/Character";
import EmailInput from "@/components/EmailInput";
import { APPLICANT_QUESTIONS } from "@/data/applicantQuestions";
import { useDiagnosis } from "@/hooks/useDiagnosis";
import { getApplicantSpeech } from "@/data/speechTexts";
import { motion } from "framer-motion";

export default function ApplicantDiagnosis() {
  const router = useRouter();
  const {
    currentQuestion,
    answers,
    answerDetails,
    answer,
    next,
    prev,
    hasAnswered,
    isLastQuestion,
    allAnswered,
  } = useDiagnosis("applicant", APPLICANT_QUESTIONS);

  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const question = APPLICANT_QUESTIONS[currentQuestion];
  const speech = getApplicantSpeech(currentQuestion);

  const handleSelect = useCallback(
    (score: number, text: string) => {
      answer(score, text);
      if (!isLastQuestion) {
        setTimeout(() => next(), 500);
      }
    },
    [answer, next, isLastQuestion]
  );

  const handleViewResult = useCallback(() => {
    setShowEmailInput(true);
  }, []);

  const handleEmailSubmit = useCallback(
    async (email: string) => {
      setIsSaving(true);
      try {
        const res = await fetch("/api/diagnosis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "applicant",
            email,
            answers,
            answer_details: answerDetails,
          }),
        });

        if (!res.ok) throw new Error("Save failed");

        const { id } = await res.json();
        setShowEmailInput(false);
        setShowLoading(true);

        setTimeout(() => {
          router.push(`/diagnosis/result/${id}`);
        }, 2500);
      } catch {
        // Fallback to legacy URL params
        const encoded = encodeURIComponent(
          JSON.stringify({ type: "applicant", answers })
        );
        setShowEmailInput(false);
        setShowLoading(true);
        setTimeout(() => {
          router.push(`/diagnosis/result?data=${encoded}`);
        }, 2500);
      } finally {
        setIsSaving(false);
      }
    },
    [answers, answerDetails, router]
  );

  if (showEmailInput) {
    return <EmailInput onSubmit={handleEmailSubmit} isLoading={isSaving} />;
  }

  if (showLoading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center">
        <Character size={120} expression="thinking" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-[#4A6B8A] font-medium"
        >
          分析中...
        </motion.p>
        <div className="mt-4 w-48 h-1.5 bg-[#E1E5EB] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#2ABFBF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header rightAction={{ label: "診断を中断する", href: "/" }} />

      <div className="max-w-4xl mx-auto px-4 pt-4 pb-8">
        <ProgressBar
          current={currentQuestion}
          total={APPLICANT_QUESTIONS.length}
        />

        <div className="mt-8">
          <QuestionCard
            question={question}
            questionIndex={currentQuestion}
            selectedScore={answers[currentQuestion]}
            onSelect={handleSelect}
            expression={speech.expression}
            speechText={speech.text}
          />
        </div>

        {/* Navigation */}
        <div className="max-w-[640px] mx-auto mt-8 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={currentQuestion === 0}
            className="text-sm text-[#636E72] hover:text-[#1A2B4A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            &larr; 前の質問
          </button>

          {isLastQuestion && allAnswered ? (
            <button
              onClick={handleViewResult}
              className="bg-[#2ABFBF] text-white font-medium px-8 py-3 rounded-md hover:opacity-85 active:scale-[0.97] transition-all"
            >
              結果を見る
            </button>
          ) : (
            <button
              onClick={next}
              disabled={!hasAnswered || isLastQuestion}
              className="text-sm text-[#636E72] hover:text-[#1A2B4A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              次の質問 &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
