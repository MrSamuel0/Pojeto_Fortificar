function validateEqualPassword() {
    const passwords = document.getElementsByTagName("password");
    if (passwords[0] === passwords[1]) {
        window.alert("As senhas precisam ser iguais")
    }
    return true;
}

function handleClick() {
    validateEqualPassword();
}