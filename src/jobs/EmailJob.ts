import cron from 'node-cron'
import FirebaseService from '../services/FirebaseService'

// talvez tirar a class e fazer algo parecido com o api.ts para executar a parte do cron e criar a fila de emails dentro do cron
export default class EmailJob {

    firebaseService = new FirebaseService()

    init = () => {
        cron.schedule('*/15 * * * *', async () => {
            const docs = await this.firebaseService.getEmailsToSend()
            docs.forEach(doc => {
                console.log(doc)
            })
        })
    }
}

// new EmailJob().init() // provisorio
