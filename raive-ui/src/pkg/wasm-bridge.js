import init, { init_client, query_model, get_prev_code, get_next_code } from './raive.js';

(async () => {
  await init();
  await init_client();
})();

const MAX_PROMPT_LENGTH = 200;
const MAX_CODE_LINES   = 20;


// =======================================
// Error handling
// =======================================

async function tryEvaluating(repl) {
  try {
    const result = await repl.editor.evaluate();
    console.log("Evaluated code:", result);
  
    if (!result || typeof result !== 'object') {
      console.warn("Evaluation returned nothing or non-object.");
      showPopup(
        "Oops! Code didn't produce sound. What would you like to do?",
        0, // no timeout for buttons
        [
          {
            label: "undo last prompt",
            onClick: () => {
              console.log("Undoing last prompt...");
              document.getElementById("undoButton")?.click();
              return;
            },
          },
          {
            label: "reprompt the model",
            onClick: () => {
              console.log("Reprompting model...");
              repromptModel(repl);
              return;
            },
          },
          {
            label: "figure it out myself",
            onClick: () => {
              console.log("User will handle it.");
              return;
            },
          },
        ]
      );
      return;
    }
  
    // Check if it's a Strudel pattern (Qt patterns are tagged with `_Pattern: true`)
    if (result._Pattern === true) {
      console.log("Pattern is valid and recognized as a Strudel pattern.");
      // You can add more logic here if needed
    } else {
      console.warn("Code evaluated but did not return a valid Strudel pattern.");
      showPopup(
        "Oops! Code didn't produce sound. What would you like to do?",
        0, // no timeout for buttons
        [
          {
            label: "undo last prompt",
            onClick: () => {
              console.log("Undoing last prompt...");
              document.getElementById("undoButton")?.click();
              return;
            },
          },
          {
            label: "reprompt the model",
            onClick: () => {
              console.log("Reprompting model...");
              repromptModel();
              return;
            },
          },
          {
            label: "figure it out myself",
            onClick: () => {
              console.log("User will handle it.");
              return;
            },
          },
        ]
      );
    }
  } catch (err) {
    console.error("Error during evaluation:", err);
    showPopup("Syntax error or failed evaluation.");
  }
}

async function repromptModel(repl) {
  let current = repl.editor.getCode();
  const spinner  = document.getElementById('spinner-box');

  // Enforce max code lines
  const lines = current.split('\n');
  if (lines.length >= MAX_CODE_LINES) {
    current = lines.slice(0, MAX_CODE_LINES).join('\n');
  }

  spinner.classList.remove('hidden');

  try {
    const code = await query_model("", current, true);

    // If the model gave us nothing back, assume rate-limit
    if (!code || !code.trim()) {
      showPopup(
        '⚠️ The model is currently rate-limited. Please use the editor manually!',
        6000
      );
    } else {
      await repl.editor.setCode(code);
      console.log("evaluating code");
      await tryEvaluating(repl);
    }
  } catch (err) {
    console.error('WASM call failed:', err);
    showPopup('❌ An error occurred when generating code.', 4000);
  } finally {
    spinner.classList.add('hidden');
  }
}

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
    const code = await query_model(prompt, current, false);

    // If the model gave us nothing back, assume rate-limit
    if (!code || !code.trim()) {
      showPopup(
        '⚠️ The model is currently rate-limited. Please use the editor manually!',
        6000
      );
    } else {
      await repl.editor.setCode(code);
      console.log("evaluating code");
      await tryEvaluating(repl);
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

document.addEventListener("DOMContentLoaded", () => {
  const repl = document.getElementById("repl");

  document.getElementById("undoButton").addEventListener("click", async () => {
    const prev = await get_prev_code();
    console.log("Got prev code", prev)
    if (prev !== null) {
      repl.editor.setCode(prev);
      repl.editor.evaluate().then(a => {
        console.log("Strudel returned:", a);
      })
      .catch((err) => {
        console.error("Strudel execution failed:", err);
      });;
    }
  });

  document.getElementById("redoButton").addEventListener("click", async () => {
    const next = await get_next_code();
    console.log("Got next code", next)
    if (next !== null) {
      repl.editor.setCode(next);
      repl.editor.evaluate().then(a => {
        console.log("Strudel returned:", a);
      })
      .catch((err) => {
        console.error("Strudel execution failed:", err);
      });;
    }
  });
});


function setupControls() {
  document.getElementById('playButton')?.addEventListener('click', () => {
    console.log('Evaluating code...');
    const repl = document.getElementById('repl');
    tryEvaluating(repl);
  });
  document.getElementById('pauseButton')?.addEventListener('click', () => {
    document.getElementById('repl')?.editor?.stop();
  });

  // Clear button styling + handler
  const clearBtn = document.getElementById('clearButton');
  if (clearBtn) {
    clearBtn.classList.add('control-button');
    clearBtn.innerHTML = '❌';
    clearBtn.title     = 'Clear code';
    clearBtn.addEventListener('click', () => {
      const repl = document.getElementById('repl');
      repl?.editor?.setCode('');
      repl?.editor?.stop();
      showPopup('🧹 Code cleared – session reset.', 2000);
    });
  }

  const helpBtn    = document.getElementById('helpButton');
  const helpPanel  = document.getElementById('helpSidebar');
  const closeHelp  = document.getElementById('closeHelpBtn');

  if (helpBtn && helpPanel) {
    helpBtn.classList.add('control-button');
    helpBtn.innerHTML = 'help';
    helpBtn.title     = 'Help';

    helpBtn.addEventListener('click', () => {
      helpPanel.classList.toggle('open');
    });
  }

  // Close-panel button
  if (closeHelp && helpPanel) {
    closeHelp.addEventListener('click', () => {
      helpPanel.classList.remove('open');
    });
  }

  const aboutBtn    = document.getElementById('aboutButton');
  const aboutPanel  = document.getElementById('aboutSidebar');
  const closeAbout  = document.getElementById('closeAboutBtn');

  if (aboutBtn && aboutPanel) {
    aboutBtn.classList.add('control-button');
    aboutBtn.innerHTML = 'about';
    aboutBtn.title     = 'About';

    aboutBtn.addEventListener('click', () => {
      aboutBtn.classList.toggle('open');
      aboutPanel.classList.toggle('open');
    });
  }

  // Close-panel button
  if (closeAbout && aboutPanel) {
    closeAbout.addEventListener('click', () => {
      aboutPanel.classList.remove('open');
    });
  }

  const inputEl   = document.getElementById('input');
  const counterEl = document.getElementById('counter');
  if (inputEl && counterEl) {
    inputEl.maxLength = MAX_PROMPT_LENGTH;
    inputEl.addEventListener('focus', () => {
      inputEl.setAttribute('data-placeholder', inputEl.placeholder); // store original
      inputEl.placeholder = '';
    });
    inputEl.addEventListener('blur', () => {
      if (inputEl.value === '') {
        inputEl.placeholder = inputEl.getAttribute('data-placeholder');
      }
    });
    inputEl.addEventListener('input', () => {
      counterEl.textContent = `${inputEl.value.length}/${inputEl.maxLength}`;
    });
  }

  document.getElementById('spinner-box')?.classList.add('hidden');
}
window.addEventListener('DOMContentLoaded', setupControls);
