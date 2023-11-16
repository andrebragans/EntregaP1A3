function enviarFormulario() {
    
    var feedbackValue = document.getElementById("feedback").value;
    var errosValue = document.getElementById("erros").value;

  
    if (feedbackValue.trim() !== "" && errosValue.trim() !== "") {

        alert("Formulário enviado com sucesso!");

        
      
    } else {
      
        alert("Preencha os campos de feedback e erros antes de enviar!");
    }
    
}

function inicio() {
    
    var feedbackValue = document.getElementById("feedback").value;
    var errosValue = document.getElementById("erros").value;

  
        alert("Voltando para pagina inicial da sua conta!");

        document.getElementById("meuFormulario").action = "telalogada.html";
        document.getElementById("meuFormulario").submit();
    }
    


