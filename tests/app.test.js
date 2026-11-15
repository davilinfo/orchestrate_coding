/**
 * @jest-environment jsdom
 */

const { createGreeting, initApp } = require('../js/app');

describe('createGreeting', () => {
  test('returns default greeting when name is empty', () => {
    expect(createGreeting('')).toBe('Hello, World!');
  });

  test('returns default greeting when name is undefined', () => {
    expect(createGreeting(undefined)).toBe('Hello, World!');
  });

  test('returns default greeting when name is only whitespace', () => {
    expect(createGreeting('   ')).toBe('Hello, World!');
  });

  test('returns personalized greeting with trimmed name', () => {
    expect(createGreeting('  Alice  ')).toBe('Hello, Alice!');
  });

  test('returns personalized greeting for simple name', () => {
    expect(createGreeting('Bob')).toBe('Hello, Bob!');
  });
});

describe('initApp (DOM integration)', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="nameInput" />
      <button id="greetButton">Greet Me</button>
      <p id="output"></p>
    `;
    initApp(document);
  });

  test('clicking button with empty input shows default greeting', () => {
    const button = document.getElementById('greetButton');
    const output = document.getElementById('output');

    button.click();

    expect(output.textContent).toBe('Hello, World!');
  });

  test('clicking button with name shows personalized greeting', () => {
    const input = document.getElementById('nameInput');
    const button = document.getElementById('greetButton');
    const output = document.getElementById('output');

    input.value = 'Charlie';
    button.click();

    expect(output.textContent).toBe('Hello, Charlie!');
  });

  test('pressing Enter in input triggers greeting', () => {
    const input = document.getElementById('nameInput');
    const output = document.getElementById('output');

    input.value = 'Dana';
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    input.dispatchEvent(event);

    expect(output.textContent).toBe('Hello, Dana!');
  });
});
