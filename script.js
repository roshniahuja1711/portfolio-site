/* ---- Contact details: fill these in; empty ones are hidden ---- */
const CONTACT = {
  email: '',      // e.g. 'roshni@example.com'
  phone: '',      // e.g. '+91 98765 43210'
  linkedin: '',   // full URL
  instagram: '',  // full URL
  behance: ''     // full URL
};

/* ---- Helpers ---- */
const pad = n => String(n).padStart(3, '0');
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const ids = (prefix, letters) => [...letters].map(l => prefix + l);
// numbers = whole PDF pages (img/pNNN, thumbs img/tNNN); strings = single images (img/<id>, thumbs img/t_<id>)
const full = p => typeof p === 'string' ? `img/${p}.webp` : `img/p${pad(p)}.webp`;
const thumb = full; // covers use the full-size image so they stay sharp on retina screens

const JOURNEY = [
  ['Semester 1', 'The fundamentals', 'Design principles, colour schemes, composition and basic building elements.'],
  ['Semester 2', 'First home', 'Residential design through a 1BHK residence, along with logo design.'],
  ['Semester 3', 'Commercial interiors', 'A designer’s office and a cafeteria.'],
  ['Semester 4', 'Experience & empathy', 'Mayfair Coastal Restaurant in Goa, and a pediatric hospital balancing aesthetics with comfort and safety.'],
  ['Semester 5', 'Scale & detail', 'A clubhouse and a luxury society lobby — aesthetics, scale and technical detailing.'],
  ['Semester 6', 'Contrasts', 'A jewellery showroom built on elegance and brand storytelling, and a flexible co-working space.'],
  ['Semester 7', 'Into practice', 'Internship at ETH Design Studio, Ahmedabad: design development, detailing, site coordination.'],
  ['Semester 8', 'Thesis', 'A Pet Boarding & Care Centre focused on comfort, safety, wellbeing and the bond between pets and caregivers.']
];

