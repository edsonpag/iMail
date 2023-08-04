import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'
import Email from '../interfaces/Email'
import { SendMailOptions } from 'nodemailer'
import NodemailerService from '../services/NodemailerService.js'

export default class EmailJob {

    firebaseService = new FirebaseService()

    nodemailerService = new NodemailerService()

    init = () => {
        cron.schedule('*/1 * * * *', async () => {
            console.log('cron')
            const docs = await this.firebaseService.getEmailsToSend()
            console.log(docs.empty)
            if (!docs.empty) {
                docs.forEach(doc => {
                    console.log(doc.exists)
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
