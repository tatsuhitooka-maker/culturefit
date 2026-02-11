"use client";
import { useState } from "react";
import Character from "@/components/Character";
import SpeechBubble from "@/components/SpeechBubble";
import { motion } from "framer-motion";

interface EmailInputProps {
  onSubmit: (email: string) => void;
  isLoading: boolean;
}

export default function EmailInput({ onSubmit, isLoading }: EmailInputProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.trim()) {
      setError("メールアドレスを入力してください");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("正しいメールアドレスを入力してください");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(email.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center px-4"
    >
      <div className="max-w-md w-full">
        {/* Character + Speech */}
        <div className="flex items-start gap-3 justify-center mb-8">
          <Character size={100} expression="happy" />
          <div className="pt-4">
            <SpeechBubble text="診断が完了したよ！結果を送るからメールアドレスを教えてね！" />
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm p-6">
            <h3 className="text-base font-bold text-[#1A2B4A] mb-2 text-center">
              メールアドレスを入力
            </h3>
            <p className="text-xs text-[#95A5A6] text-center mb-6">
              診断結果の確認・保存に使用します
            </p>

            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="example@email.com"
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
                  error
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#E1E5EB] focus:border-[#2ABFBF]"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-500 mt-1.5">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2ABFBF] text-white font-medium py-3 rounded-md hover:opacity-85 active:scale-[0.97] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "保存中..." : "結果を見る"}
            </button>
          </div>

          <p className="text-[10px] text-[#B2BEC3] text-center mt-3">
            入力いただいたメールアドレスは診断結果の管理にのみ使用します
          </p>
        </form>
      </div>
    </motion.div>
  );
}
