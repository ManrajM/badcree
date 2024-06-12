const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.querySelector(".outer-language-info-box"); // There's only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

let currentLanguageIndex = 0;

// Display the first tab initially
selectLanguage(languages[0], 0);

// Add event listeners to the tabs
languages.forEach((language, index) => {
  language.addEventListener('click', () => {
    selectLanguage(language, index);
  });
});

function selectLanguage(selectedLanguage, index) {
  // Reset styles for all tabs
  languages.forEach((language, i) => {
    if (i === index) {
      // Set active styles for selected tab
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 100px;
      `;
      language.getElementsByTagName("p")[0].style.color = mainColor;
      language.getElementsByTagName("p")[1].style.color = mainColor;
    } else {
      // Reset styles for other tabs
      language.style.cssText = "";
      language.getElementsByTagName("p")[0].style.cssText = "";
      language.getElementsByTagName("p")[1].style.cssText = "";
    }
  });

  // Create and insert new tab content
  let passwordInputId = `password-${index + 1}`;
  let buttonId = `button-${index + 1}`;
  let newTabContent = `
    <div class="form-fields-text">
      <p class="language-description">
        Description for tab ${index + 1}
      </p>
      <div class="container">
        <h1 class="container-h1">Enter what you've found here...</h1>
        <input type="text" placeholder="Enter Password" id="${passwordInputId}">
        <button type="button" class="button11" id="${buttonId}">Test your fate</button>
      </div>
    </div>
  `;

  // Append new tab content to the language-box section
  let languageBox = document.querySelector('.language-box');
  let newTab = document.createElement('div');
  newTab.className = 'language-tab';
  newTab.innerHTML = newTabContent;
  languageBox.appendChild(newTab);

  // Add event listener to the button
  document.getElementById(buttonId).addEventListener('click', () => {
    let passwordInput = document.getElementById(passwordInputId);
    let password = passwordInput.value;
    let correctPassword;
    switch (index) {
      case 0:
        correctPassword = password1;
        break;
      case 1:
        correctPassword = password2;
        break;
      case 2:
        correctPassword = password3;
        break;
    }
    if (password === correctPassword) {
      // Unlock the next level or perform other actions
      console.log("Correct password entered.");
    } else {
      alert("Incorrect password. Try again.");
    }
  });
}
