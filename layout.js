function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

document.getElementById("max-main-content").innerHTML = loadPage(
  "../pages/index.html"
);

$(".max-nav-link").click(function (event) {
  $(".max-main-content").empty();
  document.getElementById("max-main-content").innerHTML = loadPage(
    event.currentTarget.dataset.href
    console.log();
  );
});
