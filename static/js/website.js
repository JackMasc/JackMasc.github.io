let adjustNavHeight = function() {
  var mainNav = document.getElementById("main-nav");
  var mainNavHeight = mainNav.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--main-nav-height", mainNavHeight + "px");
};

window.onload = adjustNavHeight

window.onanimationiteration = adjustNavHeight

setTimeout(function(){
  var arrowToTop = document.getElementsByClassName('scroll-top')[0];
  arrowToTop.classList.remove("hidden");
  window.onscroll = function() {
    if (window.pageYOffset > 50) {
      arrowToTop.style.display = "block";
    } else {
      arrowToTop.style.display = "none";
    }
    var mainNav = document.getElementById("main-nav");
    var mainNavHeight = mainNav.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--main-nav-height", mainNavHeight + "px");
  };

  arrowToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}, 100);

document.addEventListener('DOMContentLoaded', function() {
  if (document.documentElement.scrollHeight === window.innerHeight) {
    var footNote = document.getElementsByClassName('footer-style')[0];
    footNote.style.bottom = "0";
    footNote.style.position = "fixed";
    footNote.style.right = "0";
    footNote.style.left = "0";
  }
});
