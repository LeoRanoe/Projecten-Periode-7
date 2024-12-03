// Initialize EmailJS with your Public Key
emailjs.init('0-YEePQrDoH3zBawW'); // Replace with your EmailJS Public Key

let isSending = false; // Prevent multiple form submissions

function sendMail(event) {
  event.preventDefault(); // Prevent default form submission

  // Honeypot check for spam
  if (document.getElementById('honeypot').value) {
    alert('Spam detected!');
    return;
  }

  // Disable button and show loading state
  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  // Collect form data
  const email = document.getElementById('user_email').value.trim();
  const name = document.getElementById('user_name').value.trim();
  const subject = document.getElementById('user_subject').value.trim();
  const message = document.getElementById('user_message').value.trim();

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    resetButton(submitButton);
    return;
  }

  // Validate message length
  if (message.length < 10) {
    alert('Your message should be at least 10 characters long.');
    resetButton(submitButton);
    return;
  }

  // EmailJS parameters for Admin Email
  const adminParams = {
    name,
    email,  // Send email for admin view
    subject,
    message,
  };

  // EmailJS parameters for User Confirmation Email
  const userParams = {
    name,
    subject,
    message,
  };

  // Send email using EmailJS
  if (!isSending) {
    isSending = true;

    // Send Admin Email
    emailjs
      .send('service_5vephhk', 'template_2lnbxx8', adminParams) // Admin template ID
      .then(() => {
        // Send User Confirmation Email
        return emailjs.send('service_5vephhk', 'template_user_confirmation', userParams); // User confirmation template ID
      })
      .then(() => {
        // Show success message to user
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
        successMessage.textContent = 'Thank you for your message. We will get back to you soon!';

        // Reset the form
        document.getElementById('contact-form').reset();
      })
      .finally(() => {
        // Reset the submit button state (re-enable it)
        resetButton(submitButton);
        isSending = false;
      });
  }
}

// Reset button state after form submission
function resetButton(button) {
  button.textContent = 'Send';
  button.disabled = false;
}
