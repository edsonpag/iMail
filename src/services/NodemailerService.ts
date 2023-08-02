import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'

export default class NodemailerService {

    static transporter: Transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.DIGITAL_QUIZ_EMAIL,
            pass: process.env.DIGITAL_QUIZ_PASSWORD
        }
    })
    
    sendEmail = async (mailOptions: SendMailOptions) => {
        return await new Promise((resolve, reject) => {
            NodemailerService.transporter.sendMail(mailOptions, (err, data) => {
                if (err)
                    reject(err)
                else
                    resolve(data)
            })
        })
    }
}