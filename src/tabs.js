export default function createTabs() {
  const content = document.getElementById("content");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "homeBtn";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.id = "menuBtn";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contactBtn";

  nav.append(homeBtn, menuBtn, contactBtn);

  const main = document.createElement("div");
  main.id = "main";

  content.append(nav, main);
}