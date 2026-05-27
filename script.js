// ==============================
// Horta Escolar Inteligente
// ==============================

// Botão hero
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {

  alert("🌱 Bem-vindo ao Sistema da Horta Escolar!");

});

// Efeito nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.background = "#e8f5e9";

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "white";

  });

});

// Formulário
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("📩 Mensagem enviada com sucesso!");

  form.reset();

});

// Animação simples nas plantas
const plantas = document.querySelectorAll(".emoji");

setInterval(() => {

  plantas.forEach(planta => {

    planta.style.transform = "translateY(-10px)";

    setTimeout(() => {

      planta.style.transform = "translateY(0px)";

    }, 500);

  });

}, 2000);