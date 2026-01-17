/* ================================
   David Kitunov Portfolio - JavaScript
   Modern interactions and animations
   ================================ */

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealElements = document.querySelectorAll('.reveal');

// ===== Navbar Scroll Effect =====
let lastScroll = 0;

function handleNavbarScroll() {
  const currentScroll = window.pageYOffset;
  
  // Add/remove scrolled class based on scroll position
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ===== Mobile Navigation Toggle =====
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Initialize reveal on load and scroll
window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('load', revealOnScroll);

// ===== Typing Effect for Name =====
(function initTypingEffect() {
  const typedElement = document.getElementById('typed-name');
  if (!typedElement || typedElement.dataset.typedDone === '1') return;
  
  const originalText = typedElement.textContent;
  typedElement.textContent = '';
  
  // Create cursor
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  typedElement.appendChild(cursor);
  
  // Typing settings
  const typingSpeed = 100;
  const startDelay = 500;
  
  let charIndex = 0;
  
  function typeChar() {
    if (charIndex < originalText.length) {
      cursor.insertAdjacentText('beforebegin', originalText[charIndex]);
      charIndex++;
      setTimeout(typeChar, typingSpeed);
    } else {
      // Keep cursor blinking for a bit, then remove
      setTimeout(() => {
        cursor.remove();
        typedElement.dataset.typedDone = '1';
      }, 2000);
    }
  }
  
  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    typedElement.textContent = originalText;
  } else {
    setTimeout(typeChar, startDelay);
  }
})();

// ===== Active Navigation Link Highlight =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navHeight = navbar.offsetHeight;
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });

// ===== Parallax Effect for Glow Orbs =====
function handleParallax() {
  const scrolled = window.pageYOffset;
  const orb1 = document.querySelector('.glow-orb-1');
  const orb2 = document.querySelector('.glow-orb-2');
  
  if (orb1) {
    orb1.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
  if (orb2) {
    orb2.style.transform = `translateY(${scrolled * -0.1}px)`;
  }
}

// Only apply parallax on larger screens
if (window.innerWidth > 768) {
  window.addEventListener('scroll', handleParallax, { passive: true });
}

// ===== Skill Cards Hover Effect Enhancement =====
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', `${x}px`);
    this.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ===== Project Cards Image Loading =====
document.querySelectorAll('.project-image img').forEach(img => {
  img.addEventListener('load', function() {
    this.classList.add('loaded');
  });
  
  // Handle already cached images
  if (img.complete) {
    img.classList.add('loaded');
  }
});

// ===== Console Easter Egg =====
console.log(`
%c👋 Hey there, fellow developer!

Looking for a DevOps Engineer / Software Developer?
Let's connect: kitunovdavid57@gmail.com

%c— David Kitunov
`, 
'color: #10b981; font-size: 14px; font-weight: bold;',
'color: #06b6d4; font-size: 12px; font-style: italic;'
);

// ===== Performance: Debounce scroll events =====
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to heavy scroll handlers if needed
// window.addEventListener('scroll', debounce(heavyFunction, 50));
