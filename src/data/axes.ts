import { AxisDefinition } from "@/types";

export const AXES: AxisDefinition[] = [
  { key: "autonomy", label: "裁量度", lowLabel: "ルール重視", highLabel: "自由裁量" },
  { key: "structure", label: "組織構造", lowLabel: "階層型", highLabel: "フラット" },
  { key: "speed", label: "スピード感", lowLabel: "慎重", highLabel: "スピード" },
  { key: "innovation", label: "革新性", lowLabel: "安定重視", highLabel: "変革重視" },
  { key: "teamwork", label: "協調性", lowLabel: "個人重視", highLabel: "チーム重視" },
  { key: "growth", label: "成長環境", lowLabel: "安定キャリア", highLabel: "挑戦的成長" },
  { key: "worklife", label: "ワークライフ", lowLabel: "仕事コミット", highLabel: "プライベート充実" },
  { key: "transparency", label: "透明性", lowLabel: "情報限定", highLabel: "オープン" },
];
