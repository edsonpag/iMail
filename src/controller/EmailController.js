const nodemailer = require('nodemailer');

const send = async (req, res) => {
    const mailOptions = req.body;
    const transporter = await  nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.DIGITAL_QUIZ_EMAIL,
            pass: process.env.DIGITAL_QUIZ_PASSWORD
        }
    });
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log("Email enviado com sucesso");
                resolve(data)
            }
        });
    })
    res.json({
        success: true,
        msg: "ok"
    })
}

module.exports = {
    send
}