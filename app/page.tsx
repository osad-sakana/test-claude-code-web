import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Claude Code Web
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            ブラウザで使える強力なAIコーディングアシスタント
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Claude Code Web版は、ブラウザ上で動作するインタラクティブなAI開発ツールです。
            コーディング、デバッグ、リファクタリングなど、あらゆる開発タスクをサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/features"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              機能を見る
            </Link>
            <Link
              href="/tips"
              className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl border border-indigo-200 dark:border-indigo-800"
            >
              Tipsを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          主な特徴
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              ブラウザベース
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              インストール不要。ブラウザさえあればどこでもアクセス可能。クラウド上でシームレスに動作します。
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              高速レスポンス
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              最新のClaude AIモデルを使用し、素早く正確なコード提案とサポートを提供します。
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              多機能ツール
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ファイル操作、検索、編集、Bashコマンド実行など、開発に必要なツールが統合されています。
            </p>
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-slate-800 rounded-3xl my-16 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          始め方
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                Claude.aiにアクセス
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ブラウザでclaude.aiを開き、アカウントにログインします。
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                プロジェクトを作成
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                新しいプロジェクトを作成し、ファイルをアップロードまたは作成します。
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                開発を開始
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Claudeに指示を出してコーディング、デバッグ、最適化を始めましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          さらに詳しく知る
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Claude Code Web版の全機能とTipsをチェックして、生産性を最大化しましょう。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/features"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            全機能を見る
          </Link>
          <Link
            href="/tips"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            実用的なTipsを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
