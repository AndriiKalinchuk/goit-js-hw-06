const body = document.body;
const categories = body.querySelectorAll("li.item");
const numberOfCategories = categories.length;
console.log("Number of categories: ", numberOfCategories);
const ul = categories.forEach(function (element) {
  let category = element.firstElementChild.textContent;
  let quantityElem = element.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
});
