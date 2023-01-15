const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  ulElem.append(liElem);
}
console.log(ulElem);

// const liElem = ingredients
//   .map((ingredient) => `<li class = "item">${ingredient}</li>`)
//   .join("");

// ulElem.insertAdjacentHTML("beforeend", liElem);
// console.log(ulElem);
