import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faSearch, faBolt, faCheckCircle, faGlobe, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
          Claude Code Web の機能
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          開発を加速させる強力な機能の数々
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* ファイル操作 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                ファイル操作
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Read - ファイル読み込み</h3>
                <p>任意のファイルを読み込んで内容を確認できます。コードレビューや分析に最適です。</p>
                <code className="block mt-2 bg-slate-800 text-green-400 p-2 rounded text-sm">
                  Read /path/to/file.ts
                </code>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Edit - ファイル編集</h3>
                <p>既存ファイルの部分的な編集が可能。正確な文字列置換で安全に変更できます。</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Write - ファイル作成</h3>
                <p>新しいファイルを作成したり、既存ファイルを完全に上書きできます。</p>
              </div>
            </div>
          </div>

          {/* 検索機能 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                強力な検索機能
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Glob - パターンマッチング</h3>
                <p>ファイル名パターンで高速検索。大規模なコードベースでも素早くファイルを発見できます。</p>
                <code className="block mt-2 bg-slate-800 text-green-400 p-2 rounded text-sm">
                  Glob &quot;**/*.tsx&quot;  # すべてのTSXファイル
                </code>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Grep - コンテンツ検索</h3>
                <p>ファイル内容を正規表現で検索。ripgrepベースで高速かつ柔軟な検索が可能です。</p>
                <code className="block mt-2 bg-slate-800 text-green-400 p-2 rounded text-sm">
                  Grep &quot;function\\s+\\w+&quot;  # 関数定義を検索
                </code>
              </div>
            </div>
          </div>

          {/* Bashコマンド */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Bashコマンド実行
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                ターミナルコマンドを直接実行できます。git操作、npm/yarnコマンド、ビルド、テスト実行など、
                開発に必要なあらゆるコマンドが使えます。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Git操作</h3>
                  <code className="block mt-2 bg-slate-800 text-green-400 p-2 rounded text-sm">
                    git status<br />
                    git add .<br />
                    git commit -m &quot;message&quot;
                  </code>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">パッケージ管理</h3>
                  <code className="block mt-2 bg-slate-800 text-green-400 p-2 rounded text-sm">
                    npm install<br />
                    npm run build<br />
                    npm test
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* タスク管理 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                タスク管理
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                TodoWriteツールで複雑なタスクを管理。複数ステップのタスクを整理し、
                進捗を可視化できます。
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">タスクの状態</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-mono text-sm bg-slate-800 text-yellow-400 px-2 py-1 rounded">pending</span> - 未着手</li>
                  <li><span className="font-mono text-sm bg-slate-800 text-blue-400 px-2 py-1 rounded">in_progress</span> - 作業中</li>
                  <li><span className="font-mono text-sm bg-slate-800 text-green-400 px-2 py-1 rounded">completed</span> - 完了</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web機能 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Web機能
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">WebFetch - コンテンツ取得</h3>
                <p>WebページのコンテンツをフェッチしてAI処理。ドキュメント参照や情報収集に便利です。</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">WebSearch - Web検索</h3>
                <p>最新情報を検索して回答に活用。技術トレンドや新しいライブラリの情報も取得できます。</p>
              </div>
            </div>
          </div>

          {/* AI Agent */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                専門エージェント
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Taskツールで専門エージェントを起動。複雑な探索や検索タスクを自律的に実行します。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Explore エージェント</h3>
                  <p className="text-sm">コードベースの探索に特化。素早くファイルを発見し、構造を理解します。</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">General-purpose エージェント</h3>
                  <p className="text-sm">複雑な多段階タスクに対応。リサーチから実装まで幅広く対応します。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
