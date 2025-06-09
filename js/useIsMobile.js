// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const mobileSunIcon = document.getElementById('mobile-sun-icon');
const mobileMoonIcon = document.getElementById('mobile-moon-icon');
const languageToggle = document.getElementById('language-toggle');
const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
const colorToggle = document.getElementById('color-toggle');
const mobileColorToggle = document.getElementById('mobile-color-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const contactForm = document.getElementById('contact-form');
const currentYearElement = document.getElementById('current-year');
const heroCanvas = document.getElementById('hero-canvas');

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Theme toggle
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        mobileSunIcon.classList.add('hidden');
        mobileMoonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        mobileSunIcon.classList.remove('hidden');
        mobileMoonIcon.classList.add('hidden');
    }

    // Reinitialize charts with new theme colors
    initCharts();
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Theme toggle event listeners
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
});

mobileThemeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
});

// Language translations
const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.blog": "Blog",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.dataAnalysis": "Data Analysis",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        // Hero
        "hero.hello": "Hello, I'm",
        "hero.role": "Data Analyst & Web Developer",
        "hero.description": "I'm a web developer and creator of DevFut, an initiative where I combine my love for soccer with technology. I focus on turning complex data into clear visualizations and interactive experiences that bring sports analysis closer to everyone. With each project, I seek to unite design, functionality and passion to generate real value through code.",
        "hero.viewProjects": "View Projects",
        "hero.contactMe": "Contact Me",

        // About
        "about.title": "About Me",
        "about.subtitle": "Data Analyst & Web Developer",
        "about.p1": "Web developer focused on creating modern and scalable digital solutions with technologies like FastAPI, React, Streamlit, Python and Vue. I am passionate about turning complex ideas into clean and functional interfaces that provide real value.",
        "about.p2": "Currently I have created Football Core, a platform that converts soccer statistics into interactive and useful visualizations for fans and analysts. This project reflects my vision: to develop applications that inform, connect and motivate to explore beyond the superficial. I define myself by constant curiosity, attention to detail and a strong commitment to learning and continuous improvement.",
        "about.name": "Name:",
        "about.email": "Email:",
        "about.location": "Location:",
        "about.availability": "Availability:",
        "about.availabilityValue": "Freelance & Full-time",
        "about.downloadCV": "Download CV",

        // Projects
        "projects.title": "My Work",
        "projects.subtitle": "Recent Projects",
        "projects.all": "All",
        "projects.dataAnalysis": "Data Analysis",
        "projects.webDevelopment": "Web Development",
        "projects.machineLearning": "Machine Learning",
        "projects.iot": "IoT",
        "projects.password.title": "PASSWORD GENERATOR",
        "projects.password.description": "This password generator project is developed with HTML, CSS and JavaScript.  It has options for password length, whether to include numbers, capital letters or symbols.",
        "projects.social.title": "SOCIAL MEDIA HUB",
        "projects.social.description": "Social Media Hub is a personal website that functions as a hub for social and professional links, designed to centralize and easily share all your online profiles and resources. The project is inspired by platforms like Linktree, but with customized features and a modern design.",
        "projects.message.title": "MASS MESSAGING - LANDING PAGE",
        "projects.message.description": "This project consists of a landing page for a WhatsApp mass messaging platform. It provides information about the services offered, main features and prices.",
        "projects.platform.title": "DATA ANALYTICS PLATFORM",
        "projects.platform.description": "An application developed with Python + Streamlit for data analysis and visualization. It allows loading CSV files, generating descriptive statistics, and creating dynamic graphs (bar, pie, boxplot, heatmap, etc.).",
        
        // Skills
        "skills.title": "My Expertise",
        "skills.subtitle": "Skills & Technologies",
        "skills.description": "A diverse skill set spanning data science, machine learning, and web development.",
        "skills.dataAnalysis": "Data Analysis",
        "skills.machineLearning": "Machine Learning",
        "skills.webDevelopment": "Web Development",
        "skills.dataVisualization": "Data Visualization",
        "skills.database": "Database",
        "skills.devOps": "DevOps",

        // Contact
        "contact.title": "Get In Touch",
        "contact.subtitle": "Contact Me",
        "contact.description": "Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.yourName": "Your Name",
        "contact.yourEmail": "Your Email",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.sendMessage": "Send Message",
        "contact.namePlaceholder": "Nicole Palomino",
        "contact.emailPlaceholder": "nicolepalominoalvarado@gmail.com",
        "contact.subjectPlaceholder": "How can I help you?",
        "contact.messagePlaceholder": "Your message here...",
        "contact.submitSuccess": "Thank you for your message! I will get back to you soon.",

        // Footer
        "footer.description": "Data Analyst & Web Developer specializing in creating data-driven applications and insightful visualizations.",
        "footer.quickLinks": "Quick Links",
        "footer.contactInfo": "Contact Info",
        "footer.rights": "All rights reserved."
    },
    es: {
        // Navbar
        "nav.home": "Inicio",
        "nav.blog": "Blog",
        "nav.about": "Sobre Mí",
        "nav.projects": "Proyectos",
        "nav.dataAnalysis": "Análisis de Datos",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",

        // Hero
        "hero.hello": "Hola, soy",
        "hero.role": "Analista de Datos & Desarrollador Web",
        "hero.description": "Soy desarrollador web y creador de DevFut, una iniciativa donde combino mi amor por el fútbol con la tecnología. Me enfoco en convertir datos complejos en visualizaciones claras y experiencias interactivas que acercan el análisis deportivo a todos. Con cada proyecto, busco unir diseño, funcionalidad y pasión para generar valor real a través del código.",
        "hero.viewProjects": "Ver Proyectos",
        "hero.contactMe": "Contáctame",

        // About
        "about.title": "Sobre Mí",
        "about.subtitle": "Analista de Datos & Desarrollador Web",
        "about.p1": "Desarrollador web enfocado en crear soluciones digitales modernas y escalables con tecnologías como FastAPI, React, Streamlit, Python y Vue. Me apasiona convertir ideas complejas en interfaces limpias y funcionales que aporten verdadero valor.",
        "about.p2": "Actualmente he creado Football Core, una plataforma que convierte estadísticas futbolísticas en visualizaciones interactivas y útiles para fans y analistas. Este proyecto refleja mi visión: desarrollar aplicaciones que informen, conecten y motiven a explorar más allá de lo superficial. Me defino por una curiosidad constante, atención al detalle y un compromiso firme con el aprendizaje y la mejora continua.",
        "about.name": "Nombre:",
        "about.email": "Correo:",
        "about.location": "Ubicación:",
        "about.availability": "Disponibilidad:",
        "about.availabilityValue": "Freelance y Tiempo Completo",
        "about.downloadCV": "Descargar CV",

        // Projects
        "projects.title": "Mi Trabajo",
        "projects.subtitle": "Proyectos Recientes",
        "projects.all": "Todos",
        "projects.dataAnalysis": "Análisis de Datos",
        "projects.webDevelopment": "Desarrollo Web",
        "projects.machineLearning": "Aprendizaje Automático",
        "projects.iot": "IoT",
        "projects.password.title": "GENERADOR DE CONTRASEÑAS",
        "projects.password.description": "Este proyecto generador de contraseñas está desarrollado con HTML, CSS y JavaScript. Tiene opciones para la longitud de la contraseña, si incluir números, mayúsculas o símbolos.",
        "projects.social.title": "CENTRO DE REDES SOCIALES",
        "projects.social.description": "Centro de redes sociales es una página web personal que funciona como un centro de enlaces sociales y profesionales, diseñada para centralizar y compartir fácilmente todos tus perfiles y recursos en línea. El proyecto está inspirado en plataformas como Linktree, pero con características personalizadas y un diseño moderno.",
        "projects.message.title": "MENSAJERÍA MASIVA - LANDING PAGE",
        "projects.message.description": "Este proyecto consiste en una landing page para una plataforma de mensajería masiva a WhatsApp. Proporciona información sobre los servicios ofrecidos, características principales y precios.",
        "projects.platform.title": "PLATAFORMA DE ANÁLISIS DE DATOS",
        "projects.message.description": "Una aplicación desarrollada con Python + Streamlit para análisis y visualización de datos. Permite cargar archivos CSV, generar estadísticas descriptivas, y crear gráficos dinámicos (barras, pie, boxplot, heatmap, etc.).",

        // Skills
        "skills.title": "Mi Experiencia",
        "skills.subtitle": "Habilidades y Tecnologías",
        "skills.description": "Un conjunto diverso de habilidades que abarca ciencia de datos, aprendizaje automático y desarrollo web.",
        "skills.dataAnalysis": "Análisis de Datos",
        "skills.machineLearning": "Aprendizaje Automático",
        "skills.webDevelopment": "Desarrollo Web",
        "skills.dataVisualization": "Visualización de Datos",
        "skills.database": "Base de Datos",
        "skills.devOps": "DevOps",

        // Contact
        "contact.title": "Ponte en Contacto",
        "contact.subtitle": "Contáctame",
        "contact.description": "¿Tienes un proyecto en mente o quieres discutir una posible colaboración? ¡No dudes en contactarme!",
        "contact.phone": "Teléfono",
        "contact.email": "Correo",
        "contact.location": "Ubicación",
        "contact.yourName": "Tu Nombre",
        "contact.yourEmail": "Tu Correo",
        "contact.subject": "Asunto",
        "contact.message": "Mensaje",
        "contact.sendMessage": "Enviar Mensaje",
        "contact.namePlaceholder": "Nicole Palomino",
        "contact.emailPlaceholder": "nicolepalominoalvarado@gmail.com",
        "contact.subjectPlaceholder": "¿Cómo puedo ayudarte?",
        "contact.messagePlaceholder": "Tu mensaje aquí...",
        "contact.submitSuccess": "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",

        // Footer
        "footer.description": "Analista de Datos y Desarrollador Web especializado en crear aplicaciones basadas en datos y visualizaciones perspicaces.",
        "footer.quickLinks": "Enlaces Rápidos",
        "footer.contactInfo": "Información de Contacto",
        "footer.rights": "Todos los derechos reservados."
    }
};

