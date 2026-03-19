export default function loadMenu() {
  const content = document.getElementById("main");

  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const item1 = document.createElement("p");
  item1.textContent = "Grilled Chicken - $10";

  const item2 = document.createElement("p");
  item2.textContent = "Beef Burger - $8";

  const item3 = document.createElement("p");
  item3.textContent = "Fresh Juice - $4";

  container.appendChild(title);
  container.appendChild(item1);
  container.appendChild(item2);
  container.appendChild(item3);

  content.appendChild(container);
}