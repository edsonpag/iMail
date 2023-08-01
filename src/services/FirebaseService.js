import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { createRequire } from 'module'

export default class FirebaseService {

    database = null

    constructor() {
        const require = createRequire(import.meta.url)
        initializeApp({
            credential: cert(require('../../firebaseCredentials.json'))
        })
        this.database = getFirestore()
    }

    save = async (collection, value) => {
        await this.database.collection(collection).add(value)
    }
}