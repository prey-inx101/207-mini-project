  /* ── deals with how things respond/behave ── */


/* ── NAV ── */
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => switchSection(item.dataset.section));
});
function switchSection(target) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(target).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.section === target));
  document.getElementById('main-nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── FUN FACTS ── */
const funFacts = [
  "I carry the surname that translates to bitter in Spanish.",
  "I am the only girl among my siblings and hold the position of the middle child.",
  "I was kinda forced to learned  3x3 Rubik's Cube for a timed oral exam in my 3rd year of highschool Math.",
  "I was elected as Treasurer for every single year of my highschool life.",
  "Our team of 3 reached the National Level for the Science Investigatory Project (SIP) in our third year of high school.",
  "Our home is happily shared with 1 husky, 1 aspin, 11 shih tzus, and 1 Scottish shorthair cat.",
  "I find myself quite enchanted by the beauty of paths and often capture them through my lens.",
  "I managed to earned a silver award for poster making at the division level in my second grade.",
  "I enrolled in ballet lessons during third grade and kinda enjoyed the experience.",
  "I have started a small collection of mechanical keyboards with different switches.",
  "I persisted through every major subject in my undergrad, even if the 'how' and 'why' of the logic ocassionally felt like a beautiful mystery.",
  "I would choose a quiet evening at home over any social gathering. Food, internet, electricity. That is all I need. Going outside is optional.",
  "Before college I made a quiet decision to finally go by Precious and keep 'Pinky' reserved for family and old friends where it always belonged. I did not even make it past the first day. A high school friend who actually knew my plan had a slip of tongue, shouted 'Pinky' across the room, and then frantically tried to explain herself to my new classmates. It did not help. They heard it, liked it, and decided to call me 'Pinky' anyway 😄.", 
  "I value quiet and solitude deeply, yet somehow most of my career has been built around constant human interaction. Still not sure how that happened."
];

let shownFacts = [];
function showFunFact() {
  if (shownFacts.length === funFacts.length) shownFacts = [];
  let idx;
  do { idx = Math.floor(Math.random() * funFacts.length); } while (shownFacts.includes(idx));
  shownFacts.push(idx);
  const box = document.getElementById('fun-fact-display');
  box.style.display = 'block';
  box.textContent = funFacts[idx];
}

/* ── ABOUT VMENU ── */
document.getElementById('about-vmenu').querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('#about-vmenu li').forEach(i => i.classList.remove('active'));
    li.classList.add('active');
    document.querySelectorAll('.about-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + li.dataset.panel).classList.add('active');
  });
});

/* ── PROFILE SLIDESHOW ── */
const profSlides = document.querySelectorAll('.profile-circle .profile-slide');
let profIdx = 0;
setInterval(() => {
  profSlides[profIdx].classList.remove('active');
  profIdx = (profIdx + 1) % profSlides.length;
  profSlides[profIdx].classList.add('active');
}, 4500);

/* ── STORY SLIDESHOW ── */
const storySlides = document.querySelectorAll('.story-slideshow .story-slide');
let storyIdx = 0;
let storyTimer = setInterval(autoStory, 4500);
function autoStory() {
  storySlides[storyIdx].classList.remove('active');
  storyIdx = (storyIdx + 1) % storySlides.length;
  storySlides[storyIdx].classList.add('active');
}
function storyNext() { clearInterval(storyTimer); autoStory(); storyTimer = setInterval(autoStory, 3500); }
function storyPrev() {
  clearInterval(storyTimer);
  storySlides[storyIdx].classList.remove('active');
  storyIdx = (storyIdx - 1 + storySlides.length) % storySlides.length;
  storySlides[storyIdx].classList.add('active');
  storyTimer = setInterval(autoStory, 3500);
}

/* ── WORK TABS ── */
function showWork(id, btn) {
  document.querySelectorAll('.work-entry').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.work-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ── HOBBIES VMENU ── */
document.getElementById('hobbies-vmenu').querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => showHobby(li.dataset.hobby));
});
function showHobby(name) {
  document.querySelectorAll('#hobbies-vmenu li').forEach(i => i.classList.remove('active'));
  const li = document.querySelector('#hobbies-vmenu li[data-hobby="' + name + '"]');
  if (li) li.classList.add('active');
  document.querySelectorAll('.hobby-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('hobby-' + name);
  if (panel) panel.classList.add('active');
}

/* ── MUSIC SUB-MENU ── */
document.getElementById('music-submenu').querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('#music-submenu li').forEach(i => i.classList.remove('active'));
    li.classList.add('active');
    document.querySelectorAll('.music-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(li.dataset.mpanel).classList.add('active');
  });
});