// Language toggle (simplified for demo)
// let currentLanguage = 'en';
let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update filter buttons
    updateFilterButtons();

    // Update chart labels
    initCharts();
}

function updateFilterButtons() {
    // Update project filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        const filterType = button.getAttribute('data-filter');
        if (filterType === 'all') {
            button.textContent = translations[currentLanguage]['projects.all'];
        } else if (filterType === 'data-analysis') {
            button.textContent = translations[currentLanguage]['projects.dataAnalysis'];
        } else if (filterType === 'web-development') {
            button.textContent = translations[currentLanguage]['projects.webDevelopment'];
        } else if (filterType === 'machine-learning') {
            button.textContent = translations[currentLanguage]['projects.machineLearning'];
        } else if (filterType === 'iot') {
            button.textContent = translations[currentLanguage]['projects.iot'];
        }
    });

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(button => {
        const tabType = button.getAttribute('data-tab');
        if (tabType === 'charts') {
            button.textContent = translations[currentLanguage]['dataAnalysis.charts'];
        } else if (tabType === 'case-studies') {
            button.textContent = translations[currentLanguage]['dataAnalysis.caseStudies'];
        }
    });
}

// Language toggle event listeners
languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage(newLang);
});

mobileLanguageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage(newLang);
});

// Color toggle (simplified for demo)
const colors = [
    { name: 'Default', value: '' },
    { name: 'Blue', value: 'blue-theme' },
    { name: 'Green', value: 'green-theme' },
    { name: 'Purple', value: 'purple-theme' },
    { name: 'Red', value: 'red-theme' },
    { name: 'Orange', value: 'orange-theme' },
];

