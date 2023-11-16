function validarCadastro() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  
  if (nome == "" || email == "" || usuario == "" || senha == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
  }

  if (email.indexOf("@") === -1) {
    alert("O campo de e-mail deve conter o símbolo '@'.");
    return false;
}

  
  if (senha.length < 4) {
      alert("A senha deve ter pelo menos 4 caracteres.");
      return false;
  }
  
  alert("Usuário cadastrado com sucesso!");


  location.href = "telalogada.html";
  return true;
}



var formulario = document.querySelector("form");
formulario.addEventListener("button", function (event) {
  if (!validarCadastro()) {
      event.preventDefault(); 
  }
});