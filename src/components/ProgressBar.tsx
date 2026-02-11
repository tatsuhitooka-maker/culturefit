"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1 px-1">
        <span className="text-xs text-[#636E72]">
          Q{current + 1} / {total}
        </span>
        <span className="text-xs text-[#636E72]">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-[#E1E5EB] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#2ABFBF] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
