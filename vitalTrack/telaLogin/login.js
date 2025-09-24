document.getElementById("formLogin").addEventListener("submit", function(e) {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido!");
        e.preventDefault();
        return;
      }

      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        e.preventDefault();
        return;
      }
    });