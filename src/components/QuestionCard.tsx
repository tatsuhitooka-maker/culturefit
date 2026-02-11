"use client";
import { Question, Expression } from "@/types";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";
import OptionCard from "./OptionCard";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  selectedScore: number | undefined;
  onSelect: (score: number, text: string) => void;
  expression: Expression;
  speechText: string;
}

export default function QuestionCard({
  question,
  questionIndex,
  selectedScore,
  onSelect,
  expression,
  speechText,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[640px] mx-auto"
      >
        {/* Character + Speech */}
        <div className="flex items-start gap-3 mb-6">
          <Character size={80} expression={expression} />
          <div className="pt-2">
            <SpeechBubble text={speechText} />
          </div>
        </div>

        {/* Category Label */}
        <div className="mb-2">
          <span className="text-xs text-[#95A5A6] font-medium">
            {question.categoryLabel}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-lg font-bold text-[#2D3436] mb-6 leading-relaxed">
          {question.text}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <OptionCard
              key={i}
              text={option.text}
              selected={selectedScore === option.score}
              onClick={() => onSelect(option.score, option.text)}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
