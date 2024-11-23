function sendMail() {
    // Collect form data
    let parms = {
      name: document.getElementById("user_name").value,
      Email: document.getElementById("user_email").value,
      message: document.getElementById("user_message").value
    };
  
    // Ensure EmailJS is initialized and ready (you need to add emailjs.init() somewhere in your code)
    emailjs.send("service_5vephhk", "template_2lnbxx8", parms)
      .then(function(response) {
        alert("Email Sent!!!");
      }, function(error) {
        console.error("Error sending email:", error);
        alert("There was an error sending your message. Please try again.");
      });
  }
  