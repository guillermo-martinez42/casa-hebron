// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Initialize all the interactive elements
  initNavbar();
  initTestimonialSlider();
  initGalleryLightbox();
  initBackToTopButton();
  initContactForm();
});

// Navbar functionality
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = navLinks.querySelectorAll('a');
  
  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on menu state
    const iconElement = navToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      iconElement.setAttribute('data-feather', 'x');
    } else {
      iconElement.setAttribute('data-feather', 'menu');
    }
    feather.replace();
  });
  
  // Close mobile menu when clicking on a link
  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const iconElement = navToggle.querySelector('i');
      iconElement.setAttribute('data-feather', 'menu');
      feather.replace();
    });
  });
}

// Testimonial slider functionality
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentIndex = 0;
  
  // Show testimonial based on index
  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
  
  // Initialize slider
  showTestimonial(currentIndex);
  
  // Previous testimonial
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
  });
  
  // Next testimonial
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  });
  
  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      showTestimonial(currentIndex);
    });
  });
  
  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  }, 5000);
}

// Gallery lightbox functionality
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  let currentIndex = 0;
  
  // Open lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      const imgSrc = item.getAttribute('data-src');
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Previous image
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    lightboxImg.src = galleryItems[currentIndex].getAttribute('data-src');
  });
  
  // Next image
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = galleryItems[currentIndex].getAttribute('data-src');
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
      lightboxImg.src = galleryItems[currentIndex].getAttribute('data-src');
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
      lightboxImg.src = galleryItems[currentIndex].getAttribute('data-src');
    }
  });
}

// Back to top button functionality
function initBackToTopButton() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your backend here
    // For demo purposes, we'll just show a success message
    
    // Show success toast
    toast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
    
    // Reset form
    contactForm.reset();
  });
  
  // Close toast when clicking the close button
  toastClose.addEventListener('click', () => {
    toast.classList.remove('show');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Skip if it's the lightbox controls
    if (this.classList.contains('lightbox-prev') || this.classList.contains('lightbox-next')) {
      return;
    }
    
    const targetId = this.getAttribute('href');
    
    // Skip empty links
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.section');

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < triggerBottom) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Set initial styles for reveal animation
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Check elements position on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);
