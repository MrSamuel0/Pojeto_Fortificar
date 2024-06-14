function createTableCell(content, tagName = "td", className = "tblelement") {
    const cell = document.createElement(tagName);
    cell.innerText = content;
    cell.className = className;
    return cell;
}

function printFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem("Feedbacks")) || [];
    const tbody = document.getElementById("corpo_da_tabela");
    feedbacks.forEach((feedback) => {
        const headerCell = createTableCell(feedback.owner, "th");
        headerCell.scope = "row";
        const dateCell = createTableCell(feedback.date);
        const typeCell = createTableCell(feedback.type);
        const descriptionCell = createTableCell(feedback.description);
        const tr = createTableCell("", "tr", "nome_da_coluna");
        tbody.appendChild(tr);
        tr.appendChild(headerCell);
        tr.appendChild(dateCell);
        tr.appendChild(typeCell);
        tr.appendChild(descriptionCell);
    });
}

printFeedbacks();
