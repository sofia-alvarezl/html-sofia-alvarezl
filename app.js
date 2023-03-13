document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    { name: "c1", img: "images/c1.jpg" },
    { name: "c2", img: "images/c2.jpg" },
    { name: "c3", img: "images/c3.jpg" },
    { name: "c4", img: "images/c4.jpg" },
    { name: "c5", img: "images/c5.jpg" },
    { name: "c6", img: "images/c6.jpeg" },
    { name: "c1", img: "images/c1.jpg" },
    { name: "c2", img: "images/c2.jpg" },
    { name: "c3", img: "images/c3.jpg" },
    { name: "c4", img: "images/c4.jpg" },
    { name: "c5", img: "images/c5.jpg" },
    { name: "c6", img: "images/c6.jpeg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/c9.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
