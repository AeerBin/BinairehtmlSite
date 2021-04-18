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
document.querySelector("#devis").addEventListener("submit", (e) => {
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
