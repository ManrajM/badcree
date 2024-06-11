const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0] // There's only one
// const mainColor = getComputedStyle(languages[0]).getPropertyValue(
//     "--mainColor");

// // Iterates through the languages and formats the page based on the selected one
// function selectLanguage(selectedLanguage) {
//   for (const language of languages) {
//     if (language === selectedLanguage) {
//       console.log(selectedLanguage);
//       language.style.cssText = `
//         background-color: var(--blendedColor);
//         border-radius: 100px;
//       `;
//       // Sets both the number and language name text color
//       language.getElementsByTagName("p")[0].style.color = mainColor;
//       language.getElementsByTagName("p")[1].style.color = mainColor;
//       setLanguageInfo(language)
//     } else {
//       language.style.cssText = "";
//       language.getElementsByTagName("p")[0].style.cssText = "";
//       language.getElementsByTagName("p")[1].style.cssText = "";
//     }
//   }
//   // Hide all tabs except the selected one
//   for (let i = 1; i < languageInfoBox.children.length; i++) {
//     document.getElementsByClassName("language")[i].style.visibility = "hidden";
//   }
// }

// // Formats the info box based on what language is selected
// function setLanguageInfo(language) {
//   switch (language.getElementsByTagName("p")[1].textContent) {

//     case "Inception":
//       languageInfoBox.innerHTML = `
//       <div class = "form-fields-text">
//           <p class="language-description">
//             Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
//           </p>
//           <div class="container">
//        <h1 class="container-h1">Enter what you've found here...</h1>
//             <input type="text" placeholder="Enter Password" id="password-1">
//             <button type="button" class="button11" id ="newbutt" >Test your fate</button>
//         </div>
//       </div>
//       `;
//       document.getElementById("newbutt").addEventListener("click", function (event){
//         event.preventDefault();
//         const inputPassword = document.getElementById("password-1").value;
//         console.log(inputPassword)
//         if (inputPassword === password1) {
//             alert("hello")
//             // Show the next tab
//             languageInfoBox.children[1].style.display = "block";
//         } else {
//             alert("Incorrect password!");
//         }
//     });
//       // Sets the length of the bars
//       break;

//     case "King of Skies":
//       languageInfoBox.innerHTML = `
//       <div class = "form-fields-text" style = "display: none;">
//           <p class="language-description">
//             Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
//           </p>
//           <div class="container">
//        <h1 class="container-h1">Enter what you've found here...</h1>
//             <input type="text" placeholder="Enter Password" id="password-1">
//             <button type="button" class="button11" id ="newbutt" >Test your fate</button>
//         </div>
//       </div>
//       `;
//       document.getElementById("newbutt").addEventListener("click", function (event){
//         event.preventDefault();
//         const inputPassword = document.getElementById("password-1").value;
//         console.log(inputPassword)
//         if (inputPassword === password2) {
//             alert("hello")
//             // Show the next tab
//             languageInfoBox.children[2].style.display = "block";
//         } else {
//             alert("Incorrect password!");
//         }
//     });
//       break;
//       case "Worst Nightmare":
//         languageInfoBox.innerHTML = `
//         <div class = "form-fields-text" style = "display: none;">
//             <p class="language-description">
//               Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
//             </p>
//             <div class="container">
//          <h1 class="container-h1">Enter what you've found here...</h1>
//               <input type="text" placeholder="Enter Password" id="password-1">
//               <button type="button" class="button11" id ="newbutt" >Test your fate</button>
//           </div>
//         </div>
//         `;
//         document.getElementById("newbutt").addEventListener("click", function (event){
//           event.preventDefault();
//           const inputPassword = document.getElementById("password-1").value;
//           console.log(inputPassword)
//           if (inputPassword === password3) {
//               alert("hello")
//               // Show the next tab
//               languageInfoBox.children[3].style.display = "block";
//           } else {
//               alert("Incorrect password!");
//           }
//       });
//         break;
//     }
//   }

let currentLanguageIndex = 0;

languages.forEach((language, index) => {
  if (index > 0) {
    language.style.display = 'none';
  }
});


function setLanguageInfo(language) {
  switch (language.getElementsByTagName("p")[1].textContent) {

    case "Inception":
      languageInfoBox.innerHTML = `
      <div class = "form-fields-text">
          <p class="language-description">
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
          </p>
          <div class="container">
       <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="password-1">
            <button type="button" class="button11" id ="newbutt" >Test your fate</button>
        </div>
      </div>
      `;
      document.getElementById("newbutt").addEventListener("click", function (event){
        event.preventDefault();
        const inputPassword = document.getElementById("password-1").value;
        if (inputPassword === password1) { // replace with your desired password
          currentLanguageIndex++;
          languages[currentLanguageIndex - 1].style.display = 'none';
          languages[currentLanguageIndex].style.display = 'block';
        }
      });
      // Sets the length of the bars
      break;

    case "King of Skies":
      languageInfoBox.innerHTML = `
      <div class = "form-fields-text" style = "display: none;">
          <p class="language-description">
            Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
          </p>
          <div class="container">
       <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="password-1">
            <button type="button" class="button11" id ="newbutt" >Test your fate</button>
        </div>
      </div>
      `;
      document.getElementById("newbutt").addEventListener("click", function (event){
        event.preventDefault();
        const inputPassword = document.getElementById("password-1").value;
        if (inputPassword === password2) { // replace with your desired password
          currentLanguageIndex++;
          languages[currentLanguageIndex - 1].style.display = 'none';
          languages[currentLanguageIndex].style.display = 'block';
        }
      });
      break;
      case "Worst Nightmare":
        languageInfoBox.innerHTML = `
        <div class = "form-fields-text" style = "display: none;">
            <p class="language-description">
              Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
            </p>
            <div class="container">
         <h1 class="container-h1">Enter what you've found here...</h1>
              <input type="text" placeholder="Enter Password" id="password-1">
              <button type="button" class="button11" id ="newbutt" >Test your fate</button>
          </div>
        </div>
        `;
        document.getElementById("newbutt").addEventListener("click", function (event){
          event.preventDefault();
          const inputPassword = document.getElementById("password-1").value;
          console.log(inputPassword)
          if (inputPassword === password3) {
              alert("hello")
              // Show the next tab
              languageInfoBox.children[3].style.display = "block";
          } else {
              alert("Incorrect password!");
          }
      });
        break;
    }
  }