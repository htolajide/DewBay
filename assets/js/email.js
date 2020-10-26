function sendEmail() {
    const name = document.getElementById('form_name').value
    const phone = document.getElementById('form_phone').value
    const email = document.getElementById('form_email').value
    const subject = document.getElementById('form_subject').value
    const message = document.getElementById('form_message').value
    console.log(name + message)
    const request = {
        method: 'post',
        url: 'https://aba-trader.herokuapp.com/api/v1/contact/message',
        data: {
            name: name,
            phone: phone,
            email: email,
            subject: subject,
            message: message
        }
    }
    axios(request).then( response => {
        alert(response.data.data.message)
    });
}