document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // These IDs from the previous steps
    const serviceID = "service_l6kyfw9";
    const templateID = "template_703abrp";

    const params = {
      message: document.getElementById("message").value,
      email: document.getElementById("email").value,
    };

    emailjs.send(serviceID, templateID, params).then(
      function () {
        alert("Email sent successfully!");
      },
      function (error) {
        alert("Failed to send email. Error: " + JSON.stringify(error));
      }
    );
  });
