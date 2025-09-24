function toggleCadastro() {
  const checkbox = document.getElementById("lgpd");
  const btn = document.getElementById("btnCadastrar");
  btn.disabled = !checkbox.checked;
}

document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("cadastroNome").value.trim();
  const email = document.getElementById("cadastroEmail").value.trim();
  const senha = document.getElementById("cadastroSenha").value.trim();

  const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nomeRegex.test(nome)) {
    alert("O nome deve conter apenas letras e espaços.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  const usuario = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Conta criada com sucesso! Faça login para continuar.");
  window.location.href = "login.html"; 
});
