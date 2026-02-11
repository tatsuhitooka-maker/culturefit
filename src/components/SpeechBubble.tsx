"use client";

interface SpeechBubbleProps {
  text: string;
}

export default function SpeechBubble({ text }: SpeechBubbleProps) {
  return (
    <div className="relative bg-white rounded-2xl px-5 py-3 border border-[#E1E5EB] shadow-sm max-w-xs">
      <div className="absolute -left-2 top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-white border-b-[8px] border-b-transparent" />
      <div className="absolute -left-[10px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-[#E1E5EB] border-b-[8px] border-b-transparent" />
      <p className="text-sm text-[#2D3436] leading-relaxed">{text}</p>
    </div>
  );
}
