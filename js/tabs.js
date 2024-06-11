const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0]; // There's only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

// Hide all tabs initially
languages.forEach((language, index) => {
  if (index > 0) {
    language.style.display = 'none';
  }
});

let currentLanguageIndex = 0;

function selectLanguage(language) {
  let languageText = language.getElementsByTagName("p")[1].textContent;
  setLanguageInfo(languageText);
}

function setLanguageInfo(language) {
  let passwordInputId = `password-${language}`;
  let buttonId = `button-${language}`;
  
  let newTab = document.createElement("div");
  newTab.className = "form-fields-text";
  
  switch (language) {
    case "Inception":
      newTab.innerHTML = `
        <p class="language-description">
          Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
        </p>
        <div class="container">
          <h1 class="container-h1">Enter what you've found here...</h1>
          <input type="text" placeholder="Enter Password" id="${passwordInputId}">
          <button type="button" class="button11" id="${buttonId}">Test your fate</button>
        </div>
      `;
      break;

    case "King of Skies":
      newTab.innerHTML = `
        <p class="language-description">
          Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
        </p>
        <div class="container">
          <h1 class="container-h1">Enter what you've found here...</h1>
          <input type="text" placeholder="Enter Password" id="${passwordInputId}">
          <button type="button" class="button11" id="${buttonId}">Test your fate</button>
        </div>
      `;
      break;

    case "Worst Nightmare":
      newTab.innerHTML = `
        <p class="language-description">
          Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
        </p>
        <div class="container">
          <h1 class="container-h1">Enter what you've found here...</h1>
          <input type="text" placeholder="Enter Password" id="${passwordInputId}">
          <button type="button" class="button11" id="${buttonId}">Test your fate</button>
        </div>
      `;
      break;
  }
  
  languageInfoBox.appendChild(newTab);
  
  document.getElementById(buttonId).addEventListener("click", function (event) {
    event.preventDefault();
    const inputPassword = document.getElementById(passwordInputId).value;
    let password;
    
    switch (currentLanguageIndex) {
      case 0:
        password = password1;
        break;
      case 1:
        password = password2;
        break;
      case 2:
        password = password3;
        break;
    }
    
    if (inputPassword === password) {
      currentLanguageIndex++;
    } else {
      alert("Incorrect password!");
    }
  });
}

languages.forEach(language => {
  language.addEventListener("click", function () {
    selectLanguage(this);
  });
});