const passwords = document.getElementsByName("password");

function validateEqualPassword() {
    if (passwords[0].value === passwords[1].value) {
        return true;
    }
    return window.alert("As senhas precisam ser iguais")
};

function createObj() {
    const data = document.getElementsByClassName("input_geral");
    const fieldNames = ['Name', 'CNPJ', 'Logradouro', 'Bairro', 'Cidade', 'CEP', 'Telefone', 'Email'];
    const dataUser = {};
    fieldNames.forEach((field, index) => {
        dataUser[field] = data[index].value;
    });
    dataUser.Senha = passwords[0].value;
    return dataUser
};

function handleClick() {
    validateEqualPassword();
    let users = JSON.parse(localStorage.getItem("Dados_do_usuário")) || [];
    users.push(createObj());
    localStorage.setItem("Dados_do_usuário", JSON.stringify(users));
    console.log(users);
};