let currentColorIndex = 0;

function toggleColor() {
    // Remove current color class
    if (colors[currentColorIndex].value) {
        document.body.classList.remove(colors[currentColorIndex].value);
    }

    // Move to next color
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Add new color class
    if (colors[currentColorIndex].value) {
        document.body.classList.add(colors[currentColorIndex].value);
    }

    console.log(`Color switched to: ${colors[currentColorIndex].name}`);
}

colorToggle.addEventListener('click', toggleColor);
mobileColorToggle.addEventListener('click', toggleColor);

// Project filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Show/hide projects based on filter
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'flex';
            } else {
                const categories = card.getAttribute('data-categories').split(',');
                if (categories.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Tabs
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding tab content
        const tabId = `${button.getAttribute('data-tab')}-tab`;
        document.getElementById(tabId).classList.add('active');

        // Reinitialize charts if showing charts tab
        if (button.getAttribute('data-tab') === 'charts') {
            initCharts();
        }
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formValues = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    const toast = document.getElementById("toast");

    // In a real implementation, you would send this data to a server
    const serviceID = "service_zfxu1zp";
    const templateID = "template_is3d7cn";

    // send the email here
    emailjs.send(serviceID, templateID, formValues).then(
        (response) => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        },
        (error) => {
            alert("FAILED...", error);
        }
    );

    // Reset form
    contactForm.reset();
});

