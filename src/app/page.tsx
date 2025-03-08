'use client';

import { FaBookOpen, FaHeadphones, FaSearch, FaHistory, FaChartLine, FaDownload, FaGamepad } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import HowToUseStep from '@/components/HowToUseStep';
import WhyChooseCard from '@/components/WhyChooseCard';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import ImageTabView from '@/components/ImageTabView';

export default function Home() {
  const { theme } = useTheme();
  
  // Images for the How to Use section
  const howToUseImages1 = [
    {
      src: "/images/image4.png",
      alt: "アプリの使い方 1",
      width: 600,
      height: 800
    },
    {
      src: "/images/image7.png",
      alt: "アプリの使い方 2",
      width: 600,
      height: 800
    },
    {
      src: "/images/image10.png",
      alt: "アプリの使い方 3",
      width: 600,
      height: 800
    }
  ];
  
  const howToUseImages2 = [
    {
      src: "/images/image5.png",
      alt: "アプリの使い方 4",
      width: 600,
      height: 800
    },
    {
      src: "/images/image8.png",
      alt: "アプリの使い方 5",
      width: 600,
      height: 800
    },
    {
      src: "/images/image9.png",
      alt: "アプリの使い方 6",
      width: 600,
      height: 800
    }
  ];
  
  // Images for the Why Choose section
  const whyChooseImages = [
    {
      src: "/images/image6.png",
      alt: "進捗追跡 1",
      width: 600,
      height: 400
    },
    {
      src: "/images/image3.png",
      alt: "進捗追跡 2",
      width: 600,
      height: 400
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
        
        <div className="container mx-auto px-4 relative z-10">
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
              title="復習機能"
              description="調べたフレーズを自動で記録し、記事を復習プレイリストに追加できるよ。"
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
                  様々なレベルの読み物を用意しています。初心者から上級者まで、自分のレベルに合った内容で英語を学べます。
                </p>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> 日常会話
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> 旅行英語
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> ビジネス英語
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-violet">✓</span> 文化と習慣
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
                <Image
                  src="/images/image2.png"
                  alt="アプリ内の読み物"
                  width={600}
                  height={400}
                  className="w-full h-auto"
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
                <Image
                  src="/images/image3.png"
                  alt="単語の定義"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="order-1 md:order-2">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>タップで単語の意味を確認</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  知らない単語があれば、タップするだけで意味を確認できます。読書の流れを中断することなく、スムーズに学習を続けられます。
                </p>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 日本語の意味をすぐに確認
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 例文で使い方を理解
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 自動で単語を記録
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">✓</span> 復習リストに追加
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className={`py-20 ${theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
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
        
        <div className="container mx-auto px-4 relative z-10">
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
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>「とにかく聞いてね」をダウンロード</h2>
            <p className={`mb-8 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              英語学習の新しい旅を始めよう。読んで、聞いて、英語を理解する喜びを味わおう！
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <motion.a
                href="#"
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-brand-violet to-brand-violet/80' : 'bg-gradient-to-br from-brand-violet to-brand-violet/90'} text-white font-semibold text-lg shadow-lg ${theme === 'dark' ? 'shadow-brand-violet/30' : 'shadow-brand-violet/20'} hover:shadow-xl hover:shadow-brand-violet/40 transition-all duration-300 border border-white/10`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                  <path d="M17.5,1H6.5C3.4,1,1,3.4,1,6.5v11C1,20.6,3.4,23,6.5,23h11c3.1,0,5.5-2.4,5.5-5.5v-11C23,3.4,20.6,1,17.5,1z M12,18.8 c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2 c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.2 c0-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0 c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.1,0.2,0.2 c0.1,0.1,0.1,0.2,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.1,0.2 c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1C12.2,18.8,12.1,18.8,12,18.8z M8.7,4.9c-0.2,0.2-0.3,0.5-0.3,0.9c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.9,0.3c0.3,0,0.6-0.1,0.8-0.3C10.6,6.4,10.7,6.1,10.7,5.8 c0-0.3-0.1-0.6-0.3-0.8C10.2,4.7,9.9,4.6,9.5,4.6C9.2,4.6,8.9,4.7,8.7,4.9z M9,8.2v7.6h1.1V8.2H9z M13.8,8.2h-1.1v7.6h1.1v-4 c0-0.5,0.1-0.8,0.2-1.1c0.1-0.3,0.3-0.5,0.6-0.6c0.2-0.1,0.5-0.2,0.8-0.2c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.4,0.8,0.4,1.5v3.9h1.1v-4.2 c0-0.5-0.1-0.9-0.2-1.3c-0.1-0.4-0.3-0.7-0.6-0.9c-0.3-0.2-0.6-0.4-0.9-0.5c-0.4-0.1-0.8-0.2-1.2-0.2c-0.3,0-0.6,0-0.9,0.1 c-0.3,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.4,0.3-0.5,0.5c-0.1,0.2-0.2,0.4-0.3,0.6V8.2z"></path>
                </svg>
                <span>LinkedIn でダウンロード</span>
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
                <span>近日公開</span>
                
              </motion.a>
              
              <motion.div 
                className="mt-4 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`text-center md:text-left ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  <p>* アプリストアでも近日公開予定</p>
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
              <div className={`relative w-[280px] h-[560px] ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-gray-100 border-gray-300'} rounded-[40px] border-4 overflow-hidden shadow-2xl`}>
                <div className={`absolute top-0 left-0 right-0 h-6 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} rounded-t-[30px] flex justify-center items-end pb-1`}>
                  <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-full`}></div>
                </div>
                <div className="w-full h-full flex items-center justify-center pt-4">
                  <Image
                    src="/images/ss4.jpeg"
                    alt="とに聞くアプリのスクリーンショット"
                    width={280}
                    height={560}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
