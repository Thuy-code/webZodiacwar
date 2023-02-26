$(document).ready(function () {
  const btnHamburger = document.querySelector(".js-mobile-menu");
  const body = document.querySelector("body");
  const header = document.querySelector("#js-header");

  btnHamburger.addEventListener("click", function () {
    tongleMenu(header, body);
  });
  $(".js-close").on("click", function () {
    tongleMenu(header, body);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".js-top").fadeIn();
    } else {
      $(".js-top").fadeOut();
    }
  });

  $(".js-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

function tongleMenu(header, body) {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
  }
}
