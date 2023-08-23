import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

export default class NodemailerService {

    private createTransporter = (mailOptions: any) => {
        const emails = ['contato@digitalquiz.com.br', 'comercial@digitalquiz.com.br', 'contato02@digitalquiz.com.br', 'contato03@digitalquiz.com.br', 'contato04@digitalquiz.com.br', 'contato05@digitalquiz.com.br', 'contato06@digitalquiz.com.br', 'contato07@digitalquiz.com.br', 'contato08@digitalquiz.com.br', 'contato09@digitalquiz.com.br', 'contato10@digitalquiz.com.br']
        const selectedEmail = emails.find(email => mailOptions.from.includes(email))
        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: selectedEmail,
                pass: process.env.DIGITAL_QUIZ_PASSWORD
            }
        })
        transporter.use('compile', hbs({
            viewEngine: {
                partialsDir: path.resolve('./src/views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./src/views/'),
        }))
        return transporter
    }
    
    sendEmail = async (mailOptions: any) => {
        const transporter = this.createTransporter(mailOptions)
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