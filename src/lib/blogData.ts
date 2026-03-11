import blog1 from "@/assets/blog/blog-1.jpg";
import blog2 from "@/assets/blog/blog-2.jpg";
import blog3 from "@/assets/blog/blog-3.jpg";
import blog4 from "@/assets/blog/blog-4.jpg";
import blog5 from "@/assets/blog/blog-5.jpg";
import blog6 from "@/assets/blog/blog-6.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  content: string[];
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
    image: blog1,
    content: [
      "A transformação digital acelerada dos últimos anos trouxe consigo um novo universo de questões jurídicas que as empresas precisam enfrentar. A Lei Geral de Proteção de Dados (LGPD), em vigor desde 2020, continua sendo um dos maiores desafios para organizações de todos os portes.",
      "O tratamento de dados pessoais exige atenção redobrada. Empresas que coletam, armazenam ou processam informações de clientes, colaboradores ou parceiros precisam garantir que seus processos estejam em conformidade com a legislação. A nomeação de um Encarregado de Proteção de Dados (DPO) tornou-se obrigatória para muitas organizações.",
      "Entre as principais medidas preventivas que recomendamos estão: a realização de um mapeamento completo dos dados tratados pela empresa, a implementação de políticas de privacidade claras e acessíveis, o treinamento contínuo das equipes sobre práticas seguras de tratamento de dados e a criação de protocolos de resposta a incidentes de segurança.",
      "A fiscalização pela Autoridade Nacional de Proteção de Dados (ANPD) tem se intensificado, e as sanções podem ser significativas — incluindo multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração. Além do impacto financeiro, a exposição negativa na mídia pode causar danos irreparáveis à reputação da empresa.",
      "Outro aspecto relevante é a crescente judicialização de questões digitais. Contratos eletrônicos, assinaturas digitais, propriedade intelectual em ambientes digitais e responsabilidade por conteúdo publicado online são temas cada vez mais presentes nos tribunais brasileiros.",
      "Recomendamos que as empresas adotem uma postura proativa, investindo em compliance digital e buscando assessoria jurídica especializada. A prevenção é sempre mais eficiente — e menos custosa — do que a correção de problemas já instalados.",
    ],
  },
  {
    id: "2",
    title: "Reforma Trabalhista: O Que Mudou na Prática",
    excerpt: "Uma análise objetiva das alterações mais relevantes e como elas impactam empregadores e empregados no cotidiano.",
    category: "Direito Trabalhista",
    date: "2 Mar 2026",
    readTime: "8 min",
    slug: "reforma-trabalhista",
    image: blog2,
    content: [
      "A reforma trabalhista implementada pela Lei nº 13.467/2017 trouxe mudanças profundas na Consolidação das Leis do Trabalho (CLT). Passados alguns anos de sua vigência, já é possível avaliar com mais clareza os impactos práticos dessas alterações no dia a dia das relações de trabalho.",
      "Uma das mudanças mais significativas foi a regulamentação do teletrabalho. Com a pandemia de COVID-19, essa modalidade ganhou ainda mais relevância, e as regras estabelecidas pela reforma passaram a ser amplamente aplicadas. O contrato de trabalho deve especificar as atividades realizadas remotamente, e a responsabilidade pela infraestrutura e pelos custos deve ser negociada entre as partes.",
      "O regime de trabalho intermitente também foi uma novidade importante. Nessa modalidade, o empregado é convocado para trabalhar em períodos específicos, recebendo proporcionalmente pelas horas efetivamente trabalhadas. Embora tenha gerado controvérsias, essa forma de contratação tem sido utilizada especialmente nos setores de comércio e serviços.",
      "A prevalência do negociado sobre o legislado é outro ponto central da reforma. Acordos e convenções coletivas passaram a ter força de lei em diversos temas, como jornada de trabalho, banco de horas, intervalo intrajornada e plano de cargos e salários.",
      "No âmbito processual, a reforma introduziu a sucumbência recíproca, na qual a parte vencida deve arcar com os honorários advocatícios da parte vencedora. Essa mudança impactou significativamente o volume de novas ações trabalhistas, incentivando a busca por soluções extrajudiciais.",
      "Para empregadores, recomendamos a revisão periódica dos contratos de trabalho e das políticas internas, garantindo que estejam alinhados com as disposições atuais da legislação. Para empregados, é fundamental conhecer seus direitos e buscar orientação jurídica quando necessário.",
    ],
  },
  {
    id: "3",
    title: "Planejamento Sucessório: Proteja Seu Patrimônio",
    excerpt: "Conheça as ferramentas jurídicas disponíveis para garantir a transmissão organizada de bens às futuras gerações.",
    category: "Direito Civil",
    date: "25 Fev 2026",
    readTime: "5 min",
    slug: "planejamento-sucessorio",
    image: blog3,
    content: [
      "O planejamento sucessório é uma estratégia fundamental para quem deseja organizar a transmissão de seu patrimônio de forma eficiente, minimizando conflitos familiares e reduzindo a carga tributária incidente sobre a herança.",
      "Uma das ferramentas mais utilizadas é a holding familiar, uma empresa constituída para administrar os bens da família. Através dela, é possível realizar a doação de quotas aos herdeiros com reserva de usufruto, garantindo que o patriarca ou matriarca mantenha o controle dos bens durante sua vida.",
      "O testamento é outro instrumento essencial. Embora o Código Civil estabeleça regras sobre a legítima — metade do patrimônio que deve ser destinada aos herdeiros necessários — a outra metade pode ser livremente disposta pelo testador, permitindo a inclusão de beneficiários não contemplados pela sucessão legal.",
      "A doação em vida, com ou sem reserva de usufruto, é uma alternativa que pode trazer vantagens tributárias significativas. Em muitos estados, a alíquota do ITCMD sobre doações é inferior à aplicada na transmissão causa mortis, o que torna essa opção financeiramente interessante.",
      "É importante considerar também os aspectos previdenciários e securitários do planejamento. Seguros de vida, previdência privada e planos de capitalização podem complementar a estratégia, oferecendo liquidez imediata aos beneficiários sem a necessidade de inventário.",
    ],
  },
  {
    id: "4",
    title: "Tributação para Startups: Guia Completo",
    excerpt: "Do Simples Nacional ao Lucro Presumido: qual regime tributário é mais vantajoso para o seu negócio em crescimento.",
    category: "Direito Tributário",
    date: "18 Fev 2026",
    readTime: "10 min",
    slug: "tributacao-startups",
    image: blog4,
    content: [
      "Escolher o regime tributário adequado é uma das decisões mais importantes para startups em fase de crescimento. A opção errada pode significar o pagamento de tributos em excesso, comprometendo a saúde financeira do negócio.",
      "O Simples Nacional é frequentemente a primeira escolha para empresas com faturamento anual de até R$ 4,8 milhões. Ele unifica diversos tributos em uma única guia de pagamento e oferece alíquotas reduzidas. Contudo, para startups de tecnologia que prestam serviços, as alíquotas do Anexo V podem não ser tão vantajosas.",
      "O Lucro Presumido é uma alternativa interessante para empresas com margens de lucro superiores às presumidas pela legislação. Nesse regime, a base de cálculo do IRPJ e da CSLL é determinada pela aplicação de percentuais fixos sobre a receita bruta, independentemente do lucro efetivamente apurado.",
      "Para startups com faturamento expressivo ou que recebem investimento externo, o Lucro Real pode ser a opção mais adequada. Embora exija uma contabilidade mais rigorosa, esse regime permite a dedução de despesas e a compensação de prejuízos fiscais, o que pode resultar em uma carga tributária menor.",
      "Incentivos fiscais específicos para inovação, como a Lei do Bem e a Lei de Informática, também devem ser considerados. Eles permitem a dedução de gastos com pesquisa e desenvolvimento, reduzindo significativamente o imposto devido.",
      "Recomendamos que startups realizem um planejamento tributário detalhado, preferencialmente com o auxílio de profissionais especializados, antes de cada exercício fiscal. A revisão periódica do regime tributário é essencial, especialmente em momentos de crescimento acelerado.",
    ],
  },
  {
    id: "5",
    title: "Contratos Imobiliários: Cláusulas Essenciais",
    excerpt: "Os elementos indispensáveis em contratos de compra, venda e locação que protegem ambas as partes envolvidas.",
    category: "Direito Imobiliário",
    date: "10 Fev 2026",
    readTime: "7 min",
    slug: "contratos-imobiliarios",
    image: blog5,
    content: [
      "Contratos imobiliários são documentos complexos que exigem atenção especial na sua elaboração. Uma cláusula mal redigida pode gerar disputas judiciais longas e custosas, comprometendo o investimento de ambas as partes.",
      "Em contratos de compra e venda, a descrição detalhada do imóvel é fundamental. Além da matrícula e do registro, é necessário especificar a metragem, as benfeitorias existentes, a situação fiscal e a existência de ônus ou gravames. A cláusula de evicção, que garante a restituição ao comprador em caso de perda do bem por decisão judicial, deve estar claramente prevista.",
      "Nos contratos de locação, além das disposições da Lei do Inquilinato (Lei nº 8.245/91), é importante definir com precisão as responsabilidades de cada parte quanto à manutenção do imóvel, os índices de reajuste aplicáveis e as condições para renovação ou rescisão antecipada do contrato.",
      "A cláusula penal — que estabelece multas para o descumprimento das obrigações contratuais — deve ser proporcional e razoável, sob pena de ser considerada abusiva pelo Judiciário. Recomendamos que o valor da multa não exceda 10% do valor total do contrato em operações de compra e venda.",
      "Para imóveis adquiridos na planta, o contrato deve prever com clareza o prazo de entrega, as especificações técnicas, a tolerância para atrasos e as penalidades aplicáveis à incorporadora em caso de descumprimento. A recente jurisprudência do STJ tem sido favorável aos compradores nessas situações.",
    ],
  },
  {
    id: "6",
    title: "Crimes Cibernéticos: Tipificação e Defesa",
    excerpt: "Como a legislação penal brasileira trata os crimes praticados no ambiente digital e quais são os direitos do acusado.",
    category: "Direito Penal",
    date: "3 Fev 2026",
    readTime: "6 min",
    slug: "crimes-ciberneticos",
    image: blog6,
    content: [
      "O crescimento exponencial das interações digitais trouxe consigo um aumento significativo dos crimes praticados no ambiente virtual. A legislação brasileira tem evoluído para tipificar essas condutas, mas o ritmo das inovações tecnológicas frequentemente supera o da produção legislativa.",
      "A Lei Carolina Dieckmann (Lei nº 12.737/2012) foi um marco ao tipificar a invasão de dispositivos informáticos, estabelecendo penas de detenção e multa para quem acessa sistemas alheios sem autorização. O Marco Civil da Internet (Lei nº 12.965/2014) complementou esse arcabouço, definindo princípios, direitos e deveres para o uso da internet no Brasil.",
      "Entre os crimes cibernéticos mais comuns estão o estelionato digital (golpes por e-mail, redes sociais ou aplicativos de mensagens), a extorsão mediante ransomware, a difamação e a calúnia praticadas em ambientes virtuais, e o furto de dados pessoais e financeiros.",
      "A defesa em casos de crimes cibernéticos exige conhecimento técnico especializado. A perícia digital é um elemento crucial, pois a comprovação da autoria muitas vezes depende de análises forenses de dispositivos, logs de acesso e metadados de comunicações eletrônicas.",
      "Para os acusados, é fundamental preservar todas as evidências disponíveis e buscar assessoria jurídica imediatamente. A cadeia de custódia das provas digitais é frequentemente questionada nos tribunais, e falhas nesse processo podem levar à anulação de evidências.",
      "Recomendamos também que empresas e indivíduos adotem medidas preventivas robustas, incluindo a utilização de autenticação em dois fatores, a atualização regular de softwares e a conscientização sobre técnicas de engenharia social utilizadas por criminosos.",
    ],
  },
  {
    id: "7",
    title: "Mediação e Arbitragem: Alternativas ao Judiciário",
    excerpt: "Métodos extrajudiciais de resolução de conflitos que oferecem agilidade e confidencialidade às partes.",
    category: "Direito Civil",
    date: "28 Jan 2026",
    readTime: "5 min",
    slug: "mediacao-arbitragem",
    image: blog3,
    content: [
      "A sobrecarga do Poder Judiciário brasileiro, que acumula milhões de processos em tramitação, tem impulsionado a busca por métodos alternativos de resolução de conflitos. A mediação e a arbitragem surgem como opções eficientes, oferecendo agilidade e confidencialidade às partes envolvidas.",
      "A mediação é um processo voluntário no qual um terceiro imparcial — o mediador — facilita o diálogo entre as partes, auxiliando-as a encontrar uma solução mutuamente satisfatória. Diferentemente do juiz, o mediador não impõe uma decisão; seu papel é criar condições para que as próprias partes construam o acordo.",
      "A arbitragem, por sua vez, é um procedimento no qual as partes submetem o conflito a um ou mais árbitros, que proferem uma decisão vinculante. A sentença arbitral tem os mesmos efeitos de uma sentença judicial e não pode ser revista quanto ao mérito pelo Poder Judiciário.",
      "Entre as vantagens desses métodos estão a celeridade, a confidencialidade e a possibilidade de escolher profissionais especializados no tema em discussão. Um procedimento arbitral típico é concluído em 12 a 18 meses, enquanto um processo judicial pode levar anos.",
      "Recomendamos a inclusão de cláusulas compromissórias em contratos comerciais, estabelecendo a arbitragem como método preferencial de resolução de disputas. Para conflitos familiares e de vizinhança, a mediação tem se mostrado particularmente eficaz.",
    ],
  },
  {
    id: "8",
    title: "Compliance Empresarial: Por Onde Começar",
    excerpt: "Um roteiro prático para implementar um programa de conformidade eficiente na sua empresa.",
    category: "Direito Empresarial",
    date: "20 Jan 2026",
    readTime: "9 min",
    slug: "compliance-empresarial",
    image: blog1,
    content: [
      "O compliance empresarial deixou de ser um diferencial competitivo para se tornar uma necessidade. Em um ambiente regulatório cada vez mais exigente, empresas que investem em programas de conformidade estão mais protegidas contra riscos legais, reputacionais e financeiros.",
      "O primeiro passo para implementar um programa de compliance é realizar uma avaliação de riscos abrangente. Identifique os principais riscos regulatórios, trabalhistas, tributários e ambientais aos quais sua empresa está exposta. Essa análise deve considerar o setor de atuação, o porte da empresa e as jurisdições em que opera.",
      "Com base na avaliação de riscos, elabore um código de ética e conduta que reflita os valores da organização e estabeleça diretrizes claras para o comportamento esperado de todos os colaboradores. Esse documento deve ser acessível, compreensível e regularmente atualizado.",
      "A criação de um canal de denúncias confidencial é outro elemento essencial. Ele permite que colaboradores reportem irregularidades sem medo de retaliação. A lei brasileira anticorrupção (Lei nº 12.846/2013) considera a existência de mecanismos internos de integridade como atenuante em casos de responsabilização.",
      "O treinamento contínuo das equipes é fundamental para garantir que as políticas de compliance sejam efetivamente implementadas. Programas de capacitação devem abordar temas como prevenção à lavagem de dinheiro, combate à corrupção, proteção de dados e concorrência leal.",
      "Por fim, monitore e avalie regularmente a eficácia do programa. Auditorias internas, indicadores de desempenho e revisões periódicas são ferramentas indispensáveis para garantir que o compliance evolua junto com a empresa e o ambiente regulatório.",
    ],
  },
];
