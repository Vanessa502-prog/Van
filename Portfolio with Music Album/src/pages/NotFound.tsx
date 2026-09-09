import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-[#22d3ee] text-6xl font-bold">404</p>
      <p className="font-mono text-[#64748b] text-sm">
        {"// página não encontrada"}
      </p>
      <Link
        to="/"
        className="font-mono text-xs text-[#22d3ee] hover:text-white transition-colors border border-[#22d3ee]/30 px-4 py-2 rounded hover:border-[#22d3ee]"
      >
        ← voltar ao início
      </Link>
    </div>
  );
}
