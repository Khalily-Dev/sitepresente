document.addEventListener("DOMContentLoaded", () => {
  const som = document.getElementById("efeitoSom");
  const botoes = document.querySelectorAll(".Cabecalho__menu__link");

  botoes.forEach((botao) => {
    // Hover (desktop)
    botao.addEventListener("mouseenter", () => {
      som.currentTime = 0; // reinicia do começo
      som.play();
    });

    // Clique (mobile e desktop)
    botao.addEventListener("click", () => {
      som.currentTime = 0;
      som.play();
    });
  });
});
