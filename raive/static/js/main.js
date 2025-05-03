// ---- Constants ----
const MAX_PROMPT_LENGTH = 200;
const MAX_CODE_LINES = 20;

// ---- Sanitizer ----
function sanitize(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ---- Form handler ----
async function handleInput(event) {
  event.preventDefault();

  const inputField = document.getElementById('input');
  let userText = inputField.value.trim();

  if (userText.length > MAX_PROMPT_LENGTH) {
    userText = userText.slice(0, MAX_PROMPT_LENGTH);
  }
  

  if (!userText) return;

  // inputField.classList.add('text-entered');
  // console.log(userText)

  const prompt = userText;

  console.log(prompt)
  const repl    = document.getElementById('repl');
  const spinner = document.getElementById('spinner-box');
  const current = repl.editor.getCode();
  let lines = current.split('\n');

  // TODO let the user know that there is a line limit here
  if (lines.length >= MAX_CODE_LINES) {
    lines = lines.slice(0, MAX_CODE_LINES).join("\n");
  }
  spinner.classList.remove('hidden');

  try {
    const res = await fetch('/api/engine', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify({ prompt: prompt, currentText: current })
    });
    const data = await res.json();
    const code = data.response.code;

    repl.editor.setCode(code);
    repl.editor.evaluate();

  } catch (err) {
    console.error('API call failed:', err);

  } finally {
    spinner.classList.add('hidden');
  }

  inputField.value = '';
  attachDrawHookOnce(repl);
}

// ---- onDraw wrapper helper ----
function attachDrawHookOnce(repl) {
  if (repl._hasDrawWrap) return;
  const origDraw = repl.editor.onDraw.bind(repl.editor);
  repl.editor.onDraw = (haps, time, painters) => {
    origDraw(haps, time, painters);
    const active = haps.filter(h => h.isActive(time));
    updateWave(active);
  };
  repl._hasDrawWrap = true;
}

// ---- Play / Pause buttons ----
document.getElementById('playButton').addEventListener('click', () => {
  const r = document.getElementById('repl');
  r?.editor?.evaluate();
});
document.getElementById('pauseButton').addEventListener('click', () => {
  const r = document.getElementById('repl');
  r?.editor?.stop();
});

const input = document.getElementById('input');
const counter = document.getElementById('counter');
input.addEventListener('input', () => {
  const len = input.value.length;
  counter.textContent = `${len}/${input.maxLength}`;
});

// ---- Wave visualization code below ----
let numPoints = 200, waveY = [], droplets = [];
let waveSettings = { gain:0.5, cutoff:500, note:'c4', room:0.3, clip:0.2, s:'sine' };
let targetHue = 300, currentHue = 300;
let lastDropletTime = 0, dropletCooldown = 200;

function setup() {
  const canvas = createCanvas(700, 100);
  canvas.parent('vis-container');
  noStroke();
  colorMode(HSL, 360, 100, 100, 1);
  for (let i = 0; i < numPoints; i++) waveY[i] = height/2;
}

function draw() {
  clear();
  let tgt = noteToHue(waveSettings.note);
  currentHue = lerp(currentHue, tgt, 0.05);
  fill(currentHue, 80, 60, 0.5);

  let amp = waveSettings.gain * 80;
  let freq = map(waveSettings.cutoff, 200,2000,0.2,2);
  let soft = map(waveSettings.room, 0,1,2,10);
  let sharp= map(waveSettings.clip, 0,1,1,5);

  beginShape();
  vertex(0,height);
  for (let i=0; i<numPoints; i++){
    let x = (i/numPoints)*width;
    let phase = frameCount*0.01 + i/soft;
    let noiseOff = noise(i*0.05,frameCount*0.01)*sharp;
    let fn = waveSettings.s.includes('bass') ? noise : sin;
    let y = height/2 + fn(phase*freq + noiseOff)*amp;
    vertex(x,y);
  }
  vertex(width,height);
  endShape(CLOSE);

  for (let i=droplets.length-1; i>=0; i--){
    let d = droplets[i];
    fill(d.hue,90,70,d.life);
    ellipse(d.x,d.y,d.r*2);
    d.life -= 0.02;
    d.y   += 0.7;
    if (d.life<=0) droplets.splice(i,1);
  }
}

function updateWave(haps) {
  if (!haps.length) return;
  let now = millis();
  if (now - lastDropletTime > dropletCooldown) {
    let sum = {gain:0, cutoff:0, room:0, clip:0}, notes=[], src=[];
    for (let h of haps) {
      sum.gain   += h.value.gain   ?? 0.3;
      sum.cutoff += h.value.cutoff ?? 800;
      sum.room   += h.value.room   ?? 0.3;
      sum.clip   += h.value.clip   ?? 0.2;
      if (h.value.note) notes.push(h.value.note);
      if (h.value.s)    src.push(h.s);
    }
    let cnt = haps.length;
    waveSettings = {
      gain: sum.gain/ cnt,
      cutoff: sum.cutoff/ cnt,
      room: sum.room/ cnt,
      clip: sum.clip/ cnt,
      note: notes[Math.floor(Math.random()*notes.length)] || 'c4',
      s:    src.includes('bass') ? 'bass' : 'sine',
    };
    targetHue = noteToHue(waveSettings.note);
    for (let i=0; i<Math.min(cnt,2); i++){
      droplets.push({
        x: random(width),
        y: random(height/2-10, height/2+10),
        r: random(3,6),
        life:1.0,
        hue: currentHue,
      });
    }
    lastDropletTime = now;
  }
}

function noteToHue(note) {
  const notes = ['c','d','e','f','g','a','b'];
  let idx = notes.indexOf(note[0]?.toLowerCase());
  return map(idx,0,notes.length-1,200,340);
}

// Hide spinner on load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('spinner-box')?.classList.add('hidden');
});

