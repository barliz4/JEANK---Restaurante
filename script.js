/* =========================================
   DONDE JEAN K — JavaScript
   ========================================= */

// ===== MENU DATA =====
const menuData = {
    burgers: [
        {
            name: "Jean K Clásica",
            desc: "Carne 150g, queso cheddar, lechuga, tomate, salsa de la casa",
            price: "$18.000",
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
        },
        {
            name: "Doble Fuego",
            desc: "Doble carne 300g, tocino, jalapeño, queso pepper jack",
            price: "$26.000",
            img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80"
        },
        {
            name: "Smokehouse K",
            desc: "Carne ahumada, cebolla caramelizada, bbq artesanal, queso suizo",
            price: "$24.000",
            img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80"
        },
        {
            name: "La Jean Tower",
            desc: "Triple carne, tocino doble, queso, salsas secretas. No apta para cobardes.",
            price: "$34.000",
            img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80"
        },
    ],
    combos: [
        {
            name: "Combo Básico",
            desc: "Jean K Clásica + papas medianas + bebida 400ml",
            price: "$25.000",
            img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80"
        },
        {
            name: "Combo Fuego",
            desc: "Doble Fuego + papas grandes + bebida 500ml",
            price: "$34.000",
            img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80"
        },
        {
            name: "Combo Familia",
            desc: "2 Clásicas + 2 perros + papas familiares + 4 bebidas",
            price: "$68.000",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
        },
        {
            name: "Combo Amigos",
            desc: "3 hamburguesas a elegir + papas grandes compartidas + 3 bebidas",
            price: "$58.000",
            img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80"
        },
    ],
    extras: [
        {
            name: "Papas Crispy",
            desc: "Crujientes por fuera, suaves por dentro. Con salsa de tu elección",
            price: "$8.000",
            img: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=600&q=80"
        },
        {
            name: "Perro Caliente",
            desc: "Salchicha premium, salsas variadas, papitas y más",
            price: "$12.000",
            img: "imagenes/perrocaliente2.png"
        },
        {
            name: "Aros de Cebolla",
            desc: "Empanizados y crujientes, con salsa ranch",
            price: "$9.000",
            img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80"
        },
        {
            name: "Nuggets x6",
            desc: "Pollo apanado crocante con salsa bbq o miel mostaza",
            price: "$10.000",
            img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80"
        },
    ],
    bebidas: [
        {
            name: "Gaseosas",
            desc: "Coca-Cola, Pepsi, Sprite, Manzana — 400ml / 500ml",
            price: "$4.000",
            img: "imagenes/bebidasDondeJ.png"
        },
        {
            name: "Limonada Natural",
            desc: "Exprimida al momento. Sin o con gas. Grande o pequeña.",
            price: "$6.000",
            img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80"
        },

        /*{
            name: "Milkshake",
            desc: "Chocolate, vainilla o fresa. Espeso y cremoso.",
            price: "$12.000",
            img: "https://images.unsplash.com/photo-1571805618149-3a772570b5d2?w=600&q=80"
        },*/

        {
            name: "Agua Fresca",
            desc: "Agua saborizada natural sin azúcar añadida",
            price: "$3.000",
            img: "https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?w=600&q=80"
        },
    ]
};

// ===== RENDER MENU =====
function renderMenu(cat) {
    const grid = document.getElementById('menuGrid');
    const items = menuData[cat];
    grid.innerHTML = '';
    items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${i * 0.07}s`;
        card.innerHTML = `
      <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-price">${item.price}</div>
      </div>
    `;
        grid.appendChild(card);
    });
}

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMenu(tab.dataset.cat);
    });
});

// Initial render
renderMenu('burgers');

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== BURGER MENU =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ===== BACK TO TOP =====
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            // Stagger siblings
            const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
            const i = siblings.indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 120);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === `#${current}`);
    });
});

// ===== HERO TITLE STAGGER =====
document.querySelectorAll('.hero-content .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 300 + i * 180);
});