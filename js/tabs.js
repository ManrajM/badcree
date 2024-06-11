const passwords = ["⊳x⊳୮Ĺo", "p2", "p3"];

const languages = document.querySelectorAll('.language');
const languageInfoBox = document.querySelector(".outer-language-info-box");
const mainColor = getComputedStyle(document.documentElement).getPropertyValue("--mainColor");

let currentLanguageIndex = 0;

// Show the first tab initially
languages[0].style.display = 'block';

// Add event listeners to the language tabs
languages.forEach((language, index) => {
  language.addEventListener('click', () => {
    selectLanguage(index);
  });
});

function selectLanguage(index) {
  currentLanguageIndex = index;

  // Update tab styles
  languages.forEach((language, i) => {
    if (i === index) {
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 100px;
      `;
      language.getElementsByTagName("p")[0].style.color = mainColor;
      language.getElementsByTagName("p")[1].style.color = mainColor;
    } else {
      language.style.cssText = "";
      language.getElementsByTagName("p")[0].style.color = "";
      language.getElementsByTagName("p")[1].style.color = "";
    }
  });

  // Update language info box content
  setLanguageInfo(index);
}

function setLanguageInfo(index) {
  const languageContent = [
    {
      title: "Inception",
      description: "Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mother's mother?",
    },
    {
      title: "King of Skies",
      description: "You are about to embark on a journey through a wormhole in search of a new home for humanity. What is the first planet you encounter?",
    },
    {
      title: "Worst Nightmare",
      description: "You are about to experience time like never before. What is the password to unlock the secrets of the past?",
    },
  ];

  const content = languageContent[index];
  const passwordInputId = `password-${content.title}`;
  const buttonId = `button-${content.title}`;
  
  // Clear the languageInfoBox content
  languageInfoBox.innerHTML = '';
  
  // Create a new tab element
  const newTab = document.createElement("div");
  newTab.className = "language-tab";
  newTab.innerHTML = `
    <p class="language-description">${content.description}</p>
    <div class="container">
      <h1 class="container-h1">Enter what you've found here...</h1>
      <input type="text" placeholder="Enter Password" id="${passwordInputId}">
      <button type="button" class="button11" id="${buttonId}">Test your fate</button>
    </div>
  `;

  languageInfoBox.appendChild(newTab);

  document.getElementById(buttonId).addEventListener('click', () => {
    const passwordInput = document.getElementById(passwordInputId).value;
    if (passwordInput === passwords[index]) {
      alert("Correct! You have unlocked the next level.");
      // Unlock the next tab
      if (index < languages.length - 1) {
        languages[index + 1].style.display = 'block';
      } else {
        alert("Congratulations! You've completed all the puzzles.");
      }
    } else {
      alert("Incorrect. Try again.");
    }
  });
}

// Initialize the first tab
selectLanguage(0);
