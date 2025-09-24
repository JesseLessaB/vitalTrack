const cards = document.querySelectorAll(".icon");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Fecha todos antes
        cards.forEach(c => c.classList.remove("ativo"));
        // Abre o clicado
        card.classList.add("ativo");
      });
    });