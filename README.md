# First Tailwind React App

A minimal React + Vite starter project styled with [Tailwind CSS](https://tailwindcss.com/).
It includes Tailwind's base/component/utility layers, a configured content purge path,
and a small demo UI so you can confirm utility classes are working.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3.4 (with PostCSS + Autoprefixer)
- JavaScript (JSX)

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Other Commands

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # run Oxlint
```

## Tailwind Setup

- `tailwind.config.js` scans `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` so unused
  utility classes are removed from the production CSS.
- `postcss.config.js` wires up Tailwind and Autoprefixer.
- `src/index.css` contains the three Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Project Structure

```
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx       # demo UI built with Tailwind utility classes
    ├── index.css     # Tailwind directives
    └── main.jsx      # React entry point
```
