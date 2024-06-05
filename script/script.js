function verifLogin() {
    var login = "";
    var senha = "";
    login = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    if (login == "adm@uvv.br" && senha == "adm#123") {
        window.open("proponente.html");
    }
    else {
        window.alert("Dados incorretos, tente novamente.");
    }
}

function verifoLogin() {
    var login = "";
    var senha = "";
    login = document.getElementById('ema').value;
    senha = document.getElementById('sen').value;
    if (login == "adm@uvv.br" && senha == "adm#123") {
        window.open("proponente.html");
    }
    else {
        window.alert("Dados incorretos, tente novamente.");
    }
}
