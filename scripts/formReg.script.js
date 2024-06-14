const users = JSON.parse(localStorage.getItem("Dados_do_usuário"));

function createTableCell(content, tagName = "td", className = "tblelement") {
    const cell = document.createElement(tagName);
    cell.innerText = content;
    cell.className = className;
    return cell;
}

function deleteUser(name) {
    const usersFiltered = users.filter((user) => !(user.Name === name));
    localStorage.setItem("Dados_do_usuário", JSON.stringify(usersFiltered));
    window.location.reload();
}

function createButtons(content, name, isDelete = false) {
    const url = new URL("pages/register.html", window.location.origin);
    url.searchParams.append("nome", name);
    const button = document.createElement("button");
    button.innerText = content;
    button.onclick = () => isDelete ? deleteUser(name) : window.open(url);
    return button;
}

function generateRandomStatus() {
    const status = ["Em análise", "Aprovado", "Reprovado"];
    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
}

function printDataUser() {
    const tbody = document.getElementById("corpo_da_tabela");
    const div = document.getElementById("botoes");
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const headerCell = createTableCell(user.Name, "th");
        headerCell.scope = "row";
        const dataCell = createTableCell(user.Data);
        const describeCell = createTableCell(user.Describe);
        const statusCell = createTableCell(generateRandomStatus());
        const editButton = createButtons("Editar", user.Name);
        const deleteButton = createButtons("Deletar", user.Name, true);
        const tr = createTableCell("", "tr", "nome_da_coluna");
        tbody.appendChild(tr);
        tr.appendChild(headerCell);
        tr.appendChild(dataCell);
        tr.appendChild(describeCell);
        tr.appendChild(statusCell);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
    }
}

printDataUser();
