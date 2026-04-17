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
  "Direito Penal",
  "Indenização Civil",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Legítima Defesa: Quando o Direito Penal Protege Quem Se Defende",
    excerpt: "Entenda os requisitos legais da legítima defesa no Código Penal brasileiro e como essa excludente de ilicitude é aplicada pelos tribunais.",
    category: "Direito Penal",
    date: "8 Mar 2026",
    readTime: "7 min",
    slug: "legitima-defesa-direito-penal",
    image: blog1,
    content: [
      "A legítima defesa é uma das excludentes de ilicitude mais invocadas no Direito Penal brasileiro. Prevista no artigo 25 do Código Penal, ela permite que uma pessoa repila agressão injusta, atual ou iminente, utilizando os meios necessários e de forma moderada.",
      "Para que a legítima defesa seja reconhecida, é preciso que estejam presentes todos os seus requisitos: a agressão deve ser injusta (contrária ao direito), atual ou iminente, e a reação deve ser proporcional ao ataque sofrido. O excesso — seja doloso ou culposo — pode levar à responsabilização penal do agente.",
      "A jurisprudência dos tribunais superiores tem refinado a análise desses requisitos ao longo dos anos. O STJ já decidiu, por exemplo, que a agressão verbal, por si só, não autoriza a reação física em legítima defesa, exigindo-se uma ameaça concreta à integridade física ou à vida.",
      "Outro ponto relevante é a legítima defesa putativa, situação em que o agente acredita estar sendo agredido, mas na verdade não há agressão real. Nesses casos, o erro pode afastar o dolo, mas não necessariamente a responsabilidade penal se houver culpa na avaliação equivocada da situação.",
      "A defesa técnica em casos que envolvem legítima defesa exige uma reconstrução detalhada dos fatos, com análise pericial, oitiva de testemunhas e demonstração da proporcionalidade da reação. A atuação de um advogado especializado é fundamental para garantir que o direito do acusado seja plenamente exercido.",
      "Recomendamos que qualquer pessoa envolvida em situação de legítima defesa procure orientação jurídica imediatamente, preservando provas e registrando ocorrência policial o mais rápido possível.",
    ],
  },
  {
    id: "2",
    title: "Dano Moral por Negativação Indevida: Seus Direitos",
    excerpt: "Saiba como agir quando seu nome é incluído indevidamente em cadastros de inadimplentes e qual indenização pode ser obtida.",
    category: "Indenização Civil",
    date: "2 Mar 2026",
    readTime: "6 min",
    slug: "dano-moral-negativacao-indevida",
    image: blog2,
    content: [
      "A inclusão indevida do nome de consumidores em cadastros de restrição ao crédito, como SPC e Serasa, é uma das causas mais frequentes de ações de indenização por danos morais no Brasil. A jurisprudência consolidada reconhece que essa situação gera dano moral presumido, ou seja, não é necessário comprovar o sofrimento — basta demonstrar a negativação indevida.",
      "O primeiro passo ao descobrir uma negativação indevida é reunir as provas necessárias: extratos bancários que comprovem a inexistência da dívida, prints do cadastro de inadimplentes e qualquer comunicação recebida sobre a cobrança. Essa documentação será essencial para o processo judicial.",
      "O valor das indenizações por negativação indevida varia conforme o caso. Os tribunais consideram fatores como o tempo de permanência da restrição, a existência de outras negativações legítimas, a conduta do réu e o impacto na vida do autor. Valores entre R$ 5 mil e R$ 20 mil são os mais comuns, podendo ser superiores em situações excepcionais.",
      "É importante observar a Súmula 385 do STJ, que estabelece que a pessoa que já possui inscrição legítima em cadastro de inadimplentes não faz jus a indenização por dano moral decorrente de nova inscrição, ainda que indevida. Essa limitação deve ser verificada antes do ajuizamento da ação.",
      "Além do dano moral, é possível pleitear danos materiais quando a negativação indevida gerou prejuízos concretos, como a perda de um financiamento ou a impossibilidade de realizar uma compra a prazo. A comprovação documental desses prejuízos é indispensável.",
      "Recomendamos agir rapidamente, pois o prazo prescricional para ações de indenização por dano moral é de 3 anos, contados a partir do conhecimento da negativação.",
    ],
  },
  {
    id: "3",
    title: "Prisão Preventiva: Limites e Garantias Constitucionais",
    excerpt: "Uma análise sobre os requisitos legais para a decretação da prisão preventiva e os direitos do preso provisório.",
    category: "Direito Penal",
    date: "25 Fev 2026",
    readTime: "8 min",
    slug: "prisao-preventiva-garantias",
    image: blog3,
    content: [
      "A prisão preventiva é a medida cautelar mais severa do processo penal brasileiro. Prevista nos artigos 311 a 316 do Código de Processo Penal, ela só pode ser decretada quando presentes os requisitos legais e se nenhuma medida cautelar alternativa for suficiente.",
      "Para a decretação da preventiva, o juiz deve demonstrar a existência de prova da materialidade do crime e indícios suficientes de autoria, além de pelo menos um dos fundamentos: garantia da ordem pública, garantia da ordem econômica, conveniência da instrução criminal ou asseguramento da aplicação da lei penal.",
      "O Pacote Anticrime (Lei nº 13.964/2019) trouxe importantes alterações. Agora, o juiz não pode mais decretar a prisão preventiva de ofício, sendo necessário o requerimento do Ministério Público, do querelante ou do assistente, ou a representação da autoridade policial. Além disso, a cada 90 dias, o juiz deve revisar a necessidade da manutenção da prisão.",
      "A audiência de custódia, obrigatória em até 24 horas após a prisão em flagrante, é um momento crucial para a defesa. Nela, o juiz avalia a legalidade da prisão e decide sobre a conversão em preventiva, a concessão de liberdade provisória ou a imposição de medidas cautelares diversas.",
      "O habeas corpus é o instrumento constitucional por excelência para combater prisões ilegais ou abusivas. Pode ser impetrado a qualquer tempo e não exige formalidades rígidas, podendo inclusive ser concedido de ofício pelo tribunal.",
      "A atuação de um advogado criminalista experiente é essencial desde o primeiro momento da prisão, garantindo que todos os direitos do acusado sejam respeitados e que a defesa técnica seja exercida com a máxima eficiência.",
    ],
  },
  {
    id: "4",
    title: "Indenização por Erro Médico: Como Buscar Reparação",
    excerpt: "Entenda quando o erro médico gera direito à indenização e quais provas são necessárias para obter a reparação judicial.",
    category: "Indenização Civil",
    date: "18 Fev 2026",
    readTime: "7 min",
    slug: "indenizacao-erro-medico",
    image: blog4,
    content: [
      "O erro médico é uma das situações mais delicadas no campo da responsabilidade civil. Quando um profissional de saúde causa dano ao paciente por imperícia, imprudência ou negligência, surge o dever de indenizar. A responsabilidade do médico é subjetiva, ou seja, é necessário comprovar a culpa do profissional.",
      "A prova do erro médico geralmente exige perícia técnica realizada por profissional da mesma especialidade. O laudo pericial é peça fundamental para demonstrar que o dano sofrido decorreu da conduta inadequada do médico, e não de uma complicação inerente ao procedimento realizado.",
      "É importante distinguir entre obrigação de meio e obrigação de resultado. Na maioria das especialidades médicas, o profissional se obriga a empregar os melhores meios disponíveis, sem garantir o resultado. Já em procedimentos estéticos, a jurisprudência tende a reconhecer a obrigação de resultado, facilitando a responsabilização.",
      "Os hospitais e clínicas respondem objetivamente pelos danos causados por seus profissionais, conforme o Código de Defesa do Consumidor. Isso significa que basta comprovar o dano e o nexo causal, sem necessidade de demonstrar culpa da instituição — o que pode ser estrategicamente vantajoso para o paciente.",
      "As indenizações em casos de erro médico podem incluir danos morais, danos estéticos, lucros cessantes e pensão vitalícia em casos de incapacidade permanente. O valor varia conforme a gravidade do dano, podendo alcançar cifras significativas.",
      "Recomendamos que o paciente preserve toda a documentação médica — prontuários, exames, receitas e laudos — e procure orientação jurídica o quanto antes. O prazo prescricional é de 5 anos nas relações de consumo.",
    ],
  },
  {
    id: "5",
    title: "Tribunal do Júri: Como Funciona a Defesa Criminal",
    excerpt: "Conheça o funcionamento do Tribunal do Júri no Brasil e as estratégias de defesa nos crimes dolosos contra a vida.",
    category: "Direito Penal",
    date: "10 Fev 2026",
    readTime: "9 min",
    slug: "tribunal-do-juri-defesa",
    image: blog5,
    content: [
      "O Tribunal do Júri é a instituição constitucional responsável por julgar os crimes dolosos contra a vida: homicídio, infanticídio, induzimento ao suicídio e aborto. Previsto no artigo 5º, inciso XXXVIII, da Constituição Federal, o Júri possui garantias fundamentais: plenitude de defesa, sigilo das votações, soberania dos veredictos e competência para o julgamento dos crimes dolosos contra a vida.",
      "O procedimento do Júri é bifásico. Na primeira fase (judicium accusationis), o juiz avalia se há provas suficientes para submeter o acusado a julgamento popular. Se entender que sim, profere a decisão de pronúncia. Caso contrário, pode impronunciar, absolver sumariamente ou desclassificar o crime.",
      "A segunda fase (judicium causae) é o plenário do Júri propriamente dito. Nela, sete jurados, escolhidos entre cidadãos comuns, decidem sobre a culpa do acusado. A votação é sigilosa, e a decisão é tomada por maioria simples (4 a 3).",
      "A estratégia de defesa no Júri exige habilidades específicas do advogado. Diferentemente do processo comum, onde a argumentação é predominantemente técnica, no plenário é preciso comunicar-se com jurados leigos, utilizando linguagem acessível e argumentação persuasiva. A oratória, a capacidade de contar uma narrativa convincente e a empatia são habilidades essenciais.",
      "Entre as teses defensivas mais comuns estão a negativa de autoria, a legítima defesa, a desclassificação para crime culposo e a participação de menor importância. A escolha da tese deve considerar as provas disponíveis e o perfil dos jurados.",
      "Um advogado criminalista experiente em Tribunal do Júri pode fazer a diferença entre a condenação e a absolvição. A preparação meticulosa, o conhecimento profundo dos autos e a capacidade de reagir aos argumentos da acusação são diferenciais que não podem ser improvisados.",
    ],
  },
  {
    id: "6",
    title: "A superação da Súmula 691 do STF e a admissibilidade do habeas corpus concomitante ao recurso especial",
    excerpt: "Análise da flexibilização de óbices processuais pelo STF em matéria penal e o uso simultâneo do habeas corpus com recursos excepcionais.",
    category: "Direito Penal",
    date: "3 Fev 2026",
    readTime: "8 min",
    slug: "superacao-sumula-691-stf-habeas-corpus",
    image: blog6,
    content: [
      "A jurisprudência do Supremo Tribunal Federal vem passando por um relevante movimento de flexibilização de óbices processuais tradicionais em matéria penal, especialmente quando em jogo o direito fundamental à liberdade de locomoção, ou, em especial, constrangimento ilegal evidente.",
      "Nesse contexto, destacam-se duas construções jurisprudenciais de grande impacto prático: a relativização da Súmula 691/STF e a admissibilidade do habeas corpus mesmo na pendência ou concomitância com recursos excepcionais, como o recurso especial.",
      "Em primeira análise, a Súmula 691 do STF dispõe que não compete ao Supremo Tribunal Federal conhecer de habeas corpus impetrado contra decisão do relator que indefere liminar em habeas corpus requerido a tribunal superior.",
      "Historicamente, essa orientação teve como finalidade evitar a supressão de instância, preservar a competência das instâncias superiores e impedir o uso abusivo do habeas corpus como sucedâneo recursal.",
      "Apesar de sua rigidez formal, o próprio STF consolidou entendimento no sentido de que a Súmula 691 não possui caráter absoluto, admitindo sua superação em hipóteses excepcionais, especialmente quando evidenciado flagrante ilegalidade, abuso de poder ou teratologia.",
      "Noutro ponto, o STF firmou entendimento de que o recurso especial não é pressuposto de admissibilidade do habeas corpus, tampouco impede sua impetração simultânea.",
      "A regra da unirrecorribilidade não se aplica ao habeas corpus, dada sua natureza constitucional e sua função de tutela imediata da liberdade.",
      "Esse entendimento amplia as possibilidades de atuação da defesa, permitindo o uso simultâneo de recursos e habeas corpus, bem como a superação de decisões restritivas quando demonstrada ilegalidade manifesta.",
      "A evolução jurisprudencial reafirma o habeas corpus como instrumento central de proteção da liberdade, evidenciando que a técnica processual não pode se sobrepor aos direitos fundamentais.",
      "Vide: HC 268.729/DF – MIN. REL. CRISTIANO ZANIN (STF)",
    ],
  },
];
