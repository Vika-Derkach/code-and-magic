//взаємодія з пользовательом, при нажатти
(function () {
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
    document.addEventListener("keydown", showPopupIfClickEnter);
  });
  setupOpenIcon.addEventListener("mouseleave", function () {
    document.removeEventListener("keydown", showPopupIfClickEnter);
  });
  setupСlose.addEventListener("mouseenter", function () {
    document.addEventListener("keydown", closePopupIfClickEnter);
  });
  setupСlose.addEventListener("mouseleave", function () {
    document.removeEventListener("keydown", closePopupIfClickEnter);
  });
})();
