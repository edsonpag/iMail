import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'

export default class NodemailerService {

    private transporter: Transporter

    private mailOptions: SendMailOptions

    constructor(mailOptions: SendMailOptions) {
        this.transporter = this.createTransporter()
        this.mailOptions = mailOptions
    }
    
    private createTransporter = (): Transporter => {
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

    sendEmail = async () => {
        return await new Promise((resolve, reject) => {
            this.transporter.sendMail(this.mailOptions, (err, data) => {
                if (err)
                    reject(err)
                else
                    resolve(data)
            })
        })
    }
}