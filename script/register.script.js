function validateEqualPassword() {
    const passwords = document.getElementsByTagName("password");
    if (passwords[0].value === passwords[1].value) {
        window.alert("As senhas precisam ser iguais")
    }
    return true;
}

function handleClick() {
    validateEqualPassword();
}