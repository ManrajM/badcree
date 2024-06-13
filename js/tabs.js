const password1 = "p1";
const password2 = "p2";
const password3 = "p3";
const password4 = "p4";
const password5 = "p5";
const password6 = "p6";

const languages = document.querySelectorAll(".language");
const languageInfoBox = document.querySelector(".outer-language-info-box");
const mainColor = getComputedStyle(languages[0]).getPropertyValue(
  "--mainColor",
);

let currentIndex = 0
languages.forEach((language) => {
  currentIndex++;
  if (languages[currentIndex].getElementsByTagName("p")[1].textContent != "Inception") {
    languages[currentIndex].style.visibilty = hidden;
  }
 });

currentIndex = 0;
 
// Initially hide all content
function hideAllContent() {
  languageInfoBox.innerHTML = ""; // Clear the content inside languageInfoBox
}

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
          if (inputPassword === password1) {
            alert("I let you pass that one...");
            window.open("https://badcree.xyz/logs/log1.html")
            languages[currentIndex + 1].style.visibilty = "visible"
            selectNextLanguage(language);
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
            Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... That's all I can give you for now.
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
            window.open("https://badcree.xyz/logs/log2.html")
            selectNextLanguage(language);
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
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mother's mother?
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
            window.open("https://badcree.xyz/logs/log3.html")
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
      case "Shapeshifter":
      let newTab4 = document.createElement("div");
      newTab4.innerHTML = `
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
      languageInfoBox.appendChild(newTab4);
      document
        .getElementById(buttonId)
        .addEventListener("click", function (event) {
          event.preventDefault();
          const inputPassword = document.getElementById(passwordInputId).value;
          if (inputPassword === password4) {
            alert("Woah woah woah, I'm going to have to make this harder...");
            window.open("https://badcree.xyz/logs/log3.html")
            selectNextLanguage(language);
          } else {
            alert("Incorrect password!");
          }
        });
      break;
      case "Fire":
        let newTab5 = document.createElement("div");
        newTab5.innerHTML = `
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
        languageInfoBox.appendChild(newTab5);
        document
          .getElementById(buttonId)
          .addEventListener("click", function (event) {
            event.preventDefault();
            const inputPassword = document.getElementById(passwordInputId).value;
            if (inputPassword === password5) {
              alert("I let you pass that one...");
              window.open("https://badcree.xyz/logs/log4.html")
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
                Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mother's mother?
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
                alert("I let you pass that one...");
                window.open("https://badcree.xyz/logs/log5.html")
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
    alert("You actually did it... I did not expect that. I guess i'll let you go this time.");
  }
}

// Event listeners for the language tabs
languages.forEach((language) => {
  language.addEventListener("click", () => {
    selectLanguage(language);
  });
});
