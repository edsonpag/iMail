const nodemailer = require('nodemailer');

const send = async (req, res) => {
    const mailOptions = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.DIGITAL_QUIZ_EMAIL,
            pass: process.env.DIGITAL_QUIZ_PASSWORD
        }
    });
    let responseMsg = "";
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                responseMsg = err.message;
                reject(err)
            } else {
                responseMsg = "Email enviado com sucesso"
                resolve(data)
            }
        });
    })
    res.json({
        success: true,
        msg: responseMsg
    })
}

module.exports = {
    send
}