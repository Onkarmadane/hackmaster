document.addEventListener("DOMContentLoaded", function () {
    const contact_form = document.getElementById("contact_form");
    contact_form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
        // Send email using EmailJS
        emailjs.send("service_bd6a90i", "template_c0yn93h", formData)
            .then(function (response) {
                alert("Email sent successfully", response);
                // You can perform further actions after successful email sending
                location.reload();
            }, function (error) {
                alert("Email sending failed", error);
                // You can handle errors here
            });
    });
});
