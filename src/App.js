import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const WA = '237674681144';
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

import mango from './assets/images/mango.jpg';
import pawpaw from './assets/images/pawpaw.jpg';
import carrot from './assets/images/carrot.jpg';
import guava from './assets/images/guava.jpg';
import pineapple from './assets/images/pineapple.jpg';
import soursop from './assets/images/soursalt.jpg'; 


const JUICES = [
  {
    id:1,
    name:'Watermelon Burst',
    tagline:'Hydrating & cooling',
    desc:'Sweet, ripe watermelon cold-pressed to keep every drop of goodness alive.',
    priceRange:'500 – 1,500 FCFA',
    color:'#d94f5c',
    light:'#fdf0f1',
    border:'rgba(217,79,92,0.15)',
    emoji:'🍉',
    img:mango, 
    badge:'Best Seller',
    badgeColor:'#d94f5c'
  },
  {
    id:2,
    name:'Golden Mango',
    tagline:'Rich & velvety',
    desc:'Sun-ripened Cameroonian mangoes blended into liquid gold. Thick and dreamy.',
    priceRange:'500 – 1,500 FCFA',
    color:'#e8901a',
    light:'#fff9ee',
    border:'rgba(232,144,26,0.15)',
    emoji:'🥭',
    img:pawpaw,
    badge:'Fan Favourite',
    badgeColor:'#e8901a'
  },
  {
    id:3,
    name:'Carrot Juice',
    tagline:'Bright & healthy',
    desc:'Fresh carrot juice packed with vitamins and natural energy.',
    priceRange:'500 – 1,500 FCFA',
    color:'#d97706',
    light:'#fffbf0',
    border:'rgba(217,119,6,0.15)',
    emoji:'🥕',
    img:carrot,
    badge:null,
    badgeColor:null
  },
  {
    id:4,
    name:'Tropical Pineapple',
    tagline:'Tangy & digestive',
    desc:'Fresh pineapple juice with natural tropical sweetness.',
    priceRange:'500 – 1,500 FCFA',
    color:'#b5890a',
    light:'#fefce8',
    border:'rgba(181,137,10,0.15)',
    emoji:'🍍',
    img:guava,
    badge:null,
    badgeColor:null
  },
  {
    id:5,
    name:'Pink Guava Bliss',
    tagline:'Fragrant & tropical',
    desc:'Sweet pink guava juice, smooth and refreshing.',
    priceRange:'500 – 1,500 FCFA',
    color:'#be185d',
    light:'#fdf2f8',
    border:'rgba(190,24,93,0.15)',
    emoji:'🍐',
    img:pineapple,
    badge:'Healthy Pick',
    badgeColor:'#be185d'
  },
  {
    id:6,
    name:'Creamy Soursop',
    tagline:'Exotic & healthy',
    desc:'Natural soursop juice rich in nutrients and creamy taste.',
    priceRange:'500 – 2,000 FCFA',
    color:'#15803d',
    light:'#f0fdf4',
    border:'rgba(21,128,61,0.15)',
    emoji:'🍏',
    img:soursop,
    badge:"Chef's Special",
    badgeColor:'#15803d'
  },
];

const TICKER = [
  '🍉 Watermelon Burst',
  '🥭 Golden Mango',
  '🥕 Carrot Juice',
  '🍍 Tropical Pineapple',
  '🍐 Pink Guava Bliss',
  '🍏 Creamy Soursop',
  '✨ 100% Natural',
  '🚚 Delivery Available',
  '🎉 Bulk Event Orders',
  '🌿 Zero Preservatives',
  '💚 Made Fresh Daily'
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        obs.disconnect();
      }
    }, { threshold });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, v];
}



