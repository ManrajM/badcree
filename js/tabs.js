const passwords = ["⊳x⊳୮Ĺo", "p2", "p3"];

const languages = document.querySelectorAll('.language');
const languageInfoBox = document.querySelector(".outer-language-info-box");
const mainColor = getComputedStyle(document.documentElement).getPropertyValue("--mainColor");

let currentLanguageIndex = 0;

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
  // Check if content for this index already exists
  if (document.getElementById(`content-${index}`)) {
    return;
  }

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
  const newTab = document.createElement("div");
  newTab.className = "language-tab";
  newTab.id = `content-${index}`;
  newTab.innerHTML = `
    <p class="language-description">${content.description}</p>
    <div class="container">
      <h1 class="container-h1">Enter what you've found here...</h1>
      <input type="text" placeholder="Enter Password" id="password-${content.title}">
      <button type="button" class="button11" id="button-${content.title}">Test your fate</button>
    </div>
  `;

  languageInfoBox.appendChild(newTab);

  document.getElementById(`button-${content.title}`).addEventListener('click', () => {
    const passwordInput = document.getElementById(`password-${content.title}`).value;
    if (passwordInput === passwords[index]) {
      alert("Correct! You have unlocked the next level.");
      if (index < languages.length - 1) {
        selectLanguage(index + 1);
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
