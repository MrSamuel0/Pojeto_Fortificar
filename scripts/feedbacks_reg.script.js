function createTableCell(content, tagName = "td", className = "tblelement") {
    const cell = document.createElement(tagName);
    cell.innerText = content;
    cell.className = className;
    return cell;
}

function printFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem("Feedbacks")) || [];
    const tr = document.getElementsByClassName("nome_da_coluna");
    feedbacks.forEach((feedback, index) => {
        const headerCell = createTableCell(feedback.owner, "th");
        headerCell.scope = "row";
        const dateCell = createTableCell(feedback.date);
        const typeCell = createTableCell(feedback.type);
        const descriptionCell = createTableCell(feedback.description);
        tr[index].appendChild(headerCell);
        tr[index].appendChild(dateCell);
        tr[index].appendChild(typeCell);
        tr[index].appendChild(descriptionCell);
    });
}

printFeedbacks();
