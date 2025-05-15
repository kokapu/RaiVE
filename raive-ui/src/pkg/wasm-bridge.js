import init, { init_client, query_model } from './raive.js';

await init();
await init_client();

const MAX_PROMPT_LENGTH = 200;
const MAX_CODE_LINES   = 20;

window.handleInput = async function handleInput(event) {
  event.preventDefault();

  const inputField = document.getElementById('input');
  let userText = inputField.value.trim();
  if (userText.length > MAX_PROMPT_LENGTH) {
    userText = userText.slice(0, MAX_PROMPT_LENGTH);
  }
  if (!userText) return;

  const prompt   = userText;
  const repl     = document.getElementById('repl');
  const spinner  = document.getElementById('spinner-box');
  let current    = repl.editor.getCode();

  // Enforce max code lines
  const lines = current.split('\n');
  if (lines.length >= MAX_CODE_LINES) {
    current = lines.slice(0, MAX_CODE_LINES).join('\n');
  }

  spinner.classList.remove('hidden');

  try {
    const code = await query_model(prompt, current);

    // If the model gave us nothing back, assume rate-limit
    if (!code || !code.trim()) {
      showPopup(
        '⚠️ The model is currently rate-limited. Please use the editor manually!',
        6000
      );
    } else {
      repl.editor.setCode(code);
      repl.editor.evaluate();
    }
  } catch (err) {
    console.error('WASM call failed:', err);
    showPopup('❌ An error occurred when generating code.', 4000);
  } finally {
    spinner.classList.add('hidden');
  }

  inputField.value = '';
  attachDrawHookOnce(repl);
};
