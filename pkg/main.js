// =======================================
// Constants
// =======================================
const MAX_PROMPT_LENGTH = 200;
const MAX_CODE_LINES    = 20;

// =======================================
// Utility Functions
// =======================================
function sanitize(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function noteToHue(note) {
  const NOTES = ['c','d','e','f','g','a','b'];
  const idx   = NOTES.indexOf(note[0]?.toLowerCase());
  return map(idx, 0, NOTES.length - 1, 200, 340);
}

// draw a vertical gradient from c1 → c2
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    const inter = map(i, y, y + h, 0, 1);
    stroke(lerpColor(c1, c2, inter));
    line(x, i, x + w, i);
  }
}

// =======================================
// REPL Draw-hook Helper
// =======================================
function attachDrawHookOnce(repl) {
  if (repl._hasDrawWrap) return;
  const originalOnDraw = repl.editor.onDraw.bind(repl.editor);
  repl.editor.onDraw = (haps, time, painters) => {
    originalOnDraw(haps, time, painters);
    const active = haps.filter(h => h.isActive(time));
    updateWave(active);
  };
  repl._hasDrawWrap = true;
}

// =======================================
// Popup Notification
// =======================================
function showPopup(message, timeout = 4000) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.classList.remove('hidden');
  popup.classList.add('show', 'shake');
  setTimeout(() => popup.classList.remove('shake'), 500);
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.classList.add('hidden'), 400);
  }, timeout);
}

// =======================================
// DOM Event Listeners & Initialization
// =======================================
function setupControls() {
  document.getElementById('playButton')?.addEventListener('click', () => {
    document.getElementById('repl')?.editor?.evaluate();
  });
  document.getElementById('pauseButton')?.addEventListener('click', () => {
    document.getElementById('repl')?.editor?.stop();
  });

  // Clear button styling + handler
  const clearBtn = document.getElementById('clearButton');
  if (clearBtn) {
    clearBtn.classList.add('control-button');
    clearBtn.innerHTML = '🗑️';
    clearBtn.title     = 'Clear code';
    clearBtn.addEventListener('click', () => {
      const repl = document.getElementById('repl');
      repl?.editor?.setCode('');
      showPopup('🧹 Code cleared – session reset.', 2000);
    });
  }

  // Help button styling + handler
  const helpBtn = document.getElementById('helpButton');
  if (helpBtn) {
    helpBtn.classList.add('control-button');
    helpBtn.innerHTML = '❓';
    helpBtn.title     = 'Help';
    helpBtn.addEventListener('click', () => {
      showPopup(
        '▶️ Run (model). ⏸️ Pause. 🗑️ Clear code. ’?’ shows this tip. ' +
        'If model is rate-limited, edit manually!',
        8000
      );
    });
  }

  const inputEl   = document.getElementById('input');
  const counterEl = document.getElementById('counter');
  if (inputEl && counterEl) {
    inputEl.maxLength = MAX_PROMPT_LENGTH;
    inputEl.addEventListener('input', () => {
      counterEl.textContent = `${inputEl.value.length}/${inputEl.maxLength}`;
    });
  }

  document.getElementById('spinner-box')?.classList.add('hidden');
}
window.addEventListener('DOMContentLoaded', setupControls);

// =======================================
// Wave Visualization (p5.js)
// =======================================
const waveVis = {
  numPoints:       200,
  waveY:           [],
  droplets:        [],
  settings:        { gain:0.5, cutoff:500, note:'c4', room:0.3, clip:0.2, s:'sine' },
  currentHue:      300,
  lastDropletTime: 0,
  dropletCooldown: 200,
};

function setup() {
  const canvas = createCanvas(700, 100);
  canvas.parent('vis-container');
  noStroke();
  colorMode(HSL, 360, 100, 100, 1);
  for (let i = 0; i < waveVis.numPoints; i++) {
    waveVis.waveY[i] = height / 2;
  }
}

