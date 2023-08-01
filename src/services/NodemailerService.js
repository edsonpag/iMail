import nodemailer from 'nodemailer'

export default class NodemailerService {

    createTransporter = () => {
        return nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.DIGITAL_QUIZ_EMAIL,
                pass: process.env.DIGITAL_QUIZ_PASSWORD
            }
        })
    }
    
    sendEmail = async (mailOptions) => {
        const transporter = this.createTransporter()
        return await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, data) {
                if (err)
                    reject(err)
                else
                    resolve(data)
            })
        })
    }
}