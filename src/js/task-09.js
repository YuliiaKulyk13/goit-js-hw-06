function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

const changeColor = (event) => {
  const colorFunction = getRandomHexColor();
  document.body.style.backgroundColor = colorFunction;
  textColor.textContent = colorFunction;
};

btnColor.addEventListener("click", changeColor);
