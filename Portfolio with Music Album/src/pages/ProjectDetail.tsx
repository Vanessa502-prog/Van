import { useParams, Link } from "react-router";
import { getProject } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6">
        <p className="font-mono text-[#334155] text-xl">404</p>
        <p className="font-mono text-[#64748b] text-sm">projeto não encontrado</p>
        <Link
          to="/"
          className="font-mono text-xs text-[#22d3ee] hover:text-white transition-colors"
        >
          ← voltar ao início
        </Link>
      </div>
    );
  }

  const statusColor =
    project.status === "Concluído"
      ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
      : project.status === "Em andamento"
        ? "text-amber-400 border-amber-400/30 bg-amber-400/5"
        : "text-sky-400 border-sky-400/30 bg-sky-400/5";

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* breadcrumb */}
      <nav className="mb-10" aria-label="Navegação de página">
        <Link
          to="/#projetos"
          className="font-mono text-xs text-[#334155] hover:text-[#22d3ee] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
        >
          ← projetos
        </Link>
      </nav>

      {/* header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.featured && (
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#22d3ee] border border-[#22d3ee]/40 bg-[#22d3ee]/5 px-2 py-0.5 rounded uppercase">
              ★ Destaque
            </span>
          )}
          {project.highlight && (
            <span className="text-[10px] font-mono text-[#64748b] border border-[#1e2d42] px-2 py-0.5 rounded">
              {project.highlight}
            </span>
          )}
          <span
            className={`text-[11px] font-mono border px-2.5 py-0.5 rounded ml-auto ${statusColor}`}
          >
            ◉ {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          {project.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-[#334155]">
          {project.category} · {project.year}
        </p>
        <p className="mt-4 text-[#8b949e] text-lg leading-relaxed max-w-2xl">
          {project.tagline}
        </p>
      </header>

      {/* top line */}
      <div className="h-px bg-gradient-to-r from-[#22d3ee]/40 via-[#22d3ee]/10 to-transparent mb-12" />

      {/* body */}
      <div className="space-y-10">
        {/* problema */}
        <section aria-labelledby="problema-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="problema-heading"
              className="font-mono text-xs text-[#22d3ee] tracking-widest uppercase"
            >
              // problema que resolve
            </h2>
            <div className="h-px flex-1 bg-[#1e2d42]/60" />
          </div>
          <div className="border border-[#1e2d42] bg-[#0d1421] rounded-md p-6">
            <p className="text-[#8b949e] leading-relaxed">{project.problem}</p>
          </div>
        </section>

        {/* solução */}
        <section aria-labelledby="solucao-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="solucao-heading"
              className="font-mono text-xs text-[#22d3ee] tracking-widest uppercase"
            >
              // solução
            </h2>
            <div className="h-px flex-1 bg-[#1e2d42]/60" />
          </div>
          <div className="border border-[#1e2d42] bg-[#0d1421] rounded-md p-6">
            <p className="text-[#8b949e] leading-relaxed">{project.solution}</p>
          </div>
        </section>

        {/* tech */}
        <section aria-labelledby="tech-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="tech-heading"
              className="font-mono text-xs text-[#22d3ee] tracking-widest uppercase"
            >
              // tecnologias utilizadas
            </h2>
            <div className="h-px flex-1 bg-[#1e2d42]/60" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-sm text-[#22d3ee] border border-[#22d3ee]/30 bg-[#22d3ee]/5 px-3 py-1.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* status */}
        <section aria-labelledby="status-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="status-heading"
              className="font-mono text-xs text-[#22d3ee] tracking-widest uppercase"
            >
              // status atual
            </h2>
            <div className="h-px flex-1 bg-[#1e2d42]/60" />
          </div>
          <div className="border border-[#1e2d42] bg-[#0d1421] rounded-md px-5 py-4 flex items-center gap-3">
            <span className={`text-sm font-mono border px-3 py-1 rounded ${statusColor}`}>
              ◉ {project.status}
            </span>
          </div>
        </section>

        {/* links */}
        <section aria-labelledby="links-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="links-heading"
              className="font-mono text-xs text-[#22d3ee] tracking-widest uppercase"
            >
              // links
            </h2>
            <div className="h-px flex-1 bg-[#1e2d42]/60" />
          </div>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 border border-[#22d3ee]/40 bg-[#22d3ee]/5 text-[#22d3ee] font-mono text-sm rounded hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
            >
              <GithubIcon />
              Ver repositório no GitHub
            </a>
          ) : (
            <div className="border border-[#1e2d42] bg-[#0d1421] rounded-md px-5 py-4">
              <p className="font-mono text-xs text-[#334155]">
                {`// repositório privado ou ainda não disponível publicamente`}
              </p>
            </div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-5 py-3 border border-[#1e2d42] text-[#64748b] font-mono text-sm rounded hover:border-[#22d3ee]/30 hover:text-[#22d3ee] transition-all duration-200"
            >
              ↗ Ver demonstração ao vivo
            </a>
          )}
        </section>
      </div>

      {/* bottom line */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/10 to-transparent" />

      <div className="mt-8 flex justify-center">
        <Link
          to="/#projetos"
          className="font-mono text-xs text-[#334155] hover:text-[#22d3ee] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
        >
          ← ver todos os projetos
        </Link>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
