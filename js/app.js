/**
 * Hello World Application Logic
 * Handles greeting generation based on user input.
 */

function createGreeting(name) {
  const trimmedName = (name || '').trim();
  if (trimmedName.length === 0) {
    return 'Hello, World!';
  }
  return `Hello, ${trimmedName}!`;
}

function initApp(doc) {
  const nameInput = doc.getElementById('nameInput');
  const greetButton = doc.getElementById('greetButton');
  const output = doc.getElementById('output');

  function handleGreet() {
    const greeting = createGreeting(nameInput.value);
    output.textContent = greeting;
  }

  greetButton.addEventListener('click', handleGreet);
  nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleGreet();
    }
  });
}

// Only auto-initialize in a browser environment (not during tests/Node)
if (typeof document !== 'undefined' && typeof module === 'undefined') {
  document.addEventListener('DOMContentLoaded', () => initApp(document));
}

// Export for testing (CommonJS / Jest + jsdom)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createGreeting, initApp };
}
