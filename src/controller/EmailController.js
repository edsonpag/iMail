const nodemailer = require('nodemailer')
const { db } = require('../firebase/firebase.js')

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
        msg: responseMsg
    })
}

const save = async (req, res) => {
    const email = req.body;
    console.log(email)
    await db.collection('emails').add(email)
    res.send("Rapaiz mais não é que deu boa mesmo");
}

module.exports = {
    send, save
}