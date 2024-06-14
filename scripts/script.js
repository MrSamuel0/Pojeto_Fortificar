function addLocalStorage() {
    const date = new Date();
    const userDonee = [{
        Name: "Donatário",
        "CNPJ ou CPF": "123.123.123-06",
        Logradouro: "Rua: Luciano das Neves",
        Bairro: "Castelo",
        Cidade: "Vila Velha",
        CEP: "89740-000",
        Telefone: 2799021321,
        Email: "Donatario001",
        Senha: "dona123",
        Data: date.toLocaleDateString(),
        Describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat augue sit amet interdum ultrices. Etiam ut erat sollicitudin, iaculis arcu vel, varius ipsum. Vivamus viverra nunc ac feugiat viverra."
    }];
    localStorage.setItem("Dados_do_usuário", JSON.stringify(userDonee));
};

function verifLogin() {
    const login = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const users = JSON.parse(localStorage.getItem("Dados_do_usuário"));
    const isUser = users.find((user) => user.Email === login && user.Senha === senha);
    
    if (login === "Administrador" && senha === "adm123") {
        return window.open("homepage.html", "_self");

    } else if (users && isUser) {
        return window.open("../pages/form_reg.html", "_self");

    } else {
        return window.alert("Os dados não estão corretos!!!");
    }
};
