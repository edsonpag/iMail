import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'
import Email from '../interfaces/Email'
import NodemailerService from '../services/NodemailerService.js'

export default class EmailJob {

    firebaseService = new FirebaseService()

    nodemailerService = new NodemailerService()

    init = () => {
        cron.schedule('*/1 * * * *', async () => {
            const docs = await this.firebaseService.getEmailsToSend()
            if (!docs.empty) {
                docs.forEach(doc => {
                    if (doc.exists) {
                        const data = doc.data() as Email
                        const emailOptions: any = {
                            from: data.from,
                            to: data.to,
                            subject: data.subject,
                            template: 'email-001',
                            context: {
                                profission: data.profession,
                                checkoutLink: data.checkoutLink
                            }
                        }
                        this.nodemailerService.sendEmail(emailOptions)
                        this.firebaseService.changeEmailSentStatus(data, true)
                    }
                })
            }
        })
    }
} 
