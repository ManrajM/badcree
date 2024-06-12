const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll(".language");
const languageInfoBox = document.getElementsByClassName(
  "outer-language-info-box",
)[0];
const mainColor = getComputedStyle(languages[0]).getPropertyValue(
  "--mainColor",
);

// Hide all languages initially
languages.forEach((language) => {
  language.style.display = "none";
});

function selectLanguage(selectedLanguage) {
  languages.forEach((language) => {
    language.classList.remove("active");
    language.style.cssText = "";
    language.getElementsByTagName("p")[0].style.cssText = "";
    language.getElementsByTagName("p")[1].style.cssText = "";
  });

  selectedLanguage.classList.add("active");
  selectedLanguage.style.cssText = `
    background-color: var(--blendedColor);
    border-radius: 100px;
  `;
  selectedLanguage.getElementsByTagName("p")[0].style.color = mainColor;
  selectedLanguage.getElementsByTagName("p")[1].style.color = mainColor;

  setLanguageInfo(selectedLanguage); // Update the languageInfoBox content
}

function setLanguageInfo(language) {
  let passwordInputId = `password-${language.getElementsByTagName("p")[1].textContent}`;
  let buttonId = `button-${language.getElementsByTagName("p")[1].textContent}`;

  // Clear the content inside languageInfoBox
  let languageInfoBoxContent =
    languageInfoBox.querySelector(".form-fields-text");
  if (languageInfoBoxContent) {
    languageInfoBoxContent.remove();
  }

  switch (language.getElementsByTagName("p")[1].textContent) {
    case "Inception":
      let newTab = document.createElement("div");
      newTab.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
        </div>
      `;
      languageInfoBox.appendChild(newTab);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password1) {
            currentLanguageIndex++;
            if (currentLanguageIndex < languages.length) {
              selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
            } else {
              alert("Congratulations! You've completed all puzzles.");
            }
          } else {
            alert("Incorrect password!");
          }
        });
      break;

    case "King of Skies":
      let newTab2 = document.createElement("div");
      newTab2.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
        </div>
      `;
      languageInfoBox.appendChild(newTab2);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password2) {
            currentLanguageIndex++;
            if (currentLanguageIndex < languages.length) {
              selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
            } else {
              alert("Congratulations! You've completed all puzzles.");
            }
          } else {
            alert("Incorrect password!");
          }
        });
      break;

    case "Worst Nightmare":
      let newTab3 = document.createElement("div");
      newTab3.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
        </div>
      `;
      languageInfoBox.appendChild(newTab3);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password3) {
            currentLanguageIndex++;
            if (currentLanguageIndex < languages.length) {
              selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
            } else {
              alert("Congratulations! You've completed all puzzles.");
            }
          } else {
            alert("Incorrect password!");
          }
        });
      break;
  }
}

// Event listeners for the language tabs
document.querySelectorAll(".language").forEach((language, index) => {
  language.addEventListener("click", () => {
    selectLanguage(language);
    language.style.display = "block";
  });
});
