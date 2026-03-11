export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export const categories = [
  "Direito Civil",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Direito Penal",
  "Direito Tributário",
  "Direito Imobiliário",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "As Novas Regras do Direito Digital e Seus Impactos nas Empresas",
    excerpt: "Entenda como a legislação recente sobre dados pessoais afeta o dia a dia corporativo e quais medidas preventivas adotar.",
    category: "Direito Empresarial",
    date: "8 Mar 2026",
    readTime: "6 min",
    slug: "direito-digital-empresas",
  },
  {
    id: "2",
    title: "Reforma Trabalhista: O Que Mudou na Prática",
    excerpt: "Uma análise objetiva das alterações mais relevantes e como elas impactam empregadores e empregados no cotidiano.",
    category: "Direito Trabalhista",
    date: "2 Mar 2026",
    readTime: "8 min",
    slug: "reforma-trabalhista",
  },
  {
    id: "3",
    title: "Planejamento Sucessório: Proteja Seu Patrimônio",
    excerpt: "Conheça as ferramentas jurídicas disponíveis para garantir a transmissão organizada de bens às futuras gerações.",
    category: "Direito Civil",
    date: "25 Fev 2026",
    readTime: "5 min",
    slug: "planejamento-sucessorio",
  },
  {
    id: "4",
    title: "Tributação para Startups: Guia Completo",
    excerpt: "Do Simples Nacional ao Lucro Presumido: qual regime tributário é mais vantajoso para o seu negócio em crescimento.",
    category: "Direito Tributário",
    date: "18 Fev 2026",
    readTime: "10 min",
    slug: "tributacao-startups",
  },
  {
    id: "5",
    title: "Contratos Imobiliários: Cláusulas Essenciais",
    excerpt: "Os elementos indispensáveis em contratos de compra, venda e locação que protegem ambas as partes envolvidas.",
    category: "Direito Imobiliário",
    date: "10 Fev 2026",
    readTime: "7 min",
    slug: "contratos-imobiliarios",
  },
  {
    id: "6",
    title: "Crimes Cibernéticos: Tipificação e Defesa",
    excerpt: "Como a legislação penal brasileira trata os crimes praticados no ambiente digital e quais são os direitos do acusado.",
    category: "Direito Penal",
    date: "3 Fev 2026",
    readTime: "6 min",
    slug: "crimes-ciberneticos",
  },
  {
    id: "7",
    title: "Mediação e Arbitragem: Alternativas ao Judiciário",
    excerpt: "Métodos extrajudiciais de resolução de conflitos que oferecem agilidade e confidencialidade às partes.",
    category: "Direito Civil",
    date: "28 Jan 2026",
    readTime: "5 min",
    slug: "mediacao-arbitragem",
  },
  {
    id: "8",
    title: "Compliance Empresarial: Por Onde Começar",
    excerpt: "Um roteiro prático para implementar um programa de conformidade eficiente na sua empresa.",
    category: "Direito Empresarial",
    date: "20 Jan 2026",
    readTime: "9 min",
    slug: "compliance-empresarial",
  },
];
