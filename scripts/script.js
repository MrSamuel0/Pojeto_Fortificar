function verifLogin() {
    const login = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const users = JSON.parse(localStorage.getItem("Dados_do_usuário"));
    const isUser = users.find((user) => user.Email === login && user.Senha === senha);
    
    if (login === "admin@gmail.com" && senha === "adm@123") {
        return window.open("homepage.html", "_self");
    } else if (users && isUser) {
        return window.open("../pages/form_reg.html", "_self");
    }
    else {
        return window.alert("Os dados não estão corretos!!!");
    }
}