// script.js
const password1 = "joe";
const password2 = "p2";
const password3 = "p3";

var innerDiv = document.getElementById('login-form-1')

<<<<<<< HEAD
=======
document.getElementById("login-form-1").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password-1").value;
    if (inputPassword === password1) {
        alert("Here is a letter you should remember: H");
       selectLanguage(languages[1])
    } else {
        alert("Incorrect password!");
    }
});
>>>>>>> parent of dac32f3 (d)

innerDiv.addEventListener('submit', function(event) {
    event.preventDefault();

    var pass = document.getElementById("password-1").value
    console.log(pass)
    if (pass === password1) {
        console.log("correct")
        alert("Nice job")
    } else {
        console.log("incorrect")
        alert("Wrong")
    }
})