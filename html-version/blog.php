<?php
$pageTitle = 'Blog';
$pageDescription = 'Artigos e publicações sobre Direito Penal e Indenização Civil.';
include 'includes/header.php';
include 'includes/navbar.php';

// Ordenados do mais recente para o mais antigo
$posts = [
  ['slug' => 'ilegalidade-busca-domiciliar-hc-960442', 'title' => 'Ilegalidade da busca domiciliar: síntese técnica da decisão no HC 960442/DF', 'excerpt' => 'Fuga e resquícios de droga em via pública não autorizam, por si sós, o ingresso em residência sem mandado judicial ou consentimento livre comprovado.', 'category' => 'Direito Penal', 'date' => '17 Abr 2026', 'readTime' => '9 min', 'image' => 'images/blog/blog-10.jpg'],
  ['slug' => 'justa-causa-trancamento-acao-penal-provas-ilicitas', 'title' => 'Justa causa da ação penal e trancamento por provas ilícitas', 'excerpt' => 'Como a ilicitude probatória compromete a justa causa e autoriza o trancamento da ação penal pela via do habeas corpus.', 'category' => 'Direito Penal', 'date' => '17 Abr 2026', 'readTime' => '8 min', 'image' => 'images/blog/blog-9.jpg'],
  ['slug' => 'prisao-preventiva-regime-semiaberto-antecipacao-pena', 'title' => 'Da incompatibilidade entre a prisão preventiva e o regime inicial semiaberto: verdadeira antecipação de pena', 'excerpt' => 'Por que manter a prisão cautelar quando a sentença fixa regime semiaberto configura constrangimento ilegal e execução antecipada da pena.', 'category' => 'Direito Penal', 'date' => '17 Abr 2026', 'readTime' => '6 min', 'image' => 'images/blog/blog-8.jpg'],
  ['slug' => 'sumula-691-prisao-domiciliar-maes-gestantes', 'title' => 'Superação da Súmula 691 do STF e prisão domiciliar para mães e gestantes', 'excerpt' => 'Análise da decisão no HC 939358/DF, do STJ, e seus reflexos práticos na defesa criminal envolvendo mulheres gestantes e mães de crianças menores de 12 anos.', 'category' => 'Direito Penal', 'date' => '15 Abr 2026', 'readTime' => '10 min', 'image' => 'images/blog/blog-7.jpg'],
  ['slug' => 'superacao-sumula-691-stf-habeas-corpus', 'title' => 'A superação da Súmula 691 do STF e a admissibilidade do habeas corpus concomitante ao recurso especial', 'excerpt' => 'Análise da flexibilização de óbices processuais pelo STF em matéria penal e o uso simultâneo do habeas corpus com recursos excepcionais.', 'category' => 'Direito Penal', 'date' => '3 Fev 2026', 'readTime' => '8 min', 'image' => 'images/blog/blog-6.jpg'],
];

$categories = ['Direito Penal'];
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
