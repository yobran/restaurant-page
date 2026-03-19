import "./styles.css";
import createTabs from "./tabs";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const main = () => document.getElementById("main");

function clearContent() {
  main().innerHTML = "";
}

createTabs();
loadHome();

document.addEventListener("click", (e) => {
  if (e.target.id === "homeBtn") {
    clearContent();
    loadHome();
  }

  if (e.target.id === "menuBtn") {
    clearContent();
    loadMenu();
  }

  if (e.target.id === "contactBtn") {
    clearContent();
    loadContact();
  }
});