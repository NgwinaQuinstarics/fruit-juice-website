import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const WHATSAPP_NUMBER = '237674681144';

const juices = [
  {
    id: 1,
    name: 'Watermelon Burst',
    description: 'Refreshing, hydrating & naturally sweet — straight from the fruit.',
    price: '500 – 1500 FCFA',
    color: '#f87171',
    bg: '#fff1f1',
    emoji: '🍉',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Tropical Mango',
    description: 'Creamy, rich mango goodness. Pure sunshine in every sip.',
    price: '500 – 1500 FCFA',
    color: '#f59e0b',
    bg: '#fffbeb',
    emoji: '🥭',
    tag: 'Fan Favourite',
  },
  {
    id: 3,
    name: 'Pineapple Zest',
    description: 'Tangy & sweet pineapple pressed fresh — energising & digestive.',
    price: '500 – 1500 FCFA',
    color: '#eab308',
    bg: '#fefce8',
    emoji: '🍍',
    tag: null,
  },
  {
    id: 4,
    name: 'Orange Sunshine',
    description: 'Vitamin C-packed, freshly squeezed oranges. Start your day right.',
    price: '500 – 1500 FCFA',
    color: '#f07c1a',
    bg: '#fff7ed',
    emoji: '🍊',
    tag: null,
  },
  {
    id: 5,
    name: 'Ginger-Lemon Boost',
    description: 'A spicy, zesty immune booster with real ginger & fresh lemon.',
    price: '500 – 1500 FCFA',
    color: '#84cc16',
    bg: '#f7fee7',
    emoji: '🍋',
    tag: 'Healthy Pick',
  },
  {
    id: 6,
    name: 'Mixed Fruit Blend',
    description: 'A vibrant medley of seasonal fruits. A new taste every time.',
    price: '500 – 2000 FCFA',
    color: '#a855f7',
    bg: '#faf5ff',
    emoji: '🍇',
    tag: null,
  },
];

const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── NAVBAR ──────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Juices', href: '#juices' },
    { label: 'Events', href: '#events' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Order Now', href: '#order' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand">
          <span className="brand-leaf">🍃</span>
          <span className="brand-name">Grace's<em> Juices</em></span>
        </a>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink('Hello Grace! I want to order a juice 🍹')}
          target="_blank"
          rel="noreferrer"
          className="btn btn-wa navbar-cta"
        >
          <WaIcon /> WhatsApp
        </a>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ── HERO ────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-blobs">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      <div className="hero-content animate-fade-up">
        <div className="hero-badge delay-1 animate-fade-up">
          🌿 100% Natural · No Preservatives · Made with Love
        </div>
        <h1 className="hero-title delay-2 animate-fade-up">
          Fresh Fruit Juices<br />
          <em>Straight from Nature</em>
        </h1>
        <p className="hero-subtitle delay-3 animate-fade-up">
          Hi, I'm <strong>Grace</strong> 👋 — I press the freshest, most delicious natural
          juices in <strong>Yaoundé Simbock</strong>. Order via WhatsApp &amp; I'll deliver
          right to you!
        </p>
        <div className="hero-actions delay-4 animate-fade-up">
          <a
            href={whatsappLink('Hello Grace! I want to order a juice 🍹')}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <WaIcon /> Order on WhatsApp
          </a>
          <a href="#juices" className="btn btn-outline">See Our Juices ↓</a>
        </div>
        <div className="hero-stats delay-5 animate-fade-up">
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-lbl">Natural</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">🚚</span>
            <span className="stat-lbl">Delivery</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">🎉</span>
            <span className="stat-lbl">Events</span>
          </div>
        </div>
      </div>
      <div className="hero-visual animate-fade-up delay-3">
        <div className="hero-img-wrap">
          {/* REPLACE: swap this src with your actual juice photo */}
          <img
            src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80"
            alt="Fresh natural juices by Grace"
            className="hero-img"
          />
          <div className="hero-img-badge">
            <span className="pulse-dot" />
            Fresh daily
          </div>
        </div>
      </div>
    </section>
  );
}

// ── JUICE CARDS ──────────────────────────────────────────────────────────
function JuiceCard({ juice, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`juice-card${inView ? ' visible' : ''}`}
      style={{ '--accent': juice.color, '--card-bg': juice.bg, animationDelay: `${index * 0.08}s` }}
    >
      {juice.tag && <span className="juice-tag">{juice.tag}</span>}
      <div className="juice-emoji">{juice.emoji}</div>
      <h3 className="juice-name">{juice.name}</h3>
      <p className="juice-desc">{juice.description}</p>
      <div className="juice-footer">
        <span className="juice-price">{juice.price}</span>
        <a
          href={whatsappLink(`Hello Grace! I'd like to order a ${juice.name} 🍹`)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-order"
        >
          Order <WaIcon />
        </a>
      </div>
    </div>
  );
}

function Juices() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="section juices-section" id="juices">
      <div className="section-header" ref={ref}>
        <span className={`section-label${inView ? ' visible' : ''}`}>Our Menu</span>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          Nature's Finest,<br /><em>Freshly Pressed</em>
        </h2>
        <p className={`section-sub${inView ? ' visible' : ''}`}>
          Every bottle is made to order — no concentrates, no additives, just pure fruit.
        </p>
      </div>
      <div className="juices-grid">
        {juices.map((j, i) => <JuiceCard key={j.id} juice={j} index={i} />)}
      </div>
      <div className="juices-note">
        🍓 Can't find your favourite? Grace makes <strong>any fruit combination</strong> on request!{' '}
        <a href={whatsappLink('Hello Grace! Can you make a custom juice for me?')} target="_blank" rel="noreferrer">
          Ask on WhatsApp →
        </a>
      </div>
    </section>
  );
}

