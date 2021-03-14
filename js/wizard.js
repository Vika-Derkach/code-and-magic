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

  document
    .querySelector(".setup-wizard-form")
    .addEventListener("submit", function (evt) {
      evt.preventDefault();

      var wizardCopy = document.querySelector("svg").cloneNode(true);

      wizardCopy.querySelector("#wizard-coat").style.fill =
        wizardCoatElement.style.fill;
      wizardCopy.querySelector("#wizard-eyes").style.fill =
        wizardEyesElement.style.fill;

      var wizardBase64Right = window.svg2base64(wizardCopy);

      wizardCopy
        .querySelector("#wizard")
        .setAttribute("transform", "translate(62, 0) scale(-1, 1)");
      var wizardBase64Left = window.svg2base64(wizardCopy);

      window.restartGame(wizardBase64Right, wizardBase64Left);
    });

  window.wizard = wizard;
})();
