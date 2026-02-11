"use client";
import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { AxisScores } from "@/types";
import { AXES } from "@/data/axes";

interface RadarChartProps {
  scores: AxisScores;
}

export default function RadarChartComponent({ scores }: RadarChartProps) {
  const data = AXES.map((axis) => ({
    axis: axis.label,
    score: scores[axis.key] || 0,
    fullMark: 100,
  }));

  return (
    <div className="w-full max-w-[320px] mx-auto aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar cx="50%" cy="50%" outerRadius="70%" data={data}>
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
            name="Score"
            dataKey="score"
            stroke="#2ABFBF"
            strokeWidth={2}
            fill="#2ABFBF"
            fillOpacity={0.2}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
}