/* A group = one cover image on the page; clicking opens every image of the group in the lightbox. */
const PROJECTS = [
  {
    strip: 6, n: '01', title: 'Dadashri Residence (DSR)', short: '5 BHK Residence',
    loc: 'Kathwada, Ahmedabad, Gujarat', cardLoc: 'Ahmedabad, Gujarat', area: '3228 sq. ft.', type: 'Residence',
    tag: 'Residential · Design development & detailing',
    cover: 'lv1', mood: 8,
    brief: ['This 5BHK residence is envisioned as a premium, well-structured interior project where spatial zoning, functional clarity, and aesthetic coherence guide the overall design approach. The planning strategy focuses on establishing distinct private and semi-private zones while maintaining a fluid visual connection across the common areas.'],
    rooms: ['Master bedroom', 'Two daughters’ bedrooms', 'Guest bedroom', 'Mandir + office room', 'Living & social spaces: lounge, drawing room', 'Kitchen', 'Balcony'],
    intent: 'The residence adopts a contemporary interior vocabulary, integrating neutral tones, engineered materials, layered lighting, and bespoke furniture elements. The overall approach emphasizes spatial comfort, visual coherence, and a sophisticated residential character.',
    sections: [
      { title: 'Renders', groups: [
        ['Living room', ids('lv', '1234567')],
        ['Guest room', ['g1', 'g2', 'g3']],
        ['Master bedroom', ids('mb', '123456789').concat(['mb10'])],
        ['Daughter’s bedroom 1', ['d01', 'd02', 'd03', 'd04', 'd05']],
        ['Daughter’s bedroom 2', ['d06', 'd07', 'd08', 'd09', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16', 'd17']],
        ['Mandir & office', ids('mo', '1234')],
        ['Kitchen', ids('k', ['01','02','03','04','05','06','07','08','09','10','11'])]
      ] },
      { title: 'On site', note: 'Execution progress from the project site.', groups: [
        ['Site photos', ids('s', ['01','02','03','04','05','06','07','08','09','10','11'])]
      ] }
    ]
  },
  {
    strip: 32, n: '02', title: 'Derma Clinic (DCS)', short: 'Derma Clinic',
    loc: 'Sheoganj, Rajasthan', cardLoc: 'Sheoganj, Rajasthan', area: '357 sq. ft.', type: 'Healthcare centre',
    tag: 'Healthcare · Soft minimal curves',
    cover: 'dc3', mood: 34,
    brief: ['The derma clinic is conceived as a calm, seamless environment shaped by a theme of soft minimal curves. The site layout focuses on smooth transitions between walls and ceilings, creating a unified and tranquil spatial experience ideal for dermatological treatments.', 'The design language is consistently applied across all three rooms:'],
    rooms: ['Reception area', 'Consultation room 1', 'Consultation room 2'],
    intent: 'The design theme revolves around soft minimal curves and a blush-pink palette, creating a calming and contemporary clinical atmosphere. Smooth transitions, rounded forms, and pastel tones unify the reception and both consultation rooms, giving the clinic a warm, serene, and cohesive identity.',
    sections: [
      { title: 'Renders', groups: [['Renders', ids('dc', '12345678').concat(['dc9','dc10'])]] }
    ]
  },
  {
    strip: 52, n: '03', title: 'Mayfair, Goa', short: 'Mayfair Restaurant',
    loc: 'Goa', cardLoc: 'Goa', area: '4000 sq. ft. (excl. outdoor unit)', type: 'Commercial · Hospitality',
    tag: 'Semester 4 · Hand-drafted & CAD',
    cover: 57, mood: 54,
    brief: ['The restaurant is envisioned as a contemporary dining destination that combines indoor and outdoor dining experiences with recreational and social spaces. The planning approach focuses on creating a seamless connection between dining, entertainment, and leisure.'],
    rooms: ['Indoor seating area with stage', 'Outdoor seating area', 'Bar area', 'Barbeque area', 'Swimming pool', 'Pool deck area', 'Kitchen', 'Washing area unit', 'Public washrooms', 'Staff room with washroom'],
    intent: 'The design embraces a contemporary hospitality aesthetic, blending comfortable dining spaces with entertainment and leisure elements. Ambient lighting, cohesive materials, and seamless indoor-outdoor connectivity create a welcoming and sophisticated dining experience.',
    sections: [
      { title: 'Hand-drafted sheets', note: 'Nautical minimalism concept — mood board, furniture and flooring layouts and sectional elevations, drafted by hand.', groups: [['Hand-drafted sheets', range(56, 59)]] }
    ]
  },
  {
    strip: 74, n: '04', title: 'YS Office', short: 'YS Office',
    loc: 'Ahmedabad, Gujarat', cardLoc: 'Ahmedabad, Gujarat', area: '1300.91 sq. ft.', type: 'Workspace',
    tag: 'Internship project · ETH Design Studio',
    cover: 'y02', mood: 76,
    brief: ['This project proposes a sophisticated office environment designed to balance productivity, privacy, and emotional well-being. The visual language is rooted in minimalism and calm pastel tones, primarily powder blue and warm beige. The reception features a stone-and-wood desk and a circular ceiling element that sets a strong identity for the space.'],
    rooms: ['Reception area', 'Workstation zone', 'Private lounge', 'Multifunctional bedroom-cum-office', 'Meditation room with integrated mandir'],
    intent: 'Natural lighting, indoor plants, and acoustic wall panels enhance the sensory experience, while modern lighting and modular furniture ensure functionality and flexibility — a nurturing environment where clarity and focus support a holistic work culture.',
    sections: [
      { title: 'Renders', groups: [
        ['Beige scheme', ['yso2', 'yso1', 'y01', 'y02']],
        ['Blue scheme', ['y03','y04','y05','y06','y07','y08','y09','y10','y11','y12']],
        ['Green scheme', ['y13','y14','y15','y16']]
      ] }
    ]
  },
  {
    strip: 90, n: '05', title: 'Pet Care & Boarding Centre', short: 'Pet Care & Boarding',
    loc: 'Vadodara, Gujarat', cardLoc: 'Vadodara, Gujarat', area: '5411.22 sq. ft.', type: 'Commercial',
    tag: 'Thesis project',
    cover: 'pc1', mood: 92,
    brief: ['A pet care and boarding centre at Broadway Skyline, Vadodara — a mixed-use building with two commercial floors and the remaining floors dedicated to residential use. The facility provides a safe, hygienic and comfortable environment exclusively for dogs, integrating care, boarding and recreational activities.'],
    rooms: ['Display and reception unit', 'Treatment area for dogs', 'Kennel and grooming areas', 'Canine activity zone', 'Shared interaction and play area', 'Staff room, pantry and washroom', 'Service and maintenance area'],
    intent: 'The design focuses on canine comfort, safety and well-being through functional zoning and secure, easy-to-maintain spaces. Blue and yellow form the primary colour palette, as dogs can distinguish these colours more effectively than red and green. Durable surfaces, hygienic finishes and dedicated activity areas create a stimulating, pet-friendly environment.',
    sections: [
      { title: 'Renders', groups: [['Renders', ['pc1','pc2','pc3','pc4','pc5','pc6']]] }
    ]
  },
  {
    strip: 102, n: '06', title: 'Anand Jewellers, Raipur', short: 'Anand Jewellers',
    loc: 'Raipur, Chhattisgarh', cardLoc: 'Raipur, Chhattisgarh', area: '', type: 'Commercial · Retail',
    tag: 'Semester 6 · Victorian–Roman concept',
    cover: 105, mood: 105,
    brief: ['A jewellery showroom focused on elegance and brand storytelling, developed through a Victorian–Roman concept with a plum and rose palette, chandeliers and classical detailing across two floors.'],
    rooms: [], intent: '',
    sections: []
  }
];

const BEYOND_RENDERS = ids('fl', ['01','02','03','04','05','06','07','08','09','10','11','12','13','14']).concat(ids('r132', 'abcdefghi'), ids('r133', 'bcdfhij'));

/* ---- Rendering ---- */
const $ = (s, r = document) => r.querySelector(s);
const cap = (title, i, n) => `${title} · ${i + 1} / ${n}`;

// One cover card per group; the other images are hidden buttons so the lightbox can step through them.
const groupCard = (key, title, list, unit) => {
  const hidden = list.slice(1).map((p, i) =>
    `<button hidden type="button" data-group="${key}" data-full="${full(p)}" data-cap="${cap(title, i + 1, list.length)}"></button>`).join('');
  const word = unit || (list.length === 1 ? 'image' : 'images');
  return `
  <div class="gcard rv">
    <button type="button" data-group="${key}" data-full="${full(list[0])}" data-cap="${cap(title, 0, list.length)}" aria-label="Open ${title}: ${list.length} ${word}">
      <img loading="lazy" src="${thumb(list[0])}" alt="${title}">
      <span class="badge">${list.length} ${word}</span>
    </button>
    ${hidden}
    <p class="gtitle">${title}</p>
  </div>`;
};

$('#timeline').innerHTML = JOURNEY.map(([s, t, d]) =>
  `<li class="rv" tabindex="0" role="button" aria-pressed="false"><small>${s}</small><h4>${t}</h4><p>${d}</p></li>`).join('');

$('#circles').innerHTML = PROJECTS.map(p => `
  <a class="circle rv" href="#project-${p.n}">
    <div class="disc"><img loading="lazy" src="${thumb(p.cover)}" alt="${p.short}"></div>
    <small>${p.n}</small><strong>${p.short}</strong><span class="loc">${p.cardLoc}</span>
  </a>`).join('');

$('#project-list').innerHTML = PROJECTS.map(p => {
  const facts = [['Location', p.loc], p.area && ['Area', p.area], ['Type', p.type]].filter(Boolean)
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  const rooms = p.rooms.length ? `<ul class="rooms">${p.rooms.map(r => `<li>${r}</li>`).join('')}</ul>` : '';
  const sections = p.sections.map((s, si) => `
      <h3 class="sub">${s.title}</h3>${s.note ? `<p class="sub-note">${s.note}</p>` : ''}
      <div class="gcards">${s.groups.map(([t, l], gi) => groupCard(`p${p.n}-${si}-${gi}`, t, l, s.title === 'Hand-drafted sheets' ? (l.length === 1 ? 'sheet' : 'sheets') : '')).join('')}</div>`).join('');
  return `
  <section class="project" id="project-${p.n}">
    <div class="wrap">
      <div class="proj-head rv"><img class="strip" src="img/s${pad(p.strip)}.webp" alt="" loading="lazy"><span class="num">${p.n}</span><div><h2>${p.title}</h2><i class="rule"></i></div></div>
      <span class="tag">${p.tag}</span>
      <div class="proj-top">
        <div class="proj-copy rv">
          <dl class="facts">${facts}</dl>
          <h3>Project brief</h3>
          ${p.brief.map(b => `<p>${b}</p>`).join('')}${rooms}
          ${p.intent ? `<h3>Design intent</h3><p>${p.intent}</p>` : ''}
        </div>
        <div class="rv">
          <button class="mood" type="button" data-group="p${p.n}-mood" data-full="img/m${pad(p.mood)}.webp" data-cap="${p.short} — mood board" aria-label="Open mood board"><img loading="lazy" src="img/m${pad(p.mood)}.webp" alt="${p.short} mood board"></button>
          <p class="label">Project description &amp; mood board</p>
        </div>
      </div>
      ${sections}
    </div>
  </section>`;
}).join('');

$('#g-beyond').outerHTML = `<div class="gcards one">${groupCard('beyond-r', 'Freelance renders', BEYOND_RENDERS)}</div>`;
$('#g-bottle').outerHTML = `<div class="gcards one art">${groupCard('bottle', 'Bottle art', ['bottle1', 134])}</div>`;
$('#g-rangoli').outerHTML = `<div class="gcards one art"><div class="gcard rv"><button type="button" data-group="rangoli" data-full="${full(135)}" data-cap="Portrait rangoli"><img loading="lazy" src="${full(135)}" alt="Portrait rangoli"></button></div></div>`;

/* Hero circles */
document.querySelectorAll('.hero-circles img').forEach((img, i) => { img.src = thumb(['hero1', 'hero2', 'hero3'][i]); });

/* Contact */
const links = [
  CONTACT.email && ['Email', `mailto:${CONTACT.email}`, CONTACT.email],
  CONTACT.phone && ['Phone', `tel:${CONTACT.phone.replace(/\s/g, '')}`, CONTACT.phone],
  CONTACT.linkedin && ['LinkedIn', CONTACT.linkedin, 'LinkedIn'],
  CONTACT.instagram && ['Instagram', CONTACT.instagram, 'Instagram'],
  CONTACT.behance && ['Behance', CONTACT.behance, 'Behance']
].filter(Boolean);
$('#contact-links').innerHTML = links.length
  ? links.map(([k, h, t]) => `<li><a href="${h}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><span>${k}</span><span>${t}</span></a></li>`).join('')
  : '<li><a href="#top"><span>Contact details coming soon</span><span></span></a></li>';
$('#yr').textContent = new Date().getFullYear();

/* ---- Journey: click a semester to switch it to white with black text ---- */
const toggleSem = li => { const on = li.classList.toggle('on'); li.setAttribute('aria-pressed', on); };
$('#timeline').addEventListener('click', e => { const li = e.target.closest('li'); if (li) toggleSem(li); });
$('#timeline').addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('li')) { e.preventDefault(); toggleSem(e.target); }
});

