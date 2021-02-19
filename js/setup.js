var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");

var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

var wizardList = [
  {
    name: [
      "Иван",
      "Хуан Себастьян",
      "Мария",
      "Кристоф",
      "Виктор",
      "Юлия",
      "Люпита",
      "Вашингтон",
    ],
    surname: [
      "да Марья",
      "Верон",
      "Мирабелла",
      "Вальц",
      "Онопко",
      "Топольницкая",
      "Нионго",
    ],
  },
  {
    coatColor: [
      "rgb(101, 137, 164)",
      "rgb(241, 43, 107)",
      "rgb(146, 100, 161)",
      "rgb(56, 159, 117)",
      "rgb(215, 210, 55)",
      "rgb(0, 0, 0)",
    ],
  },
  {
    eyesColor: ["black", "red", "blue", "yellow", "green"],
  },
];
// console.log(wizardList);
// console.log(wizardList[0].name[1]);
// var renderWizard = function (wizardList) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector(".setup-similar-label").textContent =
//     name[Math.floor(Math.random() * name.length)];
//   console.log(wizardElement);

//   return wizardElement;
// };
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent =
    wizardList[0].name[Math.floor(Math.random() * wizardList[0].name.length)] +
    " " +
    wizardList[0].surname[
      Math.floor(Math.random() * wizardList[0].surname.length)
    ];

  wizardElement.querySelector(".wizard-coat").style.fill =
    wizardList[1].coatColor[
      Math.floor(Math.random() * wizardList[1].coatColor.length)
    ];

  wizardElement.querySelector(".wizard-eyes").style.fill =
    wizardList[2].eyesColor[
      Math.floor(Math.random() * wizardList[2].eyesColor.length)
    ];

  // similarListElement.appendChild(wizardElement);
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizardList[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector(".setup-similar").classList.remove("hidden");