// ── EVENTS SECTION ───────────────────────────────────────────────────────
function Events() {
  const [ref, inView] = useInView();
  return (
    <section className="section events-section" id="events">
      <div className="events-inner" ref={ref}>
        <div className={`events-text${inView ? ' visible' : ''}`}>
          <span className="section-label">Big Orders</span>
          <h2 className="section-title">
            Juice for Your<br /><em>Events & Occasions</em>
          </h2>
          <p className="events-desc">
            Planning a birthday, wedding, seminar, or any big celebration? Grace provides
            <strong> large-quantity, bulk juice orders</strong> for events across Yaoundé.
            Fresh, natural, and crowd-pleasing every time.
          </p>
          <ul className="events-list">
            <li>🎂 Birthday parties</li>
            <li>💍 Weddings &amp; ceremonies</li>
            <li>🏢 Corporate events &amp; seminars</li>
            <li>🏫 School &amp; church gatherings</li>
            <li>🎉 Any big occasion!</li>
          </ul>
          <a
            href={whatsappLink("Hello Grace! I'd like to order juice in large quantity for an event 🎉")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <WaIcon /> Request a Bulk Quote
          </a>
        </div>
        <div className={`events-visual${inView ? ' visible' : ''}`}>
          {/* REPLACE: swap this with a real event/bulk juice photo */}
          <img
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80"
            alt="Bulk juice for events"
            className="events-img"
          />
          <div className="events-img-tag">🎉 Events & Bulk Orders</div>
        </div>
      </div>
    </section>
  );
}

// ── DELIVERY SECTION ─────────────────────────────────────────────────────
function Delivery() {
  const [ref, inView] = useInView();
  return (
    <section className="section delivery-section" id="delivery" ref={ref}>
      <div className={`delivery-card${inView ? ' visible' : ''}`}>
        <div className="delivery-icon">🚚</div>
        <h2 className="delivery-title">We Come To <em>You</em></h2>
        <p className="delivery-desc">
          Grace doesn't have a physical shop — but that's the beauty of it!
          She brings the freshness straight to your doorstep anywhere in
          <strong> Yaoundé Simbock</strong> and surrounding areas.
        </p>
        <div className="delivery-steps">
          <div className="d-step">
            <span className="d-step-num">1</span>
            <span>Send a WhatsApp message with your order</span>
          </div>
          <div className="d-arrow">→</div>
          <div className="d-step">
            <span className="d-step-num">2</span>
            <span>Grace prepares your juice fresh</span>
          </div>
          <div className="d-arrow">→</div>
          <div className="d-step">
            <span className="d-step-num">3</span>
            <span>She delivers it to your location</span>
          </div>
        </div>
        <a
          href={whatsappLink('Hello Grace! I want to place a delivery order 🚚')}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <WaIcon /> Order Delivery Now
        </a>
      </div>
    </section>
  );
}

// ── ORDER / CONTACT ──────────────────────────────────────────────────────
function Order() {
  const [ref, inView] = useInView();
  return (
    <section className="section order-section" id="order" ref={ref}>
      <div className={`order-card${inView ? ' visible' : ''}`}>
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">
          Ready to Order?<br /><em>Reach Grace Directly</em>
        </h2>
        <p className="order-desc">
          The fastest way to order is via <strong>WhatsApp</strong>.
          Grace personally handles every order with care and love. 💚
        </p>
        <div className="contact-buttons">
          <a
            href={whatsappLink('Hello Grace! I want to order a fresh juice 🍹')}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa btn-lg"
          >
            <WaIcon /> Chat on WhatsApp
          </a>
          <a
            href="tel:+237674681144"
            className="btn btn-call btn-lg"
          >
            📞 Call: +237 674 681 144
          </a>
        </div>
        <div className="order-location">
          <span>📍</span>
          <span>Based in <strong>Yaoundé, Simbock</strong> — Delivery available nearby</span>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-leaf">🍃</span>
          <span className="brand-name">Grace's<em> Juices</em></span>
        </div>
        <p className="footer-tagline">
          Fresh. Natural. Delivered with Love — Yaoundé, Simbock 🇨🇲
        </p>
        <div className="footer-links">
          <a href={whatsappLink('Hello Grace!')} target="_blank" rel="noreferrer">
            <WaIcon /> WhatsApp
          </a>
          <a href="tel:+237674681144">📞 +237 674 681 144</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Grace's Natural Juices. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ── WHATSAPP FLOAT BUTTON ────────────────────────────────────────────────
function WaFloat() {
  return (
    <a
      href={whatsappLink('Hello Grace! I want to order a fresh juice 🍹')}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      title="Order on WhatsApp"
    >
      <WaIcon />
    </a>
  );
}

// ── WA ICON ──────────────────────────────────────────────────────────────
function WaIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.737 5.48 2.027 7.789L0 32l8.432-2.009A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.777-1.853l-.485-.29-5.007 1.194 1.227-4.868-.317-.5A13.283 13.283 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.261-9.84c-.4-.2-2.363-1.165-2.729-1.298-.366-.133-.632-.2-.898.2-.266.4-1.032 1.298-1.265 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.214-1.982-1.188-1.059-1.99-2.368-2.222-2.768-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.898-2.167-1.232-2.967-.324-.78-.654-.674-.898-.686l-.765-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.306 6.833 6.033.955.413 1.7.659 2.281.843.958.305 1.83.262 2.52.159.769-.114 2.363-.966 2.696-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z"/>
    </svg>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Juices />
      <Events />
      <Delivery />
      <Order />
      <Footer />
      <WaFloat />
    </div>
  );
}
