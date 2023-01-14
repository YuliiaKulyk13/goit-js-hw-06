const inputId = document.getElementById("validation-input");
const dtLength = +inputId.dataset.length;

const blurFunction = (event) => {
  const value = event.target.value;
  if (value.length === dtLength) {
    inputId.classList.add("valid");
    inputId.classList.remove("invalid");
  } else {
    inputId.classList.add("invalid");
    inputId.classList.remove("valid");
  }
};

inputId.addEventListener("blur", blurFunction);
