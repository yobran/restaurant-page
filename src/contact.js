export default function loadContact() {
  const content = document.getElementById("main");

  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +254 700 000000";

  const address = document.createElement("p");
  address.textContent = "Location: Nairobi, Kenya";

  container.appendChild(title);
  container.appendChild(phone);
  container.appendChild(address);

  content.appendChild(container);
}