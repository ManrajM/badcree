// const password1 = "⊳x⊳୮Ĺo";
// const password2 = "p2";
// const password3 = "p3";

// const languages = document.querySelectorAll('.language');
// let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0]; // There's only one
// const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

// let currentLanguageIndex = 0;

// // Hide all tabs initially
// languages.forEach((language, index) => {
//   if (index > 0) {
//     language.style.display = 'none';
//   }
// });

// function selectLanguage(selectedLanguage) {
//   for (const language of languages) {
//     if (language === selectedLanguage) {
//       language.style.cssText = `
//         background-color: var(--blendedColor);
//         border-radius: 100px;
//       `;
//       language.getElementsByTagName("p")[0].style.color = mainColor;
//       language.getElementsByTagName("p")[1].style.color = mainColor;
//       setLanguageInfo(language); // Update the languageInfoBox content
//     } else {
//       language.style.cssText = "";
//       language.getElementsByTagName("p")[0].style.cssText = "";
//       language.getElementsByTagName("p")[1].style.cssText = "";
//       language.style.display = 'none'; // Hide the unselected tabs
//     }
//   }
// }
// function setLanguageInfo(language) {
//   languageInfoBox.innerHTML = '';
//   let passwordInputId = `password-${language.getElementsByTagName("p")[1].textContent}`;
//   let buttonId = `button-${language.getElementsByTagName("p")[1].textContent}`;
  
//   // Clear the content inside languageInfoBox
//   let languageInfoBoxContent = languageInfoBox.querySelector(".form-fields-text");
//   if (languageInfoBoxContent) {
//     languageInfoBoxContent.remove();
//   }
  
//   switch (language.getElementsByTagName("p")[1].textContent) {
//     case "Inception":
//       let newTab = document.createElement("div");
//       newTab.innerHTML = `
//         <div class="form-fields-text">
//           <p class="language-description">
//             Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
//           </p>
//           <div class="container">
//             <h1 class="container-h1">Enter what you've found here...</h1>
//             <input type="text" placeholder="Enter Password" id="${passwordInputId}">
//             <button type="button" class="button11" id="${buttonId}">Test your fate</button>
//           </div>
//         </div>
//       `;
//       languageInfoBox.appendChild(newTab);
//       document.getElementById(buttonId).addEventListener("click", function (event){
//         event.preventDefault();
//         const inputPassword = document.getElementById(passwordInputId).value;
//         const passwords = [password1, password2, password3];
//         if (inputPassword === passwords[currentLanguageIndex]) { 
//           currentLanguageIndex++;
//           selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
//         } else {
//           alert("Incorrect password!");
//         }
//       });
//       break;

//     case "King of Skies":
//       let newTab2 = document.createElement("div");
//       newTab2.innerHTML = `
//         <div class="form-fields-text">
//           <p class="language-description">
//             Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
//           </p>
//           <div class="container">
//             <h1 class="container-h1">Enter what you've found here...</h1>
//             <input type="text" placeholder="Enter Password" id="${passwordInputId}">
//             <button type="button" class="button11" id="${buttonId}">Test your fate</button>
//           </div>
//         </div>
//       `;
//       languageInfoBox.appendChild(newTab2);
//       document.getElementById(buttonId).addEventListener("click", function (event){
//         event.preventDefault();
//         const inputPassword = document.getElementById(passwordInputId).value;
//         const passwords = [password1, password2, password3];
//         if (inputPassword === passwords[currentLanguageIndex]) { 
//           currentLanguageIndex++;
//           selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
//         } else {
//           alert("Incorrect password!");
//         }
//       });
//       break;

//     case "Worst Nightmare":
//       let newTab3 = document.createElement("div");
//       newTab3.innerHTML = `
//         <div class="form-fields-text">
//           <p class="language-description">
//             Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
//           </p>
//           <div class="container">
//             <h1 class="container-h1">Enter what you've found here...</h1>
//             <input type="text" placeholder="Enter Password" id="${passwordInputId}">
//             <button type="button" class="button11" id="${buttonId}">Test your fate</button>
//           </div>
//         </div>
//       `;
//       languageInfoBox.appendChild(newTab3);
//       document.getElementById(buttonId).addEventListener("click", function (event){
//         event.preventDefault();
//         const inputPassword = document.getElementById(passwordInputId).value;
//         const passwords = [password1, password2, password3];
//         if (inputPassword === passwords[currentLanguageIndex]) { 
//           currentLanguageIndex++;
//           selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
//         } else {
//           alert("Incorrect password!");
//         }
//       });
//       break;
//     }
//   }

const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0]; // There's only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

let currentLanguageIndex = 0;

// Hide all tabs initially
languages.forEach((language, index) => {
  if (index > 0) {
    language.style.display = 'none';
  }
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
  
  // Insert the new tab underneath the old one
  languageInfoBox.appendChild(newTab);
  
  // Add event listener to the button
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function (event){
    event.preventDefault();
    const inputPassword = document.getElementById(passwordInputId).value;
    const passwords = [password1, password2, password3];
    if (inputPassword === passwords[currentLanguageIndex]) { 
      currentLanguageIndex++;
      languages[currentLanguageIndex].style.display = 'block'; // Show the next tab
      selectLanguage(languages[currentLanguageIndex]); // Switch to the next language tab
    } else {
      alert("Incorrect password!");
    }
  });
}

// Show the first tab initially
languages[0].style.display = 'block';
selectLanguage(languages[0]);