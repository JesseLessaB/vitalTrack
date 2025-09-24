    function toggleCadastro() {
      const checkbox = document.getElementById("lgpd");
      const btn = document.getElementById("btnCadastrar");
      btn.disabled = !checkbox.checked;
    }

    document.getElementById("formCadastro").addEventListener("submit", function(e) {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nomeRegex.test(nome)) {
        alert("O nome deve conter apenas letras e espaços.");
        e.preventDefault();
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        e.preventDefault();
        return;
      }

      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        e.preventDefault();
        return;
      }

      alert("Conta criada com sucesso!");
    });
    
