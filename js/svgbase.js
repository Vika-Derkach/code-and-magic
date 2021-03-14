//передає нову силку
(function () {
  var DATA_URL_PREFIX = "data:image/svg+xml;charset=utf-8;base64,";

  window.svg2base64 = function (svgElement) {
    // превращает елемент в текст
    var xml = new XMLSerializer().serializeToString(svgElement);

    //закодуємо текст у форму
    var svg64 = window.btoa(xml);

    //добавим заголовок
    return DATA_URL_PREFIX + svg64;
  };
})();
