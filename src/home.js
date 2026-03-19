export default function loadHome() {
  const content = document.getElementById("main");

  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Alvarez Restaurant";

  const description = document.createElement("p");
  description.textContent = "Welcome to the best restaurant in town. Fresh food, great atmosphere, unforgettable taste.";

  const message = document.createElement("p");
  message.textContent = "Open every day from 9AM to 11PM.";

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(message);

  content.appendChild(container);
}