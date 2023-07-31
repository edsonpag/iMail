const nodemailer = require('nodemailer');

const send = (req, res) => {
    const mailOptions = req.body;
    nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.DIGITAL_QUIZ_EMAIL,
            pass: process.env.DIGITAL_QUIZ_PASSWORD
        }
    }).sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("Email enviado com sucesso");
        }
    });
    res.json({
        success: true,
        msg: "ok"
    })
}

module.exports = {
    send
}