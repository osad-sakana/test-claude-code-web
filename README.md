# Claude Code Web ドキュメントサイト

Next.jsとTailwind CSSで構築された、Claude Code Web版の完全ガイドサイトです。

## 特徴

- **モダンなデザイン**: Tailwind CSSによる美しいグラデーションとレスポンシブデザイン
- **包括的なドキュメント**: Claude Code Webの全機能を詳しく解説
- **実用的なTips**: 効率的な使い方やよくあるエラーの対処法
- **TypeScript**: 型安全な開発環境
- **App Router**: Next.js 15の最新機能を活用

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # ホームページ
│   ├── features/          # 機能紹介ページ
│   ├── tips/              # Tipsページ
│   ├── layout.tsx         # ルートレイアウト
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── Navigation.tsx     # ナビゲーションバー
│   └── Footer.tsx         # フッター
├── public/                # 静的ファイル
└── README.md             # このファイル
```

## ページ構成

### ホームページ (`/`)
- Claude Code Web版の概要
- 主な特徴（3つのカード）
- 始め方（3ステップガイド）
- CTAセクション

### 機能ページ (`/features`)
- ファイル操作（Read, Edit, Write）
- 検索機能（Glob, Grep）
- Bashコマンド実行
- タスク管理
- Web機能（WebFetch, WebSearch）
- 専門エージェント

### Tipsページ (`/tips`)
- 効率的な使い方
- ファイル操作のコツ
- 検索テクニック
- Git操作のベストプラクティス
- よくあるエラーと対処法
- パフォーマンス最適化
- プロのTips

## 技術スタック

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: カスタムコンポーネント（グラデーション、カード、アコーディオン）

## カスタマイズ

### 色の変更

`tailwind.config.ts`でテーマカラーをカスタマイズできます。

### コンテンツの追加

各ページは`app/`ディレクトリ内の対応するファイルを編集することで更新できます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を説明してください。
