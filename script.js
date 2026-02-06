// ============================================
// Isaac Vergara Portfolio - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section reveal on scroll
    const sections = document.querySelectorAll('.section');

    const revealSection = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsList = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;

        sectionsList.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Animate stats counter
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        if (animated) return;

        const heroSection = document.querySelector('.hero');
        const heroRect = heroSection.getBoundingClientRect();

        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            stats.forEach(stat => {
                const text = stat.textContent;
                // Only animate pure numbers
                if (/^\d+\.?\d*$/.test(text)) {
                    const target = parseFloat(text);
                    animateValue(stat, 0, target, 1500);
                }
            });
            animated = true;
        }
    }

    function animateValue(element, start, end, duration) {
        const isDecimal = end % 1 !== 0;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = progress * (end - start) + start;

            element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = isDecimal ? end.toFixed(1) : end;
            }
        };

        window.requestAnimationFrame(step);
    }

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // Smooth fade for hero title (professional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
    }

    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-marker').style.transform = 'scale(1.3)';
        });
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-marker').style.transform = 'scale(1)';
        });
    });

    // Parallax effect for hero background
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (hero && scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = rate + 'px';
        }
    });

});

// Preloader (optional - can be enabled if needed)
// window.addEventListener('load', function() {
//     document.body.classList.add('loaded');
// });
