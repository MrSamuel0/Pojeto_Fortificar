function validateEqualPassword() {
    const passwords = document.getElementsByName("password");
    if (passwords[0].value === passwords[1].value) {
        return true;
    }
    return window.alert("As senhas precisam ser iguais")
}

function createObj() {
    const infos = document.getElementsByClassName("input_geral");
    const passwords = document.getElementsByName("password");
    const dataUser = {
        Name: infos[0].value,
        CNPJ: infos[1].value,
        Logradouro: infos[2].value,
        Bairro: infos[3].value,
        Cidade: infos[4].value,
        CEP: infos[5].value,
        Telefone: infos[6].value,
        Email: infos[7].value,
        Senha: passwords[0].value
    };
    return dataUser
}

function handleClick() {
    validateEqualPassword();
    let users = [];
    users.push(createObj());
    console.log(users);
    localStorage.setItem("Dados_do_usuário", JSON.stringify(users));
}