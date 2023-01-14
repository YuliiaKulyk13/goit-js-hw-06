/*

1.Создай переменную counterValue в которой будет храниться текущее 
значение счетчика и инициализируй её значением 0.
2.Добавь слушатели кликов на кнопки, внутри которых увеличивай или 
уменьшай значение счтетчика.
3.Обновляй интерфейс новым значением переменной counterValue.
*/
let counterValue = 0;
const display = document.getElementById("value");
const negBtn = document.querySelector('button[data-action = "decrement"]');
const posBtn = document.querySelector('button[data-action ="increment"]');

negBtn.addEventListener("click", () => {
  display.textContent = counterValue -= 1;
});
posBtn.addEventListener("click", () => {
  display.textContent = counterValue += 1;
});

negBtn.addEventListener("click", negBtn);
posBtn.addEventListener("click", posBtn);
