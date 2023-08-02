import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'

export default class EmailJob {

    firebaseService = new FirebaseService()

    init = () => {
        cron.schedule('*/15 * * * *', async () => {
            const docs = await this.firebaseService.getEmailsToSend()
            console.log(docs)
        })
    }
}