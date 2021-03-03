(function () {
  var setupDialogElement = document.querySelector(".setup");
  var dialogHandler = setupDialogElement.querySelector(".upload");

  dialogHandler.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    var startCoord = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoord.x - moveEvt.clientX,
        y: startCoord.y - moveEvt.clientY,
      };
      startCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      setupDialogElement.style.top =
        setupDialogElement.offsetTop - shift.y + "px";
      setupDialogElement.style.left =
        setupDialogElement.offsetLeft - shift.x + "px";
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener("click", onClickPreventDefault);
        };
        dialogHandler.addEventListener("click", onClickPreventDefault);
      }
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    var setupClose = setupDialogElement.querySelector(".setup-close");
    setupClose.addEventListener("click", function () {
      // setupDialogElement.classList.add('')
      setupDialogElement.style.left = "50%";
      setupDialogElement.style.top = "80px";
    });
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        setupDialogElement.style.left = "50%";
        setupDialogElement.style.top = "80px";
      }
    });
  });

  //star move
  //   var setupArtifactsCell = setupDialogElement.querySelectorAll(
  //     ".setup-artifacts-cell"
  //   );

  //   var setupArtifactsCellImg = setupArtifactsCell[0].querySelector("img");
  //   console.log(setupArtifactsCellImg);
  //   setupArtifactsCellImg.addEventListener("mousedown", function (evtStar) {
  //     evtStar.preventDefault();

  //     var artifactsStartCoord = {
  //       x: evtStar.clientX,
  //       y: evtStar.clientY,
  //     };

  //     var onStarMove = function (movingStar) {
  //       movingStar.preventDefault();
  //       var shift = {
  //         x: artifactsStartCoord.x - movingStar.clientX,
  //         y: artifactsStartCoord.y - movingStar.clientY,
  //       };
  //       artifactsStartCoord = {
  //         x: movingStar.clientX,
  //         y: movingStar.clientY,
  //       };
  //       setupArtifactsCellImg.style.top =
  //         setupArtifactsCellImg.offsetTop - shift.y + "px";
  //       setupArtifactsCellImg.style.left =
  //         setupArtifactsCellImg.offsetleft - shift.x + "px";
  //     };
  //     var onStarUp = function (starUpEvt) {
  //       starUpEvt.preventDefault();
  //       setupArtifactsCellImg.style.position = "relative";
  //       document.removeEventListener("mousemove", onStarMove);
  //       document.removeEventListener("mouseup", onStarUp);
  //     };
  //     document.addEventListener("mousemove", onStarMove);
  //     document.addEventListener("mouseup", onStarUp);
  //   });
})();
