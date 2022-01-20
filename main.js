// Define Global Variables
let linksBtn = document.querySelectorAll("#links-btn");
let arrows = document.querySelectorAll("#arrow");
let menus = document.querySelectorAll(".mega-menu");
let linksText = document.querySelectorAll(".links-anchor");
let burgerBtn = document.querySelectorAll(".burger-icon-container #links-btn");
let burgerIconOpen = document.querySelector(".burger-icon");
let burgerIconClose = document.querySelector(".close-icon");
let burgerMenu = document.querySelector(".burger-menu");

// Loop On Links Button
linksBtn.forEach((Btn, i, arr) => {
  Btn.addEventListener("click", () => {
    // Toggle Arrow Active Class
    if (arrows[i].classList.toggle("active")) {
      arr.forEach((arrow, il) => {
        arrows[il].classList.toggle("active", Btn == arrow);
      });
    }

    // Toggle Menu Active Class
    if (menus[i].classList.toggle("active")) {
      arr.forEach((menu, il) => {
        menus[il].classList.toggle("active", Btn == menu);
      });
    }
  });
});

// Toggle Links text active class
burgerBtn.forEach((link, index, array) => {
  link.addEventListener("click", () => {
    if (linksText[index].classList.toggle("active")) {
      array.forEach((anchor, index) => {
        linksText[index].classList.toggle("active", link == anchor);
      });
    }
  });
});

// Hide And Show The Burger Menu
burgerIconOpen.addEventListener("click", () => {
  burgerMenu.classList.add("active");

  burgerIconOpen.style.display = "none";
  burgerIconClose.style.display = "block";

  burgerIconClose.addEventListener("click", () => {
    burgerMenu.classList.remove("active");

    burgerIconOpen.style.display = "block";
    burgerIconClose.style.display = "none";
  });
});
