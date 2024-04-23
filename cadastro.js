function validarFormulario() {
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;
    var nickname = document.getElementById("Nickname").value;
    var senha = document.getElementById("Password").value;
    var confirmarSenha = document.getElementById("ConfirmPassword").value;

    if (nome === "" || email === "" || sexo==="" || nickname === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false; // Impede o envio do formulário se as senhas não coincidirem
    }

    // Validar se a senha tem pelo menos 8 caracteres alfanuméricos
    if (!senha.match(/^(?=.*\d).{8,}$/)) {
        alert("A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número.");
        return false;
    }

    // Aqui você pode adicionar mais validações conforme necessário

    return true; // Permite o envio do formulário se todas as validações passarem
}