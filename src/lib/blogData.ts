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
  {
    id: "10",
    title: "Ilegalidade da busca domiciliar: síntese técnica da decisão no HC 960442/DF",
    excerpt: "Fuga e resquícios de droga em via pública não autorizam, por si sós, o ingresso em residência sem mandado judicial ou consentimento livre comprovado.",
    category: "Direito Penal",
    date: "17 Abr 2026",
    readTime: "9 min",
    slug: "ilegalidade-busca-domiciliar-hc-960442",
    image: blog10,
    content: [
      "Material redigido a partir da decisão do Ministro Rogerio Schietti Cruz, com foco na nulidade do ingresso domiciliar sem mandado judicial.",
      "Tese central: a fuga e os resquícios de droga encontrados na via pública podem legitimar a busca pessoal, mas não autorizam, por si sós, o ingresso em residência. Sem consentimento livre e comprovado, ou sem fundadas razões prévias e concretas de flagrante no interior do imóvel, a busca domiciliar é ilícita.",
      "1. Síntese da decisão",
      "No habeas corpus, a defesa sustentou a ilicitude das provas decorrentes do ingresso em domicílio. O STJ reconheceu que, no caso concreto, a abordagem pessoal do paciente foi considerada válida, porque houve perseguição após fuga e, posteriormente, localização de resquícios de droga e dinheiro. Contudo, a Corte afastou a legalidade das diligências realizadas nas residências indicadas no curso da ocorrência, por entender ausentes elementos idôneos para demonstrar consentimento voluntário ou justa causa autônoma para o ingresso policial.",
      "2. Inviolabilidade do domicílio como garantia constitucional reforçada",
      "A decisão parte do art. 5º, XI, da Constituição Federal e da tese firmada pelo STF no Tema 280, segundo a qual a entrada forçada em domicílio sem mandado judicial somente é lícita quando amparada em fundadas razões, anteriores ao ingresso e justificáveis posteriormente, de que no interior da casa ocorre situação de flagrante delito. O ponto central é que a descoberta posterior de drogas não convalida a invasão: a legalidade da diligência deve existir antes da entrada.",
      "3. Busca pessoal não se confunde com busca domiciliar",
      "Um dos pontos mais importantes do julgado é a distinção entre os standards probatórios. A busca pessoal, regida pelo art. 244 do CPP, admite fundada suspeita de posse de corpo de delito. Já a entrada em domicílio exige patamar mais elevado de justificação, porque a proteção constitucional da casa possui densidade normativa própria e tutela não apenas o investigado, mas todas as pessoas que se encontram no ambiente doméstico.",
      "4. Por que a busca domiciliar foi considerada ilegal",
      "No caso concreto, o STJ reputou inverossímil a narrativa policial segundo a qual o corréu, após abordagem em via pública e sem apreensão de ilícitos consigo, teria espontaneamente confessado possuir drogas, autorizado a entrada em sua residência e ainda indicado outros dois imóveis onde o entorpecente acabou localizado. Para a Corte, essa versão não demonstrou consentimento livre, esclarecido e desprovido de coação, especialmente diante do contexto de abordagem policial ostensiva, com agentes armados e investigado já constrangido pela situação.",
      "5. Ônus do Estado de provar consentimento válido",
      "A decisão aplica a orientação consolidada no HC 598.051/SP: o ônus de demonstrar a legalidade e a voluntariedade do consentimento é do Estado. Em caso de dúvida, não se presume autorização válida. Ao contrário, exige-se prova robusta, preferencialmente com registro por escrito, indicação de testemunhas e, sempre que possível, gravação em áudio e vídeo da diligência. A ausência desses elementos enfraquece decisivamente a versão estatal.",
      "6. Apreensão em via pública não autoriza, automaticamente, busca na casa",
      "Outro fundamento expressivo da decisão é que a mera apreensão de droga em via pública, ainda que associada a circunstâncias suspeitas, não permite presumir que haja mais objetos ilícitos dentro da residência. Para que o ingresso domiciliar fosse legítimo, seria necessário algum dado concreto de que o imóvel estava sendo utilizado, naquele momento, como base da traficância. Sem investigação prévia, monitoramento, campana ou sinais objetivos de mercancia no interior da casa, a diligência torna-se arbitrária.",
      "7. Consequência processual da ilegalidade",
      "Reconhecida a violação domiciliar, o STJ declarou ilícitas as provas obtidas nas residências e todas as derivadas delas, determinando o desentranhamento e a prolação de nova sentença com base apenas nas provas remanescentes. A ordem foi concedida parcialmente justamente porque a prova oriunda da busca pessoal foi preservada, mas todo o material apreendido nos imóveis foi contaminado pela ilicitude originária.",
      "8. Tese utilizável em peça processual",
      "A decisão oferece fundamento forte para sustentar que: (i) não basta invocar crime permanente para afastar a inviolabilidade do domicílio; (ii) fuga, nervosismo, denúncia genérica ou apreensão de pequena quantidade de droga fora da residência não equivalem a fundadas razões para ingresso no lar; (iii) consentimento domiciliar precisa ser comprovadamente livre, e não apenas afirmado pelos policiais; e (iv) a descoberta posterior de entorpecentes não sana a ilegalidade da entrada, impondo o reconhecimento da prova ilícita e de seus frutos.",
      "9. Conclusão",
      "Em termos práticos, a decisão reafirma que o combate ao tráfico não autoriza a flexibilização automática das garantias constitucionais. A casa continua sendo espaço de proteção qualificada. Sem lastro probatório prévio, concreto e controlável judicialmente, o ingresso policial converte-se em violação de domicílio, tornando ilícita a prova produzida. Em um Estado Democrático de Direito, eficiência persecutória não substitui legalidade constitucional.",
      "VIDE: HC 960442/DF (STJ), Ministro Rogerio Schietti Cruz",
    ],
  },
];
