function startTypingAnimation(
  text,
  containerId,
  speed = 100,
  delay = 1000,
  callback
) {
  const colorMap = {
    "ARE YOU": "white",
    "regularly": "red",
    "injured": "blue",
    "mind": "green",
    "yaap": "yellow"
  };
  let index = 0;
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear container
  function render() {
    if (index < text.length) {
      const span = document.createElement("span");
      const word = text.substring(index, index + 7); // Check for each word
      span.textContent = word;
      span.style.color = colorMap[word];
      container.appendChild(span);

      index += word.length;
      setTimeout(render, speed);
    } else {
      setTimeout(callback, delay);
    }
  }
  render();
}

// Usage
const textToType = "ARE YOU regularly injured mind yaap";

function startAnimations() {
  startTypingAnimation(
    textToType,
    "text-container",
    100,
    2000,
    startAnimations
  );
}

startAnimations();
