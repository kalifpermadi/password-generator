var password = document.getElementById("password");
const text = document.getElementById("text");

function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var pass = "";
    for (var i = 0; i < passwordLength; i++) {
        var rand = Math.floor(Math.random() * chars.length);
        pass += chars.substring(rand, rand + 1);
    }
    password.value = pass;
}

function copyPassword() {
    password.select();
    document.execCommand("copy");
    text.innerHTML = "Copied!";
}

function outFunction() {
    setTimeout(() => {text.innerHTML = "Copy";}, 250)
}