/* ---- Nav ---- */
const nav = $('#nav'), burger = $('.burger'), menu = $('.nav nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });
burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
menu.addEventListener('click', e => { if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
const secs = [...document.querySelectorAll('main section[id]')];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    const id = e.target.id.startsWith('project-') ? 'projects' : e.target.id;
    menu.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + id));
  }
}), { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => spy.observe(s));

/* ---- Reveal ---- */
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(n => rv.observe(n));

/* ---- Lightbox ---- */
const lb = $('#lb'), lbImg = $('img', lb), lbCap = $('.lb-cap', lb);
let items = [], idx = 0, lastFocus = null;
const show = () => { const b = items[idx]; lbImg.src = b.dataset.full; lbImg.alt = b.dataset.cap; lbCap.textContent = b.dataset.cap; };
const open = b => {
  items = [...document.querySelectorAll(`[data-group="${b.dataset.group}"]`)];
  idx = items.indexOf(b); lastFocus = b; show(); lb.hidden = false; document.body.style.overflow = 'hidden'; $('.lb-x').focus();
  lb.classList.toggle('single', items.length < 2);
};
const close = () => { lb.hidden = true; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); };
const step = d => { idx = (idx + d + items.length) % items.length; show(); };
document.addEventListener('click', e => { const b = e.target.closest('button[data-full]'); if (b) open(b); });
$('.lb-x').onclick = close; $('.lb-p').onclick = () => step(-1); $('.lb-n').onclick = () => step(1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') step(-1); else if (e.key === 'ArrowRight') step(1);
});
