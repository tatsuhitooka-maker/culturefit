"use client";
import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { AxisScores } from "@/types";
import { AXES } from "@/data/axes";

interface OverlayRadarChartProps {
  applicantScores: AxisScores;
  companyScores: AxisScores;
}

export default function OverlayRadarChart({
  applicantScores,
  companyScores,
}: OverlayRadarChartProps) {
  const data = AXES.map((axis) => ({
    axis: axis.label,
    applicant: applicantScores[axis.key] || 0,
    company: companyScores[axis.key] || 0,
    fullMark: 100,
  }));

  return (
    <div className="w-full max-w-[400px] mx-auto" style={{ aspectRatio: "1" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#E1E5EB" gridType="polygon" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: "#636E72", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "#95A5A6", fontSize: 9 }}
            tickCount={6}
          />
          <Radar
            name="応募者"
            dataKey="applicant"
            stroke="#2ABFBF"
            strokeWidth={2}
            fill="#2ABFBF"
            fillOpacity={0.15}
            animationDuration={800}
            animationEasing="ease-out"
          />
          <Radar
            name="企業"
            dataKey="company"
            stroke="#9B59B6"
            strokeWidth={2}
            fill="#9B59B6"
            fillOpacity={0.15}
            animationDuration={800}
            animationEasing="ease-out"
          />
          <Legend
            wrapperStyle={{ fontSize: 12, color: "#636E72" }}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
}
