        function sendMail(contactForm) {
    emailjs.send("service_jysqc4u", "template_h6e5rey", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value,
        "credit": contactForm.credit.value,
        "more_info": contactForm.more_info.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false;
};