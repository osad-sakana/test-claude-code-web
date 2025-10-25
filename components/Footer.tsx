export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Claude Code Web</h3>
          <p className="text-slate-300 text-sm mb-4">
            ブラウザで使える強力なAIコーディングアシスタント
          </p>
          <div className="text-slate-400 text-xs">
            <p>&copy; 2025 Claude Code Web ドキュメント</p>
            <p className="mt-2">Powered by Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
