# Hello World HTML5 + JavaScript Application

A simple, modern Hello World web application built with HTML5, CSS3, and vanilla JavaScript.

## Features

- Clean, responsive HTML5 structure
- Vanilla JavaScript DOM manipulation
- Unit tests using Jest
- GitHub Actions CI/CD pipeline

## Project Structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── tests/
│   └── app.test.js
├── package.json
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
npm install
```

### Running the Application

Simply open `index.html` in your browser, or serve it locally:

```bash
npx http-server .
```

Then navigate to `http://localhost:8080`.

### Running Tests

```bash
npm test
```

## CI/CD

This repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. Installs dependencies
2. Runs the Jest test suite
3. Lints the JavaScript code

The pipeline runs automatically on every push and pull request to the `main` branch.

## License

MIT License

<img width="711" height="421" alt="image" src="https://github.com/user-attachments/assets/0b4f616e-bd06-4dbe-94f1-8fb06eed7a51" />

