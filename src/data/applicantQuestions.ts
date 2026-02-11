import { Question } from "@/types";

export const APPLICANT_QUESTIONS: Question[] = [
  // 【裁量度】autonomy (Q1-Q4)
  {
    id: 1, axis: "autonomy", categoryLabel: "裁量度について",
    text: "仕事の進め方について、最も近いものを選んでください。",
    options: [
      { text: "明確なマニュアルやルールに沿って進めたい", score: 20 },
      { text: "基本的な方針があれば、細部は自分で判断したい", score: 50 },
      { text: "大きな方向性だけ決まっていれば十分", score: 75 },
      { text: "目標だけ与えてもらえれば、やり方は完全に自分で決めたい", score: 95 },
    ],
  },
  {
    id: 2, axis: "autonomy", categoryLabel: "裁量度について",
    text: "上司からの指示について、理想に近いのは？",
    options: [
      { text: "具体的なタスクと手順を細かく指示してほしい", score: 20 },
      { text: "ゴールと優先順位を示してくれれば、あとは任せてほしい", score: 60 },
      { text: "方向性だけ共有してくれれば、自分で計画を立てたい", score: 80 },
      { text: "基本的に自分で課題を見つけて動きたい", score: 95 },
    ],
  },
  {
    id: 3, axis: "autonomy", categoryLabel: "裁量度について",
    text: "新しいプロジェクトが始まるとき、あなたはどうしたいですか？",
    options: [
      { text: "先輩や上司の指示を待ってから動きたい", score: 20 },
      { text: "既存のやり方を参考にしつつ、必要に応じてアレンジしたい", score: 45 },
      { text: "チームで議論しつつ、自分から提案もしていきたい", score: 70 },
      { text: "自ら企画を立ち上げ、周囲を巻き込んで進めたい", score: 95 },
    ],
  },
  {
    id: 4, axis: "autonomy", categoryLabel: "裁量度について",
    text: "ルールや規定について、あなたの考えに近いのは？",
    options: [
      { text: "ルールはしっかり整備されていて、全員が守るべき", score: 20 },
      { text: "基本ルールは必要だが、例外も柔軟に認めるべき", score: 50 },
      { text: "最低限のガイドラインだけで、あとは個人の判断でよい", score: 75 },
      { text: "ルールは少ないほど良い。自律的に動ける環境がベスト", score: 95 },
    ],
  },
  // 【組織構造】structure (Q5-Q8)
  {
    id: 5, axis: "structure", categoryLabel: "組織構造について",
    text: "社内の肩書きや役職について、どう思いますか？",
    options: [
      { text: "役職や上下関係は秩序のために重要", score: 20 },
      { text: "役職はあってもいいが、意見は立場に関係なく言えるべき", score: 55 },
      { text: "役職はあまり意識せず、プロジェクト単位で動くのが理想", score: 75 },
      { text: "肩書きは不要。全員がフラットに議論できる環境がいい", score: 95 },
    ],
  },
  {
    id: 6, axis: "structure", categoryLabel: "組織構造について",
    text: "意思決定のプロセスとして理想的なのは？",
    options: [
      { text: "経営陣やマネージャーが明確に方針を決めて伝える", score: 20 },
      { text: "上が方針を示し、現場の意見も取り入れて微調整する", score: 45 },
      { text: "チーム全体で議論して、合意形成で決める", score: 70 },
      { text: "担当者が自分の判断で意思決定し、事後報告でOK", score: 95 },
    ],
  },
  {
    id: 7, axis: "structure", categoryLabel: "組織構造について",
    text: "他部署の人とのコミュニケーションについて、理想は？",
    options: [
      { text: "正式なルートや手続きを通して連携する", score: 20 },
      { text: "必要があればメールや会議で依頼する", score: 40 },
      { text: "気軽にチャットや口頭で相談できる", score: 70 },
      { text: "部署の壁はなく、誰にでも直接アクセスできる", score: 95 },
    ],
  },
  {
    id: 8, axis: "structure", categoryLabel: "組織構造について",
    text: "経営情報（業績・戦略・課題）について、どの程度知りたいですか？",
    options: [
      { text: "自分の業務に関係する範囲だけ知れれば十分", score: 20 },
      { text: "チームや部署全体の状況は把握したい", score: 45 },
      { text: "全社の業績や方向性は定期的に共有してほしい", score: 70 },
      { text: "経営会議の内容も含め、可能な限りオープンであるべき", score: 95 },
    ],
  },
  // 【スピード感】speed (Q9-Q12)
  {
    id: 9, axis: "speed", categoryLabel: "スピード感について",
    text: "プロジェクトの進め方で、あなたに合うのは？",
    options: [
      { text: "しっかり計画を立て、リスクを潰してから着手する", score: 20 },
      { text: "ある程度計画したら着手し、途中で軌道修正する", score: 50 },
      { text: "最低限の計画で走り出し、素早くフィードバックを得る", score: 75 },
      { text: "まずやってみる。走りながら考える", score: 95 },
    ],
  },
  {
    id: 10, axis: "speed", categoryLabel: "スピード感について",
    text: "会議について、理想に近いのは？",
    options: [
      { text: "事前準備を十分にし、じっくり議論して結論を出す", score: 20 },
      { text: "要点を絞って効率的に進め、45分以内に終わらせる", score: 55 },
      { text: "立ち話やチャットで即決し、会議は最小限にしたい", score: 80 },
      { text: "会議自体をなくし、非同期のテキストコミュニケーションで決めたい", score: 90 },
    ],
  },
  {
    id: 11, axis: "speed", categoryLabel: "スピード感について",
    text: "「完璧に仕上げてからリリース」と「60%でもまず出す」、どちらに共感しますか？",
    options: [
      { text: "完璧に仕上げてからでないと不安", score: 20 },
      { text: "80%くらいまで仕上げてから出したい", score: 40 },
      { text: "60%で出して、ユーザーの反応を見ながら改善したい", score: 75 },
      { text: "最低限動くものをとにかく早く出すべき", score: 95 },
    ],
  },
  {
    id: 12, axis: "speed", categoryLabel: "スピード感について",
    text: "突発的な方針変更があったとき、あなたの反応は？",
    options: [
      { text: "混乱する。もっと事前に計画を練るべき", score: 20 },
      { text: "少し戸惑うが、理由を聞けば対応できる", score: 45 },
      { text: "変化は当たり前。柔軟に対応する", score: 75 },
      { text: "むしろワクワクする。変化は成長のチャンス", score: 95 },
    ],
  },
  // 【革新性】innovation (Q13-Q16)
  {
    id: 13, axis: "innovation", categoryLabel: "革新性について",
    text: "業務改善について、あなたの姿勢は？",
    options: [
      { text: "今のやり方がうまくいっているなら変える必要はない", score: 20 },
      { text: "問題があれば改善するが、積極的には変えない", score: 40 },
      { text: "常により良い方法がないか考えている", score: 70 },
      { text: "既存のやり方を壊してでも、新しい方法を試したい", score: 95 },
    ],
  },
  {
    id: 14, axis: "innovation", categoryLabel: "革新性について",
    text: "新しいツールや技術の導入について、どう思いますか？",
    options: [
      { text: "実績のある安定したツールを使い続けたい", score: 20 },
      { text: "明確なメリットがあれば新しいツールに移行してもいい", score: 45 },
      { text: "最新のツールは積極的に試してみたい", score: 75 },
      { text: "自分で新しいツールを見つけてきてチームに提案したい", score: 95 },
    ],
  },
  {
    id: 15, axis: "innovation", categoryLabel: "革新性について",
    text: "「失敗」に対する考え方で、最も近いものは？",
    options: [
      { text: "失敗はできるだけ避けるべき。事前の準備が大事", score: 20 },
      { text: "失敗は仕方ないが、同じ失敗は繰り返さないようにすべき", score: 45 },
      { text: "失敗は学びの機会。積極的にチャレンジした結果なら問題ない", score: 75 },
      { text: "失敗の数が多いほど成長できる。どんどん失敗すべき", score: 95 },
    ],
  },
  {
    id: 16, axis: "innovation", categoryLabel: "革新性について",
    text: "会社に求めるものとして、最も近いのは？",
    options: [
      { text: "安定した事業基盤と確実な将来性", score: 20 },
      { text: "堅実な成長と段階的な事業拡大", score: 40 },
      { text: "新規事業や新しいマーケットへの挑戦", score: 75 },
      { text: "業界の常識を覆すような破壊的イノベーション", score: 95 },
    ],
  },
  // 【協調性】teamwork (Q17-Q20)
  {
    id: 17, axis: "teamwork", categoryLabel: "協調性について",
    text: "成果の出し方について、あなたに合うのは？",
    options: [
      { text: "自分の専門分野で個人として成果を出したい", score: 20 },
      { text: "基本は個人で動くが、必要に応じてチームと連携する", score: 40 },
      { text: "チームで協力しながら、全員で成果を出したい", score: 70 },
      { text: "チームの成功が自分の成功。全員で喜びたい", score: 95 },
    ],
  },
  {
    id: 18, axis: "teamwork", categoryLabel: "協調性について",
    text: "困ったときの行動パターンは？",
    options: [
      { text: "まず自分で調べて解決を試みる", score: 20 },
      { text: "自分で考えた上で、必要なら相談する", score: 40 },
      { text: "早めにチームメンバーに相談する", score: 70 },
      { text: "すぐにチームに共有し、みんなで解決策を考える", score: 95 },
    ],
  },
  {
    id: 19, axis: "teamwork", categoryLabel: "協調性について",
    text: "ランチや社内イベントについて、理想は？",
    options: [
      { text: "一人で静かに過ごしたい。イベントは任意参加でよい", score: 20 },
      { text: "気の合う少人数で過ごしたい", score: 40 },
      { text: "部署の仲間とワイワイ食べるのが好き", score: 70 },
      { text: "他部署の人とも交流できる場が多いほうがいい", score: 95 },
    ],
  },
  {
    id: 20, axis: "teamwork", categoryLabel: "協調性について",
    text: "評価制度について、望ましいと思うのは？",
    options: [
      { text: "個人の成果・業績を明確に数値で評価すべき", score: 20 },
      { text: "個人成果をベースに、プロセスも評価に含めるべき", score: 45 },
      { text: "チームの成果と個人の貢献度をバランスよく見るべき", score: 70 },
      { text: "チーム全体の成果を中心に、相互フィードバックで評価すべき", score: 95 },
    ],
  },
  // 【成長環境】growth (Q21-Q24)
  {
    id: 21, axis: "growth", categoryLabel: "成長環境について",
    text: "キャリアパスについて、理想に近いのは？",
    options: [
      { text: "明確な昇進ルートがあり、着実にステップアップしたい", score: 20 },
      { text: "基本的なキャリアパスがある上で、時々チャレンジできる", score: 45 },
      { text: "自分でキャリアを設計し、社内で異動やジョブチェンジできる", score: 70 },
      { text: "キャリアは自分で切り開く。ポジションは自分で作る", score: 95 },
    ],
  },
  {
    id: 22, axis: "growth", categoryLabel: "成長環境について",
    text: "教育・研修制度について、求めるものは？",
    options: [
      { text: "体系的な研修プログラムが整備されていてほしい", score: 25 },
      { text: "基本研修があれば十分。あとはOJTで学びたい", score: 45 },
      { text: "自分で学びたいことを選べる予算や時間がほしい", score: 70 },
      { text: "研修より実戦。新しいプロジェクトにアサインしてほしい", score: 95 },
    ],
  },
  {
    id: 23, axis: "growth", categoryLabel: "成長環境について",
    text: "自分の業務範囲について、理想は？",
    options: [
      { text: "担当範囲が明確で、その中でプロフェッショナルになりたい", score: 20 },
      { text: "メインの担当はあるが、隣接領域にも関わりたい", score: 45 },
      { text: "プロジェクトごとに異なる役割を経験したい", score: 70 },
      { text: "職種の枠を超えて何でもやりたい", score: 95 },
    ],
  },
  {
    id: 24, axis: "growth", categoryLabel: "成長環境について",
    text: "上司やメンターからのフィードバックについて、理想は？",
    options: [
      { text: "定期面談で丁寧にフィードバックしてほしい", score: 30 },
      { text: "良い点と改善点をバランスよく、月1回くらいで", score: 45 },
      { text: "リアルタイムで率直なフィードバックがほしい", score: 75 },
      { text: "厳しくてもいいから、成長につながる本音のフィードバックを", score: 95 },
    ],
  },
  // 【ワークライフ】worklife (Q25-Q27)
  {
    id: 25, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "理想の働き方に最も近いのは？",
    options: [
      { text: "決まった時間にしっかり働き、定時で帰りたい", score: 90 },
      { text: "繁忙期は残業もあるが、基本は定時退社", score: 65 },
      { text: "成果さえ出せば、働く時間や場所は自由がいい", score: 50 },
      { text: "仕事が楽しければ、時間を忘れて没頭してもいい", score: 20 },
    ],
  },
  {
    id: 26, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "リモートワークについて、理想は？",
    options: [
      { text: "フルリモートで働きたい", score: 85 },
      { text: "週2〜3回は出社し、あとはリモートがいい", score: 65 },
      { text: "基本出社で、必要なときにリモートできればいい", score: 40 },
      { text: "毎日オフィスに出社して、対面で仕事したい", score: 20 },
    ],
  },
  {
    id: 27, axis: "worklife", categoryLabel: "ワークライフについて",
    text: "プライベートの時間について、会社に求めることは？",
    options: [
      { text: "休日に仕事の連絡は一切来ないでほしい", score: 90 },
      { text: "緊急時以外は連絡を控えてほしい", score: 70 },
      { text: "必要であれば多少の連絡は仕方ない", score: 40 },
      { text: "仕事とプライベートの境界はあまり気にしない", score: 20 },
    ],
  },
  // 【透明性】transparency (Q28-Q30)
  {
    id: 28, axis: "transparency", categoryLabel: "透明性について",
    text: "社内の情報共有について、理想は？",
    options: [
      { text: "自分の業務に必要な情報だけ共有されればいい", score: 20 },
      { text: "チーム内の情報は共有し、他チームの情報は必要に応じて", score: 40 },
      { text: "全社的な情報がオープンに閲覧でき、自分から取りにいける", score: 70 },
      { text: "経営の意思決定プロセスまで全社員に公開されるべき", score: 95 },
    ],
  },
  {
    id: 29, axis: "transparency", categoryLabel: "透明性について",
    text: "自分の給与や評価について、どう思いますか？",
    options: [
      { text: "給与は個人的な情報なので非公開でいい", score: 20 },
      { text: "評価基準は明確であるべきだが、個人の給与は非公開", score: 45 },
      { text: "給与テーブル（等級と範囲）は公開されていてほしい", score: 70 },
      { text: "全社員の給与が透明に公開されていてもいい", score: 95 },
    ],
  },
  {
    id: 30, axis: "transparency", categoryLabel: "透明性について",
    text: "会社の課題や問題点について、望ましい対応は？",
    options: [
      { text: "経営陣が責任を持って対処し、必要に応じて共有すればいい", score: 20 },
      { text: "大きな問題は全社に共有すべきだが、詳細は経営判断で", score: 45 },
      { text: "課題はオープンに共有し、全員で解決策を考えたい", score: 75 },
      { text: "課題も成功もすべて透明に。隠し事のない組織がいい", score: 95 },
    ],
  },
];
