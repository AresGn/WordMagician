// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser tous les composants
  initHeader();
  initSmoothScroll();
  initFAQ();
  initInstallationSlider();
  initCurrentYear();
});

// Animation et effets du header
function initHeader() {
  const header = document.querySelector('.header');
  
  // Animation simple au chargement
  if (header) {
    setTimeout(() => {
      header.classList.add('loaded');
    }, 100);
  }
}

// Défilement fluide pour les ancres
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// FAQ accordéon
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
      
      // Fermer toutes les réponses ouvertes
      document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
        if (activeQuestion !== question) {
          activeQuestion.classList.remove('active');
          activeQuestion.nextElementSibling.classList.remove('active');
        }
      });
      
      // Basculer l'état actif
      if (isActive) {
        question.classList.remove('active');
        answer.classList.remove('active');
      } else {
        question.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
}

// Initialiser le slider d'installation avec Swiper
function initInstallationSlider() {
  const installationSlider = document.querySelector('.installation-slider');
  
  if (installationSlider && typeof Swiper !== 'undefined') {
    new Swiper('.installation-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  }
}

// Mettre à jour l'année dans le footer
function initCurrentYear() {
  const yearElement = document.querySelector('.current-year');
  
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Notification après téléchargement du manifest
document.addEventListener('click', function(e) {
  if (e.target.matches('.download-button a') || e.target.closest('.download-button a')) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = 'Téléchargement terminé ! Suivez maintenant les instructions d\'installation.';
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('show');
        
        setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
            notification.remove();
          }, 300);
        }, 3000);
      }, 50);
    }, 1000);
  }
}); 