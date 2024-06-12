function switchPages(i) {
    const pageMap = {
        0: { text: "Registros antigos", url: "../pages/old_reg.html" },
        1: { text: "Feedbacks", url: "../pages/feedbacks_reg.html" },
        2: { text: "Solicitações", url: "../pages/requests.html" },
        3: { text: "Entidades Beneficiadas", url: "../pages/benefited_entities.html" }
    };

    const buttons = document.getElementsByTagName("button");
    const buttonText = buttons[i].innerText;

    if (buttonText === pageMap[i].text) {
        window.open(pageMap[i].url, "_self");
    }
}
