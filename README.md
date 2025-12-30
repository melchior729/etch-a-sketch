# Etch A Sketch

A browser-based version of the classic Etch A Sketch toy, developed as part of **The Odin Project** foundations.

## 🚀 Features
* **Dynamic Grid Resizing:** Users can specify a grid size between 1x1 and 100x100 via a prompt.
* **Randomized RGB Coloring:** Each grid cell receives a unique, randomly generated hex color upon the first hover.
* **Progressive Darkening:** Subsequent hovers on the same cell reduce its brightness by 10%, eventually turning the cell black.
* **Recursive Color Generation:** Utilizes a recursive JavaScript function to generate random hexadecimal color codes.

## 🛠️ Tech Stack
* **HTML5:** Semantic layout for the UI and grid container.
* **CSS3:** Flexbox layout for the drawing grid and aspect-ratio control for square cells.
* **JavaScript (ES6):** DOM manipulation, event listeners, and recursive logic for dynamic coloring.

## 📂 Project Structure
```text
├── index.html        # UI structure and button
├── style.css         # Flexbox grid and styling
└── main.js           # Grid generation and coloring logic
