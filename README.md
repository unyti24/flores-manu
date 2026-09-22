# Flores de Septiembre 🌻

Experiencia interactiva creada con React + Vite + GSAP.

## Ejecutar

```bash
npm install
npm run dev
```

Luego abre la dirección que muestre Vite, normalmente:

http://localhost:5173

## Estructura

- `src/components/Experience.jsx` — orquesta la experiencia y la secuencia GSAP.
- `src/components/Sunflower.jsx` — construye cada girasol con HTML/CSS.
- `src/components/Ground.jsx` — suelo, tierra y césped.
- `src/components/Particles.jsx` — partículas ambientales.
- `src/components/FlowerMessage.jsx` — mensaje al tocar una flor.
- `src/data/flowers.js` — posición, tamaño, rotación y mensaje de cada flor.
- `src/styles.css` — escena, SVG-like CSS, responsive y animaciones.

No usa una imagen estática del ramo: cada flor, tallo, hoja, pétalo y partícula se construye en el navegador.
