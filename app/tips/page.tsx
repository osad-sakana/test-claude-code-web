import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faEdit, faSearchPlus, faCodeBranch, faExclamationTriangle, faBolt, faBullseye, faGem } from "@fortawesome/free-solid-svg-icons";

export default function Tips() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">
          Claude Code Web Tips
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          効率的に使うための実用的なヒント集
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* 効率的な使い方 */}
          <div className="bg-indigo-600 dark:bg-indigo-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-3xl mr-3">
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              効率的な使い方
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">明確な指示を出す</h3>
                <p className="text-sm text-white/90">
                  「このファイルを編集して」ではなく「app/page.tsxのタイトルを変更して」のように
                  具体的に指示すると、より正確な結果が得られます。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">段階的に進める</h3>
                <p className="text-sm text-white/90">
                  大きな変更は小さなステップに分割。各ステップを確認しながら進めることで、
                  エラーを早期に発見できます。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">ファイルパスを明示</h3>
                <p className="text-sm text-white/90">
                  ファイル名だけでなく、フルパスを指定すると確実です。
                  相対パスより絶対パスの方が明確です。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">コンテキストを提供</h3>
                <p className="text-sm text-white/90">
                  プロジェクトの目的や技術スタックを伝えると、より適切な提案が得られます。
                </p>
              </div>
            </div>
          </div>

          {/* ファイル操作のコツ */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faEdit} />
              </span>
              ファイル操作のコツ
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  編集前に必ずRead
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Editツールを使う前に、必ずReadツールでファイルを読み込みます。
                  これにより、正確な文字列マッチングが可能になります。
                </p>
                <div className="mt-2 bg-slate-50 dark:bg-slate-700 p-3 rounded">
                  <code className="text-xs text-gray-800 dark:text-gray-200">
                    ❌ 悪い例: いきなりEdit<br />
                    ✅ 良い例: Read → 内容確認 → Edit
                  </code>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  既存ファイルを優先
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  新しいファイルを作るより、既存ファイルの編集を優先します。
                  プロジェクト構造がシンプルに保たれます。
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  変更範囲を最小限に
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Editツールは正確な文字列置換を行います。変更する部分だけを指定し、
                  周辺のコードは触らないようにすると、エラーが減ります。
                </p>
              </div>
            </div>
          </div>

          {/* 検索テクニック */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faSearchPlus} />
              </span>
              検索テクニック
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Globパターンの活用
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <code className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                      **/*.tsx
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      全てのTSXファイルを検索
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <code className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                      src/components/**/*.ts
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      components下のTSファイルのみ
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <code className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                      **/test/*.spec.ts
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      テストファイルを検索
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <code className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                      {`*.{ts,tsx,js,jsx}`}
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      複数拡張子をまとめて検索
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Grep正規表現のコツ
                </h3>
                <div className="space-y-2">
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <code className="text-sm text-purple-600 dark:text-purple-400 font-mono">
                      function\s+\w+
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      関数定義を検索（バックスラッシュでエスケープ）
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <code className="text-sm text-purple-600 dark:text-purple-400 font-mono">
                      -i フラグ
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      大文字小文字を区別しない検索
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <code className="text-sm text-purple-600 dark:text-purple-400 font-mono">
                      output_mode: &quot;content&quot; + -n
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      マッチした行と行番号を表示
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Git操作のベストプラクティス */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faCodeBranch} />
              </span>
              Git操作のベストプラクティス
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <span className="mr-2">✅</span>
                  変更前にステータス確認
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  コミット前に必ず git status と git diff で変更内容を確認
                </p>
                <code className="block bg-slate-800 text-green-400 p-2 rounded text-xs">
                  git status && git diff
                </code>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <span className="mr-2">💬</span>
                  わかりやすいコミットメッセージ
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  変更の「なぜ」を説明し、簡潔かつ明確に
                </p>
                <div className="space-y-1 text-xs">
                  <div className="bg-slate-800 text-red-400 p-2 rounded">
                    ❌ git commit -m &quot;update&quot;
                  </div>
                  <div className="bg-slate-800 text-green-400 p-2 rounded">
                    ✅ git commit -m &quot;ユーザー認証機能を追加してセキュリティを強化&quot;
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <span className="mr-2">🌿</span>
                  適切なブランチ管理
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  機能ごとにブランチを作成し、mainブランチは常に安定した状態に保つ
                </p>
              </div>
            </div>
          </div>

          {/* エラー対処法 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3 text-yellow-600 dark:text-yellow-400">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </span>
              よくあるエラーと対処法
            </h2>
            <div className="space-y-4">
              <details className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-800 dark:text-gray-200">
                  ❌ Editツールで「文字列が見つかりません」エラー
                </summary>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p><strong>原因:</strong> 指定した文字列が正確にマッチしていない</p>
                  <p><strong>解決策:</strong></p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Readツールで実際のファイル内容を確認</li>
                    <li>インデント（タブ/スペース）を正確にコピー</li>
                    <li>行番号プレフィックスは含めない</li>
                    <li>より大きなコンテキストを指定して一意にする</li>
                  </ul>
                </div>
              </details>

              <details className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-800 dark:text-gray-200">
                  ❌ npm installがタイムアウト
                </summary>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p><strong>原因:</strong> デフォルトのタイムアウト時間（2分）を超過</p>
                  <p><strong>解決策:</strong></p>
                  <code className="block bg-slate-800 text-green-400 p-2 rounded">
                    timeout: 120000 パラメータを追加（最大10分）
                  </code>
                </div>
              </details>

              <details className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-800 dark:text-gray-200">
                  ❌ ファイルパスが見つからない
                </summary>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p><strong>原因:</strong> 相対パスの誤りや、ファイルが存在しない</p>
                  <p><strong>解決策:</strong></p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Globツールでファイルを検索して確認</li>
                    <li>絶対パスを使用する</li>
                    <li>大文字小文字を確認（OSによって異なる）</li>
                  </ul>
                </div>
              </details>

              <details className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-800 dark:text-gray-200">
                  ⚠️ GitHub CLI (gh) が利用できない
                </summary>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p><strong>注意:</strong> Claude Code Web版の環境ではGitHub CLI (`gh`)が利用できません</p>
                  <p><strong>対処法:</strong></p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>issueやPRの情報は、ユーザーに直接提供してもらう</li>
                    <li>GitHub APIの直接呼び出しも制限される場合がある</li>
                    <li>gitコマンドは通常通り使用可能（clone, commit, push等）</li>
                    <li>PRの作成やissueの確認が必要な場合は、ブラウザでGitHubにアクセス</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* パフォーマンス最適化 */}
          <div className="bg-orange-600 dark:bg-orange-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-3xl mr-3">
                <FontAwesomeIcon icon={faBolt} />
              </span>
              パフォーマンス最適化
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">並列ツール呼び出し</h3>
                <p className="text-sm text-white/90">
                  独立したツール呼び出しは並列実行可能。同時に複数のReadやGrepを実行して高速化。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Exploreエージェントの活用</h3>
                <p className="text-sm text-white/90">
                  広範囲な探索タスクは、Taskツールのsubagent_type=Exploreで効率化。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">検索スコープを限定</h3>
                <p className="text-sm text-white/90">
                  GrepやGlobでディレクトリやファイルタイプを指定して、検索範囲を絞る。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">必要なファイルだけRead</h3>
                <p className="text-sm text-white/90">
                  大きなファイルはoffsetとlimitを使って必要な部分だけ読み込む。
                </p>
              </div>
            </div>
          </div>

          {/* プロのTips */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-3xl mr-3 text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faBullseye} />
              </span>
              プロのTips
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <span className="text-xl text-indigo-600 dark:text-indigo-400">
                  <FontAwesomeIcon icon={faGem} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    TodoWriteでタスクを可視化
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    複雑なタスクは必ずTodoリストで管理。進捗が一目瞭然になり、
                    やり忘れを防げます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <span className="text-xl text-purple-600 dark:text-purple-400">
                  <FontAwesomeIcon icon={faGem} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    変更は小さく、頻繁に確認
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    大きな変更を一度に行うのではなく、小さな変更を繰り返し、
                    その都度動作確認することで品質を保ちます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <span className="text-xl text-pink-600 dark:text-pink-400">
                  <FontAwesomeIcon icon={faGem} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    ドキュメントを参照する
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    WebFetchやWebSearchで公式ドキュメントを参照しながら作業すると、
                    より正確で最新のコードが書けます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-xl text-green-600 dark:text-green-400">
                  <FontAwesomeIcon icon={faGem} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    テストを書く習慣
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    機能実装と同時にテストも作成依頼。バグの早期発見と、
                    将来のリファクタリングが安全に行えます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-xl text-yellow-600 dark:text-yellow-400">
                  <FontAwesomeIcon icon={faGem} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    コードレビューを依頼
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    「このコードをレビューして改善点を教えて」と依頼すると、
                    セキュリティやパフォーマンスの問題を発見できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
