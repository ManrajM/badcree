const password1 = "⊳x⊳୮ĺo";
const password1back = "⊳x⊳୮ĺo";
const password2 = "guardian";
const password3 = "wendigo";
const password4 = "d2VuZGlnbw==";
const password5 = "ialwayswin";
const password6 = "Uw==ᐃG";

const languages = document.querySelectorAll(".language");
const languageInfoBox = document.querySelector(".outer-language-info-box");
const mainColor = getComputedStyle(languages[0]).getPropertyValue(
  "--mainColor",
);

// Initially hide all languages except "Inception"
languages.forEach((language) => {
  if (language.getElementsByTagName("p")[1].textContent != "Inception") {
    language.style.display = "none";
  }
});

// Initially hide all content
function hideAllContent() {
  languageInfoBox.innerHTML = ""; // Clear the content inside languageInfoBox
}
let index = 1;
function selectLanguage(selectedLanguage) {
  languages.forEach((language) => {
    language.classList.remove("active");
    //   language.style.cssText = `
    //   cursor: pointer;

    // `;
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
  hideAllContent(); // Clear the content inside languageInfoBox

  let passwordInputId = `password-${language.getElementsByTagName("p")[1].textContent}`;
  let buttonId = `button-${language.getElementsByTagName("p")[1].textContent}`;

  switch (language.getElementsByTagName("p")[1].textContent) {
    case "Inception":
      let newTab = document.createElement("div");
      newTab.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mother's mother?
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
          if (inputPassword === password1 || inputPassword === password1back) {
            alert("I let you pass that one...");
            window.open("https://badcree.xyz/logs/hy7261.html");
            languages.forEach((language) => {
              if (
                language.getElementsByTagName("p")[1].textContent ==
                "King of Skies"
              ) {
                language.style.display = "block";
              }
            });
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
            Have you had enough yet??<br>No? Well I'm sure you will quit now. ᐳᐋᐧᑲᐣ . Refer back to the page you were sent to... That's all I can give you for now.
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
            alert("You are smart, but not as smart as me little one.");
            window.open("https://badcree.xyz/logs/er2551h.html");
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;

    case "Shapeshifter":
      let newTab3 = document.createElement("div");
      newTab3.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            You've come this far, don't turn back now. There is still a little light at the end of the door. Well there was until I closed it. ᐃᐧᐦᑎᑯᐤ.
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
            alert("Woah woah woah, I'm going to have to make this harder...");
            window.open("https://badcree.xyz/logs/kopwjah27.html");
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
    case "Worst Nightmare":
      let newTab4 = document.createElement("div");
      newTab4.innerHTML = `
        <div class="form-fields-text">
          <p class="language-description">
            Are you prepared for me to do my worst. I hope not hahaha. ᐃᐧᐦᑎᑯᐤ. Try the 64 Bases approach...
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
        </div>
      `;
      languageInfoBox.appendChild(newTab4);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password4) {
            alert("Slow down there, I always win...");
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
    case "Death":
      let newTab5 = document.createElement("div");
      newTab5.innerHTML = `
          <div class="form-fields-text">
            <p class="language-description">
              I will let you pass this one cause I know you will not be able to get the final one....Password is: ialwayswin
            </p>
            <div class="container">
              <h1 class="container-h1">Enter what you've found here...</h1>
              <input type="text" placeholder="Enter Password" id="${passwordInputId}">
              <button type="button" class="button11" id="${buttonId}">Test your fate</button>
            </div>
          </div>
        `;
      languageInfoBox.appendChild(newTab5);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password5) {
            alert(
              "Don't get too happy, thats the last free pass you will get.",
            );
            window.open("https://badcree.xyz/logs/atyqha99.html");
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
    case "Last Piece":
      let newTab6 = document.createElement("div");
      newTab6.innerHTML = `
            <div class="form-fields-text">
              <p class="language-description">
               Hahaha, this is my last challenge and it only makes sense if it is my hardest. Only the crows in the class will get this one. Find the pattern in the previous log, you will get hints periodically if you wish. Remember all my tricks, the 64 bases, the Cree and English. It's only the <b>first character</b> that counts. try all the combonations...
              </p>
              <div class="container">
                <h1 class="container-h1">Enter what you've found here...</h1>
                <input type="text" placeholder="Enter Password" id="${passwordInputId}">
                <button type="button" class="button11" id="${buttonId}">Test your fate</button>
              </div>
            </div>
          `;
      languageInfoBox.appendChild(newTab6);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password6) {
            alert(
              "You actually did it... I did not expect that. I guess i'll let you go this time.",
            );
            window.open("https://badcree.xyz/logs/uipwiah76.html");
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
  }
}

function selectNextLanguage(currentLanguage) {
  const currentIndex = Array.from(languages).indexOf(currentLanguage);
  const nextIndex = currentIndex + 1;
  if (nextIndex < languages.length) {
    selectLanguage(languages[nextIndex]);
  } else {
    alert(
      "You may have won the battle, but I will be the one who wins the war!",
    );
  }
}
function showLang(currentLanguage) {
  const currentIndex = Array.from(languages).indexOf(currentLanguage);
  const nextIndex = currentIndex + 1;
  if (nextIndex < languages.length) {
    language[nextIndex].style.display = "block";
  }
}

// Event listeners for the language tabs
languages.forEach((language) => {
  language.addEventListener("click", () => {
    selectLanguage(language);
  });
});
