// Scroll event listener
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var sections = document.querySelectorAll("section");

  sections.forEach(function (section) {
    var top = section.offsetTop - navbar.offsetHeight;
    var bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      document.querySelector(".navbar a.active").classList.remove("active");
      document
        .querySelector('a[href="#' + section.id + '"]')
        .classList.add("active");
    }
  });

  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});


