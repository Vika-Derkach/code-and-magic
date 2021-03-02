(function () {
  window.fireballSize = 33;
  window.getFireballSpeed = function (left) {
    return (left = true) ? 5 : 2;
  };

  window.wizardSpeed = 3;
  var wizardWidth = 70;

  window.getWizardHeight = function () {
    return wizardWidth * 1.337;
  };
  function getWizardX(width) {
    return (width - wizardWidth) / 2;
  }
  getWizardX(700);
  function getWizardY(height) {
    return height / 3;
  }
  getWizardY(300);
})();
