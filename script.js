const sentence = "is Ahsiqur Rahman Biplop.";
let charIndex = 0;
let wordIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (charIndex < sentence.length) {
    const char = sentence.charAt(charIndex);
    const span = document.createElement("span");

    span.textContent = char;

    if (char === " " || charIndex === sentence.length - 1) {
      wordIndex++;
    }

    switch (wordIndex) {
      case 0:
        span.style.color = "#fcba03"; 
        break;
      case 1:
        span.style.color = "#fc03ec"; 
        break;
      case 2:
        span.style.color = "#2c03fc";
        break;
      case 3:
        span.style.color = "#03fc35"; 
        break;
    }

    typingText.appendChild(span);

    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  const spanElements = typingText.querySelectorAll("span");
  if (spanElements.length > 0) {
    const lastSpan = spanElements[spanElements.length - 1];
    lastSpan.parentNode.removeChild(lastSpan);
    charIndex--;
    if (charIndex === 0) {
      wordIndex = 0;
    }
    setTimeout(erase, 100);
  } else {
    charIndex = 0;
    setTimeout(type, 500);
  }
}

setTimeout(type, 500);
