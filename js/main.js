(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("YOUR_USER_ID");
})();
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

const site = document.querySelector(".site");
const application = document.querySelector(".application");
const design = document.querySelector(".design");
const marketingdigital = document.querySelector(".marketing");

const sites = document.querySelector(".siteRow");
const applications = document.querySelector(".appRow");
const designs = document.querySelector(".designRow");
const marketings = document.querySelector(".markRow");
// =>
site.classList.add("active");
applications.classList.add("d-none");
designs.classList.add("d-none");
marketings.classList.add("d-none");
site.addEventListener("click", () => {
  sites.classList.remove("d-none");
  applications.classList.add("d-none");
  designs.classList.add("d-none");
  marketings.classList.add("d-none");

  site.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

design.addEventListener("click", () => {
  designs.classList.remove("d-none");
  applications.classList.add("d-none");
  sites.classList.add("d-none");
  marketings.classList.add("d-none");

  design.classList.add("active");
  application.classList.remove("active");
  site.classList.remove("active");
  marketingdigital.classList.remove("active");
});

application.addEventListener("click", () => {
  applications.classList.remove("d-none");
  sites.classList.add("d-none");
  designs.classList.add("d-none");
  marketings.classList.add("d-none");

  application.classList.add("active");
  site.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

marketingdigital.addEventListener("click", () => {
  marketings.classList.remove("d-none");
  applications.classList.add("d-none");
  designs.classList.add("d-none");
  sites.classList.add("d-none");

  marketingdigital.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  site.classList.remove("active");
});
// End Menu transition

//======= Start Modal hero
document
  .getElementById("btn-devis-hero")
  .addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
    // document.body.style.height = "60vh";
    document.body.style.position = "fixed";
  });
document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
  document.body.style.position = "";
});
//======= End Modal hero
//======= Start Mail js
const heroForm = document.querySelector("#devis");
heroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "Binair",
      "template_fax6qbz",
      e.target,
      "user_gUHkY5pu5hUbFf1wHFlfY"
    )
    .then(
      (result) => {
        document.querySelector("#devis").reset();
        document.querySelector(".bg-modal").style.display = "none";
        document.body.style.position = "";
        Swal.fire(
          "Devie Envoyer!",
          "Nous vous contacterons dans les plus brefs délais, \n merci d'avoir choisi Benier",
          "success"
        );
      },
      (error) => {
        Swal.fire(
          "Error d'envoi ",
          "s'il te plaît contactez-nous par une autre méthode \n Merci",
          "error"
        );
      }
    );
});
//======= End Mail js

//======= Start SweetALert

// function BinairDevisHero() {
//   swal({
//     title: "Multiple inputs",
//     html:
//       '<input id="nom" class="swal2-input" placeholder="Nom*" required>' +
//       '<input id="entreprise" class="swal2-input" placeholder="Entreprise">' +
//       '<input type="email" id="email" class="swal2-input" placeholder="Email*" required>' +
//       '<input id="swal-input4" class="swal2-input">' +
//       '<input id="swal-input4" class="swal2-input">',
//     preConfirm: function () {
//       return new Promise(function (resolve) {
//         resolve([$("#swal-input1").val(), $("#swal-input2").val()]);
//       });
//     },
//     onOpen: function () {
//       $("#swal-input1").focus();
//     },
//   })
//     .then(function (result) {
//       swal(JSON.stringify(result));
//     })
//     .catch(swal.noop);
// }

//======= End SweetALert

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
