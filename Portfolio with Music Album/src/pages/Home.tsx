import { Link } from "react-router";
import { projects } from "../data/projects";

/* ── tiny helpers ── */
function SectionTag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[#22d3ee] text-xs tracking-widest uppercase">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0] mt-1 mb-10">
      {children}
    </h2>
  );
}

/* ── skill badge ── */
type SkillLevel = "consolidated" | "developing";

function SkillBadge({
  name,
  level,
  icon,
}: {
  name: string;
  level: SkillLevel;
  icon?: string;
}) {
  const consolidated = level === "consolidated";
  return (
    <div
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded border transition-colors duration-200 ${
        consolidated
          ? "border-[#22d3ee]/40 bg-[#22d3ee]/5 hover:bg-[#22d3ee]/10"
          : "border-[#1e2d42] bg-[#0d1421] hover:border-[#334155]"
      }`}
    >
      {icon && <span className="text-base" aria-hidden="true">{icon}</span>}
      <span
        className={`font-mono text-sm font-medium ${
          consolidated ? "text-[#22d3ee]" : "text-[#64748b]"
        }`}
      >
        {name}
      </span>
      {consolidated ? (
        <span
          className="ml-auto text-[10px] font-mono text-[#22d3ee]/60 border border-[#22d3ee]/20 px-1.5 py-0.5 rounded"
          title="Habilidade consolidada"
        >
          ✦ sólido
        </span>
      ) : (
        <span
          className="ml-auto text-[10px] font-mono text-[#334155] border border-[#1e2d42] px-1.5 py-0.5 rounded"
          title="Em desenvolvimento"
        >
          ↗ aprendendo
        </span>
      )}
    </div>
  );
}

/* ── project card ── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const statusColor =
    project.status === "Concluído"
      ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
      : project.status === "Em andamento"
        ? "text-amber-400 border-amber-400/30 bg-amber-400/5"
        : "text-sky-400 border-sky-400/30 bg-sky-400/5";

  if (project.featured) {
    return (
      <Link
        to={`/projetos/${project.slug}`}
        className="group block col-span-full"
        aria-label={`Ver detalhes do projeto ${project.name}`}
      >
        <div className="relative border border-[#22d3ee]/25 bg-[#0d1421] rounded-lg overflow-hidden hover:border-[#22d3ee]/60 transition-all duration-300 accent-glow">
          {/* featured ribbon */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent" />

          <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#22d3ee] border border-[#22d3ee]/40 bg-[#22d3ee]/5 px-2 py-0.5 rounded uppercase">
                  ★ Destaque
                </span>
                <span className="text-[10px] font-mono text-[#64748b]">
                  {project.highlight}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#22d3ee] transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#334155]">
                  {project.category} · {project.year}
                </p>
              </div>

              <p className="text-[#8b949e] text-sm leading-relaxed">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[#64748b] border border-[#1e2d42] bg-[#070c12] px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between">
              <div className="bg-[#070c12] border border-[#1e2d42] rounded-md p-4 font-mono text-xs leading-relaxed text-[#334155]">
                <p className="text-[#22d3ee]/40 mb-2">{`// problema`}</p>
                <p className="text-[#64748b] line-clamp-4">
                  {project.problem}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono border px-2.5 py-1 rounded ${statusColor}`}
                >
                  ◉ {project.status}
                </span>
                <span className="font-mono text-xs text-[#22d3ee] group-hover:text-white transition-colors">
                  Ver projeto →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="group block"
      aria-label={`Ver detalhes do projeto ${project.name}`}
    >
      <div className="h-full border border-[#1e2d42] bg-[#0d1421] rounded-lg p-6 flex flex-col gap-4 hover:border-[#22d3ee]/30 transition-all duration-300 hover:bg-[#0d1421]/80">
        <div>
          <h3 className="text-lg font-bold text-[#e2e8f0] group-hover:text-[#22d3ee] transition-colors">
            {project.name}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-[#334155]">
            {project.category} · {project.year}
          </p>
        </div>

        <p className="text-[#64748b] text-sm leading-relaxed flex-1">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-[#334155] border border-[#1e2d42] bg-[#070c12] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-[#1e2d42]/50">
          <span
            className={`text-[11px] font-mono border px-2.5 py-1 rounded ${statusColor}`}
          >
            ◉ {project.status}
          </span>
          <span className="font-mono text-xs text-[#334155] group-hover:text-[#22d3ee] transition-colors">
            Ver projeto →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── main page ── */
export default function Home() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 py-24 grid-bg scanlines overflow-hidden">
        {/* decorative glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto w-full fade-up">
          <p className="font-mono text-[#22d3ee] text-sm tracking-widest mb-6">
            {">"} olá, eu sou
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Vanessa
            <br />
            <span className="text-[#22d3ee]">Rodrigues</span>
            <br />
            Lima
            <span className="cursor-blink text-[#22d3ee] ml-1">_</span>
          </h1>

          <p className="mt-6 text-[#64748b] text-lg sm:text-xl max-w-xl leading-relaxed">
            Estudante de{" "}
            <span className="text-[#e2e8f0]">Engenharia da Computação</span> no
            CEUMA · Apaixonada por{" "}
            <span className="text-[#22d3ee]">Cibersegurança</span> e{" "}
            <span className="text-[#22d3ee]">Sistemas Embarcados</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="px-6 py-3 bg-[#22d3ee] text-[#070c12] font-semibold text-sm rounded transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
            >
              Ver projetos
            </a>
            <a
              href="https://github.com/Vanessa502-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#22d3ee]/40 text-[#22d3ee] font-semibold text-sm rounded transition-all duration-200 hover:border-[#22d3ee] hover:bg-[#22d3ee]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3ee]"
            >
              GitHub →
            </a>
          </div>

          {/* terminal decoration */}
          <div className="mt-16 max-w-sm border border-[#1e2d42] bg-[#0d1421] rounded-md overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#1e2d42] bg-[#070c12]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-2 font-mono text-[11px] text-[#334155]">
                terminal
              </span>
            </div>
            <div className="px-4 py-4 font-mono text-xs leading-relaxed">
              <p>
                <span className="text-[#22d3ee]">vanessa@ceuma</span>
                <span className="text-[#334155]">:~$</span>
                <span className="text-[#e2e8f0] ml-1">whoami</span>
              </p>
              <p className="mt-1 text-[#64748b]">engenharia da computação</p>
              <p className="mt-2">
                <span className="text-[#22d3ee]">vanessa@ceuma</span>
                <span className="text-[#334155]">:~$</span>
                <span className="text-[#e2e8f0] ml-1">cat interesses.txt</span>
              </p>
              <p className="mt-1 text-[#64748b]">
                cibersegurança | sistemas embarcados
              </p>
              <p className="mt-2">
                <span className="text-[#22d3ee]">vanessa@ceuma</span>
                <span className="text-[#334155]">:~$</span>
                <span className="cursor-blink text-[#22d3ee] ml-1">█</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14">
        <SectionTag>01 // sobre</SectionTag>
        <SectionHeading>Quem sou eu</SectionHeading>

        <div className="grid sm:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-[#8b949e] leading-relaxed">
            <p>
              Sou estudante de{" "}
              <strong className="text-[#e2e8f0]">
                Engenharia da Computação
              </strong>{" "}
              no Centro Universitário do Maranhão (CEUMA), com foco em{" "}
              <strong className="text-[#22d3ee]">Cibersegurança</strong> e{" "}
              <strong className="text-[#22d3ee]">Sistemas Embarcados</strong>.
            </p>
            <p>
              Acredito que a tecnologia tem o poder de resolver problemas reais
              — e é isso que me move. Cada projeto é uma oportunidade de
              aprender, criar e gerar impacto.
            </p>
            <p>
              Atualmente cursando a trilha de{" "}
              <strong className="text-[#e2e8f0]">Front-end</strong> no CEUMA e
              participando de programas de inovação como o{" "}
              <strong className="text-[#e2e8f0]">SEBRAE Supernova</strong>.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: "Instituição", value: "CEUMA — Centro Universitário do Maranhão" },
              { label: "Curso", value: "Engenharia da Computação" },
              { label: "Foco", value: "Cibersegurança · Sistemas Embarcados" },
              { label: "Aprendendo", value: "Desenvolvimento Front-end" },
              { label: "GitHub", value: "@Vanessa502-prog", href: "https://github.com/Vanessa502-prog" },
            ].map(({ label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 py-3 border-b border-[#1e2d42]/50"
              >
                <span className="font-mono text-xs text-[#334155] w-28 shrink-0 pt-0.5">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-[#22d3ee] hover:text-white transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-mono text-sm text-[#8b949e]">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section
        id="habilidades"
        className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14"
      >
        <SectionTag>02 // habilidades</SectionTag>
        <SectionHeading>Stacks & Tecnologias</SectionHeading>

        <div className="space-y-10">
          {/* consolidated */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-mono text-sm text-[#e2e8f0] font-semibold">
                Domínio Consolidado
              </h3>
              <div className="h-px flex-1 bg-[#22d3ee]/20" />
              <span className="text-[10px] font-mono text-[#22d3ee]/50">
                ✦ sólido
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <SkillBadge name="Python" level="consolidated" icon="🐍" />
              <SkillBadge name="Java" level="consolidated" icon="☕" />
            </div>
          </div>

          {/* developing */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-mono text-sm text-[#e2e8f0] font-semibold">
                Em Desenvolvimento
              </h3>
              <div className="h-px flex-1 bg-[#1e2d42]" />
              <span className="text-[10px] font-mono text-[#334155]">
                ↗ aprendendo
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <SkillBadge name="HTML & CSS" level="developing" icon="🌐" />
              <SkillBadge name="JavaScript" level="developing" icon="⚡" />
              <SkillBadge name="Cibersegurança" level="developing" icon="🔒" />
              <SkillBadge
                name="Sistemas Embarcados"
                level="developing"
                icon="🔧"
              />
            </div>
          </div>

          {/* areas of interest */}
          <div className="border border-[#1e2d42] bg-[#0d1421] rounded-md p-5">
            <p className="font-mono text-xs text-[#334155] mb-3">
              {`// áreas de interesse`}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Segurança de redes",
                "Criptografia",
                "Microcontroladores",
                "IoT",
                "Análise de vulnerabilidades",
                "Programação de baixo nível",
              ].map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-[#64748b] border border-[#1e2d42] bg-[#070c12] px-3 py-1.5 rounded hover:border-[#22d3ee]/30 hover:text-[#22d3ee]/70 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section
        id="projetos"
        className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14"
      >
        <SectionTag>03 // projetos</SectionTag>
        <SectionHeading>O que estou construindo</SectionHeading>

        <div className="grid sm:grid-cols-2 gap-5">
          {featured && <ProjectCard project={featured} />}
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-[#334155] text-center">
          {"// mais projetos em breve — repositório sempre em crescimento"}
        </p>
      </section>
    </>
  );
}
