const mainEl = document.querySelector("main");

const h1El = document.querySelector("h1");

// to generate random color
function generateColor() {
  let color = "#";
  const hex = "0123456789abcdef";
  for (let i = 0; i <= 5; i++) {
    const s = Math.floor(Math.random() * hex.length);
    color = color + hex.charAt(s);
  }
  return color;
}
console.log(generateColor());

//change mainEl background color
function changeMainBackground() {
  mainEl.style.background = generateColor();
}
setInterval(changeMainBackground, 1000);

// h1El color change
function changeH1Color() {
  h1El.style.color = generateColor();
}
setInterval(changeH1Color, 1000);

// changing of font family
let fontFamily = [
  "Courier New",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  "Helvetica Neue",
  "sans-serif",
];

function generateFontFamily() {
  let family = "";
  const n = Math.floor(Math.random() * fontFamily.length);
  family = fontFamily[n];
  return family;
}
function changeFont() {
  h1El.style.fontFamily = generateFontFamily();
}

console.log(generateFontFamily());
setInterval(changeFont, 1000);
