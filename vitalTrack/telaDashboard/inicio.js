// Verifica se está logado
if (localStorage.getItem("logado") !== "true") {
    window.location.href = "../telalogin/login.html";
  } else {
    // Recupera o usuário salvo
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
    const msgUsuario = document.getElementById("msgUsuario");
  
    if (usuarioSalvo && usuarioSalvo.nome) {
      msgUsuario.textContent = `Olá, ${usuarioSalvo.nome}!`;
    }
  }
  
  // Botão de logout
  document.getElementById("btnPerfil").addEventListener("click", function () {
    if (confirm("Deseja sair da sua conta?")) {
      localStorage.removeItem("logado");
      window.location.href = "../telalogin/login.html";
    }
  });
  