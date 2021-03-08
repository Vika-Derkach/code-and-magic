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
// var renderWizard = function (wizard) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
//   // wizardList[0].name[Math.floor(Math.random() * wizardList[0].name.length)] +
//   // " " +
//   // wizardList[0].surname[
//   //   Math.floor(Math.random() * wizardList[0].surname.length)
//   // ];

//   wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
//   // wizardList[1].coatColor[
//   //   Math.floor(Math.random() * wizardList[1].coatColor.length)
//   // ];

//   wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
//   // wizardList[2].eyesColor[
//   //   Math.floor(Math.random() * wizardList[2].eyesColor.length)
//   // ];

//   // similarListElement.appendChild(wizardElement);
//   return wizardElement;
// };

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

// var getRandomElement = function (array) {
//   var randomElementIndex = Math.floor(Math.random() * array.length);
//   return array[randomElementIndex];
// };

// var wizardElement = document.querySelector(".setup-wizard");

// var wizardCoatElement = wizardElement.querySelector(".wizard-coat");
// wizardCoatElement.addEventListener("click", function () {
//   var newColor = getRandomElement(COAT_COLORS);
//   this.style.fill = newColor;
//   coatColor = newColor;
//   updateWizards();
// });

// var wizardEyesElement = wizardElement.querySelector(".wizard-eyes");
// wizardEyesElement.addEventListener("click", function () {
//   var newColor = getRandomElement(EYES_COLORS);
//   this.style.fill = newColor;
//   eyesColor = eyesColor;
//   updateWizards();
// });

// // (function () {
// var COAT_COLORS = [
//   "rgb(101, 137, 164)",
//   "rgb(241, 43, 107)",
//   "rgb(146, 100, 161)",
//   "rgb(56, 159, 117)",
//   "rgb(215, 210, 55)",
//   "rgb(0, 0, 0)",
// ];
// var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];
// var coatColor;
// var eyesColor;
// var wizards = [];

// var getRank = function (wizards) {
//   var rank = 0;
//   if (wizard.colorCoat === coatColor) {
//     rank += 2;
//   }
//   if (wizard.colorEyes === eyesColor) {
//     rank += 1;
//   }
//   return rank;
// };

// var namesComparator = function (left, right) {
//   if (left > right) {
//     return 1;
//   } else if (left < right) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// var updateWizards = function () {
//   window.render(
//     wizards.slice().sort(function (left, right) {
//       var rankDiff = getRank(right) - getRank(left);
//       if (rankDiff === 0) {
//         rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
//       }
//       return rankDiff;
//     })
//   );

//   // window.render(
//   //   wizards.sort(function (left, right) {
//   //     return getRank(right) - getRank(left);
//   //   })
//   // );
//   // var sameCoatAndEyesWizards = wizards.filter(function (it) {
//   //   return it.colorCoat === coatColor && it.colorEyes === eyesColor;
//   // });
//   // var sameCoatWizards = wizards.filter(function (it) {
//   //   return it.colorCoat === coatColor;
//   // });
//   // var sameEyesWizards = wizards.filter(function (it) {
//   //   return it.colorEyes === eyesColor;
//   // });

//   // var filterWizards = sameCoatAndEyesWizards;
//   // filterWizards = filterWizards.concat(sameCoatWizards);
//   // filterWizards = filterWizards.concat(sameEyesWizards);
//   // filterWizards = filterWizards.concat(wizards);

//   // var uniqueWizards = filterWizards.filter(function (it, i) {
//   //   return filterWizards.indexOf(it) === i;
//   // });
//   // window.render(uniqueWizards);
// };
// var lastTimeout;

// window.wizard.onEyesChange = function (color) {
//   eyesColor = color;
//   if (lastTimeout) {
//     window.clearTimeout(lastTimeout);
//   }
//   lastTimeout = window.setTimeout(function () {
//     updateWizards();
//   }, 300);
// };
// window.wizard.onCoatChnge = function (color) {
//   coatColor === color;
//   if (lastTimeout) {
//     window.clearTimeout(lastTimeout);
//   }
//   lastTimeut = window.setTimeout(function () {
//     updateWizards();
//   }, 300);
// };
// //получаємо магов
// var successHandler = function (data) {
//   wizards = data;
//   updateWizards();
//   // updateFilter();
//   // window.render(wizards);
// };
// // var successHandler = function (wizards) {
// //   var fragment = document.createDocumentFragment();
// //   for (let i = 0; i < 4; i++) {
// //     fragment.appendChild(renderWizard(wizards[i]));
// //   }
// //   similarListElement.appendChild(fragment);
// //   userDialog.querySelector(".setup-similar").classList.remove("hidden");
// // };

// var errorHandler = function (errorMessage) {
//   var node = document.createElement("div");
//   node.style =
//     "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
//   node.style.position = "absolute";
//   node.style.left = 0;
//   node.style.right = 0;
//   node.style.fontSize = "30px";

//   node.textContent = errorMessage;

//   document.body.insertAdjacentElement("afterbegin", node);
// };
// var URL = "https://javascript.pages.academy/code-and-magick/data";
// window.load(URL, successHandler, errorHandler);
// // })();

//wizard js
(function () {
  // Получение случайного элемента из массива
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    },
  };

  // Редактирование цвета плаща персонажа.
  // При нажатии на персонажа, заливка элемента,
  // соответствующего плащу персонажа меняется
  // с помощью CSS-свойства SVG-элементов fill.
  // Цвет будет выбираться из заранее определенного
  // набора цветов
  var wizardElement = document.querySelector(".setup-wizard");
  var wizardCoatElement = wizardElement.querySelector(".wizard-coat");
  var wizardCoatColors = [
    "rgb(146, 100, 161)",
    "rgb(215, 210, 55)",
    "rgb(241, 43, 107)",
    "rgb(101, 137, 164)",
    "rgb(0, 0, 0)",
    "rgb(215, 210, 55)",
    "rgb(56, 159, 117)",
    "rgb(241, 43, 107)",
  ];

  wizardCoatElement.addEventListener("click", function () {
    var newColor = getRandomElement(wizardCoatColors);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector(".wizard-eyes");
  var wizardEyesColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "lightblue",
    "blue",
    "purple",
  ];

  wizardEyesElement.addEventListener("click", function () {
    var newColor = getRandomElement(wizardEyesColors);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();

// Файл debounce.js

(function () {
  var DEBOUNCE_INTERVAL = 300; // ms

  window.debounce = function (fun) {
    var lastTimeout = null;

    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();

// Файл similar.js

(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(
      wizards.slice().sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      })
    );
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
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

  var URL = "https://js.dump.academy/code-and-magick/data";
  window.load(URL, successHandler, errorHandler);
})();
