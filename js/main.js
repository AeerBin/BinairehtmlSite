//======== Start Menu transition

const mainmenu = document.querySelector(".binair-hamburger-menu");
const navlinks = document.querySelector(".nav-links");
const allsections = document.querySelector(".all-sections");
const links = document.querySelectorAll(".nav-links li");

mainmenu.addEventListener("click", () => {
  navlinks.classList.toggle("open");

  if (mainmenu.classList.toggle("actif")) {
    mainmenu.setAttribute("src", "images/icons/close-menu.png");
    allsections.setAttribute("hidden", "");
    mainmenu.classList.toggle("rotate-in-center");
  } else {
    mainmenu.setAttribute("src", "images/icons/beenair-menu.png");
    allsections.removeAttribute("hidden");
    mainmenu.classList.toggle("rotate-in-center");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.toggle("actif")) {
      navlinks.classList.toggle("open");
      mainmenu.classList.toggle("actif");
      mainmenu.setAttribute("src", "images/icons/beenair-menu.png");
      allsections.removeAttribute("hidden");
      link.classList.toggle("actif");
    }
  });
});

const site = document.querySelector(".lisite");
const application = document.querySelector(".liapplication");
const design = document.querySelector(".lidesign");
const marketingdigital = document.querySelector(".limarketing");

const sites = document.querySelectorAll(".site");
const applications = document.querySelectorAll(".application");
const designs = document.querySelectorAll(".design");
const marketings = document.querySelectorAll(".marketingdigital");
// =>
// sites.classList.add("hide-pack");
applications.forEach((item) => (item.style.display = "none"));
designs.forEach((item) => (item.style.display = "none"));
marketings.forEach((item) => (item.style.display = "none"));

site.addEventListener("click", () => {
  sites.forEach((item) => (item.style.display = "flex"));
  applications.forEach((item) => (item.style.display = "none"));
  designs.forEach((item) => (item.style.display = "none"));
  marketings.forEach((item) => (item.style.display = "none"));

  site.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

design.addEventListener("click", () => {
  designs.forEach((item) => (item.style.display = "flex"));
  applications.forEach((item) => (item.style.display = "none"));
  sites.forEach((item) => (item.style.display = "none"));
  marketings.forEach((item) => (item.style.display = "none"));

  design.classList.add("active");
  application.classList.remove("active");
  site.classList.remove("active");
  marketingdigital.classList.remove("active");
});

application.addEventListener("click", () => {
  applications.forEach((item) => (item.style.display = "flex"));
  sites.forEach((item) => (item.style.display = "none"));
  designs.forEach((item) => (item.style.display = "none"));
  marketings.forEach((item) => (item.style.display = "none"));

  application.classList.add("active");
  site.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

marketingdigital.addEventListener("click", () => {
  marketings.forEach((item) => (item.style.display = "flex"));
  applications.forEach((item) => (item.style.display = "none"));
  designs.forEach((item) => (item.style.display = "none"));
  sites.forEach((item) => (item.style.display = "none"));

  marketingdigital.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  site.classList.remove("active");
});
// End Menu transition

//======= Start Pack ISOTOPE

// $('.pack-item').isotope({

//     itemSelector: '.item',
//     layoutMode: 'fitRows'
//   });

// $(".pack-item").isotope({
//   filter: ".site",
//   masonry: {
//     columnWidth: 130,
//   },
// });

// $(".pack-menu ul li").click(function () {
//   $(".pack-menu ul li").removeClass("active");
//   $(this).addClass("active");
//   var selector = $(this).attr("data-filter");
//   $(".pack-item").isotope({
//     filter: selector,
//   });
// });
