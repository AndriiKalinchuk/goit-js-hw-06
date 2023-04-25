const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const result = ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;

  return [li];
});
const ulIngredients = document.querySelector("ul");
console.log("ulIngredients :>> ", ulIngredients);

ulIngredients.append(...result.flat());
