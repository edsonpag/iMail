import getDatabase from "../firebase/firebase"
import Email from "../interfaces/Email"

export default class FirebaseService {

    private static database: FirebaseFirestore.Firestore = getDatabase()

    save = async (collection: string, value: any) => {
        await FirebaseService.database.collection(collection).add(value)
    }

    getEmailsToSend = async () => {
        return await FirebaseService.database.collection('Email').where('sent', '==', false).where('shootingDate', '<=', new Date()).get()
    }

    getEmail = async (email: Email) => {
        return await FirebaseService.database.collection('Email')
            .where('from', '==', email.from)
            .where('to', '==', email.to)
            .where('subject', '==', email.subject)
            .where('fullname', '==', email.fullname)
            .where('profession', '==', email.profession)
            .where('shootingDate', '==', email.shootingDate)
            .where('sent', '==', email.sent).get()
    }

    changeEmailSentStatus = async (email: Email, sent: boolean) => {
        const docs = await this.getEmail(email)
        docs.forEach(doc => doc.ref.update({
            sent
        }))
    }
}