function draw() {
  // 1) Background gradient
  const topColor    = color(waveVis.currentHue, 60, 20, 0.8);
  const bottomColor = color((waveVis.currentHue + 60) % 360, 40, 50, 0.4);
  setGradient(0, 0, width, height, topColor, bottomColor);

  // 2) Update hue
  const targetHue = noteToHue(waveVis.settings.note);
  waveVis.currentHue = lerp(waveVis.currentHue, targetHue, 0.05);

  // 3) Compute wave params
  const amp    = waveVis.settings.gain * 80;
  const freq   = map(waveVis.settings.cutoff, 200, 2000, 0.2, 2);
  const soft   = map(waveVis.settings.room, 0, 1, 2, 10);
  const sharp  = map(waveVis.settings.clip, 0, 1, 1, 5);
  const isBass = waveVis.settings.s.includes('bass');

  // 4) Draw smoothed waveform stroke
  stroke(waveVis.currentHue, 100, 70, 0.8);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < waveVis.numPoints; i++) {
    const x        = (i / waveVis.numPoints) * width;
    const phase    = frameCount * 0.01 + i / soft;
    const noiseOff = noise(i * 0.05, frameCount * 0.01) * sharp;
    const rawY     = height / 2 + (isBass ? noise(phase * freq + noiseOff) : sin(phase * freq + noiseOff)) * amp;
    // lerp into stored waveY for smoothing
    waveVis.waveY[i] = lerp(waveVis.waveY[i], rawY, 0.1);
    vertex(x, waveVis.waveY[i]);
  }
  endShape();

  // 5) Fill under the curve
  noStroke();
  fill(waveVis.currentHue, 80, 60, 0.2);
  beginShape();
  vertex(0, height);
  for (let i = 0; i < waveVis.numPoints; i++) {
    const x = (i / waveVis.numPoints) * width;
    vertex(x, waveVis.waveY[i]);
  }
  vertex(width, height);
  endShape(CLOSE);

  // 6) Droplets with glow
  drawingContext.shadowBlur   = 15;
  drawingContext.shadowColor  = `hsla(${waveVis.currentHue},100%,80%,0.5)`;
  for (let i = waveVis.droplets.length - 1; i >= 0; i--) {
    const d = waveVis.droplets[i];
    fill(d.hue, 90, 70, d.life * 0.8);
    ellipse(d.x, d.y, d.r * 2);
    d.life -= 0.02;
    d.y   += 0.7;
    if (d.life <= 0) waveVis.droplets.splice(i, 1);
  }
  drawingContext.shadowBlur = 0;
}

function updateWave(haps) {
  if (!haps.length) return;
  const now = millis();
  if (now - waveVis.lastDropletTime <= waveVis.dropletCooldown) return;

  const agg   = { gain:0, cutoff:0, room:0, clip:0 };
  const notes = [], srcs = [];
  for (const h of haps) {
    agg.gain   += h.value.gain   ?? 0.3;
    agg.cutoff += h.value.cutoff ?? 800;
    agg.room   += h.value.room   ?? 0.3;
    agg.clip   += h.value.clip   ?? 0.2;
    if (h.value.note) notes.push(h.value.note);
    if (h.value.s)    srcs.push(h.value.s);
  }

  const cnt = haps.length;
  waveVis.settings = {
    gain:   agg.gain   / cnt,
    cutoff: agg.cutoff / cnt,
    room:   agg.room   / cnt,
    clip:   agg.clip   / cnt,
    note:   notes.length
              ? random(notes)
              : 'c4',
    s:      srcs.includes('bass') ? 'bass' : 'sine',
  };

  for (let i = 0; i < Math.min(cnt, 2); i++) {
    waveVis.droplets.push({
      x:    random(width),
      y:    random(height/2 - 10, height/2 + 10),
      r:    random(3, 6),
      life: 1.0,
      hue:  waveVis.currentHue,
    });
  }

  waveVis.lastDropletTime = now;
}

window.updateWave = updateWave;
