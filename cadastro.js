function validarFormulario() {
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;
    var sexo = document.getElementById("Sexo").value;
    var nickname = document.getElementById("Nickname").value;
    var senha = document.getElementById("Password").value;
    var confirmarSenha = document.getElementById("ConfirmPassword").value;

    if (nome === "" || email === "" || sexo === "" || nickname === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false; 
    }

    
    if (!senha.match(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)) {
        alert("A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número e um caractere alfabético.");
        return false;
    }

    

    return true; 
}


document.querySelector("button.clear").addEventListener("click", function() {
    window.location.href = "login.html";
});
