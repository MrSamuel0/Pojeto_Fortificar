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
    const tr = document.getElementsByClassName("nome_da_coluna");
    const div = document.getElementById("botoes");
    for (let i = 0; i < users.length; i++) {
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
        const editButton = createButtons("Editar", user.Name);
        const deleteButton = createButtons("Deletar", user.Name, true);
        tr[i].appendChild(headerCell);
        tr[i].appendChild(dataCell);
        tr[i].appendChild(describeCell);
        tr[i].appendChild(statusCell);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
    }
}

printDataUser();
