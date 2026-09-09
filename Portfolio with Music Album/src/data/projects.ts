export interface Project {
  slug: string;
  name: string;
  tagline: string;
  featured: boolean;
  status: "Em desenvolvimento" | "Concluído" | "Em andamento";
  problem: string;
  solution: string;
  tech: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  category: string;
  year: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    slug: "aqua-inovare",
    name: "Aqua Inovare",
    tagline: "Monitoramento ambiental em tempo real para praias e rios do Maranhão.",
    featured: true,
    status: "Em desenvolvimento",
    problem:
      "Banhistas, pescadores e órgãos ambientais da Grande São Luís não têm acesso a informações em tempo real sobre as condições das praias, rios e mangues — expondo-se a riscos de contaminação e afogamento por falta de dados sobre balneabilidade, marés e poluentes.",
    solution:
      "A Aqua Inovare monitora, em tempo real, as condições de praias, rios e mangues da Grande São Luís. A solução coleta dados de balneabilidade, marés e poluentes, tornando essas informações acessíveis a banhistas, pescadores e órgãos ambientais para prevenir contaminações e afogamentos.",
    tech: ["Python", "IoT", "APIs REST", "Análise de dados ambientais"],
    repoUrl: null,
    liveUrl: null,
    category: "Startup · Impacto Social",
    year: "2024",
    highlight: "SEBRAE Supernova",
  },
  {
    slug: "trilha-frontend",
    name: "Trilha Front-end",
    tagline: "Registro de estudos e exercícios da trilha de front-end do CEUMA.",
    featured: false,
    status: "Em andamento",
    problem:
      "Organizar e documentar o progresso de aprendizagem durante a trilha de desenvolvimento front-end oferecida pelo CEUMA, tornando o histórico de estudos acessível e consultável.",
    solution:
      "Repositório com os exercícios, projetos práticos e anotações desenvolvidos ao longo da trilha de front-end, servindo como portfólio de evolução e referência de aprendizado.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Wolim-a/Trilha-Front-end",
    liveUrl: null,
    category: "Aprendizado · Front-end",
    year: "2024",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
