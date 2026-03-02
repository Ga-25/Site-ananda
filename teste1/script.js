// Animações suaves ao scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Efeito nos botões
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Aqui você pode adicionar integração com WhatsApp ou formulários
            console.log('Botão clicado:', this.textContent);
        });
    });
});


// Sistema Supremo de Partículas Inteligentes
class SupremeParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.maxParticles = window.innerWidth < 768 ? 5 : 10;
    this.init();
  }



  init() {
    this.createParticles();
    this.setupCardInteractions();
    this.startAnimation();
  }



  createParticles() {
    for(let i = 0; i < this.maxParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'smart-particle';
      
      // Posicionamento inicial aleatório
      const startX = Math.random() * 100;
      const delay = Math.random() * -30; // Delay negativo para começar em momentos diferentes
      
      particle.style.cssText = `
        left: ${startX}%;
        animation-delay: ${delay}s;
      `;
      
      this.container.appendChild(particle);
      this.particles.push({
        element: particle,
        baseDelay: delay,
        baseX: startX
      });
    }
  }



  setupCardInteractions() {
    const cards = document.querySelectorAll('.professional-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.particles.forEach(particle => {
          particle.element.style.animationPlayState = 'paused';
          particle.element.style.transform = 'scale(2)';
          particle.element.style.opacity = '1';
          particle.element.style.filter = 'blur(1px)';
        });
      });



      card.addEventListener('mouseleave', () => {
        this.particles.forEach(particle => {
          particle.element.style.animationPlayState = 'running';
          particle.element.style.transform = '';
          particle.element.style.opacity = '';
          particle.element.style.filter = '';
        });
      });
    });
  }



  startAnimation() {
    // As partículas já são animadas pelo CSS
    // Este método pode ser usado para animações JavaScript adicionais se necessário
  }



  // Método para ajustar partículas em resize
  handleResize() {
    const newMaxParticles = window.innerWidth < 768 ? 5 : 10;
    
    if(newMaxParticles < this.particles.length) {
      // Remove partículas extras
      for(let i = newMaxParticles; i < this.particles.length; i++) {
        this.particles[i].element.remove();
      }
      this.particles = this.particles.slice(0, newMaxParticles);
    } else if(newMaxParticles > this.particles.length) {
        // Adiciona mais partículas
      const particlesToAdd = newMaxParticles - this.particles.length;
      for(let i = 0; i < particlesToAdd; i++) {
        const particle = document.createElement('div');
        particle.className = 'smart-particle';
        
        const startX = Math.random() * 100;
        const delay = Math.random() * -30;
        
        particle.style.cssText = `
          left: ${startX}%;
          animation-delay: ${delay}s;
        `;
        
        this.container.appendChild(particle);
        this.particles.push({
          element: particle,
          baseDelay: delay,
          baseX: startX
        });
      }
    }
    
    this.maxParticles = newMaxParticles;
  }
}



// Inicialização do Sistema
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cards-container');
  const particleSystem = new SupremeParticleSystem(container);
  
  // Handle resize
  window.addEventListener('resize', () => {
    particleSystem.handleResize();
  });
  
  // Smooth scroll para CTAs
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Efeito de clique visual
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
      
      // Aqui você pode adicionar a lógica de redirecionamento
      console.log('CTA clicado:', button.textContent);
    });
  });
});



// Sistema de Performance Inteligente
class PerformanceOptimizer {
  constructor() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }
  
  init() {
    if(this.reducedMotion) {
      this.disableAnimations();
    }
    
    this.setupIntersectionObserver();
  }
  
  disableAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.professional-card').forEach(card => {
      observer.observe(card);
    });
  }
}



// Inicializar otimizador de performance
new PerformanceOptimizer();