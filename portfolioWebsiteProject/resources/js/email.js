// Initialize EmailJS
(function(){
  emailjs.init("JQQQYyIvqkzvbeF8K");
})();

// Form submission event listener
document.getElementById("contact-form").addEventListener('submit', 
  function(event) {event.preventDefault();

// Send form data usign EmailJS
emailjs.sendForm("service_y2x5rzi", "template_3t4d0am", this)
  .then(function() {
    alert("Email sent, Thank you!");
  }, function(error) {
    alert("Failed to send email. Please try again.");
    console.log(error);
  });
});