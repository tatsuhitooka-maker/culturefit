import { Question } from "@/types";

export const COMPANY_QUESTIONS: Question[] = [
  // 【裁量度】autonomy (Q1-Q4)
  {
    id: 1, axis: "autonomy", categoryLabel: "裁量度について",
    text: "社員の業務の進め方について、御社の実態は？",
    options: [
      { text: "業務マニュアルや手順書が整備されており、それに沿って進める", score: 20 },
      { text: "基本的なガイドラインはあるが、細部は社員の判断に任せている", score: 50 },
      { text: "方向性だけ示し、進め方は各自に大きく委ねている", score: 75 },
      { text: "目標設定以外は完全に個人の裁量に任せている", score: 95 },
    ],
  },
  {
    id: 2, axis: "autonomy", categoryLabel: "裁量度について",
    text: "マネージャーの役割として、御社で重視していることは？",
    options: [
      { text: "業務の進捗管理とタスクの割り振り", score: 20 },
      { text: "目標設定とメンバーのサポート", score: 45 },
      { text: "チームのビジョン共有と障害の排除", score: 70 },
      { text: "メンバーの自律を促し、必要なときだけ介入する", score: 95 },
    ],
  },
  {
    id: 3, axis: "autonomy", categoryLabel: "裁量度について",
    text: "新しい施策やアイデアの実行について、御社のプロセスは？",
    options: [
      { text: "上長の承認を経て、正式なプロセスで実行する", score: 20 },
      { text: "チーム内で合意が取れれば実行できる", score: 50 },
      { text: "担当者が判断して進め、事後報告でOKな場合が多い", score: 75 },
      { text: "社員なら誰でも新しい施策を提案・実行できる仕組みがある", score: 95 },
    ],
  },
  {
    id: 4, axis: "autonomy", categoryLabel: "裁量度について",
    text: "社内規定やルールの量について、御社の状態は？",
    options: [
      { text: "詳細な規定が網羅的に整備されている", score: 20 },
      { text: "基本的な規定はあるが、運用は柔軟", score: 50 },
      { text: "最低限のルールのみで、自律的な判断を重視", score: 75 },
      { text: "ルールは極力少なくし、都度議論で決める文化", score: 95 },
    ],
  },
  // 【組織構造】structure (Q5-Q8)
  {
    id: 5, axis: "structure", categoryLabel: "組織構造について",
    text: "御社の組織構造は、以下のどれに最も近いですか？",
    options: [
      { text: "明確な部門制・事業部制で縦のラインがはっきりしている", score: 20 },
      { text: "部門はあるが、プロジェクト単位で横の連携もある", score: 45 },
      { text: "マトリクス型やプロジェクトチーム中心の運営", score: 70 },
      { text: "役職・部門の概念が薄く、ホラクラシーやティール型に近い", score: 95 },
    ],
  },
  {
    id: 6, axis: "structure", categoryLabel: "組織構造について",
    text: "経営層と一般社員の距離感は？",
    options: [
      { text: "経営層と直接話す機会はほとんどない", score: 20 },
      { text: "全社ミーティングなどで話を聞く機会はある", score: 40 },
      { text: "質問や意見を直接伝える仕組みがある（Q&Aセッション等）", score: 70 },
      { text: "経営層と社員がフラットに日常的にコミュニケーションしている", score: 95 },
    ],
  },
  {
    id: 7, axis: "structure", categoryLabel: "組織構造について",
    text: "役職や肩書きについて、御社の方針は？",
    options: [
      { text: "明確な職位体系があり、肩書きは重要視されている", score: 20 },
      { text: "職位はあるが、日常業務では呼び捨てやさん付けが多い", score: 50 },
      { text: "肩書きは名刺上の形式で、実務上はあまり意識しない", score: 75 },
      { text: "肩書きを廃止している or 全員同じ肩書き", score: 95 },
    ],
  },
  {
    id: 8, axis: "structure", categoryLabel: "組織構造について",
    text: "部署や職種をまたいだ異動・連携について、御社の実態は？",
    options: [
      { text: "部署間の異動は稀で、専門性を深める方針", score: 20 },
      { text: "異動希望は受け付けるが、頻繁ではない", score: 40 },
      { text: "ジョブローテーションや社内公募を積極的に実施", score: 70 },
      { text: "プロジェクトベースで自由にチームを組み、部署概念が薄い", score: 95 },
    ],
  },
  // 【スピード感】speed (Q9-Q12)
  {
    id: 9, axis: "speed", categoryLabel: "スピード感について",
    text: "新規プロジェクトの意思決定スピードはどの程度ですか？",
    options: [
      { text: "複数の承認プロセスを経て、数ヶ月かけて慎重に判断する", score: 20 },
      { text: "1〜2ヶ月で意思決定し、計画を固めてから実行する", score: 40 },
      { text: "数週間で判断し、走りながら修正していく", score: 70 },
      { text: "数日以内に判断し、即実行。スピード最優先", score: 95 },
    ],
  },
  {
    id: 10, axis: "speed", categoryLabel: "スピード感について",
    text: "御社の会議文化について、最も近いのは？",
    options: [
      { text: "議題・資料を事前準備し、しっかり時間をかけて議論する", score: 20 },
      { text: "定例会議があり、効率的に進める努力をしている", score: 40 },
      { text: "会議は最小限。チャットやドキュメントベースの意思決定が多い", score: 75 },
      { text: "会議はほぼなし。非同期コミュニケーション中心", score: 95 },
    ],
  },
  {
    id: 11, axis: "speed", categoryLabel: "スピード感について",
    text: "プロダクトやサービスのリリース方針は？",
    options: [
      { text: "品質を徹底的に確認してからリリースする", score: 20 },
      { text: "主要な品質基準をクリアしたらリリースする", score: 45 },
      { text: "MVPを早期にリリースし、ユーザーフィードバックで改善", score: 75 },
      { text: "とにかく早く出す。完璧より完了を重視", score: 95 },
    ],
  },
  {
    id: 12, axis: "speed", categoryLabel: "スピード感について",
    text: "事業環境の変化への対応スピードは？",
    options: [
      { text: "慎重に分析してから対応方針を決める", score: 20 },
      { text: "影響を見極めつつ、四半期単位で戦略を見直す", score: 45 },
      { text: "月次で方針を柔軟に調整している", score: 70 },
      { text: "週次〜日次で状況に応じて即座にピボットできる", score: 95 },
    ],
  },
  // 【革新性】innovation (Q13-Q16)
  {
    id: 13, axis: "innovation", categoryLabel: "革新性について",
    text: "御社のイノベーションへの取り組みは？",
    options: [
      { text: "既存事業の効率化・改善を中心に取り組んでいる", score: 20 },
      { text: "既存事業を軸に、一部で新しい取り組みを行っている", score: 45 },
      { text: "既存事業と新規事業を並行して推進している", score: 70 },
      { text: "常に新しい事業やプロダクトの創出を最優先としている", score: 95 },
    ],
  },
  {
    id: 14, axis: "innovation", categoryLabel: "革新性について",
    text: "社員からのアイデア提案について、御社の仕組みは？",
    options: [
      { text: "提案制度は特にない", score: 20 },
      { text: "提案箱や定期的なアイデア募集がある", score: 45 },
      { text: "ハッカソンや新規事業コンテストを定期開催している", score: 70 },
      { text: "誰でもいつでもアイデアを実験でき、予算も確保されている", score: 95 },
    ],
  },
  {
    id: 15, axis: "innovation", categoryLabel: "革新性について",
    text: "失敗に対する御社のスタンスは？",
    options: [
      { text: "失敗はできるだけ防ぐ方針。事前のリスク管理を重視", score: 20 },
      { text: "失敗は仕方ないが、振り返りと再発防止を徹底する", score: 45 },
      { text: "挑戦した結果の失敗は評価する。失敗から学ぶ文化がある", score: 75 },
      { text: "「早く失敗せよ」が方針。失敗数を積極的にKPIにしている", score: 95 },
    ],
  },
  {
    id: 16, axis: "innovation", categoryLabel: "革新性について",
    text: "テクノロジーや新ツールの導入について、御社の姿勢は？",
    options: [
      { text: "実績のある安定した技術・ツールを使い続ける方針", score: 20 },
      { text: "明確なROIが見込める場合に新技術を導入する", score: 45 },
      { text: "最新技術を積極的に検証・導入する文化がある", score: 75 },
      { text: "テクノロジードリブン。常に最先端を取り入れる", score: 95 },
    ],
  },
  // 【協調性】teamwork (Q17-Q20)
  {
    id: 17, axis: "teamwork", categoryLabel: "協調性について",
    text: "御社の業績評価は、個人とチームどちらに重きを置いていますか？",
    options: [
      { text: "個人の成果・業績を明確に数値で評価する", score: 20 },
      { text: "個人成果ベースだが、チームへの貢献も加味する", score: 45 },
      { text: "チームの成果と個人の貢献度をバランスよく評価する", score: 70 },
      { text: "チームの成功を最重視。360度評価も導入している", score: 95 },
    ],
  },
  {
    id: 18, axis: "teamwork", categoryLabel: "協調性について",
    text: "社内のコミュニケーション量について、御社の実態は？",
    options: [
      { text: "必要最小限のコミュニケーションで業務を進める", score: 20 },
      { text: "業務上のやり取りが中心で、雑談は少なめ", score: 40 },
      { text: "業務以外の雑談やカジュアルなやり取りも活発", score: 70 },
      { text: "部門横断のコミュニティやイベントが多く、交流が非常に活発", score: 95 },
    ],
  },
  {
    id: 19, axis: "teamwork", categoryLabel: "協調性について",
    text: "チームビルディングや社内イベントについて、御社の取り組みは？",
    options: [
      { text: "特に実施していない", score: 20 },
      { text: "忘年会や歓迎会など、最低限のイベントはある", score: 40 },
      { text: "定期的にチームビルディング活動を実施している", score: 70 },
      { text: "合宿・社内部活・ランダムランチなど、多様な交流施策がある", score: 95 },
    ],
  },
  {
    id: 20, axis: "teamwork", categoryLabel: "協調性について",
    text: "社員同士の助け合いについて、御社の文化は？",
    options: [
      { text: "各自の業務は各自で完結するのが基本", score: 20 },
      { text: "困ったときは相談すれば助けてもらえる", score: 45 },
      { text: "お互いの業務を積極的にサポートする文化がある", score: 70 },
      { text: "ペアワークやモブワークなど、協働を前提とした働き方", score: 95 },
    ],
  },
  // 【成長環境】growth (Q21-Q24)
  {
    id: 21, axis: "growth", categoryLabel: "成長環境について",
    text: "御社の人材育成方針は？",
    options: [
      { text: "体系的な研修プログラムを整備し、段階的に育成する", score: 25 },
      { text: "基本研修＋OJTの組み合わせ", score: 40 },
      { text: "社員が自分で学びたいことを選べる自己啓発支援が充実", score: 70 },
      { text: "新しいプロジェクトへのアサインで実戦的に成長させる", score: 90 },
    ],
  },
  {
    id: 22, axis: "growth", categoryLabel: "成長環境について",
    text: "社員のキャリアパスについて、御社の方針は？",
    options: [
      { text: "明確な昇進ルートがあり、段階的にステップアップする", score: 20 },
      { text: "基本的なキャリアパスはあるが、個人の希望も考慮する", score: 45 },
      { text: "複数のキャリアパスを用意し、社員が選択できる", score: 70 },
      { text: "キャリアは社員自身が創る。ポジションの新設も歓迎", score: 95 },
    ],
  },
  {
    id: 23, axis: "growth", categoryLabel: "成長環境について",
    text: "チャレンジ（昇進・異動・新規事業）の機会について、御社の実態は？",
    options: [
      { text: "年功序列的で、チャンスは在籍年数に応じて与えられる", score: 20 },
      { text: "実力次第で、若手でもチャンスはある", score: 50 },
      { text: "手挙げ制度があり、意欲のある人にチャンスが多く回る", score: 75 },
      { text: "年齢・経験に関係なく、全員に等しくチャンスがある", score: 95 },
    ],
  },
  {
    id: 24, axis: "growth", categoryLabel: "成長環境について",
    text: "フィードバック文化について、御社の実態は？",
    options: [
      { text: "半年〜年1回の評価面談でフィードバックする", score: 20 },
      { text: "四半期ごとにフィードバック面談を実施", score: 40 },
      { text: "1on1を定期的に実施し、リアルタイムフィードバックを重視", score: 70 },
      { text: "360度フィードバックを導入、ピアフィードバックが日常的", score: 95 },
    ],
  },
  // 【ワークライフ】worklife (Q25-Q27)
  {
    id: 25, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "御社の勤務制度で、実際に運用されているものは？",
    options: [
      { text: "固定勤務時間制（9:00-18:00等）", score: 20 },
      { text: "フレックスタイム制（コアタイムあり）", score: 50 },
      { text: "フルフレックス（コアタイムなし）", score: 75 },
      { text: "裁量労働制 or 成果ベースで勤務時間の制約なし", score: 90 },
    ],
  },
  {
    id: 26, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "リモートワークの実態について、御社はどうですか？",
    options: [
      { text: "原則出社。リモートは特別な事情がある場合のみ", score: 20 },
      { text: "週1〜2回のリモートが認められている", score: 45 },
      { text: "ハイブリッド（週2〜3回出社 + リモート）", score: 65 },
      { text: "フルリモート可。出社は任意", score: 90 },
    ],
  },
  {
    id: 27, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "社員のプライベート時間への配慮について、御社の方針は？",
    options: [
      { text: "業務上必要であれば、休日や夜間の連絡もありうる", score: 20 },
      { text: "緊急時以外は営業時間内の連絡に限定している", score: 50 },
      { text: "ノー残業デーや有給取得推進など、制度的に配慮している", score: 70 },
      { text: "勤務時間外の連絡禁止を徹底。有給取得率もKPI管理", score: 95 },
    ],
  },
  // 【透明性】transparency (Q28-Q30)
  {
    id: 28, axis: "transparency", categoryLabel: "透明性について",
    text: "経営情報の共有について、御社の方針は？",
    options: [
      { text: "経営情報は役員・管理職レベルで共有する", score: 20 },
      { text: "業績のサマリーは四半期ごとに全社共有する", score: 45 },
      { text: "月次で詳細な業績・KPIを全社に公開している", score: 70 },
      { text: "リアルタイムで業績ダッシュボードを全社員に公開している", score: 95 },
    ],
  },
  {
    id: 29, axis: "transparency", categoryLabel: "透明性について",
    text: "給与・評価制度の透明性について、御社の状態は？",
    options: [
      { text: "給与は完全非公開。評価基準も明文化されていない", score: 20 },
      { text: "評価基準は明文化されているが、個別の給与は非公開", score: 45 },
      { text: "給与テーブル（等級と給与レンジ）を社内に公開している", score: 70 },
      { text: "全社員の給与を公開 or 給与決定プロセスに社員が参加できる", score: 95 },
    ],
  },
  {
    id: 30, axis: "transparency", categoryLabel: "透明性について",
    text: "社内の課題・問題共有について、御社の文化は？",
    options: [
      { text: "問題は関係者間で対処し、全社には必要に応じて報告する", score: 20 },
      { text: "大きな問題は全社ミーティング等で共有する", score: 45 },
      { text: "問題発見即共有が文化。オープンな場で議論する", score: 75 },
      { text: "インシデントレポートやポストモーテムを全社公開している", score: 95 },
    ],
  },
];
