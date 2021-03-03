//валідація
(function () {
  var userNameInput = userDialog.querySelector(".setup-user-name");
  userNameInput.addEventListener("invalid", function (evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity(
        "Ех, чувак, закоротке імя перевір ще раз паспорт"
      );
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity(
        "Ого, тебе що і правда так мама назвала?!"
      );
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
})();
