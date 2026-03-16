<?php
$pageTitle = 'Blog';
$pageDescription = 'Artigos e publicações sobre Direito Penal e Indenização Civil.';
include 'includes/header.php';
include 'includes/navbar.php';

$posts = [
  ['slug' => 'legitima-defesa-direito-penal', 'title' => 'Legítima Defesa: Quando o Direito Penal Protege Quem Se Defende', 'excerpt' => 'Entenda os requisitos legais da legítima defesa no Código Penal brasileiro e como essa excludente de ilicitude é aplicada pelos tribunais.', 'category' => 'Direito Penal', 'date' => '8 Mar 2026', 'readTime' => '7 min', 'image' => 'images/blog/blog-1.jpg'],
  ['slug' => 'dano-moral-negativacao-indevida', 'title' => 'Dano Moral por Negativação Indevida: Seus Direitos', 'excerpt' => 'Saiba como agir quando seu nome é incluído indevidamente em cadastros de inadimplentes e qual indenização pode ser obtida.', 'category' => 'Indenização Civil', 'date' => '2 Mar 2026', 'readTime' => '6 min', 'image' => 'images/blog/blog-2.jpg'],
  ['slug' => 'prisao-preventiva-garantias', 'title' => 'Prisão Preventiva: Limites e Garantias Constitucionais', 'excerpt' => 'Uma análise sobre os requisitos legais para a decretação da prisão preventiva e os direitos do preso provisório.', 'category' => 'Direito Penal', 'date' => '25 Fev 2026', 'readTime' => '8 min', 'image' => 'images/blog/blog-3.jpg'],
  ['slug' => 'indenizacao-erro-medico', 'title' => 'Indenização por Erro Médico: Como Buscar Reparação', 'excerpt' => 'Entenda quando o erro médico gera direito à indenização e quais provas são necessárias para obter a reparação judicial.', 'category' => 'Indenização Civil', 'date' => '18 Fev 2026', 'readTime' => '7 min', 'image' => 'images/blog/blog-4.jpg'],
  ['slug' => 'tribunal-do-juri-defesa', 'title' => 'Tribunal do Júri: Como Funciona a Defesa Criminal', 'excerpt' => 'Conheça o funcionamento do Tribunal do Júri no Brasil e as estratégias de defesa nos crimes dolosos contra a vida.', 'category' => 'Direito Penal', 'date' => '10 Fev 2026', 'readTime' => '9 min', 'image' => 'images/blog/blog-5.jpg'],
  ['slug' => 'acidente-transito-indenizacao', 'title' => 'Acidente de Trânsito: Direito à Indenização Completa', 'excerpt' => 'Saiba quais reparações a vítima de acidente de trânsito pode exigir e como garantir uma indenização justa.', 'category' => 'Indenização Civil', 'date' => '3 Fev 2026', 'readTime' => '6 min', 'image' => 'images/blog/blog-6.jpg'],
];

$categories = ['Direito Penal', 'Indenização Civil'];
?>

  <div style="padding-top:7rem;padding-bottom:6rem;">
    <div class="section-container">
      <div class="reveal">
        <p class="label-sm" style="margin-bottom:0.75rem;">Publicações</p>
        <h1 class="heading-xl" style="color:hsl(var(--foreground));margin-bottom:4rem;">Blog</h1>
      </div>

      <div class="blog-page-layout">
        <!-- Sidebar -->
        <aside class="blog-sidebar">
          <div class="search-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="blog-search" placeholder="Buscar..." class="search-input">
          </div>

          <p class="label-sm" style="margin-bottom:0.75rem;">Categorias</p>
          <div class="category-filters">
            <button class="category-btn active" data-category="">Todas</button>
            <?php foreach ($categories as $cat): ?>
              <button class="category-btn" data-category="<?php echo $cat; ?>"><?php echo $cat; ?></button>
            <?php endforeach; ?>
          </div>
        </aside>

        <!-- Grid -->
        <main class="blog-main">
          <div class="blog-page-grid">
            <?php foreach ($posts as $i => $post): ?>
              <a href="blog-post.php?slug=<?php echo $post['slug']; ?>"
                 class="blog-card reveal"
                 data-delay="<?php echo $i * 0.05; ?>"
                 data-title="<?php echo htmlspecialchars($post['title']); ?>"
                 data-excerpt="<?php echo htmlspecialchars($post['excerpt']); ?>"
                 data-category="<?php echo $post['category']; ?>">
                <div class="card-image"><img src="<?php echo $post['image']; ?>" alt="<?php echo htmlspecialchars($post['title']); ?>"></div>
                <p class="label-sm"><?php echo $post['category']; ?></p>
                <h3><?php echo $post['title']; ?></h3>
                <p class="body-sm excerpt" style="color:hsl(var(--muted-foreground));"><?php echo $post['excerpt']; ?></p>
                <p class="card-meta"><?php echo $post['date']; ?> · <?php echo $post['readTime']; ?></p>
              </a>
            <?php endforeach; ?>
          </div>
          <div class="empty-state" style="display:none;">
            <p class="body-md" style="color:hsl(var(--muted-foreground));">Nenhum artigo encontrado.</p>
          </div>
        </main>
      </div>
    </div>
  </div>

<?php include 'includes/footer.php'; ?>
