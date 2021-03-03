// зміна плаща
(function () {
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
})();
