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
// console.log(wizardList);
// console.log(wizardList[0].name[1]);
// var renderWizard = function (wizardList) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector(".setup-similar-label").textContent =
//     name[Math.floor(Math.random() * name.length)];
//   console.log(wizardElement);

//   return wizardElement;
// };

//заповнюємо даними з масива
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
//вставляємо через createDocumentFragment
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizardList[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector(".setup-similar").classList.remove("hidden");

//взаємодія з пользовательом, при нажатти
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector(".setup-open");
var setupСlose = userDialog.querySelector(".setup-close");

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove("hidden");
  document.addEventListener("keydown", onPopupEscPress);
};
var closePopup = function () {
  userDialog.classList.add("hidden");
  document.removeEventListener("keydown", onPopupEscPress);
};

setupOpen.addEventListener("click", function () {
  openPopup();
});

setupСlose.addEventListener("click", function () {
  closePopup();
});

setupСlose.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

console.log(setupСlose);

var setupOpenIcon = document.querySelector(".setup-open-icon");

const showPopupIfClickEnter = (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};
const closePopupIfClickEnter = (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

setupOpenIcon.addEventListener("mouseenter", function () {
  // userDialog.classList.remove("hidden");
  document.addEventListener("keydown", showPopupIfClickEnter);
});
setupOpenIcon.addEventListener("mouseleave", function () {
  // userDialog.classList.remove("hidden");
  document.removeEventListener("keydown", showPopupIfClickEnter);
});
setupСlose.addEventListener("mouseenter", function () {
  // userDialog.classList.remove("hidden");
  document.addEventListener("keydown", closePopupIfClickEnter);
});
setupСlose.addEventListener("mouseleave", function () {
  // userDialog.classList.remove("hidden");
  document.removeEventListener("keydown", closePopupIfClickEnter);
});

// зміна плаща
var setupWizard = document.querySelector(".setup-wizard");
var wizardCoat = setupWizard.querySelector(".wizard-coat");
var wizardEyes = setupWizard.querySelector(".wizard-eyes");
var fireballWrap = document.querySelector(".setup-fireball-wrap");
var inputFireColor = fireballWrap.querySelector("input");
wizardCoat.addEventListener("click", function () {
  wizardCoat.style.fill =
    wizardList[1].coatColor[
      Math.floor(Math.random() * wizardList[1].coatColor.length)
    ];
});
wizardEyes.addEventListener("click", function () {
  wizardEyes.style.fill =
    wizardList[2].eyesColor[
      Math.floor(Math.random() * wizardList[2].eyesColor.length)
    ];
});
var changeFireColor = function () {
  fireballWrap.addEventListener("click", function () {
    // inputFireColor.value = fireballWrap.style.background;
    const color =
      wizardList[3].fireballColor[
        Math.floor(Math.random() * wizardList[3].fireballColor.length)
      ];
    fireballWrap.style.background = color;
    inputFireColor.value = color;
  });
};
changeFireColor();

//валідація
var userNameInput = userDialog.querySelector(".setup-user-name");
userNameInput.addEventListener("invalid", function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity(
      "Ех, чувак, закоротке імя перевір ще раз паспорт"
    );
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity("Ого, тебе що і правда так мама назвала?!");
  } else if (userNameInput.validity.typeMismatch) {
    userNameInput.setCustomValidity("Дурнішого імя я ще не бачив");
  } else {
    userNameInput.setCustomValidity(" ");
  }
});
// userNameInput.addEventListener("input", function (evt) {
//   var target = evt.target;
//   if (target.value.length < 2) {
//     target.setCustomValidity("Ех, чувак, закоротке імя перевір ще раз паспорт");
//   } else {
//     target.setCustomValidity(" ");
//   }
// });
