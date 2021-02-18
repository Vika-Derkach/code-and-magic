var userDialog = document.querySelector(".setup");

userDialog.classList.remove("hidden");
var similarListElement = userDialog.querySelector(".setup-similar-label");

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
    surmane: [
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
console.log(wizardList);

var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

var renderWizard = function (wizard) {};
renderWizard();