// Initialize charts
function initCharts() {
    // Get theme colors
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--border').trim();
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-1').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-2').trim();
    const tertiaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-3').trim();
    const quaternaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-4').trim();
    const quinaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-5').trim();

    // Common chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: gridColor
                },
                ticks: {
                    color: textColor
                }
            },
            y: {
                grid: {
                    color: gridColor
                },
                ticks: {
                    color: textColor
                }
            }
        }
    };

    // Line Chart
    const lineChart = document.getElementById('line-chart');
    if (lineChart) {
        // Destroy existing chart if it exists
        if (lineChart.chart) {
            lineChart.chart.destroy();
        }

        const ctx = lineChart.getContext('2d');
        lineChart.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Monthly Growth',
                    data: [400, 300, 600, 800, 500, 900, 1000, 1200, 1100, 1300, 1500, 1700],
                    borderColor: `hsl(${primaryColor})`,
                    backgroundColor: `hsla(${primaryColor}, 0.1)`,
                    tension: 0.4
                }]
            },
            options: chartOptions
        });
    }

    // Bar Chart
    const barChart = document.getElementById('bar-chart');
    if (barChart) {
        // Destroy existing chart if it exists
        if (barChart.chart) {
            barChart.chart.destroy();
        }

        const ctx = barChart.getContext('2d');
        barChart.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F'],
                datasets: [{
                    label: 'Category Distribution',
                    data: [4000, 3000, 2000, 2780, 1890, 2390],
                    backgroundColor: `hsl(${secondaryColor})`,
                }]
            },
            options: chartOptions
        });
    }

    // Pie Chart
    const pieChart = document.getElementById('pie-chart');
    if (pieChart) {
        // Destroy existing chart if it exists
        if (pieChart.chart) {
            pieChart.chart.destroy();
        }

        const ctx = pieChart.getContext('2d');
        pieChart.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Group A', 'Group B', 'Group C', 'Group D'],
                datasets: [{
                    label: 'Market Segmentation',
                    data: [400, 300, 300, 200],
                    backgroundColor: [
                        `hsl(${primaryColor})`,
                        `hsl(${secondaryColor})`,
                        `hsl(${tertiaryColor})`,
                        `hsl(${quaternaryColor})`
                    ],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: textColor
                        }
                    }
                }
            }
        });
    }

    // Area Chart
    const areaChart = document.getElementById('area-chart');
    if (areaChart) {
        // Destroy existing chart if it exists
        if (areaChart.chart) {
            areaChart.chart.destroy();
        }

        const ctx = areaChart.getContext('2d');
        areaChart.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Annual Performance',
                    data: [2400, 1398, 9800, 3908, 4800, 3800],
                    borderColor: `hsl(${quaternaryColor})`,
                    backgroundColor: `hsla(${quaternaryColor}, 0.3)`,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: chartOptions
        });
    }
}

// Hero canvas animation
function initHeroCanvas() {
    if (!heroCanvas) return;

    const ctx = heroCanvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    heroCanvas.width = window.innerWidth;
    heroCanvas.height = window.innerHeight;

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;

            // Use theme-aware colors
            const isDark = document.documentElement.classList.contains('dark');
            this.color = this.getThemeAwareColor(isDark);
        }

        getThemeAwareColor(isDark) {
            if (isDark) {
                // Brighter colors for dark mode
                return `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 155 + 100)}, 0.7)`;
            } else {
                // Darker colors for light mode
                return `rgba(${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 155 + 100)}, 0.5)`;
            }
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > heroCanvas.width) this.x = 0;
            else if (this.x < 0) this.x = heroCanvas.width;

            if (this.y > heroCanvas.height) this.y = 0;
            else if (this.y < 0) this.y = heroCanvas.height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particles = [];
    const particleCount = 100;

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect particles with lines
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const isDark = document.documentElement.classList.contains('dark');
                    ctx.beginPath();
                    ctx.strokeStyle = isDark
                        ? `rgba(150, 150, 255, ${0.2 - distance / 500})`
                        : `rgba(100, 100, 200, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    // Initialize and start animation
    initParticles();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        heroCanvas.width = window.innerWidth;
        heroCanvas.height = window.innerHeight;
        initParticles();
    });

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                initParticles(); // Reinitialize particles with new theme colors
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initHeroCanvas();

    // Add animation to elements when they come into view
    const animatedElements = document.querySelectorAll('.about-grid, .projects-grid, .charts-grid, .case-studies-grid, .skills-grid, .contact-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
});