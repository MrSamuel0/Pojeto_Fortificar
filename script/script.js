function verifLogin() {
    const login = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (login == "adm@uvv.br" && senha == "adm#123") {
        window.open("adm.html", "_self");
    }
        
    else if (login == "adm@uvv.br" && senha == "adm#123") {
        window.open("proponente.html", "_self");
    }
    
    else {
        window.alert("Dados incorretos, tente novamente.");
    }
}
