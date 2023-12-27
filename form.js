(function () {
  emailjs.init("Nf7J9P7tBzdTALvyL");
})();

window.onload = function () {
  let form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    emailjs
      .sendForm("contact_email_service", "contact_form", form)
      .then((result) => {
        form.reset()
        //! Add a popup for confirming 
        console.log(result, "Success");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  });
};
