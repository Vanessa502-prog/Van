import { Link, NavLink, Outlet, useLocation } from "react-router";
import { useEffect } from "react";

const NAV_LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#projetos", label: "Projetos" },
];

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-full bg-[#070c12] text-[#e2e8f0]">
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e2d42]/60 backdrop-blur-md bg-[#070c12]/80">
        <nav
          className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          <Link
            to="/"
            className="font-mono text-[#22d3ee] text-sm font-semibold tracking-widest hover:text-white transition-colors"
            aria-label="Início — Vanessa Rodrigues Lima"
          >
            <span className="text-[#64748b]">~/</span>vanessa
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#64748b] text-sm font-medium hover:text-[#22d3ee] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/Vanessa502-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64748b] text-sm hover:text-[#22d3ee] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
            aria-label="Perfil GitHub de Vanessa Rodrigues Lima"
          >
            <GithubIcon />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main className="pt-14">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1e2d42]/60 mt-24 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[#334155] text-xs tracking-wide">
            © 2024{" "}
            <span className="text-[#64748b]">Vanessa Rodrigues Lima</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Vanessa502-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#334155] hover:text-[#22d3ee] transition-colors text-xs font-mono flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
              Vanessa502-prog
            </a>
            <a
              href="mailto:[email protected]"
              className="text-[#334155] hover:text-[#22d3ee] transition-colors text-xs font-mono"
              aria-label="Enviar e-mail"
            >
              {/* placeholder — preencher com e-mail real */}
              [email] ✏️
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#334155] hover:text-[#22d3ee] transition-colors text-xs font-mono"
              aria-label="LinkedIn — preencher com perfil real"
            >
              {/* placeholder — preencher com URL do LinkedIn */}
              LinkedIn ✏️
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
