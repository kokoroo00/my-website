const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = `Hello Fresh Cut Barbershop!

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}`;

    const whatsappURL =
        "https://wa.me/2347036631016?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});