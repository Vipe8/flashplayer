const content = window.SITE_CONTENT;
const $ = (selector) => document.querySelector(selector);
const toast = $('#toast'); let toastTimer;
function unavailable(event) { event.preventDefault(); toast.textContent = 'Bu içerik yakında eklenecek.'; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500); }
function safeUrl(value) { if (!value) return ''; try { const url = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } }
function wireLink(link, value, download = false) { const url = safeUrl(value); if (url) { link.href = url; if (download) link.setAttribute('download', content.playlist.filename); else { link.target = '_blank'; link.rel = 'noopener noreferrer'; } } else { link.setAttribute('aria-disabled', 'true'); link.setAttribute('role', 'link'); link.tabIndex = 0; link.title = 'Yakında eklenecek'; link.addEventListener('click', unavailable); link.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') unavailable(event); }); } }
$('#nickname').textContent = content.nickname;
if (content.logo && safeUrl(content.logo)) { $('#channelLogo').src = safeUrl(content.logo); $('#channelLogo').alt = content.nickname + ' YouTube logosu'; }
document.querySelectorAll('[data-link]').forEach(link => wireLink(link, content.links[link.dataset.link]));
content.videos.forEach(video => { const card = document.createElement('article'); card.className = 'jam-card'; const cover = document.createElement('a'); cover.className = 'video-embed video-cover'; cover.setAttribute('aria-label', video.comingSoon ? 'ÇOK YAKINDA' : video.title + ' — YouTube’da izle'); wireLink(cover, video.url); if (video.thumbnail && safeUrl(video.thumbnail)) { const image = document.createElement('img'); image.src = safeUrl(video.thumbnail); image.alt = ''; image.loading = 'lazy'; cover.append(image); } const play = document.createElement('span'); play.className = 'play'; play.textContent = video.comingSoon ? 'ÇOK YAKINDA' : '▶'; if (video.comingSoon) play.classList.add('coming-soon'); play.setAttribute('aria-hidden', 'true'); cover.append(play); const title = document.createElement('h3'); title.textContent = video.title; const description = document.createElement('p'); description.textContent = video.description; const body = document.createElement('div'); body.className = 'jam-body'; description.className = 'jam-desc'; body.append(title, description); card.append(cover, body); $('#videoGrid').append(card); });
$('#playlistFile').textContent = content.playlist.filename + ' ↗'; wireLink($('#playlistFile'), content.playlist.url, true);
if (content.playlist.updated && /^\d{4}-\d{2}-\d{2}$/.test(content.playlist.updated)) { const date = new Date(content.playlist.updated + 'T12:00:00'); if (!Number.isNaN(date.getTime())) { $('#updated').dateTime = content.playlist.updated; $('#updated').textContent = date.toLocaleDateString('tr-TR'); } }
if (Number.isInteger(content.playlist.gameCount) && content.playlist.gameCount >= 0) $('#gameCount').textContent = content.playlist.gameCount.toLocaleString('tr-TR');
if (content.playlist.url) $('#playlistState').textContent = 'Dosyayı indirip, aşağıdaki adımlarla Flashpoint’e ekleyebilirsiniz.';
content.guide.forEach(step => {
  const article = document.createElement('article');
  article.className = 'guide-step';
  const title = document.createElement('h3');
  title.textContent = step.title;
  const blocks = [step, ...(step.continuation || [])];
  blocks.forEach((block, blockIndex) => {
    const row = document.createElement('div');
    row.className = 'project-detail-grid guide-row';
    const body = document.createElement('div');
    if (blockIndex === 0) body.append(title);
    const paragraph = document.createElement('p');
    paragraph.className = 'about-text';
    paragraph.textContent = block.text;
    body.append(paragraph);
    if (block.link) {
      const links = document.createElement('div');
      links.className = 'sub-item-links';
      const link = document.createElement('a');
      link.className = 'link-chip';
      link.textContent = block.linkText + ' ↗';
      wireLink(link, block.link);
      links.append(link);
      body.append(links);
    }
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = safeUrl(block.image);
    image.alt = block.alt;
    image.loading = 'lazy';
    figure.append(image);
    row.append(body, figure);
    article.append(row);
  });
  $('#guideList').append(article);
});
const toggle = $('#navToggle'), sidebar = $('#sidebar');
function closeMenu() { sidebar.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); syncSidebar(); }
function syncSidebar() { sidebar.inert = matchMedia('(max-width:720px)').matches && !sidebar.classList.contains('open'); }
syncSidebar();
toggle.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); syncSidebar(); });
document.addEventListener('click', event => { if (!sidebar.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && sidebar.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { closeMenu(); if (matchMedia('(max-width:720px)').matches) { const section = document.querySelector(link.hash); section.setAttribute('tabindex', '-1'); section.focus({ preventScroll: true }); } }));
const sections = [...document.querySelectorAll('main section[id]')], navLinks = [...document.querySelectorAll('.nav-link')]; let scheduled = false;
function updateNav() { let id = sections[0].id; for (const section of sections) if (section.getBoundingClientRect().top <= 150) id = section.id; if (window.scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 5) id = sections.at(-1).id; navLinks.forEach(link => { const active = link.hash === '#' + id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); scheduled = false; }
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNav); } }, { passive: true }); window.addEventListener('resize', () => { if (innerWidth > 720) closeMenu(); syncSidebar(); updateNav(); }); updateNav();
