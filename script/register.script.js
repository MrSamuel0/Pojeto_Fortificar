const passwords = document.getElementsByName("password");

function validateEqualPassword() {
    if (passwords[0].value === passwords[1].value) {
        return true;
    }
    return window.alert("As senhas precisam ser iguais")
};

function createObj() {
    const data = document.getElementsByClassName("input_geral");
    const fieldNames = ['Name', 'CNPJ', 'Logradouro', 'Bairro', 'Cidade', 'CEP', 'Telefone', 'Email', 'Describe'];
    const dataUser = {};
    fieldNames.forEach((field, index) => {
        dataUser[field] = data[index].value;
    });
    dataUser.Senha = passwords[0].value;
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    dataUser.Data = formattedDate;
    return dataUser
};

function handleClick() {
    validateEqualPassword();
    let users = JSON.parse(localStorage.getItem("Dados_do_usuário")) || [];
    users.push(createObj());
    localStorage.setItem("Dados_do_usuário", JSON.stringify(users));
    window.open("../pages/login.html");
};

function createTableCell(content, tagName = "td", className = "tblelement") {
    const cell = document.createElement(tagName);
    cell.innerText = content;
    cell.className = className;
    return cell;
}

function generateRandomStatus() {
    const status = ["Em análise", "Aprovado", "Reprovado"];
    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
}

function printDataUser() {
    const users = JSON.parse(localStorage.getItem("Dados_do_usuário"));
    const tr = document.getElementsByClassName("nome_da_coluna");
    const div = document.getElementById("botões");
    for (let i = 0; i < 4; i++) {
        const user = users[i];
        // const th = document.createElement("th");
        // const td1 = document.createElement("td");
        // const td2 = document.createElement("td");
        // th.innerText = users[index].Name;
        // th.scope = "row";
        // th.class = "tblelement";
        // td1.innerText = users[index].Data;
        // td1.class = "tblelement";
        // td2.innerText = users[index].Describe;
        // td2.class = "tblelement";
        // tr[index].appendChild(th);
        // tr[index].appendChild(td1);
        // tr[index].appendChild(td2);
        const headerCell = createTableCell(user.Name, "th");
        headerCell.scope = "row";
        const dataCell = createTableCell(user.Data);
        const describeCell = createTableCell(user.Describe);
        const statusCell = createTableCell(generateRandomStatus());
        const editButton = createTableCell("Editar", "button");
        const deleteButton = createTableCell("Deletar", "button");
        tr[i].appendChild(headerCell);
        tr[i].appendChild(dataCell);
        tr[i].appendChild(describeCell);
        tr[i].appendChild(statusCell);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
    }
}

printDataUser();