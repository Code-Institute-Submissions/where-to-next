    function sendMail(contactForm) {
        console.log("credit", contactForm.credit.checked);
        emailjs.send("service_jysqc4u", "template_h6e5rey", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value,
        "credit": contactForm.credit.checked,
        "more_info": contactForm.more_info.checked,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thanks for your feedback");
        },
            function(error) {
                console.log("FAILED", error);
                alert("Something went wrong, can you send that again?");
            }
        );
    return false;
};

