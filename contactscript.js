const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Nazwa: ${fullName.value}<br> Email: ${email.value}<br> Temat: ${subject.value}<br> Wiadomość: ${mess.value}<br>`;

    Email.send({
        SecureToken : "04d675ae-8ecd-49a7-8297-6166362c82e9",
        To : 'projektwizytowka@gmail.com',
        From : "projektwizytowka@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message = "OK") {
            Swal.fire({
                title: "Wiadomość wysłana!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})