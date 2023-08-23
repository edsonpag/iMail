import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'
import NodemailerService from '../services/NodemailerService.js'

export default class EmailJob {

    firebaseService = new FirebaseService()

    nodemailerService = new NodemailerService()

    init = () => {
        cron.schedule('*/1 * * * *', async () => {
            const docs = await this.firebaseService.getEmailsToSend()
            if (!docs.empty) {
                docs.forEach(async doc => {
                    if (doc.exists) {
                        const data = doc.data()
                        await this.nodemailerService.sendEmail(data)
                        await doc.ref.update({
                            sent: true
                        })
                    }
                })
            }
        })
    }
}