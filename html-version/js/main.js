// ═══ NAVBAR SCROLL EFFECT ═══
const navbar = document.querySelector('.navbar-wrapper');
const topBar = document.querySelector('.top-bar');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');
const navLogo = document.getElementById('nav-logo');
const mobileToggle = document.querySelector('.mobile-toggle');

// Detect if we're on the home page
const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.php') || window.location.pathname.endsWith('/');

function updateNavbar() {
  const scrolled = window.scrollY > 40;
  const solid = !isHome || scrolled;
  
  if (topBar) topBar.classList.toggle('hidden', solid);
  if (mainNav) mainNav.classList.toggle('scrolled', solid);
  
  if (navLinks) {
    navLinks.classList.toggle('transparent', !solid);
    navLinks.classList.toggle('scrolled', solid);
  }
  if (navCta) {
    navCta.classList.toggle('transparent', !solid);
    navCta.classList.toggle('scrolled', solid);
  }
  if (mobileToggle) {
    mobileToggle.classList.toggle('scrolled', solid);
  }
  
  // Swap logo
  if (navLogo) {
    navLogo.src = solid ? 'images/logo-dark.png' : 'images/logo-light.png';
  }
  
  // Mobile toggle icon color
  if (mobileToggle) {
    const svg = mobileToggle.querySelector('svg');
    if (svg) svg.style.color = solid ? 'hsl(var(--foreground))' : '#fff';
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ═══ MOBILE MENU ═══
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    mobileToggle.innerHTML = isOpen
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    updateNavbar();
  });
  
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
  });
}

// ═══ SCROLL REVEAL ═══
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-40px' });
  
  reveals.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);

// ═══ ANIMATED COUNTERS ═══
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const step = Math.max(1, Math.floor(target / 60));
        const interval = duration / (target / step);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = current + suffix;
          }
        }, interval);
        
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);

// ═══ CONTACT FORM ═══
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear errors
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    document.getElementById('form-success')?.classList.add('hidden');
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate
    let valid = true;
    if (!data.name || data.name.trim().length === 0) {
      document.getElementById('error-name').textContent = 'Nome é obrigatório';
      valid = false;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      document.getElementById('error-email').textContent = 'Email inválido';
      valid = false;
    }
    if (!data.subject || data.subject.trim().length === 0) {
      document.getElementById('error-subject').textContent = 'Assunto é obrigatório';
      valid = false;
    }
    if (!data.message || data.message.trim().length < 10) {
      document.getElementById('error-message').textContent = 'Mensagem deve ter pelo menos 10 caracteres';
      valid = false;
    }
    
    if (!valid) return;
    
    const submitBtn = contactForm.querySelector('.contact-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    try {
      const response = await fetch('send-contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        contactForm.reset();
        submitBtn.textContent = 'Enviado!';
        const successEl = document.getElementById('form-success');
        if (successEl) {
          successEl.textContent = 'Mensagem enviada! Retornaremos em breve.';
          successEl.classList.remove('hidden');
        }
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enviar Mensagem <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
          if (successEl) successEl.classList.add('hidden');
        }, 4000);
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Enviar Mensagem <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Enviar Mensagem <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
      alert('Erro ao enviar. Tente novamente.');
    }
  });
}

// ═══ BLOG FILTERS (blog page) ═══
function initBlogFilters() {
  const searchInput = document.getElementById('blog-search');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const blogCards = document.querySelectorAll('.blog-page-grid .blog-card');
  const emptyState = document.querySelector('.empty-state');
  
  if (!searchInput || !blogCards.length) return;
  
  let activeCategory = '';
  
  function filterPosts() {
    const query = searchInput.value.toLowerCase();
    let visibleCount = 0;
    
    blogCards.forEach(card => {
      const title = card.dataset.title?.toLowerCase() || '';
      const excerpt = card.dataset.excerpt?.toLowerCase() || '';
      const category = card.dataset.category || '';
      
      const matchesSearch = !query || title.includes(query) || excerpt.includes(query);
      const matchesCategory = !activeCategory || category === activeCategory;
      
      if (matchesSearch && matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? '' : 'none';
    }
  }
  
  searchInput.addEventListener('input', filterPosts);
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || '';
      filterPosts();
    });
  });
}

document.addEventListener('DOMContentLoaded', initBlogFilters);

// ═══ SMOOTH SCROLL FOR HASH LINKS ═══
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href*="#"]');
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (!href) return;
  
  // Handle same-page hash links
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) return;
  
  const hash = href.substring(hashIndex);
  const path = href.substring(0, hashIndex);
  
  // If it's a link to the current page or just a hash
  if (!path || path === '/' || path === 'index.php' || window.location.pathname.endsWith(path)) {
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
