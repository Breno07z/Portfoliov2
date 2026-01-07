// Initialize Lucide Icons
lucide.createIcons();

// Constants
const THEME_KEY = 'portfolio-theme';

// DOM Elements
const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const menuToggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Theme Logic
function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        return savedTheme;
    }
    return 'light'; // Default to light
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
}

// Initialize Theme
let currentTheme = getInitialTheme();
setTheme(currentTheme);

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
        // Re-render icons if needed (Lucide normally handles DOM updates but sometimes needs refresh if we change classes that hide icons)
        // In this case we have separate icons for sun/moon with CSS display logic, so no re-render needed for icons themselves.
    });
});

// Mobile Menu Logic
if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isHidden = mobileMenu.classList.contains('hidden');
        // Update icon based on state
        if (isHidden) {
            menuIcon.setAttribute('data-lucide', 'menu');
        } else {
            menuIcon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons(); // Refresh icons
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Scroll to Top
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Current Year
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Contact Form
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        // WhatsApp redirect
        const whatsappMessage = `Olá! Meu nome é ${name}.\n\nEmail: ${email}\n\nMensagem: ${message}`;
        const whatsappNumber = '5581983224690';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        contactForm.reset();
        alert('Redirecionando para o WhatsApp...');
    });
}

// Additional styles for tags
const styles = document.createElement('style');
styles.innerHTML = `
    .skill-tag {
        @apply px-4 py-2 bg-secondary text-foreground font-inter text-sm rounded-full border border-border transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent;
        /* Since we can't use @apply in JS injected CSS easily without build process, we use classes in HTML or inline styles. 
           But wait, we have tailwind CDN!
           We can just add classes to the HTML elements directly. I did that in index.html */
    }
`;
// document.head.appendChild(styles); // Not needed as we put classes in HTML
