"use client";
import { Expression } from "@/types";

interface CharacterProps {
  size?: number;
  expression?: Expression;
}

export default function Character({
  size = 100,
  expression = "neutral",
}: CharacterProps) {
  const scale = size / 100;

  const renderEyes = () => {
    switch (expression) {
      case "happy":
        return (
          <>
            <path d="M38 42 Q42 36 46 42" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M54 42 Q58 36 62 42" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case "thinking":
        return (
          <>
            <circle cx="42" cy="40" r="3.5" fill="#2D3436" />
            <circle cx="43" cy="39" r="1.2" fill="#FFFFFF" />
            <circle cx="58" cy="40" r="3.5" fill="#2D3436" />
            <circle cx="59" cy="39" r="1.2" fill="#FFFFFF" />
            <line x1="53" y1="32" x2="62" y2="34" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "excited":
        return (
          <>
            <circle cx="42" cy="40" r="4" fill="#2D3436" />
            <circle cx="43.5" cy="38.5" r="1.8" fill="#FFFFFF" />
            <circle cx="41" cy="41" r="0.8" fill="#FFFFFF" />
            <circle cx="58" cy="40" r="4" fill="#2D3436" />
            <circle cx="59.5" cy="38.5" r="1.8" fill="#FFFFFF" />
            <circle cx="57" cy="41" r="0.8" fill="#FFFFFF" />
          </>
        );
      default:
        return (
          <>
            <circle cx="42" cy="40" r="3" fill="#2D3436" />
            <circle cx="43" cy="39" r="1" fill="#FFFFFF" />
            <circle cx="58" cy="40" r="3" fill="#2D3436" />
            <circle cx="59" cy="39" r="1" fill="#FFFFFF" />
          </>
        );
    }
  };

  const renderMouth = () => {
    switch (expression) {
      case "happy":
        return (
          <path d="M44 50 Q50 57 56 50" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
        );
      case "thinking":
        return <ellipse cx="50" cy="52" rx="3" ry="2.5" fill="#2D3436" />;
      case "excited":
        return (
          <path d="M42 49 Q50 60 58 49" stroke="#2D3436" strokeWidth="2" fill="#FFFFFF" strokeLinecap="round" />
        );
      default:
        return (
          <path d="M45 50 Q50 54 55 50" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scale > 1 ? 1 : 1})` }}
    >
      <defs>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ABFBF" />
          <stop offset="100%" stopColor="#229E9E" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <line x1="50" y1="8" x2="50" y2="16" stroke="#2ABFBF" strokeWidth="2" />
      <circle cx="50" cy="6" r="3" fill="#FFD700" />

      {/* Head */}
      <circle cx="50" cy="38" r="28" fill="url(#tealGrad)" />

      {/* Face */}
      <circle cx="50" cy="40" r="23" fill="#FFF5E6" />

      {/* Cheeks */}
      <circle cx="34" cy="46" r="4" fill="#FFD1DC" opacity="0.5" />
      <circle cx="66" cy="46" r="4" fill="#FFD1DC" opacity="0.5" />

      {/* Eyes */}
      {renderEyes()}

      {/* Mouth */}
      {renderMouth()}

      {/* Body */}
      <ellipse cx="50" cy="78" rx="22" ry="14" fill="url(#tealGrad)" />

      {/* Arms */}
      <ellipse cx="24" cy="74" rx="8" ry="5" fill="url(#tealGrad)" transform="rotate(-20 24 74)" />
      <ellipse cx="76" cy="74" rx="8" ry="5" fill="url(#tealGrad)" transform="rotate(20 76 74)" />
    </svg>
  );
}
