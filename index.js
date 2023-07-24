// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
// Ranger la sidebar si on click sur le contenu principal
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix
// Aide
// Priorités en CSS : id > classe > baliseHtml

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

sidebar.addEventListener("click", () => {
  if (sidebar.style.left < "0") {
    sidebar.style.left = "0";
    content.style.opacity = "0.3";
  } else {
    sidebar.style.left = "-230px";
    content.style.opacity = "1";
  }
});

content.addEventListener("click", () => {
  sidebar.style.left = "-230px";
  content.style.opacity = "1";
});
