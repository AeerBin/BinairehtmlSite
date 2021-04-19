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
        Swal.fire("Devis Envoyé !", "", "success");
      },
      (error) => {
        Swal.fire(
          "Error d'envoi ",
          "Merci de nous contacter par e-mail",
          "error"
        );
      }
    );
});

//======= End Mail js

//======= Start modal pack selection
let packContent = document.querySelector(".pack-product");

let devisPack = document.querySelectorAll(".generic_price_btn.clearfix");

packContent.addEventListener("click", function (e) {
  let classes = e.target.classList;
  let array = [...classes];
  if (array.includes("a-devis")) {
    let devisSibling =
      e.target.parentElement.parentElement.children[0].innerHTML;
    Swal.fire({
      icon: "info",
      html: `  
      
      <div >
        <h2 class="" style="color:#1ba870; margin-bottom:10px"">Demande de devis</h2>
        <form  id="formDevis" action="">
          <div class="form-group">
            <input style="box-shadow:none; border:1px solid #69e8b5" type="text" name="name" class="form-control devisInput"  placeholder="Nom*" required>
          </div>
          <div class="form-group">    
            <input style="box-shadow:none; border:1px solid #69e8b5" type="text" name="company" class="form-control devisInput" placeholder="Entreprise">
          </div>
          <div class="form-group">    
            <input style="box-shadow:none; border:1px solid #69e8b5" type="email" name="email" class="form-control devisInput" placeholder="Email*" required>
          </div>
          <div class="form-group">    
            <input style="box-shadow:none; border:1px solid #69e8b5" name="tel" type="Tel" class="form-control devisInput" placeholder="Tel" minlength="10" pattern="${"(\\+212|0|+33|+49|+1|+34)([ \\-_/]*)(d[ \\-_/]*){9}"}">
          </div>
          <div class="form-group">    
            <input style="box-shadow:none; border:1px solid #B1B1B1" name="object" type="text" class="form-control devisInput" placeholder="" readonly value="${devisSibling}">
          </div>
          <div class="form-group">
           <textarea style="box-shadow:none; resize:none; border:1px solid #69e8b5" name="msg" class="form-control  devisInput" id="exampleFormControlTextarea1" rows="5" placeholder="Merci de saisir votre demande" required></textarea>
           </div>
          <button type="submit" class="btn btn-primary  devisInput" style="border:none; background-color: #1ba870">Envoyer</button>
        </form>
      </div>`,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      showConfirmButton: false,
      width: "60%",
    });
    let devisForm = document.querySelector("#formDevis");

    devisForm.addEventListener("submit", (e) => {
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
            Swal.fire("Devis Envoyé !", "", "success");
          },
          (error) => {
            Swal.fire(
              "Error d'envoi ",
              "Merci de nous contacter par e-mail",
              "error"
            );
          }
        );
    });
  }
});

let youCanDeleteMe;
//======= End modal pack selection
