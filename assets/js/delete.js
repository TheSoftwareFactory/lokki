var baseUrlMain = 'https://lokki-production.herokuapp.com';
var baseUrlAlpha = 'https://lokki-dev.herokuapp.com';

$(document).ready(function () {

  $("button#gobutton").click(function (event) {
    event.preventDefault();
    var addr = $("input#addr").val();

    if ($("input#isalpha").prop("checked")) var baseUrl = baseUrlAlpha;
    else var baseUrl = baseUrlMain;

    window.location.href = baseUrl + '/request-delete/' + addr;
  });
});
