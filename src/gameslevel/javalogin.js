
function Logar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

   
    if (usuario == "admin" && senha == "admin") {
        alert("Login feito com sucesso!");
     
    
  location.href = "telalogada.html";
  return true;
  
    } else{
        alert('Usuário ou senha incorretos');
    }
   

}