// script.js
const password1 = "p1" && "joe";
const password2 = "p2";
const password3 = "p3";

document.getElementById("login-form-1").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password-1").value;
    if (inputPassword === password1) {
        alert("Here is a letter you should remember: H");
        document.getElementById("tab-1").classList.add("hidden");
        document.getElementById("tab-2").classList.remove("hidden");
        document.getElementById("tab--2").classList.remove("hidden");
    } else {
        alert("Incorrect password!");
    }
});

document.getElementById("login-form-2").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password-2").value;
    if (inputPassword === password2.toLowerCase) {
        document.getElementById("tab-2").classList.add("hidden");
        document.getElementById("tab-3").classList.remove("hidden");
    } else {
        alert("Incorrect password!");
    }
});

document.getElementById("login-form-3").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password-3").value;
    if (inputPassword === password3.toLowerCase) {
        document.getElementById("tab-3").classList.add("hidden");
        document.getElementById("tab-4").classList.remove("hidden");
    } else {
        alert("Incorrect password!");
    }
});