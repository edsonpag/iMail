import nodemailer, { SendMailOptions } from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

export default class NodemailerService {

    private createTransporter = () => {
        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.DIGITAL_QUIZ_EMAIL,
                pass: process.env.DIGITAL_QUIZ_PASSWORD
            }
        })
        transporter.use('compile', hbs({
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        }))
        return transporter
    }
    
    sendEmail = async (mailOptions: any) => {
        const transporter = this.createTransporter()
        return await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, data) => {
                if (err)
                    reject(err)
                else
                    resolve(data)
            })
        })
    }
}