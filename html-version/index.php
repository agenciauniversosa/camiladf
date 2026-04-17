<?php
$pageTitle = 'Início';
$pageDescription = 'Estratégia, técnica e defesa penal de alto nível. Advocacia artesanal e customizada em Direito Penal Clássico, com ênfase em Tribunais Superiores.';
include 'includes/header.php';
include 'includes/navbar.php';
?>

  <!-- ═══ HERO ═══ -->
  <section class="hero">
    <div class="hero-bg">
      <img src="images/hero-law.jpg" alt="Escritório">
      <div class="hero-overlay-right"></div>
      <div class="hero-overlay-bottom"></div>
    </div>

    <div class="hero-content section-container">
      <div class="hero-text reveal">
        <p class="label-sm">Dias Frazão Advocacia · Atuação Nacional</p>
        <h1 class="heading-xl">Estratégia, técnica e <em>defesa penal de alto nível</em></h1>
        <p class="subtitle body-md">Advocacia artesanal e customizada em Direito Penal Clássico, com ênfase em Tribunais Superiores.</p>
        <div class="hero-buttons">
          <a href="#contato" class="btn-primary">
            Agendar Consulta
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#areas" class="hero-btn-outline">Nossas Áreas</a>
        </div>
      </div>
    </div>

    <div class="hero-scroll">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
    </div>
  </section>

  <!-- ═══ STATS BAR ═══ -->
  <section class="stats-bar">
    <div class="section-container">
      <div class="stats-card reveal">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-value counter" data-target="12" data-suffix="+">0</span>
            <p class="stat-label">anos de atuação</p>
          </div>
          <div class="stat-item">
            <span class="stat-value counter" data-target="500" data-suffix="+">0</span>
            <p class="stat-label">clientes atendidos</p>
          </div>
          <div class="stat-item">
            <span class="stat-value counter" data-target="98" data-suffix="%">0</span>
            <p class="stat-label">de satisfação</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ ÁREAS ═══ -->
  <section id="areas" class="section-gap">
    <div class="section-container">
      <div style="text-align:center;max-width:40rem;margin:0 auto 4rem;" class="reveal">
        <p class="label-sm" style="margin-bottom:0.75rem;">Especialidades</p>
        <h2 class="heading-xl" style="color:hsl(var(--foreground));margin-bottom:1rem;">Áreas de atuação</h2>
        <p class="body-md" style="color:hsl(var(--muted-foreground));">Cobertura jurídica completa com profundidade técnica em cada disciplina.</p>
      </div>

      <div class="areas-grid">
        <div class="area-card reveal">
          <div class="area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></svg>
          </div>
          <h3>Direito Penal Clássico</h3>
          <p class="body-sm" style="color:hsl(var(--muted-foreground));">Atuação estratégica em defesa criminal em todas as instâncias, com ênfase em Tribunais Superiores (STF e STJ).</p>
          <div class="area-line"></div>
        </div>

        <div class="area-card reveal" data-delay="0.1">
          <div class="area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
          </div>
          <h3>Indenização Civil</h3>
          <p class="body-sm" style="color:hsl(var(--muted-foreground));">Busca de reparação justa por danos morais e materiais, com análise individualizada de cada caso.</p>
          <div class="area-line"></div>
        </div>

        <div class="area-card reveal" data-delay="0.2">
          <div class="area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
          </div>
          <h3>Lei de Drogas</h3>
          <p class="body-sm" style="color:hsl(var(--muted-foreground));">Atuação estratégica e técnica em processos envolvendo a Lei de Drogas, com foco na análise rigorosa da legalidade das provas, combate a abordagens ilícitas e garantia dos direitos fundamentais do acusado. Defesa qualificada em todas as fases do processo, com especial atenção à dosimetria da pena e à aplicação de benefícios legais, como o tráfico privilegiado.</p>
          <div class="area-line"></div>
        </div>

        <div class="area-card reveal" data-delay="0.3">
          <div class="area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          </div>
          <h3>Grandes Operações</h3>
          <p class="body-sm" style="color:hsl(var(--muted-foreground));">Atuação em investigações e processos oriundos de grandes operações policiais, com abordagem altamente técnica e estratégica. Experiência na análise de provas complexas, medidas cautelares, colaborações premiadas e nulidades processuais, sempre com foco na proteção das garantias constitucionais e na construção de uma defesa sólida e personalizada.</p>
          <div class="area-line"></div>
        </div>

        <div class="area-card reveal" data-delay="0.4">
          <div class="area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.8.84A19 19 0 0 1 11 20Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
          </div>
          <h3>Crimes Ambientais</h3>
          <p class="body-sm" style="color:hsl(var(--muted-foreground));">Assessoria e defesa em processos relacionados a crimes ambientais, com atuação tanto preventiva quanto contenciosa. Análise detalhada de autos de infração, defesa administrativa e judicial, sempre com foco na proteção dos direitos do cliente e na regularização ambiental.</p>
          <div class="area-line"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SOBRE ═══ -->
  <section class="about-section">
    <div class="section-container section-gap">
      <div class="about-grid">
        <div class="reveal">
          <div class="about-image-wrapper">
            <div class="about-image">
              <img src="images/team/camila.png" alt="Camila Caroline Dias Frazão - Advogada Criminalista">
            </div>
            <div class="about-badge">
              <p class="name">Camila C. Dias Frazão</p>
              <p class="title">Fundadora · OAB/SP</p>
            </div>
          </div>
        </div>

        <div class="about-content">
          <div class="reveal" data-delay="0.1">
            <p class="label-sm" style="margin-bottom:0.75rem;">Sobre o escritório</p>
            <h2 class="heading-xl">Advocacia <em>artesanal</em></h2>
          </div>
          <div class="reveal" data-delay="0.15">
            <blockquote class="about-quote">
              "Excelência técnica, confidencialidade e compromisso inegociável com a defesa de direitos e garantias fundamentais."
            </blockquote>
          </div>
          <div class="reveal about-text" data-delay="0.25">
            <p class="body-md">Escritório boutique dedicado à atuação estratégica em Direito Penal Clássico. Sob uma atuação qualificada, busca-se construir soluções jurídicas consistentes em todas as instâncias, com ênfase em Tribunais Superiores.</p>
            <p class="body-md">Fundado e conduzido pela advogada Camila Caroline Dias Frazão, o escritório atua em todo o território nacional, oferecendo uma advocacia artesanal e customizada, pautada na análise individual de cada caso.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ BLOG ═══ -->
  <section class="blog-section section-gap">
    <div class="section-container">
      <div class="blog-header">
        <div class="reveal">
          <p class="label-sm" style="margin-bottom:0.75rem;">Publicações</p>
          <h2 class="heading-xl" style="color:hsl(var(--foreground));">Artigos recentes</h2>
        </div>
        <div class="reveal" data-delay="0.15">
          <a href="blog.php" class="btn-outline" style="font-size:12px;padding:0.5rem 1.25rem;">
            Ver todos
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      <!-- Featured post -->
      <a href="blog-post.php?slug=legitima-defesa-direito-penal" class="blog-featured reveal">
        <div class="featured-image">
          <img src="images/blog/blog-1.jpg" alt="Legítima Defesa">
        </div>
        <div class="featured-content">
          <p class="label-sm">Direito Penal</p>
          <h3 class="heading-lg">Legítima Defesa: Quando o Direito Penal Protege Quem Se Defende</h3>
          <p class="body-md" style="color:hsl(var(--muted-foreground));margin-bottom:1.5rem;max-width:28rem;">Entenda os requisitos legais da legítima defesa no Código Penal brasileiro e como essa excludente de ilicitude é aplicada pelos tribunais.</p>
          <div class="featured-meta">
            <span>8 Mar 2026</span> · <span>7 min</span>
          </div>
        </div>
      </a>

      <!-- Grid posts -->
      <div class="blog-grid">
        <a href="blog-post.php?slug=dano-moral-negativacao-indevida" class="blog-card reveal">
          <div class="card-image"><img src="images/blog/blog-2.jpg" alt="Dano Moral"></div>
          <p class="label-sm">Indenização Civil</p>
          <h3>Dano Moral por Negativação Indevida: Seus Direitos</h3>
          <p class="body-sm excerpt" style="color:hsl(var(--muted-foreground));">Saiba como agir quando seu nome é incluído indevidamente em cadastros de inadimplentes.</p>
          <p class="card-meta">2 Mar 2026 · 6 min</p>
        </a>

        <a href="blog-post.php?slug=prisao-preventiva-garantias" class="blog-card reveal" data-delay="0.1">
          <div class="card-image"><img src="images/blog/blog-3.jpg" alt="Prisão Preventiva"></div>
          <p class="label-sm">Direito Penal</p>
          <h3>Prisão Preventiva: Limites e Garantias Constitucionais</h3>
          <p class="body-sm excerpt" style="color:hsl(var(--muted-foreground));">Uma análise sobre os requisitos legais para a decretação da prisão preventiva.</p>
          <p class="card-meta">25 Fev 2026 · 8 min</p>
        </a>

        <a href="blog-post.php?slug=indenizacao-erro-medico" class="blog-card reveal" data-delay="0.2">
          <div class="card-image"><img src="images/blog/blog-4.jpg" alt="Erro Médico"></div>
          <p class="label-sm">Indenização Civil</p>
          <h3>Indenização por Erro Médico: Como Buscar Reparação</h3>
          <p class="body-sm excerpt" style="color:hsl(var(--muted-foreground));">Entenda quando o erro médico gera direito à indenização e quais provas são necessárias.</p>
          <p class="card-meta">18 Fev 2026 · 7 min</p>
        </a>
      </div>

      <div class="blog-all-btn">
        <a href="blog.php" class="btn-outline" style="font-size:12px;padding:0.5rem 1.25rem;">
          Ver todos os artigos
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══ CONTATO ═══ -->
  <section id="contato" class="contact-section section-gap">
    <div class="section-container">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <p class="label-sm">Contato</p>
          <div class="heading-row">
            <h2>Vamos conversar?</h2>
            <p class="heading-desc body-md">Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis.</p>
          </div>
          <div class="contact-details body-sm">
            <p class="email-line">camila@diasfrazao.com.br</p>
            <p>(61) 98159-0908</p>
          </div>
        </div>

        <div class="reveal" data-delay="0.15">
          <form id="contact-form" class="contact-form" novalidate>
            <div class="form-row">
              <div>
                <input type="text" name="name" placeholder="Nome completo" class="contact-input" maxlength="100">
                <p id="error-name" class="form-error"></p>
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" class="contact-input" maxlength="255">
                <p id="error-email" class="form-error"></p>
              </div>
            </div>
            <div class="form-row">
              <div>
                <input type="tel" name="phone" placeholder="Telefone" class="contact-input" maxlength="20">
              </div>
              <div>
                <input type="text" name="subject" placeholder="Assunto" class="contact-input" maxlength="200">
                <p id="error-subject" class="form-error"></p>
              </div>
            </div>
            <div>
              <textarea name="message" placeholder="Sua mensagem" class="contact-input" maxlength="2000" rows="5"></textarea>
              <p id="error-message" class="form-error"></p>
            </div>
            <p id="form-success" class="form-success hidden"></p>
            <button type="submit" class="contact-submit">
              Enviar Mensagem
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

<?php include 'includes/footer.php'; ?>
