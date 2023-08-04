import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'
import Email from '../interfaces/Email'
import { SendMailOptions } from 'nodemailer'
import NodemailerService from '../services/NodemailerService.js'

export default class EmailJob {

    firebaseService = new FirebaseService()

    nodemailerService = new NodemailerService()

    init = () => {
        cron.schedule('*/13 * * * *', async () => {
            const docs = await this.firebaseService.getEmailsToSend()
            if (!docs.empty) {
                docs.forEach(doc => {
                    if (doc.exists) {
                        const data = doc.data() as Email
                        const emailOptions: SendMailOptions = {
                            from: data.from,
                            to: data.to,
                            subject: data.subject,
                            text: data.text
                        }
                        this.nodemailerService.sendEmail(emailOptions)
                        this.firebaseService.changeEmailSentStatus(data, true)
                    }
                })
            }
        })
    }
} 
