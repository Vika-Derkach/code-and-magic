var userDialog = document.querySelector(".setup");
// userDialog.classList.remove("hidden");

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
  {
    fireballColor: ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"],
  },
];

//заповнюємо даними з масива
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  // wizardList[0].name[Math.floor(Math.random() * wizardList[0].name.length)] +
  // " " +
  // wizardList[0].surname[
  //   Math.floor(Math.random() * wizardList[0].surname.length)
  // ];

  wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
  // wizardList[1].coatColor[
  //   Math.floor(Math.random() * wizardList[1].coatColor.length)
  // ];

  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
  // wizardList[2].eyesColor[
  //   Math.floor(Math.random() * wizardList[2].eyesColor.length)
  // ];

  // similarListElement.appendChild(wizardElement);
  return wizardElement;
};

//вставляємо через createDocumentFragment
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < 4; i++) {
//   fragment.appendChild(renderWizard(wizardList[i]));
// }
// similarListElement.appendChild(fragment);
// userDialog.querySelector(".setup-similar").classList.remove("hidden");

//відправляємо форму , і закриваємо вікно setup
var form = userDialog.querySelector(".setup-wizard-form");
form.addEventListener("submit", function (evt) {
  window.upload(new FormData(form), function (response) {
    userDialog.classList.add("hidden");
  });
  evt.preventDefault();
});
//получаємо магов
var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (let i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector(".setup-similar").classList.remove("hidden");
};
var errorHandler = function (errorMessage) {
  var node = document.createElement("div");
  node.style =
    "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
  node.style.position = "absolute";
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = "30px";

  node.textContent = errorMessage;

  document.body.insertAdjacentElement("afterbegin", node);
};
window.load(successHandler, errorHandler);
