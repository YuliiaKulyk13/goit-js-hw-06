const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

const fontSizeChanges = (event) => {
  const value = event.target.value;
  span.style.fontSize = value + "px";
};

input.addEventListener("input", fontSizeChanges);
