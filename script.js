/* =========================================================
   NAVBAR — mobile toggle + active section highlighting
   ========================================================= */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinkEls.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === '#' + id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => navObserver.observe(s));

/* =========================================================
   TYPING EFFECT
   ========================================================= */
const taglines = ['AI/ML Engineer', 'Data Science Researcher', 'Agentic AI Developer'];
const typedEl  = document.getElementById('typed-text');
let tIndex = 0, charIndex = 0, deleting = false;

function type() {
    const current = taglines[tIndex];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
            deleting = true;
            return setTimeout(type, 1600);
        }
        setTimeout(type, 75);
    } else {
        typedEl.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            tIndex = (tIndex + 1) % taglines.length;
        }
        setTimeout(type, 35);
    }
}
type();

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =========================================================
   PROJECT FILTER TABS
   ========================================================= */
const filterTabs   = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.dataset.filter;
        projectCards.forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !match);
        });
    });
});

/* =========================================================
   PROJECT DETAILS — collapse / expand on click
   ========================================================= */
document.querySelectorAll('.details-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const card     = btn.closest('.project-card');
        const expanded = card.classList.toggle('expanded');
        const label    = btn.querySelector('.toggle-label');

        btn.setAttribute('aria-expanded', expanded);
        if (label) label.textContent = expanded ? 'Hide Details' : 'View Details';
    });
});

/* =========================================================
   BACK TO TOP
   ========================================================= */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 300);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   CONTACT FORM (preventDefault + toast)
   ========================================================= */
const form  = document.getElementById('contact-form');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }
    if (!emailRe.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 3500);
});

/* =========================================================
   NEURAL NETWORK CANVAS — floating nodes + connecting lines
   ========================================================= */
const canvas = document.getElementById('neural-canvas');
const ctx    = canvas.getContext('2d');
let nodes = [];
let raf;

function sizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;
    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
}

function initNodes() {
    const rect = canvas.getBoundingClientRect();
    const count = 11;
    nodes = [];
    for (let i = 0; i < count; i++) {
        nodes.push({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 2 + 2,
            pulse: Math.random() * Math.PI * 2
        });
    }
}

function draw() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i], b = nodes[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 160) {
                const alpha = (1 - dist / 160) * 0.45;
                ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }
    }

    nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.04;

        if (n.x < 0 || n.x > rect.width)  n.vx *= -1;
        if (n.y < 0 || n.y > rect.height) n.vy *= -1;

        const pulseSize = n.r + Math.sin(n.pulse) * 1.2;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseSize * 4);
        grad.addColorStop(0, 'rgba(99, 102, 241, 0.55)');
        grad.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
    });

    raf = requestAnimationFrame(draw);
}

function startCanvas() {
    sizeCanvas();
    initNodes();
    cancelAnimationFrame(raf);
    draw();
}

if (canvas) startCanvas();

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (canvas) startCanvas();
    }, 200);
});
