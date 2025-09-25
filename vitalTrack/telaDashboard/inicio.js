// Verifica se está logado
if (localStorage.getItem("logado") !== "true") {
    window.location.href = "../telalogin/login.html";
  }
  

  document.getElementById("btnPerfil").addEventListener("click", function () {
    if (confirm("Deseja sair da sua conta?")) {
      localStorage.removeItem("logado");
      window.location.href = "../telalogin/login.html";
    }
  });
  