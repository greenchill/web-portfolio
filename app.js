/* ===============================
   Mini-game: color -> simple gradient
   =============================== */

// Cache DOM
const body       = document.body;
const root       = document.documentElement;
const playBtn    = document.getElementById('play-btn');
const colorWrap  = document.querySelector('.color-div');
const colorInput = document.getElementById('color-picker');
const hiddenText = document.querySelector('.color-div p');
const resetBtn   = document.getElementById('reset-btn');

const show = (el, display = 'block') => el && (el.style.display = display);
const hide = (el) => el && (el.style.display = 'none');

// Start the mini-game (show color picker)
function playGame() {
  show(colorWrap);
  hide(playBtn);
}

// Apply chosen color -> turn on gradient, toggle UI
function changeColor(){
  const c = colorInput?.value || '#00b7ff';
  root.style.setProperty('--accent', c);
  body.classList.add('blobs-on');          // включает градиент (CSS .blobs-on)

  // UI: показать текст и Reset, скрыть сам color input
  show(hiddenText);
  show(resetBtn, 'inline-flex');
  if (colorInput) colorInput.style.display = 'none';
}

// Reset -> back to star sky and original UI
function resetColor(){
  body.classList.remove('blobs-on');
  root.style.removeProperty('--accent');

  hide(hiddenText);
  hide(resetBtn);
  if (colorInput) colorInput.style.display = 'block'; // вернуть picker
  hide(colorWrap);
  show(playBtn, 'inline-flex');
}

// Wire up
playBtn?.addEventListener('click', playGame);
colorInput?.addEventListener('input', changeColor);   // реагируем сразу
resetBtn?.addEventListener('click', resetColor);

/* ===============================
   Tiny pixel sparks on click
   =============================== */

// Ensure spark layer exists (auto-create if missing)
let sparkLayer = document.querySelector('.spark-layer');
if (!sparkLayer) {
  sparkLayer = document.createElement('div');
  sparkLayer.className = 'spark-layer';
  document.body.appendChild(sparkLayer);
}

function spawnSparkBurst(x, y, n = 16) {
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'spark';

    // compact burst: small radius, small particles, light gravity
    const angle = Math.random() * Math.PI * 2;
    const dist  = 24 + Math.random() * 44;  // 24–68px
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--s',  `${2 + Math.random()*1.5}px`);     // 2–3.5px
    p.style.setProperty('--g',  `${70 + Math.random()*40}px`);      // 70–110px
    p.style.setProperty('--dur', `${420 + Math.random()*180}ms`);   // 420–600ms
    p.style.setProperty('--spinDur', `${160 + Math.random()*200}ms`);
    p.style.setProperty('--c', `hsl(${210 + Math.random()*30} 90% ${62 + Math.random()*12}%)`);

    p.style.left = `${x}px`;
    p.style.top  = `${y}px`;

    p.addEventListener('animationend', () => p.remove(), { once: true });
    sparkLayer.appendChild(p);
  }
}

document.addEventListener('pointerdown', (e) => {
  spawnSparkBurst(e.clientX, e.clientY);
});





// ===== Reliable typewriter for #typed-title =====
(function(){
  const el = document.getElementById('typed-title');
  if (!el || el.dataset.typedDone === '1') return;

  const full = el.textContent;         // исходная строка
  el.textContent = '';                 // очищаем

  // создаём каретку
  const caret = document.createElement('span');
  caret.className = 'caret';
  el.appendChild(caret);

  // настройки скорости
  const msPerChar = 80;                // медленнее/быстрее: 60–120 мс
  const startDelay = 150;              // задержка перед началом, мс

  let i = 0;
  function tick(){
    if (i < full.length){
      // печатаем по одному символу ПЕРЕД кареткой
      caret.insertAdjacentText('beforebegin', full[i]);
      i++;
      setTimeout(tick, msPerChar);
    }else{
      // всё готово — убираем каретку
      caret.remove();
      el.dataset.typedDone = '1';
    }
  }

  // уважаем системную настройку "уменьшить анимации"
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced){
    el.textContent = full;    // сразу показываем текст
  }else{
    setTimeout(tick, startDelay);
  }
})();
