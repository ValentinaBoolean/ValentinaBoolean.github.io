// When the user scrolls down 100px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunctionLarge();
  scrollFunctionSmall();
};

scrollFunctionLarge();
scrollFunctionSmall();

// Recolor the header on scroll down when on large devices
function scrollFunctionLarge() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("header").style.backgroundColor = "rgba(18, 21, 38, 1)";
      document.getElementById("header").style.color = "#000000";
  } else {
      document.getElementById("header").style.backgroundColor = "rgba(36, 36, 36, 0)";
      document.getElementById("header").style.color = "rgba(36, 36, 36, 0)";
  }

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("to-top-container").style.display = "block";
  } else {
      document.getElementById("to-top-container").style.display = "none";
  }
}

// Recolor the header on scroll down when on small devices
function scrollFunctionSmall() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header-small").style.backgroundColor = "rgba(18, 21, 38, 1)";
      document.getElementById("header-small").style.color = "#000000";
  } else {
      document.getElementById("header-small").style.backgroundColor = "rgba(36, 36, 36, 0)";
      document.getElementById("header-small").style.color = "rgba(36, 36, 36, 0)";
  }
}