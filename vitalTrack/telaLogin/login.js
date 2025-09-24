document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Digite um e-mail válido!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "../telaDashboard/inicio.html";
  } else {
    alert("E-mail ou senha inválidos!");
  }
});
