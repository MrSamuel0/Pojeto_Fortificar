const passwords = document.getElementsByName("password");
const fieldNames = ['Name', 'CNPJ', 'Logradouro', 'Bairro', 'Cidade', 'CEP', 'Telefone', 'Email', 'Describe'];
const urlParams = new URLSearchParams(window.location.search);
let users = JSON.parse(localStorage.getItem("Dados_do_usuário")) || [];

function validateEqualPassword() {
    if (passwords[0].value && passwords[1].value) {
        if (passwords[0].value === passwords[1].value) {
            return true;
        }
    }
    return window.alert("As senhas precisam ser iguais");
};

function createObj() {
    const data = document.getElementsByClassName("input_geral");
    const dataUser = {};
    fieldNames.forEach((field, index) => {
        dataUser[field] = data[index].value;
    });
    dataUser.Senha = passwords[0].value;
    const date = new Date();
    dataUser.Data = date.toLocaleDateString();
    return dataUser
};

function handleClick() {
    if (!validateEqualPassword()) return null;
    users.push(createObj());
    localStorage.setItem("Dados_do_usuário", JSON.stringify(users));
    window.open("../pages/login.html");
};

function editUser() {
    const name = urlParams.get("nome");
    console.log(name);
    if (name) {
        const user = users.find((user) => user.Name === name);
        const inputs = document.getElementsByClassName("input_geral");
        fieldNames.forEach((field, index) => {
            inputs[index].value = user[field]
        });
        const button = document.getElementById("confirm_button");
        const changeNameButton = button.innerText = "Editar";
        name.length && changeNameButton;
        button.onclick = () => {
            if (!validateEqualPassword()) return null;
            const index = users.indexOf(user);
            users[index] = createObj();
            localStorage.setItem("Dados_do_usuário", JSON.stringify(users));
            window.open("form_reg.html");
        };
    }
};

editUser();
