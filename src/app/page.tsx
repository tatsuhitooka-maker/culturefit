"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Character from "@/components/Character";
import SpeechBubble from "@/components/SpeechBubble";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-start gap-4 mb-8">
            <Character size={160} expression="neutral" />
            <div className="pt-6">
              <SpeechBubble text="あなたに合う企業文化を見つけよう！" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-4 leading-tight">
            スキルだけじゃない。
            <br className="sm:hidden" />
            文化で選ぶ、新しい転職。
          </h1>
          <p className="text-sm text-[#636E72] max-w-md mx-auto">
            30問の診断で、あなたの価値観にマッチする
            <br />
            企業文化を8つの軸で可視化します
          </p>
        </div>

        {/* Diagnosis Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Applicant Card */}
          <div className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm hover:shadow-lg transition-shadow duration-200 p-6">
            <div className="text-center mb-4">
              <div className="w-14 h-14 bg-[#E8F8F8] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#1A2B4A] mb-2">応募者用診断</h2>
              <p className="text-sm text-[#636E72] leading-relaxed">
                転職を検討中の方向け。
                <br />
                あなたの価値観を可視化
              </p>
            </div>
            <p className="text-xs text-[#95A5A6] text-center mb-4">
              所要時間：約5分
            </p>
            <Link
              href="/diagnosis/applicant"
              className="block w-full text-center bg-[#2ABFBF] text-white font-medium py-3 rounded-md hover:opacity-85 active:scale-[0.97] transition-all"
            >
              診断を始める →
            </Link>
          </div>

          {/* Company Card */}
          <div className="bg-white rounded-xl border border-[#E1E5EB] shadow-sm hover:shadow-lg transition-shadow duration-200 p-6">
            <div className="text-center mb-4">
              <div className="w-14 h-14 bg-[#E8F8F8] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#1A2B4A] mb-2">企業用診断</h2>
              <p className="text-sm text-[#636E72] leading-relaxed">
                採用担当者・経営者向け。
                <br />
                御社のカルチャーを可視化
              </p>
            </div>
            <p className="text-xs text-[#95A5A6] text-center mb-4">
              所要時間：約5分
            </p>
            <Link
              href="/diagnosis/company"
              className="block w-full text-center bg-[#2ABFBF] text-white font-medium py-3 rounded-md hover:opacity-85 active:scale-[0.97] transition-all"
            >
              診断を始める →
            </Link>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-[#1A2B4A] text-center mb-8">
            診断の流れ
          </h3>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { step: "1", label: "30問に回答", icon: "📝" },
              { step: "2", label: "AI分析", icon: "🔍" },
              { step: "3", label: "タイプ&スコア表示", icon: "📊" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#E8F8F8] rounded-full flex items-center justify-center mx-auto mb-2 text-xl">
                  {item.icon}
                </div>
                <p className="text-xs font-medium text-[#4A6B8A]">
                  STEP {item.step}
                </p>
                <p className="text-xs text-[#636E72] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-[#E1E5EB]">
          <p className="text-xs text-[#95A5A6]">
            &copy; 2024 CultureFit. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
