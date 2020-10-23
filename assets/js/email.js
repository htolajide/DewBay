function sendEmail() {
    const name = document.getElementsByName('name').value
    const phone = document.getElementsByName('phone').value
    const email = document.getElementsByName('email').value
    const subject = document.getElementsByName('subject').value
    const message = document.getElementsByName('message').value
    Email.send({
        Host: "mail.abiaplaza.com.ng",
        Username : "taofeekhammed@abiaplaza.com.ng",
        Password : "olajide4real",
        To : 'taofeekhammed@abiaplaza.com.ng',
        From : email,
        Subject : subject,
        Body : `${name}
            ${phone}
            ${message}`,
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}