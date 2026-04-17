import blog1 from "@/assets/blog/blog-1.jpg";
import blog2 from "@/assets/blog/blog-2.jpg";
import blog3 from "@/assets/blog/blog-3.jpg";
import blog4 from "@/assets/blog/blog-4.jpg";
import blog5 from "@/assets/blog/blog-5.jpg";
import blog6 from "@/assets/blog/blog-6.jpg";
import blog7 from "@/assets/blog/blog-7.jpg";
import blog8 from "@/assets/blog/blog-8.jpg";
import blog9 from "@/assets/blog/blog-9.jpg";
import blog10 from "@/assets/blog/blog-10.jpg";

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
  {
    id: "7",
    title: "Superação da Súmula 691 do STF e prisão domiciliar para mães e gestantes",
    excerpt: "Análise da decisão no HC 939358/DF, do STJ, e seus reflexos práticos na defesa criminal envolvendo mulheres gestantes e mães de crianças menores de 12 anos.",
    category: "Direito Penal",
    date: "15 Abr 2026",
    readTime: "10 min",
    slug: "sumula-691-prisao-domiciliar-maes-gestantes",
    image: blog7,
    content: [
      "A decisão proferida no Habeas Corpus n. 939358/DF, relatado pelo Ministro Otávio de Almeida Toledo (Desembargador convocado do TJSP), oferece um precedente relevante em dois planos: processual e material. No plano processual, o Superior Tribunal de Justiça afastou, em caráter excepcional, o óbice da Súmula 691 do STF. No plano material, reconheceu o cabimento da substituição da prisão preventiva por prisão domiciliar em favor de mulher gestante e mãe de crianças menores de 12 anos, à luz do art. 318-A do CPP e do HC coletivo 143.641/SP do Supremo Tribunal Federal.",
      "1. O que diz a Súmula 691 e por que ela costuma impedir o conhecimento do habeas corpus",
      "A Súmula 691 do STF consolidou o entendimento de que, em regra, não cabe habeas corpus contra decisão monocrática de relator que indefere liminar em outro habeas corpus impetrado perante tribunal superior ou tribunal de origem. A razão é evitar supressão de instância e o uso sucessivo do remédio heroico como atalho recursal.",
      "Na prática forense, isso significa que, quando o relator no tribunal local indefere a liminar, a impetração imediata de novo habeas corpus perante o STJ ou o STF tende a não ser conhecida. Todavia, a própria jurisprudência das Cortes Superiores admite relativização desse enunciado quando a decisão atacada revelar ilegalidade manifesta, abuso de poder, teratologia ou flagrante falta de razoabilidade.",
      "2. A superação do óbice sumular no caso concreto",
      "Foi exatamente esse o caminho adotado no HC 939358/DF. Embora o writ tenha sido impetrado contra decisão que negara liminar no tribunal de origem, o STJ entendeu haver ilegalidade manifesta apta a justificar a superação da Súmula 691.",
      "O ponto central foi o descompasso entre a situação concreta da paciente e o regime jurídico protetivo dirigido às mulheres gestantes e mães de crianças pequenas. A paciente estava grávida e era mãe de duas crianças menores, e o delito imputado não envolvia violência ou grave ameaça, nem fora praticado contra descendente. Diante disso, estavam presentes, em tese, os requisitos normativos do art. 318-A do CPP.",
      "Assim, o STJ concluiu que a manutenção da prisão preventiva, sem adequada observância do marco legal e jurisprudencial de proteção à maternidade e à infância, configurava constrangimento ilegal bastante para autorizar o afastamento do óbice sumular.",
      "3. Prisão domiciliar para mães e gestantes: o regime jurídico aplicável",
      "A Lei 13.769/2018 reforçou a tutela processual da maternidade ao inserir o art. 318-A no Código de Processo Penal. O dispositivo determina a substituição da prisão preventiva por prisão domiciliar à mulher gestante ou que for mãe ou responsável por crianças ou pessoas com deficiência, desde que não tenha cometido crime com violência ou grave ameaça à pessoa e desde que o delito não tenha sido praticado contra seu filho ou dependente.",
      "Esse comando legal dialoga diretamente com o que foi decidido pelo STF no HC coletivo 143.641/SP, em que se assentou a necessidade de priorizar a proteção integral da criança e do adolescente, admitindo a substituição da prisão preventiva pela domiciliar para gestantes, puérperas e mães de crianças de até 12 anos, salvo hipóteses verdadeiramente excepcionalíssimas, devidamente fundamentadas.",
      "A decisão do STJ, portanto, reafirma que o exame judicial não pode se limitar à gravidade abstrata do tráfico de drogas, nem pode transformar em regra a negativa de domiciliar para mulheres mães ou gestantes. A excepcionalidade deve ser concreta, individualizada e seriamente demonstrada.",
      "4. Os fundamentos afastados pelo STJ",
      "Na origem, a prisão domiciliar havia sido recusada sob fundamentos como a existência de rede de apoio familiar, a apreensão de droga no interior da residência e a ausência de comprovação de gravidez de risco. O STJ, contudo, reposicionou a análise a partir da lógica protetiva do art. 318-A do CPP e da jurisprudência do Supremo.",
      "Primeiro, porque a indispensabilidade dos cuidados maternos para filhos menores de 12 anos é presumida pela jurisprudência da Corte Superior. Não se exige da defesa prova impossível ou excessiva de que ninguém mais no ambiente familiar poderia cuidar da criança. O foco não é apenas a situação da mãe, mas, sobretudo, o melhor interesse da criança.",
      "Segundo, porque o simples fato de a droga ter sido apreendida na residência não basta, por si só, para afastar o benefício. Segundo a compreensão reafirmada na decisão, a residência comum não autoriza concluir automaticamente que o crime foi praticado contra os filhos, nem que a hipótese se enquadra como situação excepcionalíssima.",
      "Terceiro, porque a ausência de gravidez de risco não elimina, por si, a incidência do art. 318-A. A domiciliar, nesse contexto, não depende de prova de gestação de alto risco, já que a proteção legal é mais ampla e alcança a própria condição de gestante e de mãe.",
      "5. A mensagem prática da decisão para a advocacia criminal",
      "A decisão é particularmente importante para a advocacia criminal porque demonstra que a Súmula 691 não é um bloqueio absoluto. Quando a decisão impugnada desconsidera frontalmente parâmetros legais e precedentes vinculantes de proteção à maternidade e à infância, há espaço para sustentar, com técnica, a superação do verbete.",
      "Além disso, o precedente reforça algumas teses defensivas relevantes: (i) o tráfico de drogas, sem violência ou grave ameaça, não impede automaticamente a domiciliar; (ii) a maternidade de criança menor de 12 anos atrai presunção favorável quanto à necessidade dos cuidados maternos; (iii) o argumento da rede de apoio familiar não basta, isoladamente, para afastar a proteção legal; e (iv) a excepcionalidade apta a negar o benefício deve ser concreta, robusta e especificamente fundamentada.",
      "6. Conclusão",
      "O HC 939358/DF é um precedente valioso porque evidencia que o processo penal não pode ser interpretado de forma indiferente à proteção da infância, à maternidade e à dignidade da pessoa presa. Ao superar a Súmula 691 e conceder prisão domiciliar à paciente gestante e mãe de duas crianças, o STJ reafirmou que a legalidade da prisão cautelar deve ser controlada com rigor, especialmente quando a permanência no cárcere contraria norma legal expressa e orientação consolidada do Supremo Tribunal Federal.",
      "Para além do caso concreto, a decisão serve de alerta: onde houver motivação padronizada, presunções desfavoráveis automáticas ou resistência indevida à aplicação do art. 318-A do CPP, caberá à defesa demonstrar que não se trata de mera divergência interpretativa, mas de efetivo constrangimento ilegal, apto a justificar a atuação corretiva dos tribunais superiores.",
      "VIDE: Superior Tribunal de Justiça. HC 939358/DF, Rel. Ministro Otávio de Almeida Toledo (Desembargador convocado do TJSP)",
    ],
  },
  {
    id: "8",
    title: "Da incompatibilidade entre a prisão preventiva e o regime inicial semiaberto: verdadeira antecipação de pena",
    excerpt: "Por que manter a prisão cautelar quando a sentença fixa regime semiaberto configura constrangimento ilegal e execução antecipada da pena.",
    category: "Direito Penal",
    date: "17 Abr 2026",
    readTime: "6 min",
    slug: "prisao-preventiva-regime-semiaberto-antecipacao-pena",
    image: blog8,
    content: [
      "A manutenção da prisão preventiva revela-se manifestamente incompatível com a sentença condenatória que fixou o regime inicial semiaberto para cumprimento da pena. Isso porque, ao manter a segregação cautelar em cenário no qual o próprio título condenatório reconhece não ser cabível o regime fechado como resposta penal inicial, o Estado impõe à acusada restrição mais severa do que aquela definida no édito condenatório.",
      "O Supremo Tribunal Federal tem entendimento consolidado no sentido de que, como regra, é incompatível a imposição ou manutenção da prisão preventiva quando o réu foi condenado a pena a ser cumprida em regime diverso do fechado, pois isso implica, cautelarmente, punição mais gravosa do que a decorrente do próprio título condenatório.",
      "Mais do que isso, a tentativa de \"compatibilizar\" a prisão cautelar com o regime fixado na condenação não encontra previsão legal e acaba por chancelar o cumprimento antecipado da pena, em desrespeito ao entendimento consolidado da Suprema Corte.",
      "A manutenção da custódia traduz verdadeiro constrangimento ilegal, justamente porque impõe, de forma cautelar, regime mais severo que o semiaberto fixado no título condenatório. Em outras palavras, a prisão preventiva deixa de servir à sua natureza instrumental e passa, indevidamente, a funcionar como execução antecipada da reprimenda em regime fechado, o que é juridicamente inadmissível.",
      "Se o próprio Estado-juiz, ao individualizar a pena, concluiu que o caso não exige regime fechado para o início do cumprimento da sanção, não há coerência nem legalidade em conservar a prisão preventiva em moldes que, na prática, produzem efeito mais severo do que a condenação.",
      "Por isso, a solução juridicamente adequada é a revogação da prisão preventiva, com eventual substituição por medidas cautelares diversas, nos termos do art. 319 do CPP, caso o juízo entenda necessário resguardar o processo.",
      "VIDE: HC 248.753/DF, MIN. REL DIAS TOFFOLI (STF)",
    ],
  },
  {
    id: "9",
    title: "Justa causa da ação penal e trancamento por provas ilícitas",
    excerpt: "Como a ilicitude probatória compromete a justa causa e autoriza o trancamento da ação penal pela via do habeas corpus.",
    category: "Direito Penal",
    date: "17 Abr 2026",
    readTime: "8 min",
    slug: "justa-causa-trancamento-acao-penal-provas-ilicitas",
    image: blog9,
    content: [
      "A justa causa constitui requisito essencial para o exercício válido da ação penal, funcionando como verdadeiro filtro de admissibilidade material da persecução criminal. Não se trata apenas da presença formal de indícios, mas da existência de um suporte probatório mínimo, lícito e idôneo, capaz de sustentar a imputação penal em juízo.",
      "No processo penal constitucional, a justa causa está diretamente vinculada à licitude das provas. Isso significa que não basta haver elementos que indiquem autoria e materialidade — é imprescindível que esses elementos tenham sido obtidos por meios compatíveis com a Constituição e com o ordenamento jurídico.",
      "Quando a acusação se estrutura a partir de provas ilícitas, ocorre uma ruptura na própria base de validade da ação penal. A prova ilícita, além de ser inadmissível (art. 5º, LVI, da Constituição), contamina todos os elementos dela derivados, conforme a teoria dos frutos da árvore envenenada.",
      "Nesse cenário, a análise da justa causa deixa de ser meramente quantitativa e passa a ser qualitativa: excluídas as provas ilícitas e suas derivações, remanesce algum elemento probatório autônomo capaz de sustentar a acusação? Se a resposta for negativa, não há justa causa, e a ação penal não pode prosseguir.",
      "O Superior Tribunal de Justiça tem reiteradamente afirmado que a descoberta posterior de elementos incriminadores não convalida a ilegalidade da diligência originária. O controle judicial deve se basear nos elementos existentes antes da medida invasiva, e não nos seus resultados.",
      "A ausência de fundadas razões para ingresso domiciliar, a invalidação de eventual consentimento e a inexistência de urgência configuram vícios que tornam ilícita a prova obtida. Uma vez reconhecida essa ilicitude, deve-se analisar o impacto no conjunto probatório.",
      "Se toda a prova da materialidade e autoria deriva da diligência ilegal, o processo perde sua sustentação jurídica. Não se trata apenas de anular um ato específico, mas de reconhecer que a ação penal como um todo carece de justa causa.",
      "Nesses casos, a medida adequada é o trancamento da ação penal, especialmente pela via do habeas corpus. O trancamento representa o reconhecimento judicial de que o processo não pode prosseguir, seja por ausência de justa causa, seja por ilegalidade manifesta.",
      "É importante diferenciar o trancamento da ação penal do arquivamento. O arquivamento ocorre na fase investigativa, antes do oferecimento da denúncia. Já o trancamento incide quando a ação penal já foi instaurada, mas se revela juridicamente inviável.",
      "O trancamento por provas ilícitas reafirma a função contramajoritária do processo penal: impedir que o Estado, mesmo diante de suspeitas de criminalidade, viole direitos fundamentais para produzir prova e sustentar acusações.",
      "Do ponto de vista estratégico, a defesa deve demonstrar não apenas a ilicitude da prova, mas também a inexistência de fontes independentes e autônomas que possam sustentar a acusação. A ausência desse suporte implica o reconhecimento da falta de justa causa.",
      "Em síntese, não há ação penal legítima sem justa causa, e não há justa causa quando a acusação se fundamenta em provas ilícitas. Nesses casos, o ordenamento jurídico impõe o trancamento da ação penal como forma de preservação das garantias constitucionais e da integridade do devido processo legal.",
      "VIDE: HC 915473 – DF (STJ), MIN. REL. OTAVIO DE ALMEIDA TOLEDO (DESEMBARGADOR CONVOCADO DO TJSP)",
    ],
  },
];
