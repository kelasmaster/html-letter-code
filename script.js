// script.js

// Function to generate letter cards
function generateLetterCards() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const letterGrid = document.getElementById("letterGrid");

  letters.split("").forEach((letter) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("letter-card");

    // Letter symbol
    const symbol = document.createElement("div");
    symbol.classList.add("letter-symbol");
    symbol.textContent = letter;

    // HTML Entity
    const htmlEntity = document.createElement("div");
    htmlEntity.classList.add("letter-info");
    htmlEntity.textContent = `HTML Entity: &${letter};`;

    // ASCII Code
    const asciiCode = document.createElement("div");
    asciiCode.classList.add("letter-info");
    asciiCode.textContent = `ASCII Code: ${letter.charCodeAt(0)}`;

    // Unicode Code
    const unicodeCode = document.createElement("div");
    unicodeCode.classList.add("letter-info");
    unicodeCode.textContent = `Unicode: U+${letter.charCodeAt(0).toString(16).toUpperCase()}`;

    // Append elements to card
    card.appendChild(symbol);
    card.appendChild(htmlEntity);
    card.appendChild(asciiCode);
    card.appendChild(unicodeCode);

    // Append card to grid
    letterGrid.appendChild(card);
  });
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  generateLetterCards();
});
