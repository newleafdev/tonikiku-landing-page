'use client';

import { FaBookOpen, FaHeadphones, FaSearch, FaHistory, FaChartLine, FaDownload, FaGamepad } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import HowToUseStep from '@/components/HowToUseStep';
import WhyChooseCard from '@/components/WhyChooseCard';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import ImageTabView from '@/components/ImageTabView';
import OptimizedImage from '@/components/OptimizedImage';
import ListeningTimeTracker from '@/components/ListeningTimeTracker';
import WeeklyListeningChart from '@/components/WeeklyListeningChart';
import { assetPath } from '@/utils/paths';

export default function Home() {
  const { theme } = useTheme();
  
  // Images for the How to Use section
  const howToUseImages1 = [
    {
      src: assetPath("/images/image5_blank.png"),
      alt: "アプリの使い方 1",
      width: 450,
      height: 600
    },
    {
      src: assetPath("/images/image1_blank.png"),
      alt: "アプリの使い方 2",
      width: 450,
      height: 600
    },
    {
      src: assetPath("/images/image4_blank.png"),
      alt: "アプリの使い方 3",
      width: 450,
      height: 600
    }
  ];
  
  const howToUseImages2 = [
    {
      src: assetPath("/images/image2_blank.png"),
      alt: "アプリの使い方 4",
      width: 450,
      height: 600
    },
    {
      src: assetPath("/images/playlist.jpeg"),
      alt: "アプリの使い方 5",
      width: 450,
      height: 600
    }
  ];
  
  // Images for the Why Choose section
  const whyChooseImages = [
    {
      src: assetPath("/images/image7_blank.png"),
      alt: "進捗追跡 1",
      width: 450,
      height: 300
    },
    {
      src: assetPath("/images/image8_blank.png"),
      alt: "進捗追跡 2",
      width: 450,
      height: 300
    }
  ];
  
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-violet/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>主な特徴</h2>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              とに聞くアプリは、英語学習を楽しく効果的にするための機能が満載です。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="レベルに合わせた読み物"
              description="自分のレベルに合ったコンテンツから始めよう。だんだん難しいものに挑戦して、どんどん上達できるよ。"
              icon={<FaBookOpen />}
              delay={0.1}
            />
            <FeatureCard
              title="ワンタップで定義"
              description="知らない単語が出てきたら、タップするだけで、すぐにわかりやすい定義が見られるよ。"
              icon={<MdTouchApp />}
              delay={0.2}
            />
            <FeatureCard
              title="音声ナレーション"
              description="ネイティブスピーカーがテキストを読み上げる音声を聞けるよ。発音やイントネーション、リスニングスキルの向上にぴったり。"
              icon={<FaHeadphones />}
              delay={0.3}
            />
            <FeatureCard
              title="オーディオ復習機能"
              description="復習リストに追加した記事を、音声で聞くことができるよ。どこでもいつでも英語の復習ことができますから、あなたの忙しい生活にぴったりです。"
              icon={<FaHistory />}
              delay={0.4}
            />
            <FeatureCard
              title="進捗追跡"
              description="読書時間、学んだ単語数、全体的なレベルを追跡して、モチベーションを維持しよう。"
              icon={<FaChartLine />}
              delay={0.5}
            />
            <FeatureCard
              title="オフラインアクセス"
              description="記事や定義をダウンロードして、インターネットがなくても、どこでも学習できるよ。"
              icon={<FaDownload />}
              delay={0.6}
            />
          </div>

          <AnimatedSection className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>アプリ内の読み物</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                このリーディング教材で、あなたの英語力をグッと伸ばそう！
                </p>
                <p>
                「とに聞く」の学習教材には、3つのユニークな特徴があります。
                </p>
                <br></br>
                <p>
                まず、各トピックには4つの難易度レベルがあり、簡単なものから挑戦的なものまで揃っています。これによって、自分に合ったレベルを見つけ、読んでいる内容をしっかり理解した上で、次のレベルに自信を持って挑戦できます。この仕組みなら、内容を正確に理解できるか心配することなく、言語そのものの学習に集中できます。
                </p><br></br>
                <p>
                次に、各記事は短めに作られています。新しい記事を数分で勉強して、自分の復習プレイリストに追加できます。これなら、忙しいスケジュールのちょっとした隙間時間や、英語に集中できる数分の空き時間に気軽に英語学習を組み込めます。机に座って分厚い教科書を開く必要はなく、アプリが次の記事へと自然に導いてくれるので、自分のペースで好きなだけ勉強できます。
                </p><br></br>
                <p>
                最後に、記事は日本人にとって身近なトピックで書かれています。最初のシリーズでは、たった800円で全記事にアクセスでき、すでに知っている話題を通じて英語を学べます。これにより、言語そのものに集中でき、国際交流の場で役立つスキルが身につきます。例えば、外国人と話すとき、日本の生活に興味を持った相手と会話することがよくあります。この教材なら、会話の幅を広げ、より深い話題を楽しめるようになります。
                </p><br></br>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> 自分にピッタリのレベルが見つかる！
                    4段階の難易度（簡単～挑戦的）で、理解度に合わせてステップアップ。言語学習に集中できる！
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> スキマ時間でサクッと勉強！
                    短い記事だから数分でOK。アプリで次の記事へ進めて、自分のペースで復習も簡単！
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> 日本人になじみ深い話題で学べる！
                    身近なテーマで英語をマスター。国際交流で「日本のこと」を自信を持って話せる！
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> お手軽価格でスタート！
                    初シリーズ完全アクセスがたった800円。気軽に始めて、会話の幅を広げよう！
                  </li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-2xl border border-brand-violet/20"
              >
                <OptimizedImage
                  src={assetPath("/images/image5.png")}
                  alt="アプリ内の読み物"
                  width={450}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-2xl border border-brand-orange/20 order-2 md:order-1"
              >
                <OptimizedImage
                  src={assetPath("/images/image3.png")}
                  alt="単語の定義"
                  width={450}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
              <div className="order-1 md:order-2">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>タップで単語だけではんくフレーズの意味を確認</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                この新機能「タップで単語だけでなくフレーズの意味を確認」は、皆様の語学学習を飛躍的に向上させるための素晴らしいツールです。以下に、この機能がどのように貴重な価値を提供するのか、詳しくご説明いたします。
                </p>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span>  認知負荷（短期記憶）の軽減
                  </li>
                  <p>従来の学習方法では、単語一つ一つを個別に記憶し、その意味を頭の中で組み立てる必要がありました。しかし、この新機能では、たった一回のタップでフレーズ全体の意味を瞬時に確認できます。これにより、脳が一度に処理する情報量が減少し、認知負荷が大幅に軽減されます。短期記憶に頼る負担が減ることで、より快適に学習を進めることが可能です。 </p>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 脳の自然な言語処理スキーマに適合
                  </li>
                  <p>人間の脳は、単語の羅列よりもフレーズや文脈の中で意味を理解する方が自然です。この機能は、フレーズ単位で意味を提供することで、脳の言語処理に最適化された学習体験を提供します。自然な流れで情報を吸収できるため、学習効率が向上し、ストレスなく知識が定着します。 </p>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> チャンキングによる記憶力の向上
                  </li>
                  <p>心理学に基づく「チャンキング（塊化）」の原理を活用し、単語を個別に覚えるのではなく、フレーズ単位で記憶することが可能です。たとえば、「New Year ・ Shōgatsu ・ is a ・ big holiday ・ in Japan.」のように、・（ナカグロ）で明確に区切られたフレーズをタップするだけで意味が把握でき、これが記憶の「塊」として脳に刻まれます。この方法は、単語をバラバラに覚えるよりも長期的な記憶を強化し、復習の時間を大幅に節約します。</p>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> タップ可能なフレーズの明確な区別
                  </li>
                  <p>フレーズは・（ナカグロ）で明確に区切られており、一目でタップ対象が分かります。この視覚的な区切りは、学習者がどの部分をタップすれば意味を確認できるかを直感的に理解しやすくし、操作ミスを防ぎます。シンプルで直感的なデザインにより、初心者から上級者までスムーズに利用できる点が大きな利点です。</p>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 学習の柔軟性と効率性の向上
                  </li>
                  <p>この機能は、忙しい日常生活の中でもスキマ時間に活用できる柔軟性を持っています。電車の中や休憩時間にスマートフォンでタップするだけで、深い理解が得られるため、学習のペースを自分に合わせて調整可能です。また、フレーズごとの意味確認が瞬時にできるため、従来の辞書引きや文法解析に時間をかける必要がなく、学習効率が飛躍的に向上します。</p>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Myデータは自動的に保存されますが当社はお客様の情報を収集しません</h3>
                {/* Listening Time Tracker Component */}
          <AnimatedSection className="mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    毎日の進捗を視覚的に把握
                  </h3>
                  <p className="mb-4">
                    「とにかく聞いてね」では、あなたの日々のリスニング時間を簡単に記録・可視化します。目標を設定して、日々の積み重ねを実感しましょう。
                  </p>
                  <p>
                    15分の毎日のリスニングで、あなたの英語力は着実に向上します。小さな継続が大きな変化をもたらすのです。
                  </p>
                </div>
                <div>
                  <ListeningTimeTracker goalMinutes={15} animationDuration={10} />
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Weekly Listening Chart */}
          <AnimatedSection className="mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <WeeklyListeningChart animationDuration={10} />
                </div>
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    週間の学習を追跡
                  </h3>
                  <p className="mb-4">
                    過去一週間のリスニング時間をグラフで確認できます。学習パターンを把握して、より効果的な学習計画を立てましょう。
                  </p>
                  <p>
                    曜日ごとの学習時間を比較することで、自分の学習リズムを理解し、継続的な英語力向上につなげることができます。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className={`py-20 ${theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>使い方</h2>
            <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              「とにかく聞いてね」は簡単に使えるよ。以下のステップに従って、英語学習の新しい旅を始めよう！
            </p>
          </AnimatedSection>
          
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-12">
              <HowToUseStep
                number={1}
                title="レベルを選ぶ"
                description="自分の英語力に合ったシリーズや記事を選ぼう。余裕があれば、次のレベルに挑戦して、スキルの向上を体感してみて！"
                icon={<FaGamepad />}
                delay={0.1}
              />
              <HowToUseStep
                number={2}
                title="読み始める"
                description="記事に没頭しよう。現在、日本の典型的な一年を通じた日常生活についての記事シリーズを提供しているよ。"
                icon={<FaBookOpen />}
                delay={0.2}
              />
              <HowToUseStep
                number={3}
                title="定義をタップ"
                description="知らないフレーズの定義に瞬時にアクセスできるよ。単語ごとじゃなくて、意味のある塊でグループ化されているから、短期記憶への負担が減り、より速く進歩できるんだ。"
                icon={<FaSearch />}
                delay={0.3}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl border border-brand-violet/20"
            >
              <ImageTabView
                images={howToUseImages1}
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl border border-brand-orange/20 order-2 md:order-1"
            >
              <ImageTabView
                images={howToUseImages2}
                className="w-full h-auto"
              />
            </motion.div>
            <div className="space-y-12 order-1 md:order-2">
              <HowToUseStep
                number={4}
                title="聞いて学ぶ"
                description="オーディオナレーションを使って発音とリスニングスキルを向上させよう。リスニングは流暢さの基礎で、良いリスニングスキルがなければ、話すことは難しいよ！"
                icon={<FaHeadphones />}
                delay={0.4}
              />
              <HowToUseStep
                number={5}
                title="復習と強化"
                description="記事を復習プレイリストに追加して、集中して練習しよう。忙しい時でも復習できるよ！"
                icon={<FaHistory />}
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why" className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-brand-violet/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>なぜ「とにかく聞いてね」なのか？</h2>
            <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              「とにかく聞いてね」は、英語学習の新しい方法を提供します。従来の学習方法とは異なり、自然で楽しい方法で英語を習得できます。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <WhyChooseCard
              title="自然で楽しい"
              description="母国語を覚えたみたいに、文脈から学べるよ。"
              delay={0.1}
            />
            <WhyChooseCard
              title="効率的で効果的"
              description="単語ごとに訳すんじゃなくて、脳が自然に言語を処理するように、意味の塊で理解できるんだ。"
              delay={0.2}
            />
            <WhyChooseCard
              title="柔軟で便利"
              description="いつでもどこでも英語に囲まれた環境を作れるんだ。散歩中、運転中、家事をしてる時、くつろいでる時、英語の音に包まれて、ネイティブみたいに学べるよ。"
              delay={0.3}
            />
            <WhyChooseCard
              title="やる気が出る"
              description="進捗が見えるから、達成感があって、もっと頑張れるよ。努力が目に見える形で、短期的な目標をクリアしながら、言語スキルが花開くのを感じられるんだ。"
              delay={0.4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>進捗を追跡</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                学習の進捗を視覚的に確認できます。読書時間、学んだ単語数、全体的なレベルを追跡して、モチベーションを維持しましょう。
              </p>
              <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-brand-violet">✓</span> 学習時間の記録
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-violet">✓</span> 学んだ単語数の追跡
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-violet">✓</span> レベルアップシステム
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl border border-brand-violet/20"
            >
              <ImageTabView
                images={whyChooseImages}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-r from-brand-violet/20 to-brand-orange/20' : 'bg-gradient-to-r from-brand-violet/10 to-brand-orange/10'}`}>
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>「とにかく聞いてね」をダウンロード</h2>
            <p className={`mb-8 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              英語学習の新しい旅を始めよう。読んで、聞いて、英語を理解する喜びを味わおう！
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <motion.a
                href="https://apps.apple.com/jp/app/%E8%8B%B1%E8%AA%9E%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0%E3%81%AA%E3%82%89%E3%81%93%E3%82%8C-%E3%81%A8%E3%81%AB%E3%81%8B%E3%81%8F%E8%81%9E%E3%81%84%E3%81%A6%E3%81%AD/id6742870240?l=en-US"
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-brand-violet to-brand-violet/80' : 'bg-gradient-to-br from-brand-violet to-brand-violet/90'} text-white font-semibold text-lg shadow-lg ${theme === 'dark' ? 'shadow-brand-violet/30' : 'shadow-brand-violet/20'} hover:shadow-xl hover:shadow-brand-violet/40 transition-all duration-300 border border-white/10`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.63-2.17.53-3.08-.35-4.06-4.16-3.58-10.8.92-11.44 1.16-.08 2.04.41 2.95.5.89.07 1.8-.45 3.03-.37.95.07 1.77.4 2.44.93-.08.05-1.45.87-1.43 2.55.02 2.26 1.94 3.04 1.96 3.06-.05.92-.43 2.02-1.05 2.83-.82 1.11-1.72 2-3.46 1.94zM12.03 6.3c-.13-1.07.39-2.21.89-2.91.6-.82 1.66-1.45 2.52-1.49.1 1.2-.34 2.38-.9 3.24-.56.87-1.51 1.55-2.51 1.16z"/>
                </svg>
                <span>App Store でダウンロード</span>
              </motion.a>
              <motion.a
                href="#"
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-brand-orange to-brand-orange/80' : 'bg-gradient-to-br from-brand-orange to-brand-orange/90'} text-white font-semibold text-lg shadow-lg ${theme === 'dark' ? 'shadow-brand-orange/30' : 'shadow-brand-orange/20'} hover:shadow-xl hover:shadow-brand-orange/40 transition-all duration-300 border border-white/10`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                </svg>
                <span>現在公開中</span>
                
              </motion.a>
              
              <motion.div 
                className="mt-4 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`text-center md:text-left ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  <p>* Androidでも近日公開予定</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <OptimizedImage
                src={assetPath("/images/image2.png")}
                alt="とに聞くアプリのスクリーンショット"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
