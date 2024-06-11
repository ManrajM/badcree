const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0]; // There's only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

let currentLanguageIndex = 0;

// Show the first tab initially
languages[0].style.display = 'block';

// Add event listeners to the tabs
languages.forEach((language, index) => {
  language.addEventListener('click', () => {
    selectLanguage(language);
  });
});

function selectLanguage(selectedLanguage) {
  for (const language of languages) {
    if (language === selectedLanguage) {
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 100px;
      `;
      language.getElementsByTagName("p")[0].style.color = mainColor;
      language.getElementsByTagName("p")[1].style.color = mainColor;
      setLanguageInfo(language); // Update the languageInfoBox content
    } else {
      language.style.cssText = "";
      language.getElementsByTagName("p")[0].style.cssText = "";
      language.getElementsByTagName("p")[1].style.cssText = "";
    }
  }
}

function setLanguageInfo(language) {
  let passwordInputId = `password-${language.getElementsByTagName("p")[1].textContent}`;
  let buttonId = `button-${language.getElementsByTagName("p")[1].textContent}`;
  
  // Clear the languageInfoBox content
  languageInfoBox.innerHTML = '';
  
  // Create a new tab element
  let newTab = document.createElement("div");
  newTab.className = "language-tab";
  
  switch (language.getElementsByTagName("p")[1].textContent) {
    case "Inception":
      newTab.innerHTML = `
        <p class="language-description">
          Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mother's mother?
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
          You are about to embark on a journey through a wormhole in search of a new home for humanity. What is the first planet you encounter?
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
          You are about to experience time like never before. What is the password to unlock the secrets of the past?
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
  
  // Add event listener to the button
  document.getElementById(buttonId).addEventListener('click', () => {
    let passwordInput = document.getElementById(passwordInputId).value;
    let passwords = [password1, password2, password3];
    if (passwordInput === passwords[currentLanguageIndex]) {
      alert("Correct! You have unlocked the next level.");
      currentLanguageIndex++;
      if (currentLanguageIndex < languages.length) {
        selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
      } else {
        alert("Congratulations! You've completed all the puzzles.");
      }
    } else {
      alert("Incorrect. Try again.");
    }
  });
}
