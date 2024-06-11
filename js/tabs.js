const languages = [
  { title: "Inception", password: "⊳x⊳୮Ĺo" },
  { title: "King of Skies", password: "p2" },
  { title: "Worst Nightmare", password: "p3" }
];

const languageSelector = document.querySelector('.language-selector');
const languageInfoBox = document.querySelector(".outer-language-info-box");

languages.forEach((language, index) => {
  const languageTab = document.createElement('div');
  languageTab.classList.add('language');
  languageTab.dataset.index = index;
  languageTab.innerHTML = `
    <p class="language-num">${index}</p>
    <p class="language-content">${language.title}</p>
  `;
  languageTab.addEventListener('click', () => {
    selectLanguage(index);
  });
  languageSelector.appendChild(languageTab);
});
function selectLanguage(index) {
  // Hide all language tabs
  const allTabs = document.querySelectorAll('.language');
  allTabs.forEach(tab => {
    tab.classList.remove('selected');
  });

  // Show the selected language tab
  const selectedTab = document.querySelector(`.language[data-index="${index}"]`);
  selectedTab.classList.add('selected');

  // Clear the languageInfoBox content
  languageInfoBox.innerHTML = '';

  // Create a new tab element
  const newTab = document.createElement("div");
  newTab.className = "language-tab";

  // Get the selected language details
  const selectedLanguage = languages[index];

  // Create content based on the selected language
  newTab.innerHTML = `
    <p class="language-description">${getDescription(selectedLanguage.title)}</p>
    <div class="container">
      <h1 class="container-h1">Enter what you've found here...</h1>
      <input type="text" placeholder="Enter Password" id="passwordInput">
      <button type="button" class="button11" id="submitButton">Test your fate</button>
    </div>
  `;

  // Add the new tab content to the languageInfoBox
  languageInfoBox.appendChild(newTab);

  // Add event listener to the submit button
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener('click', () => {
    const passwordInput = document.getElementById("passwordInput").value;
    const correctPassword = selectedLanguage.password;
    if (passwordInput === correctPassword) {
      alert("Correct! You have unlocked the next level.");
      // You can add code here to unlock the next level
    } else {
      alert("Incorrect. Try again.");
    }
  });
}

function getDescription(languageTitle) {
  switch (languageTitle) {
    case "Inception":
      return "Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?";
    case "King of Skies":
      return "You are about to embark on a journey through a wormhole in search of a new home for humanity. What is the first planet you encounter?";
    case "Worst Nightmare":
      return "You are about to experience time like never before. What is the password to unlock the secrets of the past?";
    default:
      return "";
  }
}