/* SVG Icons */
const IconWA = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.84L.057 23.428a.75.75 0 00.906.975l5.7-1.496A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.367l-.36-.214-3.723.977.993-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);
const IconPhone = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>;
const IconMap  = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconStar = ({ s = 14 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconArr  = ({ s = 15 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconLeaf = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 014.001 13C4 7 10 5 12 2c2 3 8 5 8 11a7 7 0 01-7 7z"/><path d="M12 2v18"/></svg>;
const IconTruck= ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const IconGlass= ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 22 12 22 15 22"/><polyline points="19 2 5 2 7 13.5 17 13.5 19 2"/><line x1="12" y1="22" x2="12" y2="13.5"/></svg>;
const IconCal  = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconCheck= ({ s = 14 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;

/* ── NAVBAR ─────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const close = useCallback(() => setOpen(false), []);
  const links = [{ label:'Our Juices', href:'#juices' }, { label:'Events', href:'#events' }, { label:'Delivery', href:'#delivery' }, { label:'Contact', href:'#contact' }];
  return (
    <>
      <nav className={`navbar${scrolled?' scrolled':''}`}>
        <div className="nb-wrap">
          <a href="#top" className="nb-brand" onClick={close}>
            <span className="nb-brand-icon"><IconLeaf s={16}/></span>
            <span>Grace<em> Juice</em></span>
          </a>
          <ul className={`nb-links${open?' open':''}`}>
            {links.map(l => <li key={l.label}><a href={l.href} className="nb-link" onClick={close}>{l.label}</a></li>)}
          </ul>
          <div className="nb-right">
            <a href={wa('Hello Grace! I want to order 🍹')} target="_blank" rel="noreferrer" className="btn btn-wa nb-cta">
              <IconWA s={15}/> Order Now
            </a>
            <button className={`hbg${open?' hbg-x':''}`} onClick={() => setOpen(o=>!o)} aria-label="Menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
        {open && (
          <div className="mob-menu">
            {links.map(l => <a key={l.label} href={l.href} className="mob-link" onClick={close}>{l.label}</a>)}
            <a href={wa('Hello Grace! I want to order 🍹')} target="_blank" rel="noreferrer" className="btn btn-wa mob-wa" onClick={close}>
              <IconWA s={18}/> Order on WhatsApp
            </a>
          </div>
        )}
      </nav>
      <div className="ticker"><div className="ticker-track">{[...TICKER,...TICKER].map((t,i)=><span key={i} className="ticker-item">{t}</span>)}</div></div>
    </>
  );
}

/* ── HERO ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="blob b1"/><div className="blob b2"/><div className="blob b3"/>
        <div className="hero-grain"/>
      </div>
      <div className="hero-wrap">
        <div className="hero-text">
          <div className="hero-pill"><span className="pill-dot"/><span>Fresh daily — Yaoundé, Simbock</span></div>
          <h1 className="hero-h1">Nature's Finest<br/><em>In Every Sip</em></h1>
          <p className="hero-p">Hi, I'm <strong>Grace</strong> — I press the freshest 100% natural fruit juices in Yaoundé. No preservatives, no shortcuts. Just pure fruit and love.</p>
          <div className="hero-chips">
            {[{i:<IconLeaf s={13}/>,l:'100% Natural'},{i:<IconTruck s={13}/>,l:'Delivery'},{i:<IconCal s={13}/>,l:'Events'}].map(c=>(
              <span key={c.l} className="hero-chip">{c.i}{c.l}</span>
            ))}
          </div>
          <div className="hero-btns">
            <a href={wa('Hello Grace! I want to order a fresh juice 🍹')} target="_blank" rel="noreferrer" className="btn btn-wa btn-hero">
              <IconWA s={20}/> Order on WhatsApp
            </a>
            <a href="#juices" className="btn btn-ghost">View Juices <IconArr s={14}/></a>
          </div>
          <div className="hero-trust">
            <div className="stars">{[1,2,3,4,5].map(i=><span key={i} className="star"><IconStar s={13}/></span>)}</div>
            <span className="trust-lbl">Loved by customers across Yaoundé</span>
          </div>
        </div>
        <div className="hero-vis">
          <div className="hero-frame">
            {/* REPLACE: swap with your real hero photo */}
            <img src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=700&q=90&auto=format" alt="Grace's fresh natural juices" className="hero-img" loading="eager"/>
            <div className="hero-shine"/>
          </div>
          <div className="fcard fc1"><span className="fi">✨</span><div><div className="fn">100%</div><div className="fl">Natural</div></div></div>
          <div className="fcard fc2"><span className="fi">🚚</span><div><div className="fn">Free</div><div className="fl">Delivery</div></div></div>
          <div className="fcard fc3"><span className="live-dot"/><span className="live-txt">Available Now</span></div>
        </div>
      </div>
    </section>
  );
}

/* ── WHY US ─────────────────────────────────────────── */
function WhyUs() {
  const [ref, v] = useInView(0.1);
  const items = [
    { i:<IconLeaf s={22}/>, t:'Zero Additives', d:'No preservatives, no colourants, no flavourings. What you taste is pure fruit.' },
    { i:<IconTruck s={22}/>, t:'Doorstep Delivery', d:'Grace delivers fresh to your home or office across Yaoundé Simbock.' },
    { i:<IconCal s={22}/>, t:'Events & Bulk', d:'Weddings, birthdays, seminars — large quantities at great prices.' },
    { i:<IconGlass s={22}/>, t:'Made to Order', d:'Every juice pressed fresh when you order. Maximum flavour every time.' },
  ];
  return (
    <section className="why-section" ref={ref}>
      <div className="why-grid">
        {items.map((it,i)=>(
          <div key={it.t} className={`why-card${v?' wv':''}`} style={{transitionDelay:`${i*80}ms`}}>
            <div className="why-ico">{it.i}</div>
            <h3 className="why-t">{it.t}</h3>
            <p className="why-d">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── JUICE CARD ─────────────────────────────────────── */
function JuiceCard({ juice, delay }) {
  const [ref, v] = useInView(0.08);
  return (
    <article ref={ref} className={`jcard${v?' jv':''}`} style={{'--acc':juice.color,'--lgt':juice.light,'--bdr':juice.border,'--dly':`${delay}ms`}}>
      <div className="jimg-wrap">
        <img src={juice.img} alt={juice.name} className="jimg" loading="lazy"/>
        <div className="jimg-ov"/>
        {juice.badge && <span className="jbadge" style={{background:juice.badgeColor}}>{juice.badge}</span>}
        <div className="jemoji-float">{juice.emoji}</div>
      </div>
      <div className="jbody">
        <div className="jmeta">
          <h3 className="jname">{juice.name}</h3>
          <span className="jtag">{juice.tagline}</span>
        </div>
        <p className="jdesc">{juice.desc}</p>
        <div className="jfoot">
          <div className="jprice">
            <span className="pfrom">From</span>
            <span className="pval">{juice.priceRange}</span>
          </div>
          <a href={wa(`Hello Grace! I'd like to order a ${juice.name} 🍹`)} target="_blank" rel="noreferrer" className="jbtn">
            <IconWA s={13}/> Order
          </a>
        </div>
      </div>
    </article>
  );
}

function Juices() {
  const [ref, v] = useInView(0.1);
  return (
    <section className="section juices-sec" id="juices">
      <div className="sec-hdr" ref={ref}>
        <span className={`sec-label${v?' sv':''}`}><IconGlass s={13}/> Our Menu</span>
        <h2 className={`sec-title${v?' sv':''}`}>Pressed with <em>Pure Love</em></h2>
        <p className={`sec-sub${v?' sv':''}`}>Every bottle made to order — no concentrates, no preservatives, no shortcuts. Just the fruit, just the goodness.</p>
      </div>
      <div className="j-grid">{JUICES.map((j,i)=><JuiceCard key={j.id} juice={j} delay={i*65}/>)}</div>
      <div className="j-note-row">
        <div className="j-note-txt"><span>🍓</span><span>Can't find your favourite? Grace makes <strong>any fruit combination</strong> on request!</span></div>
        <a href={wa('Hello Grace! Can you make a custom juice blend for me? 🍹')} target="_blank" rel="noreferrer" className="btn btn-outline">
          Request Custom Blend <IconArr s={13}/>
        </a>
      </div>
    </section>
  );
}

/* ── EVENTS ─────────────────────────────────────────── */
function Events() {
  const [ref, v] = useInView(0.1);
  const types = [{e:'🎂',l:'Birthday Parties'},{e:'💍',l:'Weddings'},{e:'🏢',l:'Corporate Events'},{e:'🏫',l:'Schools & Churches'},{e:'🎊',l:'Private Parties'},{e:'🤝',l:'Any Occasion'}];
  const perks = ['Bulk pricing available','Custom quantities','Variety of flavours','On-time delivery'];
  return (
    <section className="section events-sec" id="events" ref={ref}>
      <div className={`ev-wrap${v?' ev-vis':''}`}>
        <div className="ev-img-col">
          <div className="ev-img-frame">
            {/* REPLACE: swap with a real event/bulk juice photo */}
            <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&q=85&auto=format" alt="Bulk juice for events" className="ev-img" loading="lazy"/>
            <div className="ev-img-ov"/>
            <div className="ev-stat"><div className="ev-stat-n">50+</div><div className="ev-stat-l">Events Served</div></div>
          </div>
        </div>
        <div className="ev-content">
          <span className="sec-label sv"><IconCal s={13}/> Bulk Orders</span>
          <h2 className="sec-title sv">Juice for Your<br/><em>Big Occasions</em></h2>
          <p className="ev-desc">Planning something special? Grace provides large-quantity freshly-pressed juices for any event across Yaoundé. <strong>Professional service, natural quality, delivered on time.</strong></p>
          <div className="ev-types">{types.map(t=><div key={t.l} className="ev-chip"><span>{t.e}</span>{t.l}</div>)}</div>
          <div className="ev-perks">{perks.map(p=><div key={p} className="ev-perk"><span className="pck"><IconCheck s={12}/></span>{p}</div>)}</div>
          <a href={wa("Hello Grace! I'd like to order juice in large quantity for an event 🎉")} target="_blank" rel="noreferrer" className="btn btn-wa">
            <IconWA s={18}/> Request a Bulk Quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── DELIVERY ───────────────────────────────────────── */
function Delivery() {
  const [ref, v] = useInView(0.1);
  const steps = [
    { n:'01', i:<IconWA s={20}/>, t:'Message Grace', d:'Send your order via WhatsApp with what you want and your location.' },
    { n:'02', i:<IconGlass s={20}/>, t:'Freshly Pressed', d:'Grace presses your juice fresh the moment your order is confirmed.' },
    { n:'03', i:<IconTruck s={20}/>, t:'Delivered to You', d:'Your juice arrives cold and fresh, straight to your door.' },
  ];
  return (
    <section className="section delivery-sec" id="delivery" ref={ref}>
      <div className="sec-hdr">
        <span className={`sec-label${v?' sv':''}`}><IconTruck s={13}/> How It Works</span>
        <h2 className={`sec-title${v?' sv':''}`}>Fresh Juice,<br/><em>At Your Door</em></h2>
        <p className={`sec-sub${v?' sv':''}`}>No shop, no problem. You get <strong>fresher juice than any shelf</strong> could offer — straight from Grace's hands to yours.</p>
      </div>
      <div className={`d-steps${v?' d-vis':''}`}>
        {steps.map((s,i)=>(
          <div key={s.n} className="d-step" style={{transitionDelay:`${i*110}ms`}}>
            <div className="d-step-top">
              <div className="d-num">{s.n}</div>
              <div className="d-ico">{s.i}</div>
              {i<steps.length-1 && <div className="d-line"/>}
            </div>
            <h3 className="d-t">{s.t}</h3>
            <p className="d-d">{s.d}</p>
          </div>
        ))}
      </div>
      <div className={`d-cta${v?' d-vis':''}`} style={{transitionDelay:'360ms'}}>
        <a href={wa('Hello Grace! I want to place a delivery order 🚚')} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg">
          <IconWA s={20}/> Order Delivery Now
        </a>
        <a href="tel:+237674681144" className="btn btn-phone btn-lg">
          <IconPhone s={18}/> +237 674 681 144
        </a>
      </div>
    </section>
  );
}

/* ── CONTACT ────────────────────────────────────────── */
function Contact() {
  const [ref, v] = useInView(0.1);
  return (
    <section className="section contact-sec" id="contact" ref={ref}>
      <div className={`contact-card${v?' cv':''}`}>
        <div className="contact-l">
          <span className="sec-label sv"><IconPhone s={13}/> Get In Touch</span>
          <h2 className="sec-title sv">Ready to<br/><em>Order?</em></h2>
          <p className="contact-desc">The fastest way to order is WhatsApp. Grace personally handles every order with care. 💚</p>
          <div className="contact-loc"><IconMap s={15}/><span>Yaoundé, Simbock — delivery available nearby</span></div>
          <p className="contact-hrs">⏰ Available <strong>7 days a week</strong>, 7 AM – 9 PM</p>
        </div>
        <div className="contact-r">
          <a href={wa('Hello Grace! I want to order a fresh juice 🍹')} target="_blank" rel="noreferrer" className="btn btn-wa btn-xl cwa">
            <IconWA s={24}/>
            <div><div className="bxm">Chat on WhatsApp</div><div className="bxs">+237 674 681 144</div></div>
          </a>
          <a href="tel:+237674681144" className="btn btn-phone btn-xl ccl">
            <IconPhone s={24}/>
            <div><div className="bxm">Call Grace</div><div className="bxs">+237 674 681 144</div></div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand"><span className="fb-ico"><IconLeaf s={20}/></span><span>Grace's<em> Juices</em></span></div>
          <p className="footer-tag">Fresh. Natural. Delivered with Love.<br/>Yaoundé, Simbock 🇨🇲</p>
          <div className="footer-links">
            <a href={wa('Hello Grace!')} target="_blank" rel="noreferrer" className="footer-btn"><IconWA s={16}/> WhatsApp</a>
            <a href="tel:+237674681144" className="footer-btn"><IconPhone s={16}/> Call</a>
          </div>
        </div>
        <div className="footer-div"/>
        <div className="footer-bot">
          <p>© {new Date().getFullYear()} Grace's Natural Juices. All rights reserved.</p>
          <p className="footer-made">Made with 💚 in Cameroon</p>
        </div>
      </div>
    </footer>
  );
}

/* ── WA FLOAT ───────────────────────────────────────── */
function WAFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 2200); return () => clearTimeout(t); }, []);
  return (
    <a href={wa('Hello Grace! I want to order a fresh juice 🍹')} target="_blank" rel="noreferrer" className={`wa-float${show?' wf-show':''}`} aria-label="Order on WhatsApp">
      <span className="wf-pulse"/>
      <IconWA s={26}/>
    </a>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <main><Hero/><WhyUs/><Juices/><Events/><Delivery/><Contact/></main>
      <Footer/>
      <WAFloat/>
    </div>
  );
}
